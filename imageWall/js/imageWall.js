/**
 * Created by 和秒 on 2016/8/19.
 */

var i=0;
var timer;
$(function () {
    $("#imagesWall").hover(function () {
        $(".btn").show();
    },function () {
        $(".btn").hide();
    });

    $(".img").eq(0).fadeIn().siblings().fadeOut();

    showTimer();

    $(".tab").hover(function () {
        i=$(this).index();
        show();
        clearInterval(timer);
    },function () {
        showTimer();
    });

    $(".btnLeft").click(function () {
        clearInterval(timer);
        if(i==0)
        {
            i=7;
        }
        i--;
        show();
        showTimer();

    });

    $(".btnRight").click(function () {
        clearInterval(timer);
        if(i==6)
        {
            i=-1;
        }
        i++;
        show();
        showTimer();
    });




});
function show() {
    $(".img").eq(i).fadeIn(200).siblings().fadeOut(200);
    $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");

}
function showTimer() {
    timer=setInterval(function () {
        i++;
        if(i==7)
        {
            i=0;
        }
        show();
    },3000);
}