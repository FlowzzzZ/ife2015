
//  基于任务18进行升级
//  将新元素输入框从input改为textarea
//  允许一次批量输入多个内容，格式可以为数字、中文、英文等，可以通过用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为不同内容的间隔
//  增加一个查询文本输入框，和一个查询按钮，当点击查询时，将查询词在各个元素内容中做模糊匹配，将匹配到的内容进行特殊标识，如文字颜色等。举例，内容中有abcd，查询词为ab或bc，则该内容需要标识

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
function splitInput(text) {
    var inputArray = [];
    inputArray = (text).split(/[,，;；、\s\n]+/);
    return inputArray;
}

//对textarea内的内容进行trim，否则当开头结尾有大量空格时会有bug
function trim(str2) {
    var regex1 = /^\s*/;
    var regex2 = /\s*$/;
    return (str2.replace(regex1, "")).replace(regex2, "");
}
	
	//定义队列对象
window.onload=function(){
	var container1= document.getElementById("container1");
	var container2= document.getElementById("container2");
	var buttonList=document.getElementsByTagName("input");
	var queue={
		str1:[],
		str2:[],
		rightPush1:function(content){
			
			this.str1.push(content);
			
			
			this.paint1();
			
		},
		rightPush2:function(arr){
			
			for(var cur in arr){
				
					this.str2.push(arr[cur]);
				}
				
				
				
			
			
			this.paint2();
			
		},
		//移除使用
		isEmpty:function(){
			return(this.str1.length==0);
		},
		
		paint1:function(){
			var str1="";
			each(this.str1,function(item){str1+=("<div >"+item+"</div>")});
			container1.innerHTML=str1;
			addDivDelEvent();
			mouseover();
			mouseout();
		},
		paint2:function(){
			var str2="";
			each(this.str2,function(item){str2+=("<div >"+item+"</div>")});
			container2.innerHTML=str2;
			addDivDelEvent();
			
		},
		
		
		deleteID:function(id){
			console.log(id);
			this.str1.splice(id,1);
			this.paint1();
		
		}
	}
	function mouseover(){
		
		for(var cur=0;cur<container1.childNodes.length;cur++){
			
				addEvent(container1.childNodes[cur],'mouseover',function(cur){
					return function(){container1.childNodes[cur].style.background="red";}
				}(cur));
			
		}
	}
	function mouseout(){
		
		for(var cur=0;cur<container1.childNodes.length;cur++){
			
				addEvent(container1.childNodes[cur],'mouseout',function(cur){
					return function(){container1.childNodes[cur].style.background="lightskyblue";}
				}(cur));
			
		}
	}
	
	//给每个元素添加删除事件
	function addDivDelEvent(){
		for(var cur=0;cur<container1.childNodes.length;cur++){
			//先执行循环再进行赋值操作。所以要用闭包。延时函数的回调会在循环结束后才执行。
			addEvent(container1.childNodes[cur],'click',function(cur){
				return function(){return queue.deleteID(cur)}
				}(cur));
			}
				
	}
	
	
	addEvent(buttonList[1],"click",function(){
		var input1=buttonList[0].value;
		
		queue.rightPush1(input1);
		
	});
	addEvent(buttonList[2],"click",function(){
		var input2= splitInput(trim((document.getElementById("inputbox")).value));
		//判断是否已经存在
		alert(queue.str2.indexOf(input2));
		
		if (queue.str2.indexOf(input2)==-1){
		queue.rightPush2(input2);
		}
	});
	
	
	
	
	
	
			

}