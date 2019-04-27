<?php

require '../../../vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
try {
    $spreadsheet = $reader->load($_FILES['file']['tmp_name']);
} catch (\PhpOffice\PhpSpreadsheet\Reader\Exception $e) {
    die($e->getMessage());
}
$sheet = $spreadsheet->getActiveSheet();
$res = array();
foreach ($sheet->getRowIterator(2) as $row) {
    $tmp = array();
    foreach ($row->getCellIterator() as $cell) {
        $tmp[] = $cell->getFormattedValue();
    }
    $res[$row->getRowIndex()] = $tmp;
}
echo json_encode(array(
    "code" => 0,
    "msg" => $_FILES['file']['name'],
    "count" => 1,
    "data" => $res));
