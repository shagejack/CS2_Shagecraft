x = position.x;
y = position.y;
z = position.z;

empty = 0;

//轮子
function getCharge(){
	return world.getTileEntityIntData(x, y-4, z, "charge");
}

function getMaxCharge(){
	return world.getTileEntityIntData(x, y-4, z, "maxCharge");
}

function setCharge(charge){
	world.setTileEntityIntData(x, y-4, z, "charge", charge);
}

//多方块结构检测
unable = 0;

var m = [[[0,0,0],
				[0,1,0],
				[0,0,0]],
				[[0,0,0],
				[0,3,0],
				[0,0,0]],
				[[0,0,0],
				[0,3,0],
				[0,0,0]],
				[[0,0,0],
				[0,3,0],
				[0,0,0]],
				[[0,0,0],
				[0,2,0],
				[0,0,0]]]
				

for(var i=0;i<3;i++){
for(var u=0;u<3;u++){
for(var o=0;o<4;o++){
		if(m[o][u][i]==0 && (world.getBlockMetadata(x+1-i,y-o,z+1-u)!=0 || (world.getBlockName(x+1-i,y-o,z+1-u)!="shagecraft:blockMultiblock" && world.getBlockName(x+1-i,y-o,z+1-u)!="shagecraft:blockMultiblockOutput"))){unable++;break;}
		if(m[o][u][i]==1 && (world.getBlockName(x+1-i,y-o,z+1-u)!="shagecraft:blockIndustrialElectrolyzer" || world.getBlockMetadata(x+1-i,y-o,z+1-u)!=0)){unable++;break;}
		if(m[o][u][i]==2 && world.getBlockName(x+1-i,y-o,z+1-u)!="shagecraft:blockBatteryContainer"){unable++;break;}
		if(unable>0){break;}
		}
		if(unable>0){break;}
		}
		if(unable>0){break;}
		}
		
if(unable == 0){
	world.setTileEntityIntData(position,"complete",1);
} else {
	world.setTileEntityIntData(position,"complete",0);
}

//配方运行


current = world.getTileEntityIntData(position, "recipe");
working = world.getTileEntityIntData(position, "working");
progress = world.getTileEntityIntData(position, "progress");

//第六格是空罐槽
//格式 反应物1，反应物2，生成物1，生成物2，生成物3，反应物1残留空罐，反应物2残留空罐，生成物1消耗空罐，生成物2消耗空罐，生成物3消耗空罐，相对时间，每单位时间耗能，生成物1数量，生成物2数量，生成物3数量
var recipe = [["RotaryCraft:rotarycraft_item_powders^5","shagecraft:itemA^6","shagecraft:itemA^4","shagecraft:itemA^5","shagecraft:itemA^1",0,1,1,1,1,20,32,1,1,1]]

r = new Array(recipe.length);
					
for(var i=0;i<recipe.length;i++){
	r[i]=1;
			
		if(typeof(recipe[i][0]) == "string"){
			var arrTemp = recipe[i][0].split("^");
			var nameTemp = arrTemp[0];
			var metaTemp = parseInt(arrTemp[1]);
			if(world.getContainerSlotItemName(position, 0)!=nameTemp||world.getContainerSlotMetadata(position, 0)!=metaTemp)
			{r[i]=0;continue;}}
		
		if(typeof(recipe[i][1]) == "string"){
			var arrTemp = recipe[i][1].split("^");
			var nameTemp = arrTemp[0];
			var metaTemp = parseInt(arrTemp[1]);
			if(world.getContainerSlotItemName(position, 1)!=nameTemp||world.getContainerSlotMetadata(position, 1)!=metaTemp)
			{r[i]=0;continue;}}
		
		if(typeof(recipe[i][2]) == "string"){
			var arrTemp = recipe[i][2].split("^");
			var nameTemp = arrTemp[0];
			var metaTemp = parseInt(arrTemp[1]);
			if((world.getContainerSlotItemName(position, 2)!=nameTemp||world.getContainerSlotMetadata(position, 2)!=metaTemp) && world.getContainerSlotItemName(position, 2) !== null)
			{r[i]=0;continue;}}
		
		if(typeof(recipe[i][3]) == "string"){
			var arrTemp = recipe[i][3].split("^");
			var nameTemp = arrTemp[0];
			var metaTemp = parseInt(arrTemp[1]);
			if((world.getContainerSlotItemName(position, 3)!=nameTemp||world.getContainerSlotMetadata(position, 3)!=metaTemp) && world.getContainerSlotItemName(position, 3) !== null)
			{r[i]=0;continue;}}
		
		if(typeof(recipe[i][4]) == "string"){
			var arrTemp = recipe[i][4].split("^");
			var nameTemp = arrTemp[0];
			var metaTemp = parseInt(arrTemp[1]);
			if((world.getContainerSlotItemName(position, 4)!=nameTemp||world.getContainerSlotMetadata(position, 4)!=metaTemp) && world.getContainerSlotItemName(position, 4) !== null)
			{r[i]=0;continue;}}
		
		if(recipe[i][5] == 1){empty--;}
		if(recipe[i][6] == 1){empty--;}
		if(recipe[i][7] == 1){empty++;}
		if(recipe[i][8] == 1){empty++;}
		if(recipe[i][9] == 1){empty++;}
		
		if(world.getContainerSlotItemName(position, 5) != "shagecraft:itemA" || world.getContainerSlotMetadata(position, 5) != 3 || empty > world.getContainerSlotStackSize(position, 5)){
		r[i]=0;
		}
		
}

