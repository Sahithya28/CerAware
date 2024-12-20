<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');



// Include the database connection file
require 'dbh.php';

// Get the current question ID, user's answer, and category from the request
$current_qns_id = isset($_GET['qns_id']) ? intval($_GET['qns_id']) : null;
$user_answer = isset($_GET['answer']) ? $_GET['answer'] : null;
$category = isset($_GET['category']) ? $_GET['category'] : null;

$next_qns_id = null;

if ($current_qns_id === null) {
    // First question in the specified category
    $sql = "SELECT id, qns_id, category, questions, choice_1, choice_2, choice_3, choice_4, scores FROM questions WHERE category = ? ORDER BY qns_id ASC LIMIT 1";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $category);
} else {
    // Conditional logic based on the user's answer
    if ($current_qns_id == 5) {
        $next_qns_id = $user_answer == 'yes' ? 6 : 10;
    } elseif ($current_qns_id == 11) {
        $next_qns_id = $user_answer == 'yes' ? 12 : 13;
    } else {
        // Default next question logic within the same category
        $sql = "SELECT qns_id FROM questions WHERE qns_id > ? AND category = ? ORDER BY qns_id ASC LIMIT 1";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("is", $current_qns_id, $category);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $next_qns_id = $row['qns_id'];
        } else {
            echo json_encode(["message" => "No more questions"]);
            $conn->close();
            exit();
        }
    }
    
    if ($next_qns_id !== null) {
        $sql = "SELECT id, qns_id, category, questions, choice_1, choice_2, choice_3, choice_4, scores FROM questions WHERE qns_id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $next_qns_id);
    }
}

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
