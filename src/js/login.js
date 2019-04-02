$(document).ready(function () {
    $(".btn").click(function (e) {
        $username = $('#username').val();
        $pwd = $('#password').val();
        if ($username && $pwd) {
            if (7 == $username.length||8 == $username.length){
                $.ajax({
                    url: '../php/login.php',
                    type: "post",
                    data: {
                        username: $username,
                        pwd: $pwd,
                    },
                    dataType: "json",
                    success: function (result) {
                        if (result == 'Student') {
                            $(location).attr('href', '../html/stuPage.html');
                        } else if (result == 'Teacher') {
                            $(location).attr('href', '../html/teacherPage.html');
                        } else {
                            alert("用户名或密码错误");
                        }
                    },
                    error: function (data) {
                        console.log(data);
                    }
                })
            }
           else {
               alert("用户名或密码错误");
            }
        } else {
            alert("请输入用户名或密码");
        }
    });
});

$(document).keyup(function (e) {
    if (e.keyCode == 13) {
        $(".btn").trigger("click");
    }
});