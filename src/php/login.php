<?php
/**
 * Created by PhpStorm.
 * User: qqqqqqqqqqqqqqqqqqqq
 * Date: 2019/1/10
 * Time: 22:36
 */

$username = $_POST["username"];
$pwd = $_POST["pwd"];
$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "schoolsystem");

