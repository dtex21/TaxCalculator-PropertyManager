<?php
session_start();
header('Content-Type: application/json');

$con = new mysqli('127.0.0.1', 'ma11182', 'qvaifo', 'ma11182') or die ('Σφάλμα σύνδεσης: '.$con->connect->error);
mysqli_set_charset($con, 'utf8');

$carray= array();
if($id = $_SESSION['user_id']){
  $stmt = $con->prepare("SELECT * FROM cars WHERE id = ?");
  $stmt->bind_param('s', $id);
  $stmt->execute();
  $result = $stmt->get_result();
  $rows = $result->num_rows;
  
  if($rows >0){
    while($row = $result->fetch_assoc()){
      array_shift($row);
      $carray[] = array_values($row);
    }
    
    echo json_encode($carray);
  } else die('Σφάλμα('.$con->errno.'): '.$con->error);
} else die('Λάθος id');

$con->close();
?>
