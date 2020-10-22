$(function () {
    setCurrentTimestamp();
    var timeIntervalId = setInterval(setCurrentTimestamp, 1000);
    $(".j_stop_clock").click(function () {
        if (timeIntervalId > 0) {
            clearInterval(timeIntervalId);
            timeIntervalId = 0;
            $(".j_stop_clock").text("恢复");
        } else {
            timeIntervalId = setInterval(setCurrentTimestamp, 1000);
            $(".j_stop_clock").text("暂停");
        }
    });
    $(".j_transfer").click(function () {
        var t = $("#timestamp").val();
        var d = (new Date(t * 1000));
        $(".j_datetime").html(formatDate(d) + "<br/>" + d.toString() + "<br/>" + d.toGMTString());
    });
    $(".j_transfer2").click(function () {
        var stringTime = $("#datetime").val();
        var timestamp2 = Date.parse(new Date(stringTime));
        timestamp2 = timestamp2 / 1000;
        $(".j_timestamp").html(timestamp2);
    });

});
function formatDate(now) {
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}
function setCurrentTimestamp() {
    $("#currentTimestamp").text( (new Date()).getTime() / 1000);
    $("#currentDateTime").html(formatDate(new Date()) + "<br/>" + new Date().toString());
}
