<?php

require_once "components/db_connect.php";

$title = $_POST['title'];
$artist = $_POST['artist'];
$genre = $_POST['genre'];
$country = $_POST['country'];
$year = $_POST['year'];

$sql = "INSERT INTO `songs`(`title`, `artist`, `genre`, `country`, `year`) VALUES ('$title','$artist','$genre','$country','$year')";

if (mysqli_query($conn, $sql)) {
    echo "Success, song has been added";
}
