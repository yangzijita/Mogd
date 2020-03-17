$("#adduced").click(function () {
    var dic = {
        mgdphone: $("#mgdphone").val(),
        passwd: $("#passwd").val(),
        address: $("#address").val(),
        type: $("#you_type option:selected").val(),
        uinfo: $("#uinfo").val(),
        hour: $("#hour").val(),
        minute: $("#minute").val(),
        week_start: $("#week_start").val(),
        week_end: $("#week_end").val(),
    };
    // console.log(dic);
    if (dic.mgdphone == null || dic.mgdphone == "") {
        alert("mobile 不能为空");
    } else if (dic.passwd == null || dic.passwd == "") {
        alert("密码不能为空");
    } else if (dic.address == null || dic.address == "") {
        alert("mima1 null");
    } else {
        // console.log(dic);
        // 将获取的字符串转换为 json数据
        var msg = JSON.stringify(dic);
        // var $test = $(".test");
        // ajax发送

        $.ajax({
            // 发送到的地址
            url: "/../IndexViews/NewCrontab/",
            //请求方式
            type: "post",
            //指定请求的数据格式为json
            contentType: "application/json",
            // 数据
            data: msg,
            //指定响应的格式为json,注意如果后台没有放回json类型的数据格式下方的success不会执行
            dataType: "json",
            success: function (res) {
                console.log(res);
                var data = res;
                if (data.status == 200) {
                    console.log(res);
                    alert(data.data[0].info);
                    // location.href = "./admin/index.html";
                    location.href = "./table-list.html";
                } else if (data.status == 400) {
                    // console.log(res);
                    alert(data.data[0].info);
                    location.href = "./table-list.html";
                } else {
                    // alert("111");
                }
            },
            error: function () {
                console.log("请求出错！");
            }
        });
    }
});


$(function () {
    $.ajax({
        url: "/../IndexViews/User/",//ajax请求要发送的地址
        dataType: "json",//响应数据的类型
        type: "POST",//发送请求的方式
        success: function (data) {
            //data为服务器端响应的数据
            rs = data;
            if (rs.status == "400") {
                window.location.href = "../login.html";
            }
        }
    });
})


$(function () {
    $.ajax({
        url: "/../IndexViews/UserInfo/",//ajax请求要发送的地址
        dataType: "json",//响应数据的类型
        type: "POST",//发送请求的方式
        success: function (data) {
            rs = data;
            if (rs.status == "400") {

            } else if (rs.status == "200") {

                $("#imgqq").attr('src', rs.data.QQimg);
                $("#idname").text(rs.data.phone);
                $("#idname1").text(rs.data.phone);
                var rdata = rs.data.expire.slice(0, 10)

                $("#iddate").text(rdata);

            }
        }
    });
})

$(function () {
    $.ajax({
        url: "/../IndexViews/GetCrontab/",//ajax请求要发送的地址
        dataType: "json",//响应数据的类型
        type: "POST",//发送请求的方式
        success: function (data) {
            //data为服务器端响应的数据
            var rs = data;
            if (rs.status == 400) {
                // window.location.href = "../login.html";
                // alert(rs.data['info']);
            } else if (rs.status == 200) {
                var msg = "";
                var res = rs.data;
                for (var i = 1; i <= res.length; i++) {
                    msg += "<tr class=\"gradeX\">";
                    msg += "<td id=\"uphne_msg" + i + "\">" + res[i - 1].mobile + "</td>";
                    msg += "<td id=\"upass_msg" + i + "\">" + res[i - 1].蘑菇钉密码 + "</td>";
                    msg += "<td id=\"rmsg_msg" + i + "\">" + res[i - 1].打卡发布的信息 + "</td>";
                    msg += "<td id=\"radd_msg" + i + "\">" + res[i - 1].打卡地点 + "</td>";
                    msg += "<td id=\"type_msg" + i + "\">" + res[i - 1].打卡类型 + "</td>";
                    msg += "<td id=\"rtime_msg" + i + "\">" + res[i - 1].添加时间 + "</td>";
                    msg += "<td id=\"rdtime_msg" + i + "\">" + res[i - 1].打卡时间 + "</td>";
                    msg += "<td>"
                        + "<div class=\"tpl-table-black-operation\">"
                        + "<a id=\"edit\" data-toggle=\"modal\" rel=\"external nofollow\" onclick=\"xgfz" + i + "()\" data-target=\"#myedit\" href=\"javascript:;\">"
                        + " <i class=\"am-icon-pencil\"></i> 编辑"
                        + "</a>"
                        + "<a id=\"del\" href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#delcz\" class=\"tpl-table-black-operation-del\">"
                        + "<i class=\"am-icon-trash\"></i> 删除"
                        + "</a>" +
                        "</div>";
                    msg += "</tr>";
                }
                $("#tab").html(msg);


                // console.log(l1);
                // mgdphone
                // 给修改 赋值

            }
        }
    });
})


