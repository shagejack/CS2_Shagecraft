x=player.getLookX();
y=player.getLookY();
z=player.getLookZ();
dx=Math.floor(player.getPosX());
dy=Math.floor(player.getPosY());
dz=Math.floor(player.getPosZ());

if(world.getBlockName(x,y,z)=="minecraft:stone"||world.getBlockName(x,y,z)=="minecraft:cobblestone"){
if((Math.pow((x-dx),2)+Math.pow((y-dy),2)+Math.pow((z-dz),2))<=25){
var a=player.getItemMetadata(player.getCurrentSlot());
if(a<3)
  {
	if(Math.random()<0.05){player.setSlot(player.getCurrentSlot(),"shagecraft:itemSmallFlint",1,a+1);}
  } else{
	if(Math.random()<0.05){player.setSlot(player.getCurrentSlot(),"shagecraft:itemSmallFlintBroken",1,0);}
  }
} else {
player.sendMessage("\u90a3\u592a\u8fdc\u4e86\uff01");
}
}
