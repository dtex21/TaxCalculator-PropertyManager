<?php
session_start();
header('Content-Type:application/json');
//Παίρνουμε τα δεδομένα από το JSON
$json_string = file_get_contents('php://input');
//Αποκωδικοποιούμε το JSON και το μετατρέπουμε σε διάταξη
$obj = json_decode($json_string, true);

$con = new mysqli('127.0.0.1', 'db_username', 'db_password', 'db_name') or die("Σφάλμα: " . $con->connect_error);
mysqli_set_charset($con, "utf8");

$id = $_SESSION['user_id'];

$fnameh = $obj['fnameh'];
$m2 = $obj['m2'];
$year = $obj['year'];
$floors = $obj['floors'];
$facade = $obj['facade'];
$zone = $obj['zone'];
$apep = $obj['apep'];
$ha = $obj['ha'];
$ub = $obj['ub'];
$foros = $obj['foros'];

$stmt = $con->prepare('INSERT INTO houses (id, fnameh, m2, year, floors, facade, zone, apep, ha, ub, foros) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
$stmt->bind_param('sssssssssss', $id, $fnameh, $m2, $year, $floors, $facade, $zone, $apep, $ha, $ub, $foros);

if($stmt->execute()){
  echo 'Επιτυχία';
} else die('Σφάλμα('.$con->errno.'): '.$con->error);

$stmt->close();
$con->close();
?>
