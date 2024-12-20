<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'dbh.php';

if (!isset($_GET['username']) || empty($_GET['username'])) {
    echo json_encode(["error" => "Username parameter is missing"]);
    exit();
}

$user = $_GET['username'];

// Updated SQL query to filter by the last 24 hours
$sql = "SELECT id, category, question_text, answer, score, username 
        FROM storequestions 
        WHERE username = ? AND created_at >= NOW() - INTERVAL 1 DAY";
$stmt = $conn->prepare($sql);

if ($stmt === false) {
    // Output the error message if preparation fails
    echo json_encode(["error" => "Failed to prepare SQL statement: " . $conn->error]);
    exit();
}

// Bind parameters and execute
$stmt->bind_param("s", $user);
$stmt->execute();
$stmt->bind_result($id, $category, $question, $answer, $score, $user_name);

$result = [];
while ($stmt->fetch()) {
    $result[] = [
        'id' => $id,
        'category' => $category,
        'questionText' => $question,
        'answer' => $answer,
        'score' => $score,
        'username' => $user_name
    ];
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($result);

$stmt->close();
$conn->close();
?>
