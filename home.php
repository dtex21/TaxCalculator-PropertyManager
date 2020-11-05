<!DOCTYPE HTML>
<html>
<?php
session_start();
if(!isset($_SESSION['loggedin'])){
  header('Location: login_signup.html');
}
?>

<head>
  <title>Αρχική</title>
  <meta charset="utf-8">
  <script type="text/javascript" src="home.js"></script>
  <script type="text/javascript" src="submithouse.js"></script>
  <script type="text/javascript" src="submitcar.js"></script>
  <script type="text/javascript" src="foros.js"></script>
  <script type="text/javascript" src="teli.js"></script>
  <script type="text/javascript" src="msgdel.js"></script>
  <link rel="stylesheet" type="text/css" href="home.css" />
</head>

<body onload="start()">

</body>

</html>
