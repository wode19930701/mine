function check(lstr,str){
			arr=lstr.split(" ")
			for (var i = 0; i < arr.length; i++) {
				if(arr[i]==str){
					return true
				}
			}
			return false
		}
	function getclass(s,p){
				p=p||document;
			if(document.getElementsByClassName){
				return p.getElementsByClassName(s)
			}
			else{
				var newarr=[]
				var all=p.getElementsByTagName("*")
				for (var i = 0; i < all.length; i++) {
					if(check(all[i].className,s)){
						newarr.push(all[i])
					}
				
				}
				return newarr
			}
		}
function gettext(s,value){
				if(value!=undefined){
					if(s.textContent!=undefined){
					 s.textContent=value
				}
				else{
					 s.innerText=value
				}

				}
				else{
				if(s.textContent!=undefined){
					return s.textContent
				}
				else{
					return s.innerText
				}
			}
			}

function getstyle(aa,bb){
			if(window.getComputedStyle){
				return window.getComputedStyle(aa,null)[bb]
			}
			else{
				return aa.currentStyle[bb]
			}
		}

function $(s,obj){
	if(typeof s=="string"){
		var obj=obj||document
		if(s.charAt(0)=="."){
			return getclass(s.slice(1),obj)
				}
		else if(s.charAt(0)=="#"){
			return document.getElementById(s.slice(1))
				}
		else if(/^[a-zA-Z][1-6a-z]*$/g.test(s)){
			return obj.getElementsByTagName(s)
				}
		}
	else if(typeof s=="function"){
		window.onload=function(){
			s()
		}
		
	}
	
}

function getFirstChild(parent){
	return getChild(parent)[0]
}

function getLastChild(parent){
	return getChild(parent)[getChild(parent).length-1]
}
function getNum(parent,num){
	return getChild(parent)[num]
}
function getNext(obj){
	var next=obj.nextSibling;
	if(next==null){
		return false
	}
	while(next.nodeType==3||next.nodeType==8){
		next=next.nextSibling
		if(next==null){
			return false
		}
	}
	return next
}
function setCookie(aa,bb,t){
	if(t){var now=new Date()
	var nowtime=now.getTime()+t*1000
	now.setTime(nowtime)
	var str=now.toGMTString()
	document.cookie=aa+"="+bb+";expires="+str}
	else{
		document.cookie=aa+"="+bb
	}
	
}
function getCookie(aa){
	var cookie=document.cookie
	var arr=cookie.split("; ")
	for(var i=0;i<arr.length;i++){
		var arr1=arr[i].split("=")
		if(arr1[0]==aa){
			return arr1[1]
		}
	}
} 
function qukong(str,cc){
	cc=cc||"a"
	if(cc=="a"){
		return str.replace(/\s*/g,"")
	}
	else if(cc=="l"){
		return str.replace(/^\s*/g,"")
	}
	else if(cc=="r"){
		return str.replace(/\s*$/g,"")
	}
	else{
		return str.replace(/^\s*|\s*$/g,"")
	}
}
function delCookie(aa,bb){
	var now=new Date()
	var nowtime=now.getTime()-1000
	now.setTime(nowtime)
	var str=now.toGMTString()
	document.cookie=aa+"="+bb+";expires="+str
}
function getUp(obj){
	var next=obj.previousSibling;
	if(next==null){
		return false
	}
	while(next.nodeType==3||next.nodeType==8){
		next=next.previousSibling
		if(next==null){
			return false
		}
	}
	return next
}
function getChild(parent,type){
	var type=type||"a"
	var child=parent.childNodes
	var a=[]
	for (var i = 0; i < child.length; i++) {
		if(type=="a"){
			if(child[i].nodeType==1){
			a.push(child[i])
				}
			}
		else{
			if(child[i].nodeType==1||(child[i].nodeType==3&&child[i].nodeValue.replace(/^\s*|\s*$/g,""))){
				a.push(child[i])
				}
			}
	}return a
}
function insertAfter(obj1,obj2){
	var newobj=getNext(obj2)
	if(newobj){
		obj2.parentNode.insertBefore(obj1,newobj)
	}
	else{
		obj2.parentNode.appendChild(obj1)
	}
}

function shijian(obj,shijian,chengxu){
	 if(window.addEventListener){
	 	 obj.addEventListener(shijian,chengxu)
	 }
	 else
	 	{ obj.attachEvent("on"+shijian,chengxu)
	}
}


function mousewheel(obj,hanshu1,hanshu2){
			var obj=obj||document
			if(obj.attchEvent){
				obj.attchEvent("onmousewheel")
			}
			else if(obj.addEventListener){
				obj.addEventListener("DOMMouseScroll",scroll)
				obj.addEventListener("mousewheel",scroll)
			}
			function scroll(e){
				var e=e||window.event
				if(e.preventDefault){
				e.preventDefault()}
				else{
				ev.returnValue=false}
				ef=e.wheelDelta||e.detail
				// alert(ef)
				// if(navigator.platform=="mac"){
				// 	if(ef==1||ef==-3){
				// 		if(ef==1){
				// 			shang()
				// 		}
				// 		else{
				// 			xia()
				// 		}
				// 	}
				// }
				if(navigator.platform=="Win32"){
					if(ef==-120||ef==3){
						hanshu1()
					}
					if(ef==120||ef==-3){
						hanshu2()
					}
				}
			}
			
		}
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
		 function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
