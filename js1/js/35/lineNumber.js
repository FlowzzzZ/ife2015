/**
 * Created by harveyhepburn on 16/3/27.
 */
var input=document.getElementById('input');
var ul=document.getElementById('ul-lineNum');
var aLi=ul.getElementsByTagName("li");
var lineNum=9;


//内容滚动时发生
input.onscroll=function(){
    // 获得滚动的像素数
    var x=input.scrollTop;
    //滚动的像素数大于一行
    if(x/20+8>lineNum){
        for(lineNum+1;lineNum<x/20+8;lineNum++){
            var li=document.createElement("li");
            var node=document.createTextNode(lineNum+"");
            li.appendChild(node);
            ul.appendChild(li);
        }
    }
    ul.style.top="-"+x+"px";
}


input.onchange=function(){
    CheckCode();
};
