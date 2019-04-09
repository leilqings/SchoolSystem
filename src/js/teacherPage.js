$(document).ready(function () {
    $.ajax({
        url: "../php/teacherPage.php",
        type: "GET",
        dataType: "json",
        data: {request: "teacher_or_control"},
        success: function (result) {
            if (result) {
                $(".controller").show();
            } else {
                $(".teacher").show();
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
    $(".view_teacher_information").hide();
    $(".view_student_information").hide();
    $(".view_student_course").hide();
    $(".view_teacher_course").hide();
    $("."+Div).show();
}
