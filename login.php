<?php
header('Content-Type:application/json');

$json_string = file_get_contents('php://input');
$obj = json_decode($json_string, true);
//Σύνδεση στη βάση δεδομένων (ΒΔ) του εξυπηρετητή και ακύρωση σε περίπτωση σφάλματος
$con = new mysqli('127.0.0.1', 'ma11182', 'qvaifo', 'ma11182') or die('Σφάλμα σύνδεσης:' . $con->connect_error);
//Θέτουμε την κωδικοποίηση της σύνδεσης ως UTF-8 για σωστή καταγραφή ελληνικών στην ΒΔ
mysqli_set_charset($con, "utf8");

$usr = $obj['username'];
$psw = $obj['password'];
//Ετοιμάζουμε δήλωση για επιλογή καταχώρησης απο τη ΒΔ με συγκεκριμένες μεταβλητές
$stmt = $con->prepare("SELECT username, password FROM accounts WHERE username = ? AND password = ?");
$stmt->bind_param('ss', $usr, $psw);
$stmt->execute();
$stmt->store_result();
$rows = $stmt->num_rows;

if($rows == 1){
  while($stmt->fetch()){
    session_start();
    $_SESSION['user_id'] = $usr;
    $_SESSION['loggedin'] = true;

    if(isset($_SESSION['user_id'])){
      echo 'Επιτυχία';
    }
  }
} else die('Σφάλμα('.$con->errno.'): '.$con->error);

$stmt->free_result();
$con->close();
?>
