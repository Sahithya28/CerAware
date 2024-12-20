<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

require 'dbh.php'; // Include the database connection file

// Get the JSON data from the request
$postData = file_get_contents("php://input");
$data = json_decode($postData, true);

// Check if the required fields are set
if (!isset($data['username'], $data['password'], $data['re_enter_password'], $data['phonenumber'], $data['specialization'], $data['experience'], $data['name'], $data['email'])) {
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

// Extract the data from the JSON object
$user_username = $data['username'];
$user_password = $data['password'];
$user_re_enter_password = $data['re_enter_password'];
$user_phonenumber = $data['phonenumber'];
$user_specialization = $data['specialization'];
$user_experience = $data['experience'];
$user_name = $data['name'];
$user_email = $data['email'];

// Prepare the SQL query to insert the data into the `doctorlogin` table
$sql = "INSERT INTO doctorlogin (username, password, re_enter_password, phonenumber, specialization, experience, name, email)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

// Prepare the statement
$stmt = $conn->prepare($sql);

// Bind the parameters to the SQL query
$stmt->bind_param("ssssssss", $user_username, $user_password, $user_re_enter_password, $user_phonenumber, $user_specialization, $user_experience, $user_name, $user_email);

// Execute the query and check for success
if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'New record created successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $stmt->error]);
}

// Close the statement and the database connection
$stmt->close();
$conn->close();
?>
