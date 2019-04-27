
layui.use(['element', 'table', 'layer', 'form', 'upload'], function () {
    var element = layui.element,
        table = layui.table,
        layer = layui.layer,
        form = layui.form,
        upload = layui.upload
})

$(document).ready(function () {
    var system_time;
    $.ajax({
        url: "../php/common.php",
        type: "GET",
        dataType: "JSON",
        data: {
            request: "get_time"
        },
        success: function (result) {
            system_time = parseInt(result);
            $(".system_time").text(formatTime(system_time * 1000, 'yyyy-MM-dd hh:mm:ss'))
        }
    });
    setInterval(function () {
        system_time++;
        $(".system_time").text(formatTime(system_time * 1000, 'yyyy-MM-dd hh:mm:ss'))
    }, 1000);
});

function formatTime(time, fmt) {
    if (time == null) {
        return;
    }
    var fmt = fmt ? fmt : 'yyyy-MM-dd';
    var time = new Date(time);
    var z = {
        M: time.getMonth() + 1,
        d: time.getDate(),
        h: time.getHours(),
        m: time.getMinutes(),
        s: time.getSeconds()
    };
    fmt = fmt.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
        return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2);
    });
    return fmt.replace(/(y+)/g, function (v) {
        return time.getFullYear().toString().slice(-v.length);
    });
}

$('.cancel').click(function(){
        $.ajax({
            url: "../php/common.php",
            type: "GET",
            dataType: "JSON",
            data: {
                request: "cancel"
            },
            success:function (result) {
                $(location).attr('href', '../html/login.html');
            }
        })

    }

)

