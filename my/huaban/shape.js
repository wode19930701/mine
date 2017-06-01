function shape(canvas,xobj,xp){
    this.copy=canvas;
    this.xobj=xobj;
    this.xp=xp
    this.history=[];
    this.fillStyle="#000";
    this.strokeStyle="#000";
    this.lineWidth="";
    this.style="stroke";
    this.type="";
    this.bianNum="";
    this.jiaoNum=""
    this.xpsize=10
}
shape.prototype={
    draw:function(){
        var that=this;
        that.copy.onmousedown=function(e){
            that.inte()
            console.log(that.strokeStyle)
            console.log(that.lineWidth)
            that.xobj.beginPath()
            var ox= e.offsetX
            var oy= e.offsetY
            var endx,endy

            that.copy.onmousemove=function(e){
                endx= e.offsetX
                endy= e.offsetY
                that.xobj.clearRect(0,0,500,500)
                if(that.history.length>0){
                    that.xobj.putImageData(that.history[that.history.length-1],0,0)
                }
                that[that.type](ox,oy,endx,endy)
            }
            that.copy.onmouseup=function(){
                that.copy.onmousemove=null
                that.copy.onmouseup=null
                that.history.push(that.xobj.getImageData(0,0,700,370))

            }
        }
    },
    line:function(x,y,x1,y1){
        this.xobj.beginPath()
        this.xobj.moveTo(x,y)
        this.xobj.lineTo(x1,y1)
        this.xobj.stroke()
    },
    rect:function(x,y,x1,y1){
        this.xobj.beginPath()
        this.xobj.rect(x,y,x1-x,y1-y)
        this.xobj[this.style]()
    },
    arc:function(x,y,x1,y1){
        this.xobj.beginPath()
        this.xobj.arc(x,y,Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y)),0,360*Math.PI/180)
        this.xobj[this.style]()
    },
    bian:function(x,y,x1,y1){
        this.xobj.beginPath()
        var r=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y))
        for(var i=0;i<this.bianNum;i++){
            this.xobj.lineTo(x+r*Math.cos(i*360/this.bianNum*Math.PI/180),y+r*Math.sin(i*360/this.bianNum*Math.PI/180))
        }
        this.xobj.closePath()
        this.xobj[this.style]()
    },
    jiao:function(x,y,x1,y1){
        this.xobj.beginPath()
        var r=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y))
        var r1=r/3

        for(var i=0;i<this.jiaoNum*2;i++) {
            if (i % 2 == 0) {
             this.xobj.lineTo(x + r * Math.cos(i * (360 / (this.jiaoNum*2))* Math.PI / 180), y + r * Math.sin(i * (360 / (this.jiaoNum*2)) * Math.PI / 180))

             }
            if(i%2==1){
                this.xobj.lineTo(x + r1 * Math.cos(i * (360 / (this.jiaoNum*2)) * Math.PI / 180), y + r1 * Math.sin(i * (360 / (this.jiaoNum*2))     * Math.PI / 180))

            }
        }
        this.xobj.closePath()
        this.xobj[this.style]()
    },
    inte:function(){
        this.xp.style.display="none"
        this.xobj.fillStyle=this.fillStyle
        this.xobj.strokeStyle=this.strokeStyle
        this.xobj.lineWidth=this.lineWidth
    },
    clear:function(){
        var that=this;
        that.copy.onmousemove=function(e){
            var movex= e.offsetX;
            var movey= e.offsetY;
            var left=movex-that.xpsize/2;
            var top=movey-that.xpsize/2;
            console.log(left)
            if(left<0){
                left=0;
            }
            if(left>700-that.xpsize){
                left=700-that.xpsize
            }
            if(top<0){
                top=0;
            }
            if(top>370-that.xpsize){
                top=370-that.xpsize
            }
            that.xp.style.cssText="display:block;left:"+left+"px;top:"+top+"px;width:"+that.xpsize+"px;height:"+that.xpsize+"px";
        }

        that.copy.onmousedown=function(){

            that.copy.onmousemove=function(e){
                var movex= e.offsetX;
                var movey= e.offsetY;
                var left=movex-that.xpsize/2;
                var top=movey-that.xpsize/2;
                if(left<0){
                    left=0;
                }
                if(left>700-that.xpsize){
                    left=700-that.xpsize
                }
                if(top<0){
                    top=0;
                }
                if(top>370-that.xpsize){
                    top=370-that.xpsize
                }
                that.xp.style.cssText="display:block;left:"+left+"px;top:"+top+"px;width:"+that.xpsize+"px;height:"+that.xpsize+"px";

                that.xobj.clearRect(left,top,that.xpsize,that.xpsize);
            }

            // that.copy.onmouseup=function(){
            //     // if(

            //     // )
            //     // that.histroy.push(that.xobj.getImageData(0,0,700,370));
            //     // that.copy.onmousemove=null;
            //     // that.copy.onmouseup=null;
            //     // that.clear();
            // }

        }
    }

}