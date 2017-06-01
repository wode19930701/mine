$(function(){
			function shen622(a,b,c,d,e,f,g){
			var shen622=$(a)[0]
			var shen622left=$(b,shen622)[0]
			var shen622right=$(c,shen622)[0]
			var shen6222=$(d,shen622)[0]
			var shen6223=$(e,shen622)[0]
			var shen622btnzuo=$(f,shen622)[0]
			var shen622btnyou=$(g,shen622)[0]
			shen622btnzuo.style.background="red"
			shen6223.style.left="390px"
			shen622.onmouseover=function(){
				animate(shen622left,{left:0},150)
				animate(shen622right,{right:0},150)
			}
			shen622.onmouseout=function(){
				animate(shen622left,{left:-30},150)
				animate(shen622right,{right:-30},150)
			}
			shen622left.onmouseover=function(){
				if(getstyle(shen6222,"left")!="0px"){shen622left.style.backgroundPosition="0px 60px"}
			}
			shen622left.onmouseout=function(){
				shen622left.style.backgroundPosition="0px 0px"
			}
			shen622right.onmouseover=function(){
				if(shen6223.style.left!="0px"){shen622right.style.backgroundPosition="30px 60px"
				}
			}
			shen622right.onmouseout=function(){
				shen622right.style.backgroundPosition="30px 0px"
			}
			shen622left.onclick=function(){
				animate(shen6222,{left:0})
				animate(shen6223,{left:390})
				shen622btnzuo.style.background="red"
				shen622btnyou.style.background="#ccc"
			}
			shen622right.onclick=function(){
				animate(shen6222,{left:-390})
				animate(shen6223,{left:0})
				shen622btnyou.style.background="red"
				shen622btnzuo.style.background="#ccc"
			}
			shen622btnzuo.onmouseover=function(){
				animate(shen6222,{left:0})
				animate(shen6223,{left:390})
				shen622btnzuo.style.background="red"
				shen622btnyou.style.background="#ccc"
			}
			shen622btnyou.onmouseover=function(){
				animate(shen6222,{left:-390})
				animate(shen6223,{left:0})
				shen622btnyou.style.background="red"
				shen622btnzuo.style.background="#ccc"
			}
		}
		shen622(".shen622",".left",".right",".shen6222",".shen6223",".btnleft",".btnright")
		shen622(".shen6220001",".left0001",".right0001",".shen62220001",".shen62230001",".btnleft0001",".btnright0001")
		shen622(".shen6220002",".left0002",".right0002",".shen62220002",".shen62230002",".btnleft0002",".btnright0002")
		shen622(".shen6220003",".left0003",".right0003",".shen62220003",".shen62230003",".btnleft0003",".btnright0003")

		function shen623(){
			var shen623=$(".shen623")
			var shen629=$(".shen629")
			var shen628=$(".shen628")
			var shen6291=$(".shen6291")
			var shen6292=$(".shen6292")
			for (var i = 0; i < shen623.length; i++) {
				shen623[i].index=i
				shen623[i].onmouseover=function(){
					animate(shen628[this.index],{width:265})
					animate(shen629[this.index],{height:180})
					animate(shen6291[this.index],{height:180})
					animate(shen6292[this.index],{width:265})
		}	
			shen623[i].onmouseout=function(){
					animate(shen628[this.index],{width:0})
					animate(shen629[this.index],{height:0})
					animate(shen6291[this.index],{height:0})
					animate(shen6292[this.index],{width:0})
		}	
				
			};
			
	}
		shen623()
		
		// 按需加载
		window.onscroll=function(){
		var jiazai=$(".jiazai")
		var obj=document.documentElement||document.body
		var oy=document.documentElement.clientHeight
		for (var i = 0; i < jiazai.length; i++) {
			if(jiazai[i].offsetTop<oy+obj.scrollTop&&!jiazai[i].flag){
				jiazai[i].flag=true
				var img=$("img",jiazai[i])
				for (var j = 0; j < img.length; j++) {
					img[j].src=img[j].getAttribute("url")
				};
			}
		}
	}
	window.onscroll()
	window.onresize=function(){
		window.onscroll()
	}
})