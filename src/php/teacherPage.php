<?php
session_start();
$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "schoolsystem");
$sql = "select Control from teacher where ID = '" . $_SESSION['username'] . "'";
$result = mysqli_query($con, $sql);
$control = mysqli_fetch_array($result);
echo $control['Control'];
mysqli_close($con);