<?php
header('Content-Type:application/json');

$json_string = file_get_contents('php://input');
$obj = json_decode($json_string, true);

$con = new mysqli('127.0.0.1', 'db_username', 'db_password', 'db_name') or die("Σφάλμα σύνδεσης: " . $con->connect_error);
mysqli_set_charset($con, "utf8");

$usr = $obj['username'];
$pass = $obj['password'];

$stmt = $con->prepare('INSERT INTO accounts (username, password) VALUES (?, ?)');
$stmt->bind_param('ss', $usr, $pass);

if($stmt->execute()){
  echo 'Επιτυχία';
} else die('Σφάλμα('.$con->errno.'): '.$con->error);

$stmt->close();
$con->close();
?>
