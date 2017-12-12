/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
function g(id){
	return document.getElementById(id);
}
var aqiData = {};

//检测城市名称是否合法

	//对象失去焦点时发生
	g("aqi-city-input").onblur=function(){
		var cityInput=g("aqi-city-input").value.trim();
		if(cityInput==""){
			g("tip1").innerHTML="输入不能为空！";
			g("tip1").style.color="red";
		
		}
		else if(/[^a-z\u4E00-\u9FA5]+/gi.test(cityInput)){
			g("tip1").innerHTML="输入不合法！城市名只包含中文英文";
			g("tip1").style.color="red";
		}
		else{
			g("tip1").innerHTML="ok";
			g("tip1").style.color="black";
		}
		
	}


//检测空气质量是否合法

	//对象失去焦点时发生
	g("aqi-value-input").onblur=function(){
		var ValueInput=g("aqi-value-input").value.trim();
		if(ValueInput==""){
			g("tip2").innerHTML="输入不能为空！";
			g("tip2").style.color="red";
		
		}
		else if(/[^0-9]+/gi.test(ValueInput)){
			g("tip2").innerHTML="输入不合法！只能是数字";
			g("tip2").style.color="red";
		}
		else{
			g("tip2").innerHTML="ok";
			g("tip2").style.color="black";
		}
		
	}
function addAqiData() {
	var city=g("aqi-city-input").value.trim();
	var value=g("aqi-value-input").value.trim();
	if(g("tip1").innerHTML !="ok"||g("tip2").innerHTML !="ok"){
		return;
	}
	if(city&&value){
		aqiData[city]=value;
	}
}




function renderAqiList() {
	g("aqi-table").innerHTML="<tr><th>城市</th><th>空气质量</th><th>操作</th></tr>";
	for(city in aqiData){
		var tableTr=document.createElement("tr");
		var tableTd1=document.createElement("td");
		var tableTd2=document.createElement("td");
		var tableTd3=document.createElement("td");
	
		var text1=document.createTextNode(city);
		tableTd1.appendChild(text1);
		
		var text2=document.createTextNode(aqiData[city]);
		tableTd2.appendChild(text2);
		
		var btn=document.createElement("button");
		var text3=document.createTextNode("删除");
		btn.appendChild(text3);
		tableTd3.appendChild(btn);
		btn.setAttribute("data-city", city);
		
		tableTr.appendChild(tableTd1);
		tableTr.appendChild(tableTd2);
		tableTr.appendChild(tableTd3);
		g("aqi-table").appendChild(tableTr);
		
		
		
	}
}


g("add-btn").onclick=function() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
g("aqi-table").onclick=function(event) {
	delete aqiData[event.target.getAttribute("data-city")];
  

  renderAqiList();
}

