<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require 'dbh.php';

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

// Log received data
error_log("Received data: " . json_encode($data));

// Check if data is properly received
if ($data === null) {
    error_log("Failed to decode JSON: " . json_last_error_msg());
    echo json_encode(["success" => false, "error" => "Invalid JSON"]);
    $conn->close();
    exit();
}

$category = $data['category'] ?? null;
$question_text = $data['question_text'] ?? null;
$answer = $data['answer'] ?? null;
$score = $data['score'] ?? null;
$username = $data['username'] ?? null;

if ($category && $question_text && $answer && $score !== null && $username) {
    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO storequestions (category, question_text, answer, score, username) VALUES (?, ?, ?, ?, ?)");
    if ($stmt === false) {
        error_log("Prepare failed: " . $conn->error);
        echo json_encode(["success" => false, "error" => "Prepare failed"]);
        $conn->close();
        exit();
    }

    $stmt->bind_param("sssss", $category, $question_text, $answer, $score, $username);

    // Execute
    if ($stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        error_log("Execute failed: " . $stmt->error);
        echo json_encode(["success" => false, "error" => "Execute failed"]);
    }

    $stmt->close();
} else {
    error_log("Missing parameters: " . json_encode($data));
    echo json_encode(["success" => false, "error" => "Missing parameters"]);
}

$conn->close();
?>
