/**
 * Created by harveyhepburn on 16/3/21.
 */
var table=document.getElementById("Table").childNodes.item(1);
var input=document.getElementById("input");
var direction=["Top","Right","Bottom","Left"];

var BlockNow={
    Block:GetBlock(5,5),
    Dir:3,
    X:5,
    Y:5,
}
SetDirection(BlockNow.Block,"Left")
SetDiv(BlockNow.Block);
function CleanDiv(Block){
    Block.innerHTML=""
}
function SetDiv(Block){
    Block.innerHTML="<div></div>"
}
function GetBlock(x,y){
    return table.rows[x].cells[y]
}
function SetDirection(Block,D){
    Block.className=D;
}
function CalDirection(x){
    var d=(BlockNow.Dir+x>=0?BlockNow.Dir+x:3)%4;
    BlockNow.Dir=d;
    SetDirection(BlockNow.Block,direction[d]);
}
function Setter(Block){
    SetDiv(Block);
    SetDirection(Block,direction[BlockNow.Dir]);
    SetDirection(BlockNow.Block,"");
    CleanDiv(BlockNow.Block);
    BlockNow.Block=Block;
}
function Go(){
    switch(BlockNow.Block.className){
        case "Left":
            if(BlockNow.Y>1){
                BlockNow.Y--;
                var Block=GetBlock(BlockNow.X,BlockNow.Y);
                Setter(Block);
            }
            break;
        case "Top":
            if(BlockNow.X<10){
                BlockNow.X--;
                var Block=GetBlock(BlockNow.X,BlockNow.Y);
                Setter(Block);
            }
            break;
        case "Right":
            if(BlockNow.Y<10){
                BlockNow.Y++;
                var Block=GetBlock(BlockNow.X,BlockNow.Y);
                Setter(Block);
            }
            break;
        case "Bottom":
            if(BlockNow.X>1){
                BlockNow.X++;
                var Block=GetBlock(BlockNow.X,BlockNow.Y);
                Setter(Block);
            }
            break;
    }
}

function Run(){
    switch (input.value.trim()){
        case "GO":
            Go();
            break;
        case "TUN LEF":
            CalDirection(-1);
            break;
        case "TUN RIG":
            CalDirection(1);
            break;
        case "TUN BAC":
            CalDirection(2);
            break;
        case "TRA LEF":
			if(BlockNow.Y>1){
				BlockNow.Y--;
				//重新建立一个新对象
				var Block=GetBlock(BlockNow.X,BlockNow.Y);
				Setter(Block);
			}
			
			
			break;
		case "TRA RIG":
			if(BlockNow.Y<10){
				BlockNow.Y++;
				//重新建立一个新对象
				var Block=GetBlock(BlockNow.X,BlockNow.Y);
				Setter(Block);
			}
			break;
		case "TRA TOP":
			if(BlockNow.X>1){
				BlockNow.X--;
				//重新建立一个新对象
				var Block=GetBlock(BlockNow.X,BlockNow.Y);
				Setter(Block);
			}
			break;
		case "TRA BOT":
			if(BlockNow.X<10){
				BlockNow.X++;
				//重新建立一个新对象
				var Block=GetBlock(BlockNow.X,BlockNow.Y);
				Setter(Block);
			}
			break;
		case "MOV LEF":
			SetDirection(BlockNow.Block,"Left");
			BlockNow.Dir=3;
			var id=setInterval(function(){
				Go();
				clearInterval(id);
			},1000)	
			break;
		case "MOV RIG":
			SetDirection(BlockNow.Block,"Right");
			BlockNow.Dir=1;
			var id=setInterval(function(){
				Go();
				clearInterval(id);
			},1000)	
			break;
		case "MOV TOP":
			SetDirection(BlockNow.Block,"Top");
			BlockNow.Dir=0;
			var id=setInterval(function(){
				Go();
				clearInterval(id);
			},1000)	
			break;
		case "MOV BOT":
			SetDirection(BlockNow.Block,"Bottom");
			BlockNow.Dir=2;
			var id=setInterval(function(){
				Go();
				clearInterval(id);
			},1000)	
			break;			
				
					
					
				
			
			
			
			
			
    }
}



