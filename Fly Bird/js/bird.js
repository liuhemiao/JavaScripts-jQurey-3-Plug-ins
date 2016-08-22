/**
 * Created by 和秒 on 2016/8/21.
 */

$(function () {
    var $bird = $("#bird");
    var pos = $bird.offset();
    var birdSize = {width:$bird.width(),height:$bird.height()};
    var speed = 10;
    var keyRecord = 37;
    $(document).keydown(function (even) {
        var key = even.keyCode;
        if(key!=keyRecord)
        {
            $bird.removeClass().addClass("dir_"+key);
        }
        keyRecord=key;
        switch(key){
            case 37://左
                pos.left-=speed;
                if(pos.left<=-birdSize.width)
                {
                    pos.left=$(window).width();
                }
                break;
            case 38://上
                pos.top-=speed;
                if(pos.top<= -birdSize.height)
                {
                    pos.top=$(window).height();
                }
                break;
            case 39://右
                pos.left+=speed;
                if(pos.left>=$(window).width())
                {
                    pos.left=-birdSize.width;
                }
                break;
            case 40://下
                pos.top +=speed;
                if(pos.top>=$(window).height())
                {
                    pos.top=-birdSize.height;
                }
                break;
        }
        $bird.offset(pos);
    })

});