$(function(){
    var flag=true
    var t=0
    $(".head-right").click(function () {
        if(flag==true){
        flag=false
        t=0
        $(".head-right .top").css({
            transform:"rotate(-45deg) translate(0,7px)"
        })
        $(".head-right .bottom").css({
            transform:"rotate(45deg) translate(0,-7px)"
    })
        console.log($(".xiala")[0].offsetHeight)
        $(".xiala").css({visibility:"visible",
                        height:"362"
        })
        $(".xiala").children().each(function(){
            t=t+0.15
            this.style.transition="all 1s ease "+t+"s"
        })
        $(".xiala a").css("transform","rotateX(0deg)")
        $(".xiala div").css("transform","rotateX(90deg)")}
        else if(flag==false){
            flag=true
            t=0
            $(".head-right .top").css({
                transform:"rotate(0deg) translate(0,0px)"
            })
            $(".head-right .bottom").css({
                transform:"rotate(0deg) translate(0,0px)"
            })
            $(".xiala").css({height:"0",
                visibility:"hidden"
            })
            $(".xiala").children().each(function(){
                t=t+0.2
                this.style.transition="none"
            })
            $(".xiala a").css("transform","rotateX(60deg)")
            $(".xiala div").css("transform","rotateX(0deg)")
        }
})
    var shen1=$(".shen1")[0]
    var kuang=$(".kuang")[0]
    var num=0
    var cw=$(window).height()
    console.log(cw)
    kuang.onmousedown= function (e) {
        e.preventDefault()
    }
    touch.on(kuang,"dragend",function(e){
        e.preventDefault()
        if(e.direction=="down"){
            num--
            if(num==-1){
            num=0
            }
            shen1.style.transition="all 1s ease"
            shen1.style.marginTop=-num*cw+"px"
        }
        if(e.direction=="up"){
            num++
            if(num==4){
                num=3
            }
            shen1.style.transition="all 1s ease"
            shen1.style.marginTop=-num*cw+"px"

        }
        //$(".shen").each(function () {
        //console.log(($(".shen").eq(num).find(".left"))[0])
            $(".shen").eq(num).find(".left").css("transform","translate(40px,0)");
            $(".shen").eq(num).find(".left").on("webkitTransitionEnd",function(){
                $(".shen").eq(num).find(".left>img").css("animation","rotate 1s ease 0s infinite ")
            })
            $(".shen").eq(num).find(".right").css("transform","translate(-40px,0)")
        $(".shen").not($(".shen").eq(num)).find(".left").css("transform","translate(0px,0)")
        //$(".shen").eq(num).find(".left").css("transform","rotateY(360deg)")
        $(".shen").not($(".shen").eq(num)).find(".left").css("animation"," 1s ease 0s infinite ")
        $(".shen").not($(".shen").eq(num)).find(".right").css("transform","translate(0px,0)")
        //})
    })
    $(window).resize(function () {
        cw=$(window).height()
        shen1.style.marginTop=-num*cw+"px"
    })

})