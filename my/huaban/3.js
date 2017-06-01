$(function(){
    var copy=$(".copy")[0]
    var canvas=document.querySelector("canvas")
    var xobj=canvas.getContext("2d")
    var obj=new shape(copy,xobj,$(".xpp")[0])
    $(".tools ul").css("display","none").eq(0).css("display","block")
    $(".menu li").click(function(){
        var index=$(this).index()
        if(index==5){
            obj.clear()
        }
        //else{obj.clear}
        $(".menu li").removeClass("active").eq(index).addClass("active")
        $(".tools ul").css("display","none").eq(index).css("display","block")
    })
    $(".tools li").click(function(){
        var index=$(this).index(".tools li")
        $(".tools li").removeClass("active").eq(index).addClass("active")
        $(".tools li").css("text-shadow","none").eq(index).css("text-shadow","0 0 3px red")

    })

    var huatu=document.querySelectorAll(".huatu li")
    for(var i=0;i<huatu.length;i++){
        huatu[i].onclick=function(){
            obj.type=this.getAttribute("data-role")
            obj.draw()
        }
    }
    $(".huatu li").eq(3).click(function(){
        obj.bianNum=prompt("请输入边数",5)
        obj.draw()
    })
    $(".huatu li").eq(4).click(function(){
        obj.jiaoNum=prompt("请输入角数",5)
        obj.draw()
    })
    var yanse1=document.querySelectorAll(".yanse input")[0]
    yanse1.onchange=function(){
        obj.strokeStyle=yanse1.value
    }
    var yanse2=document.querySelectorAll(".yanse input")[1]
    yanse2.onchange=function(){
        obj.fillStyle=yanse2.value
    }
    var leixing=document.querySelectorAll(".leixing li")
    for(var i=0;i<leixing.length;i++){
        leixing[i].onclick=function(){
            obj.style=this.getAttribute("data-role")
        }
    }
    var xiankuan=document.querySelectorAll(".xiankuan li")
    for(var i=0;i<xiankuan.length;i++){
        xiankuan[i].onclick=function(){
            obj.lineWidth=this.getAttribute("value")
        }
    }
    $(".xp input")[0].onchange=function(){
        obj.xpsize=$(this).val()
    }

})