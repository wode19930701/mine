$(function(){
    $(".tu").eq(0).css("zIndex",1)
    $(".xia").eq(0).css("background","#fff");
    for (var i = 0; i < $(".xia").length; i++) {
        $(".xia").eq(i).attr("index",i);
        $(".xia").eq(i).hover(function(){
            for (var i = 0; i < $(".xia").length; i++) {
                $(".tu").eq(i).css("zIndex",0);
                $(".tu").eq(i).css("opacity",0);
                $(".xia").eq(i).css("background","#ccc")
            }
            $(".tu").eq($(this).attr("index")).css("zIndex",1);
            $(".tu").eq($(this).attr("index")).animate({opacity:1},300);
            $(this).css("background","#fff")
        },function(){
            num=$(this).attr("index")
        })
    }
    var num=0;
    var t=setInterval(lunbo,2000)
    function lunbo(){
        num++
        if(num==$(".xia").length){
            num=0
        }
        for (var i = 0; i < $(".xia").length; i++) {
            $(".tu").eq(i).css("zIndex",0);
            $(".tu").eq(i).css("opacity",0);
            $(".xia").eq(i).css("background","#ccc")
        }
        $(".tu").eq(num).css("zIndex",1)
        $(".tu").eq(num).animate({opacity:1},300);
        $(".xia").eq(num).css("background","#fff")
    }
    $(".bannerzhong").hover(function(){
        clearInterval(t)
    },function(){
        t=setInterval(lunbo,2000)
    })

})