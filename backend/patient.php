<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Include the database connection details
require 'dbh.php';

// Get the JSON input
$data = json_decode(file_get_contents('php://input'), true);

// Check if the JSON was decoded successfully
if (json_last_error() !== JSON_ERROR_NONE) {
    die(json_encode(["error" => "Error decoding JSON: " . json_last_error_msg()]));
}

// Check if the required fields are set
if (!isset($data['Name']) || !isset($data['Gender']) || !isset($data['Age']) || !isset($data['Date']) || !isset($data['phonenumber']) || !isset($data['username']) || !isset($data['password']) || !isset($data['re_enter_password'])) {
    die(json_encode(["error" => "Error: Missing required fields."]));
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO userlogin (Name, Gender, Age, Date, phonenumber, username, password, re_enter_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssss", $name, $gender, $age, $date, $phonenumber, $username, $password, $re_enter_password);

// Set parameters and execute
$name = $data['Name'];
$gender = $data['Gender'];
$age = $data['Age'];
$date = $data['Date'];
$phonenumber = $data['phonenumber'];
$username = $data['username'];
$password = $data['password'];
$re_enter_password = $data['re_enter_password'];

if ($stmt->execute()) {
    echo json_encode(["success" => "New record created successfully"]);
} else {
    echo json_encode(["error" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
