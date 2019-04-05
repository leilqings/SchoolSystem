$(document).ready(function () {
    $.ajax({
        url: "../php/teacherPage.php",
        type: "GET",
        dataType: "json",
        data: {request: "teacher_or_control"},
        success: function (result) {
            if (result) {
                $(".teacher_only").hide();
                $(".control_only").show();
            } else {
                $(".teacher_only").show();
                $(".control_only").hide();
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
    $.ajax({
        url: "../php/teacherPage.php",
        type: "GET",
        dataType: "json",
        data: {request: "username"},
        success: function (result) {
            $(".username").text(result);
        }
    })
    $('.nav_person_message').click(function () {
        $('.person_message').show();
    })
})

function showDiv(Div) {
    $(".person_message").hide();
    $(".change_password").hide();
    $(".course").hide();
    $(".curriculum").hide();
    $(".Entering_grades").hide();
    $(".view_personnel_information").hide();
    $(".change_personnel_information").hide();
    $(".view_student_grades").hide();
    $(".change_course_information").hide();
    $(".add_course").hide();
    $(".change_student_grades").hide();
    $("."+Div).show();
}
