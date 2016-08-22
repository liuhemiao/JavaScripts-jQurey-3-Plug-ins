/**
 * Created by 和秒 on 2016/8/21.
 */
$(function () {
    $(".picNav ul li").mouseover(function () {
        $(this).stop(true).animate({width:"960px"},1000).siblings().stop(true).animate({width:"100px"},1000);
    });
});