x=player.getLookX();
y=player.getLookY();
z=player.getLookZ();

dx=Math.floor(player.getPosX());
dy=Math.floor(player.getPosY());
dz=Math.floor(player.getPosZ());

//player.sendMessage((Math.pow((x-dx),2)+Math.pow((y-dy),2)+Math.pow((z-dz),2)));

if((Math.pow((x-dx),2)+Math.pow((y-dy),2)+Math.pow((z-dz),2))<25){

if(world.getBlockName(x,y,z)=="minecraft:grass"){
player.damageItem(player.getCurrentSlot(),1);
if(Math.random()<=0.18){
world.spawnItem(x,y+1,z,"exnihilo:stone",1,0);
}
}

if(world.getBlockName(x,y,z)=="minecraft:stone"){
player.damageItem(player.getCurrentSlot(),8);
if(Math.random()<=0.08){
world.spawnItem(x,y+1,z,"exnihilo:stone",1,0);
}
}

if(world.getBlockName(x,y,z)=="minecraft:dirt"){
player.damageItem(player.getCurrentSlot(),2);
if(Math.random()<=0.14){
world.spawnItem(x,y+1,z,"exnihilo:stone",1,0);
}
}

if(world.getBlockName(x,y,z)=="minecraft:cobblestone"){
player.damageItem(player.getCurrentSlot(),6);
if(Math.random()<=0.45){
 world.spawnItem(x,y+1,z,"exnihilo:stone",1,0);
}
}

} else {
player.sendMessage("\u90a3\u592a\u8fdc\u4e86\uff01");
}