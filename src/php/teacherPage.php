<?php
session_start();
switch ($_GET["request"]) {
    case "teacher_or_control":
        $con = mysqli_connect("localhost", "root", "");
        mysqli_select_db($con, "schoolsystem");
        mysqli_set_charset($con, "utf8");
        $sql = "select Control from teacher where ID = '" . $_SESSION['username'] . "'";
        $result = mysqli_query($con, $sql);
        $array = mysqli_fetch_array($result);
        echo $array['Control'];
        mysqli_close($con);
        break;
    case "username":
        $con = mysqli_connect("localhost", "root", "");
        mysqli_select_db($con, "schoolsystem");
        mysqli_set_charset($con, "utf8");
        $sql = "select Name from teacher where ID = '" . $_SESSION['username'] . "'";
        $result = mysqli_query($con, $sql);
        $array = mysqli_fetch_array($result);
        echo json_encode($array['Name']);
        mysqli_close($con);
        break;
}
