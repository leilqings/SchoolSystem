<?php

require '../../../vendor/autoload.php';

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "schoolsystem");
mysqli_set_charset($con, "utf8");

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
try {
    $spreadsheet = $reader->load($_FILES['file']['tmp_name']);
} catch (\PhpOffice\PhpSpreadsheet\Reader\Exception $e) {
    die($e->getMessage());
}
$worksheet = $spreadsheet->getActiveSheet();
$highestRow = $worksheet->getHighestRow(); // 总行数
$highestColumn = $worksheet->getHighestColumn(); // 总列数
$highestColumnIndex = \PhpOffice\PhpSpreadsheet\Cell\Coordinate::columnIndexFromString($highestColumn);

$lines = $highestRow - 1;
if ($lines <= 0) {
    exit('Excel表格中没有数据');
}

$sql = "INSERT INTO student (name, class, sex, date_of_birth, age, admission_time, id_card, birth_place, dormitory) VALUES";

for ($row = 2; $row <= $highestRow; ++$row) {
    $name = $worksheet->getCellByColumnAndRow(1, $row)->getValue();
    $class = $worksheet->getCellByColumnAndRow(2, $row)->getValue();
    $sex = $worksheet->getCellByColumnAndRow(3, $row)->getValue();
    $date_of_birth = $worksheet->getCellByColumnAndRow(4, $row)->getValue();
    $age = $worksheet->getCellByColumnAndRow(5, $row)->getValue();
    $admission_time = $worksheet->getCellByColumnAndRow(6, $row)->getValue();
    $id_card = $worksheet->getCellByColumnAndRow(7, $row)->getValue();
    $birth_place = $worksheet->getCellByColumnAndRow(8, $row)->getValue();
    $dormitory = $worksheet->getCellByColumnAndRow(9, $row)->getValue();

    $sql .= "('$name','$class','$sex','$date_of_birth','$age','$admission_time','$id_card','$birth_place','$dormitory'),";
}
$sql = rtrim($sql, ","); //去掉最后一个,号
$result = mysqli_query($con, $sql);
if ($result) {
    echo json_encode(array(
        "code" => 0,
        "msg" => "上传成功",
        "count" => 1,
        "data" => ""));
} else {
    echo json_encode(array(
        "code" => 0,
        "msg" => "上传失败",
        "count" => 1,
        "data" => $sql));
}

mysqli_close($con);

