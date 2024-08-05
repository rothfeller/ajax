<?php

require_once "components/db_connect.php";

header('Content-Type: application/json');

$sql = "SELECT * FROM songs";
$result = mysqli_query($conn, $sql);
$rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($rows);

mysqli_close($conn);
