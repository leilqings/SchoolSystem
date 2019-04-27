$(document).ready(function () {
    console.log(123156)
    $.ajax({
        url: "../php/stuPage.php",
        type: "GET",
        dataType: "json",
        data: {request: "username"},
        success: function (result) {
            $(".username").text(result);
        }
    })
})

$(".password_btn").click(function () {
    pwd1 = $(".password1").val();
    pwd2 = $(".password2").val();
    if (pwd1 && pwd2) {
        if (pwd1 == pwd2) {
            $.ajax({
                url: "../php/teacherPage.php",
                type: "get",
                dataType: "json",
                data: {
                    request: "change_password",
                    password: pwd1
                },
                success: function (result) {
                    if (result) {
                        layer.alert("修改密码成功", {
                            skin: 'layui-layer-molv',
                            closeBtn: 0
                        }, function () {
                            window.location.reload()
                        });
                    } else {
                        layer.alert("修改密码失败", {
                            skin: 'layui-layer-molv',
                            closeBtn: 0
                        })
                    }
                }
            })
        } else {
            layer.alert("两次密码不正确", {
                skin: 'layui-layer-molv',
                closeBtn: 0
            });
            $(".password2").val("")
        }
    }
    return false;
})
$(".person_message_event").click(function () {
    $.ajax({
        url: "../php/stuPage.php",
        type: "GET",
        dataType: "json",
        data: {
            request: "person_message"
        },
        success: function (result) {
            $(".person_message_ID").text(result.ID);
            $(".person_message_Name").text(result.Name);
            $(".person_message_sex").text(result.Sex);
            $(".person_message_date_of_birth").text(result.Date_of_Birth);
            $(".person_message_age").text(result.Age);
            $(".person_message_admission_time").text(result.Admission_Time);
            $(".person_message_dormitory").text(result.dormitory);
            $(".person_message_id_card").text(result.ID_Card);
            $(".person_message_birth_place").text(result.Birth_Place);
        }
    })
})
$(".password_reset").click(function () {
    $(".password1").val("");
    $(".password2").val("")
})

function showDiv(Div) {
    $(".person_message").hide();
    $(".change_password").hide();
    $(".select_course").hide();
    $(".delete_course").hide();
    $(".person_score").hide();
    $("." + Div).show();
}