$("#upadduced").click(function () {

    var dic = {
        mgdphone: $("#xgmgdphone").val(),
        passwd: $("#xgpasswd").val(),
        address: $("#xgaddress").val(),
        uinfo: $("#xguinfo").val(),
        xgtype: $("#xgyou_type").val(),
        hour: $("#xghour").val(),
        minute: $("#xgminute").val(),
        week_start: $("#xgweek_start").val(),
        week_end: $("#xgweek_end").val(),
    };
    // console.log(dic);

    // console.log(dic);
    // 将获取的字符串转换为 json数据
    var msg = JSON.stringify(dic);
    // var $test = $(".test");
    // ajax发送

    $.ajax({
        // 发送到的地址
        url: "/../IndexViews/UpdateCrontab/",
        //请求方式
        type: "post",
        //指定请求的数据格式为json
        contentType: "application/json",
        // 数据
        data: msg,
        //指定响应的格式为json,注意如果后台没有放回json类型的数据格式下方的success不会执行
        dataType: "json",
        success: function (res) {
            console.log(res);
            var data = res;
            if (data.status == 200) {
                console.log(res);
                alert(data.data[0].info);
                // location.href = "./admin/index.html";
                location.href = "./table-list.html";
            } else if (data.status == 400) {
                // console.log(res);
                alert(data.data[0].info);
                location.href = "./table-list.html";
            } else {
                // alert("111");
            }
        },
        error: function () {
            console.log("请求出错！");
        }
    });

});


$("#del").click(function () {
    var dic = {
        type: $("#type_msg1").text()
    };
    // console.log(dic);
    // console.log(dic);
    // 将获取的字符串转换为 json数据
    var msg = JSON.stringify(dic);
    // var $test = $(".test");
    // ajax发送

    $.ajax({
        // 发送到的地址
        url: "/../IndexViews/DeleteCrontab/",
        //请求方式
        type: "post",
        //指定请求的数据格式为json
        contentType: "application/json",
        // 数据
        data: msg,
        //指定响应的格式为json,注意如果后台没有放回json类型的数据格式下方的success不会执行
        dataType: "json",
        success: function (res) {
            console.log(res);
            var data = res;
            if (data.status == 200) {
                console.log(res);
                alert(data.data[0].info);
                location.href = "./table-list.html";
                // location.href = "./admin/index.html";
            } else if (data.status == 400) {
                // console.log(res);
                alert(data.data[0].info);
                // location.href = "./table-list.html";
            } else {
                // alert("111");
            }
        },
        error: function () {
            console.log("请求出错！");
        }
    });

});

function xgfz1() {
    // alert("加载完成");
    var xgp = $("#uphne_msg1").text()//账号
    var xgpass = $("#upass_msg1").text()//mima
    var xgmsg = $("#rmsg_msg1").text()//msg
    var xgadd = $("#radd_msg1").text()//打卡地点
    var xgtype = $("#type_msg1").text()//类型
    var xgtime = $("#rtime_msg1").text()//添加时间
    var xgrtime = $("#rdtime_msg1").text()//打卡时间周期
    // console.log(xgrtime);
    var xgrminute = xgrtime.slice(0, 2)
    var xgrhour = xgrtime.slice(3, 4)
    var xgrweek_start = xgrtime.slice(9, 10)
    var xgrweek_end = xgrtime.slice(11, 12)
    // console.log(xgrweek_end);



    $("#xgmgdphone").val(xgp), //提交修改手机号
        $("#xgpasswd").val(xgpass),//提交修改密码
        $("#xgaddress").val(xgadd),//提交修改打卡地址
        $("#xguinfo").val(xgmsg),//提交修改打卡信息
        $("#xgyou_type").val(xgtype),//提交修改类型
        $("#xghour").val(xgrhour),     //提交修改小时
        $("#xgminute").val(xgrminute),    //提交修改分钟
        $("#xgweek_start").val(xgrweek_start),   //提交修改开始时间
        $("#xgweek_end").val(xgrweek_end)  //提交修改结束时间

}
function xgfz2() {
    // alert("加载完成");
    var xgp = $("#uphne_msg2").text()
    var xgpass = $("#upass_msg2").text()
    var xgmsg = $("#rmsg_msg2").text()
    var xgadd = $("#radd_msg2").text()
    var xgtype = $("#type_msg2").text()
    var xgtime = $("#rtime_msg2").text()
    var xgrtime = $("#rdtime_msg2").text()

    var xgrminute = xgrtime.slice(0, 2)
    var xgrhour = xgrtime.slice(3, 4)
    var xgrweek_start = xgrtime.slice(9, 10)
    var xgrweek_end = xgrtime.slice(11, 12)


    // console.log(lll);
    // alert(xgp);
    $("#xgmgdphone").val(xgp), //提交修改手机号
        $("#xgpasswd").val(xgpass),//提交修改密码
        $("#xgaddress").val(xgadd),//提交修改打卡地址
        $("#xguinfo").val(xgmsg),//提交修改打卡信息
        $("#xgyou_type").val(xgtype),//提交修改类型
        $("#xghour").val(xgrhour),     //提交修改小时
        $("#xgminute").val(xgrminute),    //提交修改分钟
        $("#xgweek_start").val(xgrweek_start),   //提交修改开始时间
        $("#xgweek_end").val(xgrweek_end)  //提交修改结束时间

}