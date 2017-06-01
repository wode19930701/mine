function game(){
	this.arr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	this.imgs={A:"img/a.png",B:"img/b.png",C:"img/c.png",D:"img/d.png",E:"img/e.png",F:"img/f.png",G:"img/g.png",H:"img/h.png",I:"img/i.png",J:"img/j.png",K:"img/k.png",L:"img/l.png",M:"img/m.png",N:"img/n.png",O:"img/o.png",P:"img/p.png",Q:"img/q.png",R:"img/r.png",S:"img/s.png",T:"img/t.png",U:"img/u.png",V:"img/v.png",W:"img/w.png",X:"img/x.png",Y:"img/y.png",Z:"img/z.png"}
	this.len=3;
	this.ggsl=10
	this.fangzimu=[];
	this.fangspan=[];
	this.speed=1;
	this.cw=document.documentElement.clientWidth;
	this.ch=document.documentElement.clientHeight;
	this.sm=$(".sm")[0]
	this.sm.innerHTML=3
	this.fen=$(".fen")[0]
	this.fen.innerHTML=0
	this.zfen=$(".zfen")[0]
	this.zfen.innerHTML=0
	this.guan=$(".guan")[0]
	this.guan.innerHTML=1
	this.shibai=$(".shibai")[0]
	this.t
			}

game.prototype={
	play:function(){
		this._getRand(this.len)
		this._getSpan(this.fangzimu)
		this._move(this.fangspan)
		this._key(this.fangspan)
	},
	_getRand:function(num){
		var newarr=[]
		for (var i = 0; i <num; i++) {
			var zimu=this.arr[Math.floor(Math.random()*this.arr.length)]
			while(this._checkzimu(this.fangzimu,zimu)){
				var zimu=this.arr[Math.floor(Math.random()*this.arr.length)]
			}
			this.fangzimu.push(zimu)
			newarr.push(zimu)
		};
		return newarr

	},
	_checkzimu:function(arr1,s){
		for (var i = 0; i < arr1.length; i++) {
			if(arr1[i]==s){
				return true
			}
		}
		return false
		
	},
	_getSpan:function(arr2){
		for (var i = 0; i < arr2.length; i++) {
			var span=document.createElement("span")
			span.innerHTML="<img style='width:50px;height:50px;'src="+this.imgs[arr2[i]]+">"
			document.body.appendChild(span)
			var lefts=100+Math.floor((Math.random())*(this.cw-200))
			span.lefts=lefts
			var tops=Math.floor(20*(Math.random()))-10
			while(this._checkPos(this.fangspan,lefts)){
				lefts=100+Math.floor((Math.random())*(this.cw-200))
			}
			this.fangspan.push(span)
			span.style.cssText="position:absolute;left:"+lefts+"px;top:"+tops+"px;"
		};
		
	},
	_checkPos:function(arr3,s){
		for (var i = 0; i < arr3.length; i++) {
			if(s>arr3[i].lefts-40&&s<arr3[i].lefts+40){
				return true
			}
		};
		return false
	},
	_move:function(arr4){
		var that=this
		var t=setInterval(function(){
			for (var i = 0; i < arr4.length; i++) {
				arr4[i].style.top=arr4[i].offsetTop+that.speed+"px"
				if(arr4[i].offsetTop+arr4[i].offsetHeight>that.ch){
					document.body.removeChild(arr4[i])
					that.fangzimu.splice(i,1)
					that.fangspan.splice(i,1)
					that._getSpan(that._getRand(1))
					that.sm.innerHTML--
					if(that.sm.innerHTML<0){
						clearInterval(that.t)
						for (var i = 0; i < that.fangspan.length; i++) {
							document.body.removeChild(that.fangspan[i])
						}
						that.sm.innerHTML=0
						var shibai=$(".shibai")[0]
						shibai.style.display="block"
						var xiazuo1=$(".xiazuo1",shibai)[0]
						var xiayou1=$(".xiayou1",shibai)[0]
						xiazuo1.onclick=function(){
							history.go(0)
						}
						xiayou1.onclick=function(){
							window.close()
						}
					}

				}
			};
		},15)
	},
	_key:function(arr5){
		var that=this
		document.onkeydown=function(e){
		for (var i = 0; i < arr5.length; i++) {
			if(that.fangzimu[i]==String.fromCharCode(e.keyCode)){
				document.body.removeChild(arr5[i])
					that.fangzimu.splice(i,1)
					that.fangspan.splice(i,1)
					that._getSpan(that._getRand(1))
					that.fen.innerHTML++
					that.zfen.innerHTML++
					if(that.zfen.innerHTML==that.ggsl){
							for (var i = 0; i < that.fangspan.length; i++) {
							document.body.removeChild(that.fangspan[i])
							
						}
							var guoguan=$(".guoguan")[0]
							guoguan.style.display="block"
							var xiaguan=$(".xiayiguan")[0]
							xiaguan.onclick=function(){
								guoguan.style.display="none"
								that.fen.innerHTML=0;
								that._next()
							}
							


				}
			}

		}
	}
},
	_next:function(){
					this.speed++;
					this.len++
					this.guan.innerHTML++
					this.fangzimu=[]
					this.fangspan=[]
					this.ggsl+=10
					this._getRand(this.len)
					this._getSpan(this.fangzimu)
					this._move(this.fangspan)
					this._key(this.fangspan)
	}


}