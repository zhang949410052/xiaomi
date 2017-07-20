$(function () {
    var  dropdown=$(".dropdown");
    dropdown.hover(function () {
        $(this).find(".dropmenu").stop().slideDown()
    },function () {
        $(this).find(".dropmenu").stop().slideUp()
    })
    

//轮播图

    var $imga=$(".wrap .box a");
    var len=$imga.length
    var bw=$(".wrap .box").width();
    var btn=$(".wrap li");
    var index=0;
    var next=0;

    //图片初始化
    $imga.css("left",bw).eq(0).css("left",0)

    //按钮初始化
    btn.eq(0).addClass("hot");

    //计时器
    var t=setInterval(movel,2000);

    //鼠标移入移除
    $(".wrap").hover(function () {
        clearInterval(t);
    },function () {
        t=setInterval(movel,2000);
    })


    //左右点击效果
    $(".wrap .prev").click(function () {
        movel()
    })
    $(".wrap .next").click(function () {
        mover();
    })

    //btn.mouseover效果
    btn.mouseover(function () {
        var num=$(this).index();
        if(num==next){
            return;
        }else if(num<next){
            //下一张图片准备
            $imga.eq(num).css({"left":-bw});
            //当前图片离开
            $imga.eq(index).animate({"left":bw});
            //下一张图片显示
            $imga.eq(num).animate({"left":0})

            //按钮颜色
            btn.eq(index).removeClass("hot");
            btn.eq(num).addClass("hot");
            index=num;
            next=num;
        }else if(num>next){
            //下一张图片准备
            $imga.eq(num).css({"left":bw});
            //当前图片离开
            $imga.eq(index).animate({"left":-bw});
            //下一张图片显示
            $imga.eq(num).animate({"left":0})

            //按钮颜色
            btn.eq(index).removeClass("hot");
            btn.eq(num).addClass("hot");
            index=num;
            next=num;
        }
    })


    //轮播
    function movel() {
        next++;
        if(next==len){
            next=0;
        }
        //下一张图片准备
        $imga.eq(next).css({"left":bw});
        //当前图片离开
        $imga.eq(index).animate({"left":-bw});
        //下一张图片显示
        $imga.eq(next).animate({"left":0})

        //按钮颜色
        btn.eq(index).removeClass("hot");
        btn.eq(next).addClass("hot");

        index=next;
    }
    function mover() {
        next--;
        if(next==-1){
            next=len-1;
        }
        //下一张图片准备
        $imga.eq(next).css({"left":-bw});
        //当前图片离开
        $imga.eq(index).animate({"left":bw});
        //下一张图片显示
        $imga.eq(next).animate({"left":0})

        //按钮颜色
        btn.eq(index).removeClass("hot");
        btn.eq(next).addClass("hot");
        index=next;
    }




    //微博 微信
    $(".weibo").hover(function () {
        $(".weiboimg").show()
    },function () {
        $(".weiboimg").hide()
    })

    $(".weixin").hover(function () {
        $(".weixinimg").show()
    },function () {
        $(".weixinimg").hide()
    })



    //返回顶部
    var back=$(".goto");
    $(window).scroll(function () {
        if($(document).scrollTop()>=200){
            back.css("display","block")
        }
        else{
            back.css("display","none")
        }
        back.click(function () {
            $(document.body).animate({scrollTop:0})
        })
    })

        
})


