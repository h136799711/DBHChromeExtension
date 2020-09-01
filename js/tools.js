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

        $(".j_datetime").html(d.toString() + "<br/>" + d.toGMTString());
    });
});
function setCurrentTimestamp() {
    $("#currentTimestamp").text( (new Date()).getTime() / 1000);
    $("#currentDateTime").text(new Date().toString());
}
