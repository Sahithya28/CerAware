<?php
// Include the database connection
include('dbh.php');

// SQL query to fetch data
$sql = "SELECT `id`, `category`, `question_text`, `answer`, `score`, `username`, `created_at` FROM `storequestions`";
$result = $conn->query($sql);

// Check if the query returns any rows
if ($result->num_rows > 0) {
    // Set the header to indicate a CSV file download
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename="storequestions.csv"');

    // Open the output stream
    $output = fopen('php://output', 'w');

    // Add column headers to CSV
    $header = ['ID', 'Category', 'Question Text', 'Answer', 'Score', 'Username', 'Created At'];
    fputcsv($output, $header);

    // Output data from query to CSV
    while ($row = $result->fetch_assoc()) {
        fputcsv($output, $row);
    }

    // Close the output stream
    fclose($output);
} else {
    // If no data is found, return an empty file with headers
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename="storequestions.csv"');

    $output = fopen('php://output', 'w');
    fputcsv($output, ['No data found.']);
    fclose($output);
}

// Close the database connection
$conn->close();
?>
