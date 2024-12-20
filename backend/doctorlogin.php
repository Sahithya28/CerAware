<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require "dbh.php"; // Include the MySQLi connection

// Get the raw JSON input
$json_data = file_get_contents("php://input");

// Decode the JSON data into a PHP array
$request_data = json_decode($json_data, true);

// Check if the required data is set
if (isset($request_data['username']) && isset($request_data['password'])) {
    $username = $request_data['username'];
    $password = $request_data['password'];

    // Check if the request is for registration
    if (isset($request_data['register']) && $request_data['register'] === true) {
        // Prepare the SQL statement for inserting a new user
        $sql = "INSERT INTO doctorlogin (username, password) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);

        // Check if prepare() was successful
        if ($stmt === false) {
            $response['status'] = "error";
            $response['message'] = "SQL error: " . $conn->error;
        } else {
            $stmt->bind_param("ss", $username, $password);

            if ($stmt->execute()) {
                $response['status'] = "success";
                $response['message'] = "Registration successful!";
            } else {
                $response['status'] = "error";
                $response['message'] = "Failed to register user";
            }

            $stmt->close();
        }

    } else {
        // Prepare the SQL statement for user login
        $sql = "SELECT * FROM doctorlogin WHERE username = ? AND password = ?";
        $stmt = $conn->prepare($sql);

        // Check if prepare() was successful
        if ($stmt === false) {
            $response['status'] = "error";
            $response['message'] = "SQL error: " . $conn->error;
        } else {
            $stmt->bind_param("ss", $username, $password);
            $stmt->execute();

            $result = $stmt->get_result();
            if ($result->num_rows > 0) {
                $response['status'] = "success";
                $response['message'] = "Login successful!";
            } else {
                $response['status'] = "error";
                $response['message'] = "Invalid username or password";
            }

            $stmt->close();
        }
    }
} else {
    // Return an error if the required data is missing
    $response['status'] = "error";
    $response['message'] = "Invalid request data";
}

// Close the MySQLi connection
$conn->close();

// Output the response as JSON
echo json_encode($response);
?>
