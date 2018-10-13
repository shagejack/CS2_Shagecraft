x=player.getLookX();
y=player.getLookY();
z=player.getLookZ();

dx=Math.floor(player.getPosX());
dy=Math.floor(player.getPosY());
dz=Math.floor(player.getPosZ());

if((Math.pow((x-dx),2)+Math.pow((y-dy),2)+Math.pow((z-dz),2))<=25){
player.removeFromSlot(player.getCurrentSlot(),1);
if(world.getBlockName(x,y+1,z)=="minecraft:air"){
  world.setBlock(x,y+1,z,"shagecraft:blockClayBucket");
}
} else {
player.sendMessage("\u90a3\u592a\u8fdc\u4e86\uff01");
}
