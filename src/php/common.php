<?php
session_start();
switch ($_GET['request']) {
    case "get_time":
        echo  time();
        break;
    case "cancel":
        session_destroy();
        echo 1;
        break;
}