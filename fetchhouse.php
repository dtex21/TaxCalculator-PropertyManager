<?php
session_start();
header('Content-Type: application/json');

$con = new mysqli('127.0.0.1', 'ma11182', 'qvaifo', 'ma11182') or die ('Σφάλμα σύνδεσης: '.$con->connect->error);
//Θέτουμε την κωδικοποίηση της σύνδεσης ως UTF-8 για σωστή καταγραφή ελληνικών στην ΒΔ
mysqli_set_charset($con, 'utf8');

$carray= array();

if($id = $_SESSION['user_id']){
  //Ετοιμάζουμε δήλωση για επιλογή καταχώρησης απο τη ΒΔ με συγκεκριμένο id
  $stmt = $con->prepare("SELECT * FROM houses WHERE id = ?");
  $stmt->bind_param('s', $id);
  $stmt->execute();

  $result = $stmt->get_result();
  $rows = $result->num_rows;

  if($rows >0){
    while($row = $result->fetch_assoc()){
      //Αφαιρούμε το πρώτο στοιχείο της διάταξης, το οποίο είναι το κατ' ουσίαν το user_id
      array_shift($row);
      $carray[] = array_values($row);
    }
    //Δώσε την $carray σε JSON
    echo json_encode($carray);
    //Αλλιώς ακύρωσε την σύνδεση και δώσε αριθμό σφάλματος
  } else die('Σφάλμα('.$con->errno.'): '.$con->error);
} else die('Λάθος id');

$con->close();
?>
