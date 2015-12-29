
$(document).ready(function () {
    $("button").click(function () {
        //$("div p").toggle(1000, function () {
        //    //alert("");
        //});
        $("p").offset({ top: 500, left: 500 });
    });
    $("button").mousemove(function (e) {
        x = e.clientX;
        y = e.clientY;
        //alert("x:" + x + "\ny:" + y);
        $("#ttt").show();
        $("#ttt").offset({ top: y + 5, left: x + 10 });
    });
    $("button").mouseout(function (e) {
        $("#ttt").hide();
    });
    $("p").click(function () {
        alert("123");
    });
});

function test() {
    
}