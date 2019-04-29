<?php
session_start();
$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "schoolsystem");
mysqli_set_charset($con, "utf8");
switch ($_GET['request']) {
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
    case "change_password":
        $sql = "update student set PWD='" . $_GET["password"] . "' where ID = '" . $_SESSION['ID'] . "'";
        $result = mysqli_query($con, $sql);
        if (mysqli_affected_rows($con))
            echo 1;
        else
            echo 0;
        break;
    case "view_course_information":
        if (empty($_GET['key'])) {
            $sql = "select course.ID as Course_ID,course.Name as Course_Name,course.Course_Type,course.Start_Time,teacher.Name as Teacher_Name 
                        from course,teacher 
                        where course.Teacher_ID=teacher.ID 
                          and course.ID not in(select Course_ID from electoral where Student_ID = '" . $_SESSION['ID'] . "' )
                          and course.ID not in(select Course_ID from score where Student_ID = '" . $_SESSION['ID'] . "' )
                        order by course.ID ";
        } else {
            $sql = "select course.ID as Course_ID,course.Name as Course_Name,course.Course_Type,course.Start_Time,teacher.Name as Teacher_Name 
                        from course,teacher 
                        where course.Teacher_ID=teacher.ID and (course.ID like '%" . $_GET['key'] . "%' or course.name like  '%" . $_GET['key'] . "%' or course.Course_type like  '%" . $_GET['key'] . "%' or course.start_time like '%" . $_GET['key'] . "%'or teacher.Name like '%" . $_GET['key'] . "%')
                        and course.ID not in(select Course_ID from electoral where Student_ID = '" . $_SESSION['ID'] . "' )
                        and course.ID not in(select Course_ID from score where Student_ID = '" . $_SESSION['ID'] . "' )
                        order by course.ID ";
        }
        $result = mysqli_query($con, $sql);
        if (!empty($result)) {
            $array = mysqli_fetch_all($result, MYSQLI_ASSOC);
            $count = count($array);
        } else {
            $array = "";
            $count = 0;
        }
        echo json_encode(array(
            "code" => 0,
            "msg" => "",
            "count" => $count,
            "data" => ($array)));
        break;
    case "view_electoral_information":
        if (empty($_GET['key'])) {
            $sql = "select electoral.Course_ID as Course_ID,course.Name as Course_Name,teacher.ID as Teacher_ID,teacher.Name as Teacher_Name 
                        from electoral,course,teacher 
                        where electoral.Course_ID = course.ID and course.Teacher_ID = teacher.ID and Student_ID = '" . $_SESSION['ID'] . "'
                        order by electoral.Course_ID ";
        } else {
            $sql = "select electoral.Course_ID as Course_ID,course.Name as Course_Name,teacher.ID as Teacher_ID,teacher.Name as Teacher_Name 
                        from electoral,course,teacher 
                        where ( electoral.Course_ID = course.ID and course.Teacher_ID = teacher.ID and Student_ID = '" . $_SESSION['ID'] . "')and 
                              ( electoral.Course_ID like  '%" . $_GET['key'] . "%' or course.Name like '%" . $_GET['key'] . "%'or teacher.ID like '%" . $_GET['key'] . "%'or teacher.Name like '%" . $_GET['key'] . "%')
                        order by electoral.Course_ID ";
        }
        $result = mysqli_query($con, $sql);
        if (!empty($result)) {
            $array = mysqli_fetch_all($result, MYSQLI_ASSOC);
            $count = count($array);
        } else {
            $array = "";
            $count = 0;
        }
        echo json_encode(array(
            "code" => 0,
            "msg" => "",
            "count" => $count,
            "data" => ($array)));
        break;
    case "view_score_information":
        if (empty($_GET['key'])) {
            $sql = "select Course_ID,course.Name,course.start_Time,Score 
                        from score,course 
                        where score.Course_ID = course.ID and Student_ID =  '" . $_SESSION['ID'] . "'
                        order by student_ID ";
        } else {
            $sql = "select Course_ID,course.Name,course.start_Time,Score 
                        from score,course 
                        where ( score.Course_ID = course.ID and Student_ID =  '" . $_SESSION['ID'] . "')and
                              ( Student_ID like '%" . $_GET['key'] . "%' or student.Name like  '%" . $_GET['key'] . "%' or Course_ID like  '%" . $_GET['key'] . "%' or course.start_time like '%" . $_GET['key'] . "%'or course.Name like '%" . $_GET['key'] . "%') 
                         group by student_id
                        order by student_ID ";
        }
        $result = mysqli_query($con, $sql);
        if (!empty($result)) {
            $array = mysqli_fetch_all($result, MYSQLI_ASSOC);
            $count = count($array);
        } else {
            $array = "";
            $count = 0;
        }
        echo json_encode(array(
            "code" => 0,
            "msg" => "",
            "count" => $count,
            "data" => ($array)));
        break;
    case "add_message":
        $sql = "insert into electoral(student_id, course_id) VALUES (" . $_SESSION['ID'] . "," . $_GET['ID'] . ")";
        $result = mysqli_query($con, $sql);
        if (mysqli_affected_rows($con))
            echo 1;
        else
            echo 0;
        break;
    case "del_message":
        $sql = "delete from electoral where Course_ID = '".$_GET['ID']."' and student_ID ='" . $_SESSION['ID'] . "'";
        $result = mysqli_query($con, $sql);
        if ($result)
            echo 1;
        else
            echo $result;
        break;
}
mysqli_close($con);