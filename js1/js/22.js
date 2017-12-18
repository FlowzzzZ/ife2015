window.onload=function(){
	
	btn[0].onclick=function(){
		
		reset();
		preOrder(Node);
		
		color();
		
	}
	btn[1].onclick=function(){
		reset();
		inOrder(Node);
		color();
		
	}
	btn[2].onclick=function(){
		reset();
		postOrder(Node);
		color();
		
	}
}

var btn=document.getElementsByTagName("input"),
	divList=[],
	Node=document.getElementsByClassName('root')[0],
	timer=null;	

function reset(){
	divList=[];
	clearInterval(timer);
	var divs=document.getElementsByTagName("div");
	for(i=0;i<divs.length;i++){
		divs[i].style.backgroundColor='#fff';
	}
}

//前序遍历
function preOrder(a){
	
	if(!(a==null)){
		divList.push(a);
		preOrder(a.firstElementChild);
		preOrder(a.lastElementChild);
	}
}
//中序遍历
function inOrder(a){
	if(!(a==null)){
		inOrder(a.firstElementChild);
		divList.push(a);
		inOrder(a.lastElementChild);
	}
}
//后序遍历
function postOrder(a){
	if(!(a==null)){
		postOrder(a.firstElementChild);
		
		postOrder(a.lastElementChild);
		divList.push(a);
	}
}
function color(){
	var i = 0;
	divList[i].style.backgroundColor = 'blue';
	timer = setInterval(function (argument) {
		i++;
		if (i < divList.length) {
			divList[i-1].style.backgroundColor = '#fff';
			divList[i].style.backgroundColor = 'blue';
		} else {
			clearInterval(timer);
			divList[divList.length-1].style.backgroundColor = '#fff';
		}
},500)
}






























