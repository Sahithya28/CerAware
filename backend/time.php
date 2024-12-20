<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require "dbh.php"; // Include the mysqli connection from dbh.php

// Get username and category from GET or POST request
$user = isset($_GET['username']) ? $_GET['username'] : (isset($_POST['username']) ? $_POST['username'] : null);
$category = isset($_GET['category']) ? $_GET['category'] : (isset($_POST['category']) ? $_POST['category'] : null);

if (!$user || !$category) {
    die("Username and category are required.");
}

// Sanitize the input
$user = htmlspecialchars($user);
$category = htmlspecialchars($category);

// Get current date
$today = date('Y-m-d');

// Query to check if the user has already submitted today in the specified category
$sql = "SELECT COUNT(*) as count FROM storequestions WHERE username = ? AND category = ? AND DATE(created_at) = ?";

// Prepare the statement
$stmt = $conn->prepare($sql);

// Check if the query preparation failed
if ($stmt === false) {
    // Output the MySQL error to help with debugging
    die("SQL error during prepare: " . $conn->error);
}

// Bind parameters and execute the query
$stmt->bind_param("sss", $user, $category, $today);
$stmt->execute();

$result = $stmt->get_result();
$row = $result->fetch_assoc();

if ($row['count'] > 0) {
    echo "You have already submitted questions for this category today. Please wait 24 hours before submitting again.";
} else {
    echo "You can submit your questions.";
}

// Close the prepared statement and connection
$stmt->close();
$conn->close();
?>
