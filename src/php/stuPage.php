<?php
session_start();
$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "schoolsystem");
mysqli_set_charset($con, "utf8");
switch ($_GET['request']){
    case "username":
        $sql = "select Name from student where ID = '" . $_SESSION['ID'] . "'";
        $result = mysqli_query($con, $sql);
        $array = mysqli_fetch_array($result);
        echo json_encode($array['Name']);
        break;
    case "person_message":
        $sql = "select * from student where ID = '" . $_SESSION['ID'] . "'";
        $result = mysqli_query($con, $sql);
        $array = mysqli_fetch_array($result);
        echo json_encode($array);
        break;
}
mysqli_close($con);