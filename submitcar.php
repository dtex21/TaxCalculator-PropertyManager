<?php
session_start();
header('Content-Type:application/json');

$json_string = file_get_contents('php://input');
$obj = json_decode($json_string, true);

$con = new mysqli('127.0.0.1', 'ma11182', 'qvaifo', 'ma11182') or die("Σφάλμα: " . $con->connect_error);
mysqli_set_charset($con, "utf8");

$id = $_SESSION['user_id'];

$fnamec = $obj['fnamec'];
$car = $obj['car'];
$model = $obj['model'];
$lp = $obj['lp'];
$date = $obj['date'];
$cc = $obj['cc'];
$co2 = $obj['co2'];
$teli = $obj['teli'];

$stmt = $con->prepare('INSERT INTO cars (id, fnamec, car, model, lp, date, cc, co2, teli) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
$stmt->bind_param('sssssssss', $id, $fnamec, $car, $model, $lp, $date, $cc, $co2, $teli);

if($stmt->execute()){
  echo 'Επιτυχία';
} else die('Σφάλμα('.$con->errno.'): '.$con->error);

$con->close();
?>
