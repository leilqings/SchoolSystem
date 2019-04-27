<?php
session_start();
$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "schoolsystem");
mysqli_set_charset($con, "utf8");
switch ($_GET["request"]) {
    case "teacher_or_control":
        $sql = "select Control from teacher where ID = '" . $_SESSION['ID'] . "'";
        $result = mysqli_query($con, $sql);
        $array = mysqli_fetch_array($result);
        echo $array['Control'];
        break;
    case "username":
        $sql = "select Name from teacher where ID = '" . $_SESSION['ID'] . "'";
        $result = mysqli_query($con, $sql);
        $array = mysqli_fetch_array($result);
        echo json_encode($array['Name']);
        break;
    case "person_message":
        $sql = "select * from teacher where ID = '" . $_SESSION['ID'] . "'";
        $result = mysqli_query($con, $sql);
        $array = mysqli_fetch_array($result);
        echo json_encode($array);
        break;
    case "change_password":
        $sql = "update teacher set PWD='" . $_GET["password"] . "' where ID = '" . $_SESSION['ID'] . "'";
        $result = mysqli_query($con, $sql);
        if (mysqli_affected_rows($con))
            echo 1;
        else
            echo 0;
        break;
    case "view_teacher_information":
        if (empty($_GET['key'])) {
            $sql = "select * from teacher order by ID";
        } else {
            $sql = "select * from teacher 
                        where ID like '%" . $_GET['key'] . "%' or name like  '%" . $_GET['key'] . "%' or sex like  '%" . $_GET['key'] . "%' or id_card like '%" . $_GET['key'] . "%'
                        order by ID";
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
    case "view_student_information":
        if (empty($_GET['key'])) {
            $sql = "select * from student order by ID ";
        } else {
            $sql = "select * from student 
                        where ID like '%" . $_GET['key'] . "%' or name like  '%" . $_GET['key'] . "%' or sex like  '%" . $_GET['key'] . "%' or id_card like '%" . $_GET['key'] . "%'
                        order by ID";
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
    case "view_course_information":
        if (empty($_GET['key'])) {
            $sql = "select course.ID as Course_ID,course.Name as Course_Name,course.Course_Type,course.Start_Time,teacher.Name as Teacher_Name 
                        from course,teacher 
                        where course.Teacher_ID=teacher.ID 
                        order by course.ID ";
        } else {
            $sql = "select course.ID as Course_ID,course.Name as Course_Name,course.Course_Type,course.Start_Time,teacher.Name as Teacher_Name 
                        from course,teacher 
                        where course.Teacher_ID=teacher.ID and (course.ID like '%" . $_GET['key'] . "%' or course.name like  '%" . $_GET['key'] . "%' or course.Course_type like  '%" . $_GET['key'] . "%' or course.start_time like '%" . $_GET['key'] . "%'or teacher.Name like '%" . $_GET['key'] . "%')
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
    case "view_score_information":
        if (empty($_GET['key'])) {
            $sql = "select Student_ID,student.Name,Course_ID,course.Name,course.start_Time,Score 
                        from score,student,course 
                        where score.Student_ID = student.ID and score.Course_ID = course.ID 
                        order by student_ID ";
        } else {
            $sql = "select Student_ID,student.Name,Course_ID,course.Name,course.start_Time,Score 
                        from score,student,course 
                        where (score.Student_ID = student.ID and score.Course_ID = course.ID)and
                              ( Student_ID like '%" . $_GET['key'] . "%' or student.Name like  '%" . $_GET['key'] . "%' or Course_ID like  '%" . $_GET['key'] . "%' or course.start_time like '%" . $_GET['key'] . "%'or course.Name like '%" . $_GET['key'] . "%') 
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
    case "view_electoral_information":
        if (empty($_GET['key'])) {
            $sql = "select electoral.Student_ID as Student_ID,student.Name as Student_Name,electoral.Course_ID as Course_ID,course.Name as Course_Name,teacher.ID as Teacher_ID,teacher.Name as Teacher_Name 
                        from electoral,student,course,teacher 
                        where electoral.Student_ID = student.ID and electoral.Course_ID = course.ID and course.Teacher_ID = teacher.ID 
                        order by student_ID ";
        } else {
            $sql = "select electoral.Student_ID as Student_ID,student.Name as Student_Name,electoral.Course_ID as Course_ID,course.Name as Course_Name,teacher.ID as Teacher_ID,teacher.Name as Teacher_Name 
                        from electoral,student,course,teacher 
                        where (electoral.Student_ID = student.ID and electoral.Course_ID = course.ID and course.Teacher_ID = teacher.ID)and 
                              (electoral.Student_ID like '%" . $_GET['key'] . "%' or student.Name like  '%" . $_GET['key'] . "%' or electoral.Course_ID like  '%" . $_GET['key'] . "%' or course.Name like '%" . $_GET['key'] . "%'or teacher.ID like '%" . $_GET['key'] . "%'or teacher.Name like '%" . $_GET['key'] . "%')
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
    case "del_message":
        if (isset($_GET["ID2"])) {
            $sql = "delete from " . $_GET['Table'] . " where Course_ID = '" . $_GET['ID1'] . "' and Student_ID = '" . $_GET['ID2'] . "'";
        } else {
            $sql = "delete from " . $_GET['Table'] . " where ID = '" . $_GET['ID'] . "'";
        }
        $result = mysqli_query($con, $sql);
        if (mysqli_affected_rows($con))
            echo 1;
        else
            echo 0;
        break;
    case "update_message":
        $sql = "update " . $_GET['Table'] . " set " . $_GET['field'] . "='" . $_GET['value'] . "' where ID = '" . $_GET['ID'] . "'";
        $result = mysqli_query($con, $sql);
        if (mysqli_affected_rows($con))
            echo 1;
        else
            echo 0;
        break;
    case  "insert_message":
        switch ($_GET['table']) {
            case "teacher":
                $sql = "insert into teacher(name,sex,Date_of_Birth,Age,Entry_Time,Phone,ID_Card,Birth_Place,Control) 
                        values ('" . $_GET['name'] . "','" . $_GET['sex'] . "','" . $_GET['data_of_birth'] . "','" . $_GET['age'] . "','" . $_GET['entry_time'] . "','" . $_GET['phone'] . "','" . $_GET['id_card'] . "','" . $_GET['birth_place'] . "','" . $_GET['control'] . "')";
                break;
            case "student":
                $sql = "insert into student(name,sex,Date_of_Birth,Age,Admission_Time,Class,ID_Card,Birth_Place,dormitory) 
                        values ('" . $_GET['name'] . "','" . $_GET['sex'] . "','" . $_GET['data_of_birth'] . "','" . $_GET['age'] . "','" . $_GET['admission_time'] . "','" . $_GET['class'] . "','" . $_GET['id_card'] . "','" . $_GET['birth_place'] . "','" . $_GET['dormitory'] . "')";
                break;
            case "electoral":
                $sql = "insert into electoral(student_id, course_id) values ('" . $_GET['student_id'] . "','" . $_GET['course_id'] . "')";
                break;
            case "score":
                $sql = "insert into score(student_id, course_id, score) values ('" . $_GET['student_id'] . "','" . $_GET['course_id'] . "','" . $_GET['score'] . "')";
                break;
            case "course":
                $sql = "insert into course( name, course_type, start_time, teacher_id)values ('" . $_GET['name'] . "','" . $_GET['course_type'] . "','" . $_GET['start_time'] . "','" . $_GET['teacher_id'] . "')";
                break;
        }
        $result = mysqli_query($con, $sql);
        if ($result)
            echo 1;
        else
            echo 0;
        break;
    case "view_enter_grades_information":
        $sql = "select * from student where id in(select Student_ID from electoral where Course_ID in (select  ID from course where Teacher_ID = " . $_SESSION['ID'] . "))";
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
    case "insert_score":
        $sql = "insert into score(student_id, course_id) select * from electoral where Student_ID = " . $_GET['ID'] . " and course_id in (select  ID from course where Teacher_ID = " . $_SESSION['ID'] . "); update score set score = '" . $_GET['value'] . "'where Student_ID = " . $_GET['ID'] . " and course_id in (select  ID from course where Teacher_ID = " . $_SESSION['ID'] . ");delete from electoral where Student_ID = " . $_GET['ID'] . " and course_id in (select  ID from course where Teacher_ID = " . $_SESSION['ID'] . ")";
        $result = mysqli_multi_query($con, $sql);
        if ($result)
            echo 1;
        else
            echo 0;
        break;
}
mysqli_close($con);