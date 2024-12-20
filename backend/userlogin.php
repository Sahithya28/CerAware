<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require "dbh.php"; // Include the mysqli connection from dbh.php

// Check if data is sent through raw JSON or POST method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['username']) && isset($_POST['password'])) {
        // Get the username and password from $_POST
        $username = $_POST['username'];
        $password = $_POST['password'];
    } else {
        // Get the raw POST data as a string and decode the JSON data
        $json_data = file_get_contents("php://input");
        $request_data = json_decode($json_data, true);

        // Check if 'username' and 'password' keys exist in the decoded JSON
        if (isset($request_data['username']) && isset($request_data['password'])) {
            $username = $request_data['username'];
            $password = $request_data['password'];
        } else {
            // Handle the case where 'username' or 'password' is missing
            $response['status'] = "error";
            $response['message'] = "Invalid request data";
            echo json_encode($response);
            exit();
        }
    }

    // Prepare the SQL statement for login
    $sql = "SELECT * FROM userlogin WHERE username = ? AND password = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();

    // Get the result
    $result = $stmt->get_result();

    // Check if login credentials are valid
    if ($result->num_rows > 0) {
        $response['status'] = "success";
        $response['message'] = "Login successful!";
    } else {
        $response['status'] = "error";
        $response['message'] = "Invalid username or password";
    }

    // Close the prepared statement
    $stmt->close();
} else {
    // Handle non-POST requests
    $response['status'] = "error";
    $response['message'] = "Invalid request method";
}

// Close the database connection
$conn->close();

// Respond with JSON
echo json_encode($response);
?>