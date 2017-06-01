$(function(){


			// 楼层跳转
			var colors=["#666","green","blue","#ddd","gold","indigo","pink","white","black","#ccc"]
			for (var i = 0; i < $("#zuoxia>div").length; i++) {
				$("#zuoxia>div").eq(i).attr("index",i)
				$("#zuoxia>div").eq(i).on("click",function(){
					var top=$(".lou").eq($(this).attr("index"))[0].offsetTop-60
					$(obj).animate({scrollTop:top},200)
				})
			};
			var obj
			document.documentElement.scrollTop=1
			if(document.documentElement.scrollTop==1){
				obj=document.documentElement
			}
			else(obj=document.body)
			var flag=true
			var flag2=true
			window.onscroll=function(){
				if((obj.scrollTop+60)>=($(".lou")[9].offsetTop)){
					$("#zuoxia>div")[9].style.background=colors[9]
				}
				else{$("#zuoxia>div")[9].style.background=""}
				for (var i = 0; i < $("#zuoxia>div").length-1; i++) {
					$("#zuoxia>div")[i].style.background=""
					if((obj.scrollTop+60)>=($(".lou")[i].offsetTop)&&(obj.scrollTop+60)<$(".lou")[i+1].offsetTop){
						$("#zuoxia>div")[i].style.background=colors[i]
					}
				};
				if(obj.scrollTop>900){
					if(flag){
					flag=false
					flag2=true
					$(".zuishang").css("zIndex",100)
						$(".zuishang").animate({top:0},200)
					$(".daoqita").css("display","block")
					$("#zuoxia").animate({width:30,height:340,bottom:50},200)
						//console.log($(".zuoxia"))
					}
				}
				else{
					if(flag2){
					flag=true
					flag2=false
						$(".zuishang").css("zIndex",100)
						$(".zuishang").animate({top:-60},200)
						$("#zuoxia").animate({width:15,height:0,bottom:0},200)
						$(".daoqita").css("display","none")
					}
				}
			}
	$(".daoqita").on("click",function(){
				$(obj).animate({scrollTop:0},200)
			})


			// banner轮播

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
        //
  		//// shen222
		//
		for (var i = 0; i < $(".shen2221").length; i++) {
			$(".shen2221").eq(i).attr("index",i);
			$(".shen2221").eq(i).hover(function(){
				$(".shen2222").eq($(this).attr("index")).css("display","block");
				},function(){
				$(".shen2222").eq($(this).attr("index")).css("display","none");
				})
			}
        //
		//	// head12
		//	var head12=$(".head12")
			var head127=$(".head12>.head127")
			var head126=$(".head12>.head126")
			var head128=$(".head12>.head128")
			var head129=$(".head12>.head129")
			var head1210=$(".head12>.head1210")
			var head1211=$(".head12>.head1211")
			head126.hover(function(){
				head127.css("display","block")
			},function(){
				head127.css("display","none")
			})
			head127.hover(function(){
				head127.css("display","block")
			},function(){
				head127.css("display","none")
			})
			head129.hover(function(){
				head128.css("display","block")
			},function(){
				head128.css("display","none")
			})
			head128.hover(function(){
				head128.css("display","block")
			},function(){
				head128.css("display","none")
			})
			head1210.hover(function(){
				head1211.css("display","block")
			},function(){
				head1211.css("display","none")
			})
			head1211.hover(function(){
				head1211.css("display","block")
			},function(){
				head1211.css("display","none")
			})
        //
        //
		//	// bannerzuo
			for (var i = 0; i < $(".bannerzuo>div").length; i++) {
				$(".bannerzuo>div").eq(i).attr("index",i)
				$(".bannerzuo>div").eq(i).hover(function(){
					$(".bannerzuo1>div").eq($(this).attr("index")).css("display","block")
				},function(){
					$(".bannerzuo1>div").eq($(this).attr("index")).css("display","none")

				})
			};
        //
        //
		//	// you
	console.log($(".you>.you111"))
			for (var i = 0; i < $(".you>.zuo11").length; i++) {
				$(".you>.you111").eq(i).attr("index",i)
				$(".you>.you111").eq(i).hover(function(){
					$(".you>.zuo11").eq($(this).attr("index")).animate({opacity:1,right:36},350)
				},function(){
					$(".you>.zuo11").eq($(this).attr("index")).animate({opacity:0,right:76},350)

				})
			};

			$(window).resize(function(){
			if($(window).width()<1250){
				$(".zong3").css("width",982)
				$(".zong3 a:gt(8)").css("display","none")
				$(".zong4").css("width",982)
				$(".bannerzhong").css("width",782)
				$(".bannerzhong img").css("margin-left",-200)
				//$(".tu a:nth-child(2)>img").css("display","none")
				//$(".tu a:nth-child(3)>img").css("display","none")
				//$(".ding1").css("width",982)
			}
			else{
				//$(".ding1").css("width",1260)
				$(".zong3").css("width",1230)
				$(".zong4").css("width",1230)
				$(".bannerzhong").css("width",1030)
				$(".zong3 a:gt(8)").css("display","inline")
				$(".bannerzhong img").css("margin-left",0)
				//$(".tu a:nth-child(2)>img").css("display","block")
				//$(".tu a:nth-child(3)>img").css("display","block")
			}
		})
		$(window).resize()
})

