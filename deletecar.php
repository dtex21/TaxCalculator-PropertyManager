<?php
session_start();
header('Content-Type: application/json');
//Παίρνουμε τα δεδομένα από το JSON
$json_string = file_get_contents('php://input');
//Αποκωδικοποιούμε το JSON και το μετατρέπουμε σε διάταξη
$arr = json_decode($json_string, true);

$con = new mysqli('127.0.0.1', 'ma11182', 'qvaifo', 'ma11182') or die("Σφάλμα σύνδεσης: " . $con->connect_error);
mysqli_set_charset($con, "utf8");

$id = $_SESSION['user_id'];
$fnamec = $arr['fnamec'];
//Ετοιμάζουμε δήλωση για διαγραφή καταχώρησης απο τη ΒΔ
$stmt = $con->prepare("DELETE FROM cars WHERE id = ? AND fnamec = ?");
$stmt->bind_param('ss', $id, $fnamec);

if($stmt->execute()){
  echo 'Επιτυχία';
} else die('Σφάλμα('.$con->errno.'): '.$con->error);

$stmt->close();
$con->close();
?>