for(var u=0;u<r.length;u++){
	if(r[u] == 1){
		world.setTileEntityIntData(position, "recipe", u);
		world.setTileEntityIntData(position, "working", 1);
		break;
	} else {
		world.setTileEntityIntData(position, "recipe", -1);
		world.setTileEntityIntData(position, "working", 0);
	}
}

if(current != -1 && working == 1){
	
	world.setTileEntityIntData(position, "maxProgress", recipe[current][10]);
	
	if(getCharge() >= recipe[current][11]){
	setCharge(getCharge() - recipe[current][11]);
	world.setTileEntityIntData(position, "progress", progress + 1);
	}
	
	if(progress >= recipe[current][10]){
	
if((world.getContainerSlotStackSize(position, 2) <= world.getContainerSlotMaxStackSize(position, 2) - recipe[current][12] || world.getContainerSlotItemName(position, 2) === null) && (world.getContainerSlotStackSize(position, 3) <= world.getContainerSlotMaxStackSize(position, 3) - recipe[current][13] || world.getContainerSlotItemName(position, 3) === null) && (world.getContainerSlotStackSize(position, 4) <= world.getContainerSlotMaxStackSize(position, 4) - recipe[current][14] || world.getContainerSlotItemName(position, 4) === null)){

	//Slot 2
	if(world.getContainerSlotItemName(position, 2) === null){
		if(typeof(recipe[current][2]) == "string"){
		var arrTemp = recipe[current][2].split("^");
		world.setContainerSlot(position, 2, arrTemp[0], recipe[current][12], parseInt(arrTemp[1]));
		}
	} else {
		if(typeof(recipe[current][2]) == "string"){
		var arrTemp = recipe[current][2].split("^");
		if(arrTemp[0] == world.getContainerSlotItemName(position, 2) && parseInt(arrTemp[1]) == world.getContainerSlotMetadata(position, 2)){
		world.addToContainerSlot(position, 2, recipe[current][12]);
		}
	}
	}
	
	//Slot 3
	if(world.getContainerSlotItemName(position, 3) === null){
		if(typeof(recipe[current][3]) == "string"){
		var arrTemp = recipe[current][3].split("^");
		world.setContainerSlot(position, 3, arrTemp[0], 1, parseInt(arrTemp[1]));
		}
	} else {
		if(typeof(recipe[current][3]) == "string"){
		var arrTemp = recipe[current][3].split("^");
		if(arrTemp[0] == world.getContainerSlotItemName(position, 3) && parseInt(arrTemp[1]) == world.getContainerSlotMetadata(position, 3)){
		world.addToContainerSlot(position, 3, 1);
		}
	}
	}
	
	//Slot 4
	if(world.getContainerSlotItemName(position, 4) === null){
		if(typeof(recipe[current][4]) == "string"){
		var arrTemp = recipe[current][4].split("^");
		world.setContainerSlot(position, 4, arrTemp[0], 1, parseInt(arrTemp[1]));
		}
	} else {
		if(typeof(recipe[current][4]) == "string"){
		var arrTemp = recipe[current][4].split("^");
		if(arrTemp[0] == world.getContainerSlotItemName(position, 4) && parseInt(arrTemp[1]) == world.getContainerSlotMetadata(position, 4)){
		world.addToContainerSlot(position, 4, 1);
		}
	}
	}
	
	//Slot 0,1
	world.removeFromContainerSlot(position, 0, 1);
	world.removeFromContainerSlot(position, 1, 1);
	
	//Slot 5
	if(empty> 0){
	world.removeFromContainerSlot(position, 5, empty);
	} else if(empty < 0){
	world.addToContainerSlot(position, 5, empty);
	}
	world.setTileEntityIntData(position, "progress", 0);
	world.setTileEntityIntData(position, "recipe", -1);
	world.setTileEntityIntData(position, "working", 0);
	world.setTileEntityIntData(position, "maxProgress", 0);
	
	} else {
	world.setTileEntityIntData(position, "progress", world.getTileEntityIntData(position, "maxProgress"));
}
	
}
} else {
world.setTileEntityIntData(position, "progress", 0);
world.setTileEntityIntData(position, "maxProgress", 0);
}



