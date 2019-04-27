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
    })
    $.ajax({
        url: "../php/teacherPage.php",
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
            form = layui.form,
            upload = layui.upload

        table.render({
            elem: '#enter_grades_table',
            url: '../php/teacherPage.php',
            dataType: 'json',
            method: 'get',
            where: {
                request: "view_enter_grades_information"
            },
            cols: [[{field: 'ID', title: '学号',  sort: true},
                {field: 'Name', title: '姓名',  sort: true},
                {field: 'Class', title: '班级',  sort: true},
                {field: 'Sex', title: '性别',  sort: true},
                {fixed: 'right', title: '成绩', edit: 'text'}]],
            id: 'enter_grades_table',
            title: '学生',
            toolbar: true,
            defaultToolbar: ['filter', 'exports']
        })
        table.render({
            elem: '#teacher_information_table',
            url: '../php/teacherPage.php',
            dataType: 'json',
            method: 'get',
            width: 1325,
            where: {
                request: "view_teacher_information"
            },
            id: 'teacher_table',
            title: '教师表',
            cols: [[
                {field: 'ID', title: '职工号', width: 104, sort: true},
                {field: 'Name', title: '姓名', width: 104, edit: 'text', sort: true},
                {field: 'Sex', title: '性别', width: 83, edit: 'text', sort: true},
                {field: 'Date_of_Birth', title: '出生日期', width: 104, edit: 'text', sort: true},
                {field: 'Age', title: '年龄', width: 83, edit: 'text', sort: true},
                {field: 'Entry_Time', title: '入职日期', width: 104, edit: 'text', sort: true},
                {field: 'Phone', title: '电话号码', width: 137, edit: 'text'},
                {field: 'ID_Card', title: '身份证号', width: 193, edit: 'text', sort: true},
                {field: 'Birth_Place', title: '籍贯', width: 193, edit: 'text', sort: true},
                {field: 'PWD', title: '密码', edit: 'text', width: 104, edit: 'text'},
                {fixed: 'right', title: '操作', align: 'center', toolbar: '#active_demo', width: 104}
            ]],
            page: false,
            toolbar: '#active_bar',
            defaultToolbar: ['filter', 'exports']
        })
        table.render({
            elem: '#student_information_table',
            url: '../php/teacherPage.php',
            id: 'student_table',
            dataType: 'json',
            method: 'get',
            where: {
                request: "view_student_information"
            },
            title: '学生表',
            cols: [[
                {field: 'ID', title: '学号', width: 104, sort: true},
                {field: 'Name', title: '姓名', edit: 'text', width: 104, sort: true},
                {field: 'Class', title: '班级', edit: 'text', width: 104, sort: true},
                {field: 'Sex', title: '性别', edit: 'text', width: 83, sort: true},
                {field: 'Date_of_Birth', title: '出生日期', Width: 104, edit: 'text', sort: true},
                {field: 'Age', title: '年龄', edit: 'text', width: 83, sort: true},
                {field: 'Admission_Time', title: '入学时间', Width: 104, edit: 'text', sort: true},
                {field: 'ID_Card', title: '身份证号', Width: 193, edit: 'text', sort: true},
                {field: 'Birth_Place', title: '籍贯', edit: 'text', width: 193, sort: true},
                {field: 'dormitory', title: '宿舍', edit: 'text', width: 104, sort: true},
                {field: 'PWD', title: '密码', edit: 'text', width: 104, sort: true},
                {fixed: 'right', title: '操作', toolbar: '#active_demo'}
            ]],
            width: 1325,
            toolbar: '#active_bar_student',
            defaultToolbar: ['filter', 'exports']
        })
        table.render({
            elem: '#electoral_information_table',
            url: '../php/teacherPage.php',
            dataType: 'json',
            id: "electoral_table",
            method: 'get',
            where: {
                request: "view_electoral_information",
            },
            title: '选课',
            cols: [[
                {field: 'Student_ID', title: '学号', sort: true},
                {field: 'Student_Name', title: '学生姓名', sort: true},
                {field: 'Course_ID', title: '课程号', sort: true},
                {field: 'Course_Name', title: '课程名', sort: true},
                {field: 'Teacher_ID', title: '教师职工号', sort: true},
                {field: 'Teacher_Name', title: '教师姓名', sort: true},
                {fixed: 'right', title: '操作', toolbar: '#active_demo'}
            ]],
            page: true,
            toolbar: '#active_bar',
            defaultToolbar: ['filter', 'exports']
        })
        table.render({
            elem: '#score_information_table',
            url: '../php/teacherPage.php',
            dataType: 'json',
            id: "score_table",
            method: 'get',
            where: {
                request: "view_score_information"
            },
            title: '成绩表',
            cols: [[
                {field: 0, title: '学号', sort: true},
                {field: 1, title: '姓名', sort: true},
                {field: 2, title: '课程号', sort: true},
                {field: 3, title: '课程名', sort: true},
                {field: 4, title: '开课时间', sort: true},
                {field: 5, title: '成绩'},
                {fixed: 'right', title: '操作', toolbar: '#active_demo'}
            ]],
            toolbar: '#active_bar',
            defaultToolbar: ['filter', 'exports']
        })
        table.render({
            elem: '#course_information_table',
            url: '../php/teacherPage.php',
            id: 'course_table',
            dataType: 'json',
            method: 'get',
            where: {
                request: "view_course_information",
            },
            title: '课程表',
            cols: [[
                {field: 'Course_ID', title: '课程号', sort: true},
                {field: 'Course_Name', title: '课程名', sort: true},
                {field: 'Course_Type', title: '课程类型', sort: true},
                {field: 'Start_Time', title: '开课时间', sort: true},
                {field: 'Teacher_Name', title: '授课教师', sort: true},
                {fixed: 'right', title: '操作', toolbar: '#active_demo'}
            ]],
            toolbar: '#active_bar',
            defaultToolbar: ['filter', 'exports']
        })

        table.on('edit(grades_table)', function (obj) {
            $.ajax({
                url: '../php/teacherPage.php',
                dataType: 'json',
                type: 'get',
                data: {
                    request: 'insert_score',
                    ID: obj.data.ID,
                    value: obj.value,
                },
                success: function (result) {
                    if (result) {
                        layer.msg('修改成功', {time: 1000})
                        obj.del();
                    } else {
                        layer.msg('修改失败', {time: 1000})
                    }
                }
            })
        })
        table.on('tool(teacher_table)', function (obj) {
            var data = obj.data;
            if (obj.event === 'del') {
                layer.confirm('是否确认删除?', {
                    btn: ['是', '否']
                }, function (index) {
                    $.ajax({
                        url: "../php/teacherPage.php",
                        type: "GET",
                        dataType: "json",
                        data: {
                            request: "del_message",
                            Table: 'teacher',
                            ID: data.ID
                        },
                        success: function (result) {
                            if (result) {
                                layer.msg('删除成功', {time: 1000});
                                obj.del();
                                layer.close(index);
                            } else {
                                layer.msg('删除失败', {time: 1000});
                            }
                        }
                    })
                })
            }
        })
        table.on('edit(teacher_table)', function (obj) {
            $.ajax({
                url: '../php/teacherPage.php',
                dataType: 'json',
                type: 'get',
                data: {
                    request: 'update_message',
                    Table: 'teacher',
                    ID: obj.data.ID,
                    value: obj.value,
                    field: obj.field
                },
                success: function (result) {
                    if (result) {
                        layer.msg('修改成功', {time: 1000})
                    } else {
                        layer.msg('修改失败', {time: 1000})
                    }
                }
            })
        })
        table.on('toolbar(teacher_table)', function (obj) {
            switch (obj.event) {
                case 'search':
                    table.reload('teacher_table', {
                        where: {
                            key: $(".check_input").eq(0).val(),
                        }
                    })
                    break;
                case  'add':
                    layer.open({
                        type: 1,
                        title: '添加人员',
                        content: $("#active_add_teacher"),
                        btn: ['确定', '取消'],
                        area: ['800px', '650px'],
                        success: function (index, layero) {
                            form.render()
                        },
                        yes: function (index, layero) {
                            layero.find('.sub-bindbtn_teacher').click();

                            $.ajax({
                                url: '../php/teacherPage.php',
                                type: 'get',
                                dataType: 'json',
                                data: {
                                    request: 'insert_message',
                                    table: 'teacher',
                                    name: $(' .name_teacher').val(),
                                    sex: $('.sex_teacher input[name = "sex"]:checked').val(),
                                    data_of_birth: $('.data_of_birth_teacher').val(),
                                    age: $('.age_teacher').val(),
                                    entry_time: $('.entry_time_teacher').val(),
                                    phone: $('.phone_teacher').val(),
                                    id_card: $('.id_card_teacher').val(),
                                    birth_place: $('.birth_place_teacher').val(),
                                    control: $('.control_teacher input[name = "control"]:checked').val()
                                }, success: function (result) {
                                    if (result) {
                                        layer.msg('添加成功', {time: 1000})
                                        layer.close(index);
                                    } else {
                                        layer.msg('添加失败', {time: 1000})
                                    }
                                }
                            })
                        }
                    })
                    break;
            }
        })
        table.on('tool(student_table)', function (obj) {
            var data = obj.data;
            if (obj.event === 'del') {
                layer.confirm('是否确认删除?', {
                    btn: ['是', '否']
                }, function (index) {
                    $.ajax({
                        url: "../php/teacherPage.php",
                        type: "GET",
                        dataType: "json",
                        data: {
                            request: "del_message",
                            Table: 'student',
                            ID: data.ID
                        },
                        success: function (result) {
                            if (result) {
                                layer.msg('删除成功', {time: 1000});
                                obj.del();
                                layer.close(index);
                            } else {
                                layer.msg('删除失败', {time: 1000});
                            }
                        }
                    })
                })
            }
        })
        table.on('edit(student_table)', function (obj) {
            alert(obj.filed)
            $.ajax({
                url: '../php/teacherPage.php',
                dataType: 'json',
                type: 'get',
                data: {
                    request: 'update_message',
                    Table: 'student',
                    dataType: 'json',
                    ID: obj.data.ID,
                    value: obj.value,
                    field: obj.field
                },
                success: function (result) {
                    if (result) {
                        layer.msg('修改成功', {time: 1000})
                    } else {
                        layer.msg('修改失败', {time: 1000})
                    }
                }
            })
        })
        table.on('toolbar(student_table)', function (obj) {
            switch (obj.event) {
                case 'search':
                    table.reload('student_table', {
                        where: {
                            key: $(".check_input").eq(1).val(),
                        }
                    })
                    break;
                case  'add':
                    layer.open({
                        type: 1,
                        title: '添加学员',
                        content: $("#active_add_student"),
                        btn: ['确定', '取消'],
                        area: ['800px', '650px'],
                        success: function (index, layero) {
                            form.render()
                        },
                        yes: function (index, layero) {
                            layero.find('.sub-bindbtn_student').click();

                            $.ajax({
                                url: '../php/teacherPage.php',
                                type: 'get',
                                dataType: 'json',
                                data: {
                                    request: 'insert_message',
                                    table: 'student',
                                    name: $('.name_student').val(),
                                    sex: $('.sex_student input[name = "sex"]:checked').val(),
                                    class: $('.class_student').val(),
                                    data_of_birth: $('.data_of_birth_student').val(),
                                    age: $('.age_student').val(),
                                    admission_time: $('.admission_time_student').val(),
                                    dormitory: $('.dormitory_student').val(),
                                    id_card: $('.id_card_student').val(),
                                    birth_place: $('.birth_place_student').val(),
                                }, success: function (result) {
                                    if (result) {
                                        layer.msg('添加成功', {time: 1000})
                                        layer.close(index);
                                    } else {
                                        layer.msg('添加失败', {time: 1000})
                                    }
                                }
                            })
                        }
                    })
                    break;
            }
        })
        table.on('tool(electoral_table)', function (obj) {
            var data = obj.data;
            if (obj.event === 'del') {
                layer.confirm('是否确认删除?', {
                    btn: ['是', '否']
                }, function (index) {
                    $.ajax({
                        url: "../php/teacherPage.php",
                        type: "GET",
                        dataType: "json",
                        data: {
                            request: "del_message",
                            Table: 'electoral',
                            ID1: data.Course_ID,
                            ID2: data.Student_ID
                        },
                        success: function (result) {
                            if (result) {
                                layer.msg('删除成功', {time: 1000});
                                obj.del();
                                layer.close(index);
                            } else {
                                layer.msg('删除失败', {time: 1000});
                            }
                        }
                    })
                })
            }
        })
        table.on('toolbar(electoral_table)', function (obj) {
            switch (obj.event) {
                case 'search':
                    table.reload('electoral_table', {
                        where: {
                            key: $(".check_input").eq(2).val(),
                        }
                    })
                    break;
                case  'add':
                    layer.open({
                        type: 1,
                        title: '添加选课',
                        content: $("#active_add_electoral"),
                        btn: ['确定', '取消'],
                        area: ['800px', '650px'],
                        success: function (index, layero) {
                            form.render()
                        },
                        yes: function (index, layero) {
                            layero.find('.sub-bindbtn_electoral').click();

                            $.ajax({
                                url: '../php/teacherPage.php',
                                type: 'get',
                                dataType: 'json',
                                data: {
                                    request: 'insert_message',
                                    table: 'electoral',
                                    student_id: $('.student_id_electoral').val(),
                                    course_id: $('.course_id_electoral').val(),
                                }, success: function (result) {
                                    if (result) {
                                        layer.msg('添加成功', {time: 1000})
                                        layer.close(index);
                                    } else {
                                        layer.msg('添加失败', {time: 1000})
                                    }
                                }
                            })
                        }
                    })
                    break;
            }
        })
        table.on('tool(score_table)', function (obj) {
            var data = obj.data;
            if (obj.event === 'del') {
                layer.confirm('是否确认删除?', {
                    btn: ['是', '否']
                }, function (index) {
                    $.ajax({
                        url: "../php/teacherPage.php",
                        type: "GET",
                        dataType: "json",
                        data: {
                            request: "del_message",
                            Table: 'score',
                            ID1: data.Course_ID,
                            ID2: data.Student_ID
                        },
                        success: function (result) {
                            if (result) {
                                layer.msg('删除成功', {time: 1000});
                                obj.del();
                                layer.close(index);
                            } else {
                                layer.msg('删除失败', {time: 1000});
                            }
                        }
                    })
                })
            }
        })
        table.on('toolbar(score_table)', function (obj) {
            switch (obj.event) {
                case 'search':
                    table.reload('score_table', {
                        where: {
                            key: $(".check_input").eq(3).val(),
                        }
                    })
                    break;
                case  'add':
                    layer.open({
                        type: 1,
                        title: '添加人员',
                        content: $("#active_add_score"),
                        btn: ['确定', '取消'],
                        area: ['800px', '650px'],
                        success: function (index, layero) {
                            form.render()
                        },
                        yes: function (index, layero) {
                            layero.find('.sub-bindbtn').click();

                            $.ajax({
                                url: '../php/teacherPage.php',
                                type: 'get',
                                dataType: 'json',
                                data: {
                                    request: 'insert_message',
                                    table: 'score',
                                    student_id: $('.student_id_score').val(),
                                    course_id: $('.course_id_score').val(),
                                    score: $('.score_score').val()
                                }, success: function (result) {
                                    if (result) {
                                        layer.msg('添加成功', {time: 1000})
                                        layer.close(index);
                                    } else {
                                        layer.msg('添加失败', {time: 1000})
                                    }
                                }
                            })
                        }
                    })
                    break;
            }
        })
        table.on('tool(course_table)', function (obj) {
            var data = obj.data;
            if (obj.event === 'del') {
                layer.confirm('是否确认删除?', {
                    btn: ['是', '否']
                }, function (index) {
                    $.ajax({
                        url: "../php/teacherPage.php",
                        type: "GET",
                        dataType: "json",
                        data: {
                            request: "del_message",
                            Table: 'Course',
                            ID: data.Course_ID
                        },
                        success: function (result) {
                            if (result) {
                                layer.msg('删除成功', {time: 1000});
                                obj.del();
                                layer.close(index);
                            } else {
                                layer.msg('删除失败', {time: 1000});
                            }
                        }
                    })
                })
            }
        })
        table.on('toolbar(course_table)', function (obj) {
            switch (obj.event) {
                case 'search':
                    table.reload('course_table', {
                        where: {
                            key: $(".check_input").eq(4).val(),
                        }
                    })
                    break;
                case  'add':
                    layer.open({
                        type: 1,
                        title: '添加人员',
                        content: $("#active_add_course"),
                        btn: ['确定', '取消'],
                        area: ['800px', '650px'],
                        success: function (index, layero) {
                            form.render()
                        },
                        yes: function (index, layero) {
                            layero.find('.sub-bindbtn').click();

                            $.ajax({
                                url: '../php/teacherPage.php',
                                type: 'get',
                                dataType: 'json',
                                data: {
                                    request: 'insert_message',
                                    table: 'course',
                                    name: $('.name_course').val(),
                                    course_type: $('.course_type_course input[name = "course_type"]:checked').val(),
                                    start_time: $('.start_time_course').val(),
                                    teacher_id: $('.teacher_id_course').val(),
                                }, success: function (result) {
                                    if (result) {
                                        layer.msg('添加成功', {time: 1000})
                                        layer.close(index);
                                    } else {
                                        layer.msg('添加失败', {time: 1000})
                                    }
                                }
                            })
                        }
                    })
                    break;
            }
        })

        upload.render({
            elem: '.upload_btn',
            url: '../php/file.php',
            accept: 'file',
            exts: 'xls|xlsx',
            done: function (res) {
                console.log(res)
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
        url: "../php/teacherPage.php",
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
            $(".person_message_entry_time").text(result.Entry_Time);
            $(".person_message_phone").text(result.Phone);
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
    $(".Entering_grades").hide();
    $(".view_teacher_information").hide();
    $(".view_student_information").hide();
    $(".view_student_course").hide();
    $(".view_student_score").hide();
    $(".view_teacher_course").hide();
    $("." + Div).show();
}


