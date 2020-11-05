<?php
session_start();
session_unset();
session_destroy();
//Ανακατεύθυνση στην σελίδα εισόδου και εγγραφής
header("Location:login_signup.html");
exit();
 ?>
