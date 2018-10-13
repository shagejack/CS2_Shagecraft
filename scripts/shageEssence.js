mod.loadScript("apiRandomHandler.js");

x=player.getLookX();
//调试用:player.sendMessage((x+3-i)+","+y+","+(z+3-u)+"\u0028"+i+","+u+"\u0029arrA="+arrA[i][u]+" at arrA=0 when spellA="+spellA);
//player.sendMessage((x+3-i)+","+y+","+(z+3-u)+"\u0028"+i+","+u+"\u0029arrA="+arrA[i][u]+" at arrA=1 when spellA="+spellA);

y=player.getLookY();
z=player.getLookZ();

dx=Math.floor(player.getPosX());
dy=Math.floor(player.getPosY());
dz=Math.floor(player.getPosZ());

if((Math.pow((x-dx),2)+Math.pow((y-dy),2)+Math.pow((z-dz),2))<=25){
//TODO: 做更好用的法阵接口
spellType = -1;

//SpellA
var spellA = 0;
//1代表符文,0代表空气方块,2代表任何方块
var arrA = [[0,0,1,0,1,0,0],
				[0,0,0,0,0,0,0],
				[1,0,"minecraft:glowstone^0","minecraft:quartz_stairs^3","minecraft:glowstone^0",0,1],
				[0,0,"minecraft:quartz_stairs^1","shagecraft:blockShageEssence^0","minecraft:quartz_stairs^0",0,0],
				[1,0,"minecraft:glowstone^0","minecraft:quartz_stairs^2","minecraft:glowstone^0",0,1],
				[0,0,0,0,0,0,0],
				[0,0,1,0,1,0,0]];
				
if(player.getStackFloatData(player.getCurrentSlot(),"Shage")>=16){
for(var i=0;i<7;i++){
for(var u=0;u<7;u++){
 		if(arrA[u][i]==0&&world.getBlockName(x+3-i,y,z+3-u)!="minecraft:air"){spellA++;break;}
		if(arrA[u][i]==1&&world.getBlockName(x+3-i,y,z+3-u)!="shagecraft:charm"){spellA++;break;}
		if(typeof(arrA[u][i])=="string"){
			var arrTemp = arrA[u][i].split("^");
			var nameTemp = arrTemp[0];
			var metaTemp = parseInt(arrTemp[1]);
			if(world.getBlockName(x+3-i,y,z+3-u)!=nameTemp||world.getBlockMetadata(x+3-i,y,z+3-u)!=metaTemp){spellA++;break;}}
		}
		if(spellA>0){break;}}
		if(spellA==0){spellType=0;}
} else {
	player.sendMessage("\u0053\u0068\u0061\u0067\u0065\u80fd\u91cf\u4e0d\u8db3\u0021");
}

//SpellB
var spellB = 0;
var arrB = [[1,0,0,0,0,0,1],
				[0,1,1,0,1,1,0],
				[0,1,"minecraft:tnt^0","minecraft:gold_block^0","minecraft:tnt^0",1,0],
				[0,0,"minecraft:gold_block^0","minecraft:diamond_block^0","minecraft:gold_block^0",0,0],
				[0,1,"minecraft:tnt^0","minecraft:gold_block^0","minecraft:tnt^0",1,0],
				[0,1,1,0,1,1,0],
				[1,0,0,0,0,0,1]];

if(player.getStackFloatData(player.getCurrentSlot(),"Shage")>=8){				
for(var i=0;i<7;i++){
for(var u=0;u<7;u++){
 		if(arrB[u][i]==0){
			if(world.getBlockName(x-i+3,y,z-u+3)!="minecraft:air"){
			spellB++;break;}}
			if(arrB[u][i]==1){
			if(world.getBlockName(x-i+3,y,z-u+3)!="shagecraft:charm"){spellB++;break;}}
			if(typeof(arrB[u][i])=="string"){
			var arrTemp = arrB[u][i].split("^");
			var nameTemp = arrTemp[0];
			var metaTemp = parseInt(arrTemp[1]);
			if(world.getBlockName(x+3-i,y,z+3-u)!=nameTemp||world.getBlockMetadata(x+3-i,y,z+3-u)!=metaTemp){spellB++;break;}}
			}
		if(spellB>0){break;}}
if(spellB==0){spellType=1;}
} else {
	player.sendMessage("\u0053\u0068\u0061\u0067\u0065\u80fd\u91cf\u4e0d\u8db3\u0021");
}
		
//SpellC
var spellC = 0;
//1代表符文,0代表空气方块,2代表任何方块,string("name^meta")代表特定方块
var arrC = [[0,0,1,1,1,0,0],
				[0,0,0,1,0,0,0],
				[1,0,0,0,0,0,1],
				[1,1,0,2,0,1,1],
				[1,0,0,0,0,0,1],
				[0,0,0,1,0,0,0],
				[0,0,1,1,1,0,0]];

if(player.getStackFloatData(player.getCurrentSlot(),"Shage")>=1){	
for(var i=0;i<7;i++){
for(var u=0;u<7;u++){
 		if(arrC[u][i]==0&&world.getBlockName(x+3-i,y,z+3-u)!="minecraft:air"){spellC++;break;}
		if(arrC[u][i]==1&&world.getBlockName(x+3-i,y,z+3-u)!="shagecraft:charm"){spellC++;break;}
		if(typeof(arrC[u][i])=="string"){
			var arrTemp = arrC[u][i].split("^");
			var nameTemp = arrTemp[0];
			var metaTemp = parseInt(arrTemp[1]);
			if(world.getBlockName(x+3-i,y,z+3-u)!=nameTemp||world.getBlockMetadata(x+3-i,y,z+3-u)!=metaTemp){spellC++;break;}}}
		if(spellC>0){break;}}
		if(spellC==0){spellType=2;}
		} else {
	player.sendMessage("\u0053\u0068\u0061\u0067\u0065\u80fd\u91cf\u4e0d\u8db3\u0021");
}
		
		
//SpellD
var spellD = 0;
//1代表符文,0代表空气方块,2代表任何方块,string("name^meta")代表特定方块
var arrD = [[0,0,0,1,0,0,0],
				[0,1,0,"minecraft:tnt^0",0,1,0],
				[0,0,1,0,1,0,0],
				[1,"minecraft:tnt^0",0,"shagecraft:blockShageAltar^0",0,"minecraft:tnt^0",1],
				[0,0,1,0,1,0,0],
				[0,1,0,"minecraft:tnt^0",0,1,0],
				[0,0,0,1,0,0,0]];

if(player.getStackFloatData(player.getCurrentSlot(),"Shage")>=4){					
for(var i=0;i<7;i++){
for(var u=0;u<7;u++){
 		if(arrD[u][i]==0&&world.getBlockName(x+3-i,y,z+3-u)!="minecraft:air"){spellD++;break;}
		if(arrD[u][i]==1&&world.getBlockName(x+3-i,y,z+3-u)!="shagecraft:charm"){spellD++;break;}
		if(typeof(arrD[u][i])=="string"){
			var arrTemp = arrD[u][i].split("^");
			var nameTemp = arrTemp[0];
			var metaTemp = parseInt(arrTemp[1]);
			if(world.getBlockName(x+3-i,y,z+3-u)!=nameTemp||world.getBlockMetadata(x+3-i,y,z+3-u)!=metaTemp){spellD++;break;}}}
		if(spellD>0){break;}}
		if(spellD==0){spellType=3;}
} else {
	player.sendMessage("\u0053\u0068\u0061\u0067\u0065\u80fd\u91cf\u4e0d\u8db3\u0021");
}


switch(spellType){
  case -1:
  //法阵无效
  break;
  case 0:
  //SpellA
  player.setStackFloatData(player.getCurrentSlot(),"Shage",player.getStackFloatData(player.getCurrentSlot(),"Shage")-16);
	player.sendMessage("\u300c\u6211\u304c\u540d\u3092\u6c5d\u306e\u529b\u3092\u89e3\u653e\u300d");
	world.setBlock(x+1,y,z-1,"minecraft:air");
   world.setBlock(x,y,z-1,"minecraft:air");
   world.setBlock(x-1,y,z-1,"minecraft:air");
   world.setBlock(x+1,y,z,"minecraft:air");
   world.setBlock(x,y,z,"minecraft:air");
   world.setBlock(x-1,y,z,"minecraft:air");
   world.setBlock(x+1,y,z+1,"minecraft:air");
   world.setBlock(x,y,z+1,"minecraft:air");
   world.setBlock(x-1,y,z+1,"minecraft:air");
   world.createExplosion(x,y+1,z,16,true);
   world.createExplosion(x,y-1,z,16,true);
   for(var i=0;i<6;i++){
	for(var o=0;o<6;o++){
		for(var u=0;u<6;u++){
if((Math.pow(i,2)+Math.pow(o,2)+Math.pow(u,2))<Math.pow(5,2)){
world.setBlock(x+i, 0+o, z+u, "shagecraft:shieldStone");
world.setBlock(x+i, 0-o, z-u, "shagecraft:shieldStone");
world.setBlock(x+i, 0+o, z-u, "shagecraft:shieldStone");
world.setBlock(x+i, 0-o, z+u, "shagecraft:shieldStone");
world.setBlock(x-i, 0+o, z+u, "shagecraft:shieldStone");
world.setBlock(x-i, 0-o, z-u, "shagecraft:shieldStone");
world.setBlock(x-i, 0+o, z-u, "shagecraft:shieldStone");
world.setBlock(x-i, 0-o, z+u, "shagecraft:shieldStone");
}
}
}
}
for(var i=0;i<9;i++){
  for(var o=0;o<9;o++){
    for(var u=0;u<9;u++){
if((Math.pow(i,2)+Math.pow(o,2)+Math.pow(u,2))<Math.pow(8,2)){
  if(Math.random()<0.3){
world.setBlock(x+i, 0+o, z+u, "shagecraft:shieldStone");
  }
  if(Math.random()<0.3){
world.setBlock(x+i, 0-o, z-u, "shagecraft:shieldStone");
}
  if(Math.random()<0.3){
world.setBlock(x+i, 0+o, z-u, "shagecraft:shieldStone");
}
  if(Math.random()<0.3){
world.setBlock(x+i, 0-o, z+u, "shagecraft:shieldStone");
}
  if(Math.random()<0.3){
world.setBlock(x-i, 0+o, z+u, "shagecraft:shieldStone");
}
  if(Math.random()<0.3){
world.setBlock(x-i, 0-o, z-u, "shagecraft:shieldStone");
}
  if(Math.random()<0.3){
world.setBlock(x-i, 0+o, z-u, "shagecraft:shieldStone");
}
  if(Math.random()<0.3){
world.setBlock(x-i, 0-o, z+u, "shagecraft:shieldStone");
  }
}
}
}
}

world.setBlock(x,1,z,"shagecraft:blockShageAltar");

   break;
   case 1:
   //SpellB
   player.setStackFloatData(player.getCurrentSlot(),"Shage",player.getStackFloatData(player.getCurrentSlot(),"Shage")-8);
   world.setBlock(x+1,y,z-1,"minecraft:air");
   world.setBlock(x,y,z-1,"minecraft:air");
   world.setBlock(x-1,y,z-1,"minecraft:air");
   world.setBlock(x+1,y,z,"minecraft:air");
   world.setBlock(x,y,z,"minecraft:air");
   world.setBlock(x-1,y,z,"minecraft:air");
   world.setBlock(x+1,y,z+1,"minecraft:air");
   world.setBlock(x,y,z+1,"minecraft:air");
   world.setBlock(x-1,y,z+1,"minecraft:air");
   player.addPotionEffect("weakness",1000,4);
   for(var p=0;p<255;p++){
	   if(world.getBlockName(x,251-p,z)=="minecraft:air"){
			world.createExplosion(x,255-p,z,5,true);
	   }
   }
   world.spawnItem(x,y+100,z,"shagecraft:shageEssence",randomInteger(1, 2),0);
   break;
   case 2:
   //SpellC
   player.setStackFloatData(player.getCurrentSlot(),"Shage",player.getStackFloatData(player.getCurrentSlot(),"Shage")-1);
	world.createThunderbolt(x,y,z);
	break;
	case 3:
   //SpellD
   player.setStackFloatData(player.getCurrentSlot(),"Shage",player.getStackFloatData(player.getCurrentSlot(),"Shage")-4);
   world.setBlock(x+2,y,z,"minecraft:air");
   world.setBlock(x-2,y,z,"minecraft:air");
   world.setBlock(x,y,z+2,"minecraft:air");
   world.setBlock(x,y,z-2,"minecraft:air");
   
   world.createExplosion(x,y-1,z,world.getTileEntityFloatData(x,y,z,"Unstability")*3, false);
   
   if(world.getTileEntityFloatData(x,y,z,"Shage")<world.getTileEntityFloatData(x,y,z,"maxShage")-100){
   world.setTileEntityFloatData(x,y,z,"Shage",world.getTileEntityFloatData(x,y,z,"Shage")+100);
   } else {
	   world.setTileEntityFloatData(x,y,z,"Shage",world.getTileEntityFloatData(x,y,z,"maxShage"));
   }
   break;
   default:
}


} else {
player.sendMessage("\u90a3\u592a\u8fdc\u4e86\uff01");
}
