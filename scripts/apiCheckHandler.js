//判断长方体范围内某方块的数量
//使用position,适用于方块
function CheckBlockCuboid(a, b, c, string){
for(var i=0;i<=a;i++){
	for(var o=0;o<=b;o++){
		for(var u=0;u<=c;u++){
if(world.getBlockName(position.x+i, position.y+o, position.z+u) == string){
a++;}
if(world.getBlockName(position.x+i, position.y-o, position.z-u) == string){
a++;}
if(world.getBlockName(position.x+i, position.y+o, position.z-u) == string){
a++;}
if(world.getBlockName(position.x+i, position.y-o, position.z+u) == string){
a++;}
if(world.getBlockName(position.x-i, position.y+o, position.z+u) == string){
a++;}
if(world.getBlockName(position.x-i, position.y-o, position.z-u) == string){
a++;}
if(world.getBlockName(position.x-i, position.y+o, position.z-u) == string){
a++;}
if(world.getBlockName(position.x-i, position.y-o, position.z+u) == string){
a++;}
}}}
return a;
}
//判断长方体范围内某方块的数量
//使用position,适用于玩家(玩家当前位置为中心)
function CheckPlayerCuboid(a, b, c, string){
var x = Math.floor(player.getPosX());
var y = Math.floor(player.getPosY());
var z = Math.floor(player.getPosZ());
for(var i=0;i<=a;i++){
	for(var o=0;o<=b;o++){
		for(var u=0;u<=c;u++){
if(world.getBlockName(x+i, y+o, z+u) == string){
a++;}
if(world.getBlockName(x+i, y-o, z-u) == string){
a++;}
if(world.getBlockName(x+i, y+o, z-u) == string){
a++;}
if(world.getBlockName(x+i, y-o, z+u) == string){
a++;}
if(world.getBlockName(x-i, y+o, z+u) == string){
a++;}
if(world.getBlockName(x-i, y-o, z-u) == string){
a++;}
if(world.getBlockName(x-i, y+o, z-u) == string){
a++;}
if(world.getBlockName(x-i, y-o, z+u) == string){
a++;}
}}}
return a;
}
//判断长方体范围内某方块的数量
//使用position,适用于玩家(玩家当前指针所对方块为中心)
function CheckLookingCuboid(a, b, c, string){
var x = player.getLookX();
var y = player.getLookY();
var z = player.getLookZ();
for(var i=0;i<=a;i++){
	for(var o=0;o<=b;o++){
		for(var u=0;u<=c;u++){
if(world.getBlockName(x+i, y+o, z+u) == string){
a++;}
if(world.getBlockName(x+i, y-o, z-u) == string){
a++;}
if(world.getBlockName(x+i, y+o, z-u) == string){
a++;}
if(world.getBlockName(x+i, y-o, z+u) == string){
a++;}
if(world.getBlockName(x-i, y+o, z+u) == string){
a++;}
if(world.getBlockName(x-i, y-o, z-u) == string){
a++;}
if(world.getBlockName(x-i, y+o, z-u) == string){
a++;}
if(world.getBlockName(x-i, y-o, z+u) == string){
a++;}
}}}
return a;
}
//判断某位置的方块ID和方块数据值是否符合
//用法:if(CheckBlockAndMetaData(position, "minecraft:dirt", 1) == true){player.sendMessage("It's true!");}
function CheckBlockAndMetaData(pos, string, data){
	if(world.getBlockName(pos) == string&&world.getBlockMetadata(pos) == data){
		var re = true;
	} else {
		var re = false;
	}
	return re;
}
//获取玩家所看向的方向
function GetPlayerFacingSide(){
	if(player.getHorizontalAngle()>-45&&player.getHorizontalAngle()<=45){
	var re = 0;
	//0, South, 南方
	}
	if(player.getHorizontalAngle()>45&&player.getHorizontalAngle()<=135){
	var re = 1;
	//1, West, 西方
	}
	if(player.getHorizontalAngle()>135&&player.getHorizontalAngle()<=-135){
	var re = 2;
	//2, North, 北方
	}
	if(player.getHorizontalAngle()>-135&&player.getHorizontalAngle()<=-45){
	var re = 3;
	//3, East, 东方
	}
	return re;
//放置方块的方向
function GetBlockFacingSide(){
	if(player.getHorizontalAngle()>-45&&player.getHorizontalAngle()<=45){
	var re = 2;
	//0, South, 南方
	}
	if(player.getHorizontalAngle()>45&&player.getHorizontalAngle()<=135){
	var re = 3;
	//1, West, 西方
	}
	if(player.getHorizontalAngle()>135&&player.getHorizontalAngle()<=-135){
	var re = 0;
	//2, North, 北方
	}
	if(player.getHorizontalAngle()>-135&&player.getHorizontalAngle()<=-45){
	var re = 1;
	//3, East, 东方
	}
	return re;
//相对位置(必须在放置方块时写入放置方向到名为FacePos的IntData中)
function rbp(aleft, atop, aback){
	if(world.getTileEntityIntData(position, "FacePos")==0){
	var ax = aleft;
	var ay = atop;
	var az = aback;
	}
	if(world.getTileEntityIntData(position, "FacePos")==1){
	var ax = -aback;
	var ay = atop;
	var az = aleft;
	}
	if(world.getTileEntityIntData(position, "FacePos")==2){
	var ax = -aback;
	var ay = atop;
	var az = -aleft;
	}
	if(world.getTileEntityIntData(position, "FacePos")==3){
	var ax = aback;
	var ay = atop;
	var az = -aleft;
	}
	var re = position.x+ax,position.y+ay,position.z+az;
	return re;

	
