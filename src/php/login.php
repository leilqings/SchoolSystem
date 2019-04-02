<?php
/**
 * Created by PhpStorm.
 * User: qqqqqqqqqqqqqqqqqqqq
 * Date: 2019/1/10
 * Time: 22:36
 */
session_start();
$username = $_POST["username"];
$pwd = $_POST["pwd"];
$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "schoolsystem");
if (7 == strlen($username)) {
    $sql1 = "select ID,PWD from teacher where ID = '" . $username . "' and PWd = '" . $pwd . "'";
    $result = mysqli_query($con, $sql1);
    $num = mysqli_num_rows($result);
    if ($num) {
        $_SESSION['username']=$username;
        echo json_encode("Teacher");
    } else {
        echo json_encode("error");
    }
} else {
    $sql1 = "select ID,PWD from student where ID = '" . $username . "' and PWd = '" . $pwd . "'";
    $result = mysqli_query($con, $sql1);
    $num = mysqli_num_rows($result);
    if ($num) {
        echo json_encode("Student");
    } else {
        echo json_encode("error");
    }
}
mysqli_free_result($result);
mysqli_close($con);


