$(document).ready(function () {
    $(".btn").click(function (e) {
        $username = $('#username').val();
        $pwd = $('#password').val();
        if ($username && $pwd) {
            if (7 == $username.length || 8 == $username.length) {
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
                            layer.alert("用户名或密码错误", {
                                skin: 'layui-layer-molv',
                                closeBtn: 0
                            })
                        }
                    },
                    error: function (data) {
                        console.log(data);
                    }
                })
            } else {
                layer.alert("用户名或密码错误", {
                    skin: 'layui-layer-molv',
                    closeBtn: 0
                });
            }
        } else {
            layer.alert("请输入用户名或密码", {
                skin: 'layui-layer-molv',
                closeBtn: 0
            });
        }
    });
    $(".forget_pwd").click(function () {
        layer.tips('请到教务办公室获取个人密码。',this, {
            tips: [3, '#009f95'],
            time: 4000
        })
    })
});

$(document).keyup(function (e) {
    if (e.keyCode == 13) {
        $(".btn").trigger("click");
    }
});