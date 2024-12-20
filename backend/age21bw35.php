<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require 'dbh.php';

// Get the current question ID and user's answer from the request
$current_qns_id = isset($_GET['qns_id']) ? intval($_GET['qns_id']) : null;
$user_answer = isset($_GET['answer']) ? $_GET['answer'] : null;

$next_qns_id = null;

if ($current_qns_id === null) {
    // First question
    $next_qns_id = 1;
} else {
    // Conditional logic based on the user's answer
    if ($current_qns_id == 5) {
        if ($user_answer == 'yes') {
            $next_qns_id = 6;
        } else {
            $next_qns_id = 7;
        }
    } elseif ($current_qns_id == 11) {
        if ($user_answer == 'yes') {
            $next_qns_id = 12;
        } else {
            $next_qns_id = 13;
        }
    } elseif ($current_qns_id == 14) {
        if ($user_answer == 'yes') {
            $next_qns_id = 15;
        } else {
            $next_qns_id = 16;
        }
    } else {
        // Default next question logic, skipping question 10
        if ($current_qns_id == 9) {
            $next_qns_id = 11; // Skip question 10
        } else {
            $next_qns_id = $current_qns_id + 1;
        }
    }
}

// Log the next question ID
error_log("Next question ID: " . $next_qns_id);

// SQL query to select the next question
$sql = "SELECT id, qns_id, category, questions, choice_1, choice_2, choice_3, choice_4, scores FROM questions WHERE qns_id = ?";

// Prepare and bindz
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $next_qns_id);
$stmt->execute();
$result = $stmt->get_result();

$response = [];

if ($result->num_rows > 0) {
    // Fetch the next question
    $response = $result->fetch_assoc();
} else {
    $response = ["message" => "No more questions"];
}

// Close the connection
$conn->close();

echo json_encode($response);
?>