<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

// Include the database connection file
require 'dbh.php';

// SQL query to select the required fields from the `userlogin` table
$sql = "SELECT `id`, `Name`, `Gender`, `Age`, `Date`, `phonenumber`, `username`, `password`, `re_enter_password` FROM `userlogin`";

// Execute the query
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = [];

    // Fetch all rows
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // Return data as JSON
    echo json_encode(['success' => true, 'data' => $data]);
} else {
    echo json_encode(['success' => false, 'message' => 'No records found']);
}

// Close the connection
$conn->close();
?>
