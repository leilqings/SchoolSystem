$(document).ready(function () {
    $.ajax({
        url: "../php/teacherPage.php",
        type: "POST",
        dataType: "json",
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
})