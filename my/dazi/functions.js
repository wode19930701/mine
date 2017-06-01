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

// 获取一个元素的所有元素子节点
function allchild(s){
	var aa=s.childNodes
	var son=[]
	for (var i = 0; i < aa.length; i++) {
		if(aa[i].nodeType==1){
			son.push(aa[i])
		}
	}
	// console.log(aa)
	return son
}

// 获取一个元素的第一个节点
function firstchild(s){
	var aa=s.firstChild
	return aa
}

//获取元素的下一个兄弟元素节点
function nextxdys(s){
	var aa=s.nextSibling
	if(aa==null){
		return null
	}
	while(aa.nodeType!=1){
		aa=aa.nextSibling
		if(aa==null){
			return null
		}
	}
	return aa
}

//获取元素的上一个兄弟元素节点
function shangxdys(s){
	var aa=s.previousSibling
	if(aa==null){
		return null
	}
	while(aa.nodeType!=1){
		aa=aa.nextSibling
		if(aa==null){
			return null
		}
	}
	return aa
}

// 追加到某一个函数后面
function jiahou(obj,newobj){
	var next=nextxdys(obj)
	var parent=obj.parentNode
	if(next){
		parent.insertBefore(newobj,next)
	}
	else{
		parent.appendChild(newobj)
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

