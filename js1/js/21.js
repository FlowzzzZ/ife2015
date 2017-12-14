
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
function trim(str) {
    var regex1 = /^\s*/;
    var regex2 = /\s*$/;
    return (str.replace(regex1, "")).replace(regex2, "");
}
	
	//定义队列对象
window.onload=function(){
	var container= document.getElementById("container");
	var buttonList=document.getElementsByTagName("input");
	var queue={
		str1:[],
		str2:[],
		rightPush1:function(content){
			
			this.str1.push(content);
			}
			
			this.paint();
			
		},
		rightPush2:function(arr){
			for(var cur in arr){
			this.str2.push(arr[cur]);
			}
			
			this.paint();
			
		},
		//移除使用
		isEmpty:function(){
			return(this.str.length==0);
		},
		
		paint:function(){
			var str="";
			each(this.str,function(item){str+=("<div >"+item+"</div>")});
			container.innerHTML=str;
			addDivDelEvent();
			select1();
		},
		
		
		deleteID:function(id){
			console.log(id);
			this.str.splice(id,1);
			this.paint();
		}
	}
	function select1(){
		
		for(var cur=0;cur<container.childNodes.length;cur++){
			
				addEvent(container.childNodes[cur],'mouseover',function(cur){
					return container.childNodes[cur].style.background="red";
				}(cur));
			
		}
	}
	function addDivDelEvent(){
		for(var cur=0;cur<container.childNodes.length;cur++){
			//先执行循环再进行赋值操作。所以要用闭包。延时函数的回调会在循环结束后才执行。
			addEvent(container.childNodes[cur],'click',function(cur){
				return function(){return queue.deleteID(cur)}
				}(cur));
			}
				
	}
	
	
	addEvent(buttonList[1],"click",function(){
		var input= splitInput(trim((document.getElementById("num")).value));
		
		queue.rightPush1(input);
		
	});
	addEvent(buttonList[2],"click",function(){
		var input= splitInput(trim((document.getElementById("inputbox")).value));
		queue.rightPush2(input);
	});
	
	
	
	
	
	
			

}