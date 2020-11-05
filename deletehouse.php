<?php
session_start();
header('Content-Type: application/json');

$json_string = file_get_contents('php://input');
$arr = json_decode($json_string, true);

$con = new mysqli('127.0.0.1', 'ma11182', 'qvaifo', 'ma11182') or die("Σφάλμα σύνδεσης: " . $con->connect_error);
mysqli_set_charset($con, "utf8");

$id = $_SESSION['user_id'];
$fnamec = $arr['fnameh'];

$stmt = $con->prepare("DELETE FROM houses WHERE id = ? AND fnameh = ?");
$stmt->bind_param('ss', $id, $fnameh);

if($stmt->execute()){
  echo 'Επιτυχία';
} else die('Σφάλμα('.$con->errno.'): '.$con->error);

$stmt->close();
$con->close();
?>
