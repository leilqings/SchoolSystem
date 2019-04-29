$(document).ready(function () {
    $.ajax({
        url: "../php/stuPage.php",
        type: "GET",
        dataType: "json",
        data: {request: "username"},
        success: function (result) {
            $(".username").text(result);
        }
    })

    layui.use(['element', 'table', 'layer', 'form', 'upload'], function () {
        var element = layui.element,
            table = layui.table,
            layer = layui.layer,
            form = layui.form

        table.render({
            elem: '#select_table',
            url: '../php/stuPage.php',
            dataType: 'json',
            method: 'get',
            where: {
                request: "view_course_information"
            },
            cols: [[
                {field: 'Course_ID', title: '课程号', sort: true},
                {field: 'Course_Name', title: '课程名', sort: true},
                {field: 'Course_Type', title: '课程类型', sort: true},
                {field: 'Start_Time', title: '开课时间', sort: true},
                {field: 'Teacher_Name', title: '授课教师', sort: true},
                {fixed: 'right', title: '操作', toolbar: '#active_demo2'}]],
            id: 'select_table',
            title: '选课',
            toolbar: '#active_bar',
            defaultToolbar: ['filter']
        })
        table.render({
            elem: '#delete_table',
            url: '../php/stuPage.php',
            dataType: 'json',
            id: "delete_table",
            method: 'get',
            where: {
                request: "view_electoral_information",
            },
            title: '删课',
            cols: [[
                {field: 'Course_ID', title: '课程号', sort: true},
                {field: 'Course_Name', title: '课程名', sort: true},
                {field: 'Teacher_ID', title: '教师职工号', sort: true},
                {field: 'Teacher_Name', title: '教师姓名', sort: true},
                {fixed: 'right', title: '操作', toolbar: '#active_demo1'}
            ]],
            toolbar: '#active_bar',
            defaultToolbar: ['filter']
        })
        table.render({
            elem: '#score_table',
            url: '../php/stuPage.php',
            dataType: 'json',
            id: "score_table",
            method: 'get',
            where: {
                request: "view_score_information"
            },
            title: '成绩表',
            cols: [[
                {field: 'Course_ID', title: '课程号', sort: true},
                {field: 'Name', title: '课程名', sort: true},
                {field: 'start_Time', title: '开课时间', sort: true},
                {field: 'Score', title: '成绩'},
            ]],
            toolbar: '#active_bar',
            defaultToolbar: ['filter', 'exports']
        })

        table.on('tool(select_table)', function (obj) {
            var data = obj.data;
            if (obj.event === 'add') {
                layer.confirm('是否确认添加?', {
                    btn: ['是', '否']
                }, function (index) {
                    $.ajax({
                        url: "../php/stuPage.php",
                        type: "GET",
                        dataType: "json",
                        data: {
                            request: "add_message",
                            Table: 'electoral',
                            ID: data.Course_ID
                        },
                        success: function (result) {
                            if (result) {
                                layer.msg('添加成功', {time: 1000});
                                obj.del();
                                table.reload('delete_table');
                            } else {
                                layer.msg('添加失败', {time: 1000});
                            }
                        }
                    })
                })
            }
        })
        table.on('toolbar(select_table)', function (obj) {
            switch (obj.event) {
                case 'search':
                    table.reload('select_table', {
                        where: {
                            key: $(".check_input").eq(0).val(),
                        }
                    })
                    break;
            }
        })
        table.on('tool(delete_table)', function (obj) {
            var data = obj.data;
            if (obj.event === 'del') {
                layer.confirm('是否确认删除?', {
                    btn: ['是', '否']
                }, function (index) {
                    $.ajax({
                        url: "../php/stuPage.php",
                        type: "GET",
                        dataType: "json",
                        data: {
                            request: "del_message",
                            Table: 'electoral',
                            ID: data.Course_ID
                        },
                        success: function (result) {
                            if (result) {
                                layer.msg('删除成功', {time: 1000});
                                obj.del();
                                table.reload('select_table');
                            } else {
                                layer.msg('添加失败', {time: 1000});
                            }
                        }
                    })
                })
            }
        })
        table.on('toolbar(delete_table)', function (obj) {
            switch (obj.event) {
                case 'search':
                    table.reload('delete_table', {
                        where: {
                            key: $(".check_input").eq(1).val(),
                        }
                    })
                    break;
            }
        })
        table.on('toolbar(score_table)', function (obj) {
            switch (obj.event) {
                case 'search':
                    table.reload('score_table', {
                        where: {
                            key: $(".check_input").eq(2).val(),
                        }
                    })
                    break;
            }
        })
    })
})
$(".password_btn").click(function () {
    pwd1 = $(".password1").val();
    pwd2 = $(".password2").val();
    if (pwd1 && pwd2) {
        if (pwd1 == pwd2) {
            $.ajax({
                url: "../php/stuPage.php",
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
        return false;
    }

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