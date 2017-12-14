 //多浏览器事件处理程序
function addEvent(element,event,listener){
	if(element.addEventListener){
		element.addEventListener(event,listener,false)
	}
	else if(element.attachEvent){
		element.attachEvent("on"+event,listener);
		
	}
	else{
		element["on"+event]=listener;
	}
}

//遍历用
function each(arr,fn){
	for(var cur=0;cur<arr.length;cur++){
		fn(arr[cur],cur);
	}
}
	
	//定义队列对象
window.onload=function(){
	var container= document.getElementById("container");
	var buttonList=document.getElementsByTagName("input");
	var queue={
		str:[],
		leftPush:function(num){
			//添加到数组起始位置
			this.str.unshift(num);
			//绘制图片
			this.paint();
			
		},
		rightPush:function(num){
			this.str.push(num);
			this.paint();
			
		},
		//移除使用
		isEmpty:function(){
			return(this.str.length==0);
		},
		leftPop:function(){
			if(!this.isEmpty()){
				alert(this.str.shift());
				this.paint();
			}
			else{
				alert("the queue is empty");
			}
		},
		rightPop:function(){
			if(!this.isEmpty()){
				alert(this.str.pop());
				this.paint();
			}
			else{
				alert("the queue is empty");
			}
		},
		paint:function(){
			var str="";
			each(this.str,function(item){str+="<div>"+parseInt(item)+"</div>"})
			container.innerHTML=str;
			addDivDelEven();
		},
		
		deleteID:function(id){
			console.log(id);
			this.str.splice(id,1);
			this.paint();
		}
	}
	function addDivDelEven(){
		for(var cur=0;cur<container.childNodes.length;cur++){
			//先执行循环再进行赋值操作。所以要用闭包。延时函数的回调会在循环结束后才执行。
			addEvent(container.childNodes[cur],'click',function(cur){
				return function(){return queue.deleteID(cur)};
				}(cur));
			}
				
	}
	addEvent(buttonList[1],"click",function(){
		var input=buttonList[0].value;
		if((/^[0-9]+$/).test(input)){
			queue.leftPush(input);
		}
		else{
			alert("please enter a interger!")
		}
	});
	addEvent(buttonList[2],"click",function(){
		var input=buttonList[0].value;
		if((/^[0-9]+$/).test(input)){
			queue.rightPush(input);
		}
		else{
			alert("please enter a interger!")
		}
	});
	addEvent(buttonList[3],"click",function(){queue.leftPop()});
	addEvent(buttonList[4],"click",function(){queue.rightPop()});
	
	
	
			

}