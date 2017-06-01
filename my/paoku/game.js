function   person(canvas,cobj,runImg,jumpImg){
    this.canvas=canvas
    this.cobj=cobj
    this.width=canvas.width
    this.height=canvas.height
    this.x=150
    this.y=0
    this.width=60
    this.height=100
    this.runImg=runImg
    this.jumpImg=jumpImg
    this.style="runImg"
    this.state=0
}
person.prototype={
    draw:function(){
        this.cobj.save()
        this.cobj.beginPath()
        this.cobj.translate(this.x,this.y)
        this.cobj.drawImage(this[this.style][this.state],0,0)
        this.cobj.restore()
    }
}
function hider(canvas,cobj,hiderImg){
    this.canvas=canvas
    this.cobj=cobj
    this.x=canvas.width
    this.y=360
    this.width=52
    this.height=37
    this.hiderImg=hiderImg
    this.num=Math.floor(Math.random()*4)
}
hider.prototype={
    draw:function(){
        this.cobj.save()
        this.cobj.beginPath()
        this.cobj.translate(this.x,this.y)
        this.cobj.drawImage(this.hiderImg[this.num],0,0)
        this.cobj.restore()

    }
}

function  game(canvas,cobj,runImg,jumpImg,hiderImg){
    this.canvas=canvas
    this.cobj=cobj
    this.person=new person(canvas,cobj,runImg,jumpImg)
    this.speed=7
    this.back=0
    this.zhongli=10
    this.flag=true
    this.hiderImg=hiderImg
    this.hiderImgarr=[]
}
game.prototype={
    play:function(){
        var that=this
        var num=0
        var num1=0

        setInterval(function(){
            num++
            var num2=2000+Math.floor(Math.random()*5)*1000
            //num1=0
            that.cobj.clearRect(0,0,that.canvas.width,that.canvas.height)
            that.person.x+=that.speed
            if(that.person.style=="runImg"){
                that.person.state=num%9
            }
            else{
                that.person.state=0
            }
            if(that.person.x>that.canvas.width/3){
                that.person.x=that.canvas.width/3
            }
            that.person.draw()
            that.back-=that.speed
            that.canvas.style.backgroundPosition=that.back+"px"
            if(num1%num2==0){
                var obj=new hider(that.canvas,that.cobj,that.hiderImg)
                that.hiderImgarr.push(obj)
            }
            num1+=50

            for(var i=0;i<that.hiderImgarr.length;i++){
                that.hiderImgarr[i].x-=that.speed
                that.hiderImgarr[i].draw()
                if(hitPix(that.canvas,that.cobj,that.person,that.hiderImgarr[i])){
                    if(!that.hiderImgarr[i].flag){
                        that.lizi(that.cobj,that.person.x+that.person.width/2,that.person.y+that.person.height/2,"red")
                        that.hiderImgarr[i].flag=true

                    }
                }
                else if(that.hiderImgarr[i].x+that.hiderImgarr[i].width<that.person.x){
                    if(!that.hiderImgarr[i].flag1&&!that.hiderImgarr[i].flag){
                        console.log(2)
                        that.hiderImgarr[i].flag1=true
                    }
                }
        }


        },80)


    },
    key:function(){
        var that=this
        document.onkeydown=function(e){
            if(that.flag){
            if(e.keyCode==32){
                var inty=310
                var intA=0
                var speeda=5
                var len=0
                var r=120
                that.person.style="jumpImg"
                var t=setInterval(function(){
                    intA+=speeda
                    if(intA>180){
                        that.person.y=inty
                        clearInterval(t)
                        that.person.style="runImg"
                        that.flag=true
                    }
                    len=Math.sin((intA)*(Math.PI/180))*r
                    that.person.y=inty-len
                },50)
            }
            }
            that.flag=false
        }
    },
    update:function(){
        var that=this
        this.flag=false
        var t=setInterval(function(){
            that.person.y+=that.zhongli
            that.person.style="jumpImg"
            that.person.x=150
            if(that.person.y>320){
                that.person.y=320
                clearInterval(t)
                that.flag=true
                that.lizi(that.cobj)
                that.update=null
                that.person.style="runImg"
            }
        },50)
    },
    lizi:function(cobj,x,y,color){
        var color=color||"#eee"
        var arr=[]
        var that=this
        for(var f=0;f<20;f++){
            var obj=new fire(cobj)
            obj.x=x||170
            obj.y=y||390
            obj.color=color
            arr.push(obj)
        }
        setInterval(function(){
            for(var i=0;i<arr.length;i++){

                arr[i].draw()
                arr[i].update()
                if(arr[i].life<0||arr[i].r<0){
                    arr.splice(i,1)
                }
            }
        },50)
    }
}
function  fire(cobj){
    this.x=170
    this.y=390
    this.color="#eee"
    this.cobj=cobj
    this.speedy=-2*Math.random()-1
    this.r=5+Math.random()
    this.life=4
}
fire.prototype={
    draw:function(){
        this.cobj.save()
        this.cobj.beginPath()
        this.cobj.translate(this.x,this.y)
        this.cobj.arc(0,0,this.r,0,2*Math.PI)
        this.cobj.globalCompositeOperation="lighter"
        this.cobj.fillStyle=this.color
        this.cobj.fill()
        this.cobj.restore()
    },
    update:function(){
        this.x+=16*Math.random()-8
        this.y+=this.speedy
        this.r-=0.6
        this.life-=1
    }
}
