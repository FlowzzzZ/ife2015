
// 基于任务18 
// 限制输入的数字在10-100 用正则表达式
//队列元素数量最多限制为60个，当超过60个时，添加元素时alert出提示  for（。。。）++
// 队列展现方式变化如图，直接用高度表示数字大小  “value”+px
//实现一个简单的排序功能，如冒泡排序（不限制具体算法），用可视化的方法表达出来，参考见下方参考资料 sort compare

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
			each(this.str,function(item){str+="<div style=\'height:"+parseInt(item)+"px\'></div>"})
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
	//bubble sort
	function bubbleSort(){
		for(var i=0;i<queue.str.length;i++){
			for(var j=i+1;j<queue.str.length;j++){
				if(queue.str[i]>queue.str[j]){
					var temp=queue.str[i];
					queue.str[i]=queue.str[j];
					queue.str[j]=temp;
					queue.paint();
				}
			}
		}
		
	}
	
	addEvent(buttonList[1],"click",function(){
		var input=buttonList[0].value;
		if((/^[0-9]+$/).test(input)){
			if (parseInt(input) < 10 || parseInt(input) > 100) {
            	alert("The interger you input must between 10 and 100!");
			}
			else {queue.rightPush(input);
			}
		}
		else{
			alert("please enter a interger!")
		}
	});
	addEvent(buttonList[2],"click",function(){
		var input=buttonList[0].value;
		if((/^[0-9]+$/).test(input)){
			if (parseInt(input) < 10 || parseInt(input) > 100) {
                alert("The interger you input must between 10 and 100!");
			}
			else {queue.rightPush(input);
			}
		}
		else{
			alert("please enter a interger!")
		}
	});
	addEvent(buttonList[3],"click",function(){queue.leftPop()});
	addEvent(buttonList[4],"click",function(){queue.rightPop()});
	addEvent(buttonList[5],"click",function(){
		bubbleSort();
	});
	
	
			

}