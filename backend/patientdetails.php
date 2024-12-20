<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
// Include the database connection file
require 'dbh.php';

// Now you can use the $conn object to interact with the database

// Example: Fetching data based on a username
$username = isset($_GET['username']) ? $_GET['username'] : '';

$sql = "SELECT `id`, `Name`, `Gender`, `Age`, `Date`, `phonenumber`, `username` FROM `userlogin` WHERE `username` = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username); // Bind the username parameter
$stmt->execute();

$result = $stmt->get_result();
$data = $result->fetch_all(MYSQLI_ASSOC);

// Output the data in JSON format
header('Content-Type: application/json');
echo json_encode($data);

// Close the statement and connection
$stmt->close();
$conn->close();
?>
