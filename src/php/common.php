<?php

switch ($_GET['request']) {
    case "get_time":
        echo  time();
        break;
}