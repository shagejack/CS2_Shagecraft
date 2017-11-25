var a=player.getItemMetadata(player.getCurrentSlot());
var vx=player.getLookX();
var vy=player.getLookY();
var vz=player.getLookZ();
if(a==0){
if(world.getBlockName(vx, vy, vz) == "shagecraft:e_tr"&&world.getBlockMetadata(vx, vy, vz) == 0){
player.setSlot(player.getCurrentSlot(),"shagecraft:copper_e",1,1)	
player.setStackIntData(player.getCurrentSlot(), "x", player.getLookX());
player.setStackIntData(player.getCurrentSlot(), "y", player.getLookY());
player.setStackIntData(player.getCurrentSlot(), "z", player.getLookZ());
player.sendMessage("位置信息: x:"+player.getStackIntData(player.getCurrentSlot(), "x")+" y:"+player.getStackIntData(player.getCurrentSlot(), "y")+" z:"+player.getStackIntData(player.getCurrentSlot(), "z"));
//renderer.drawString("位置信息: x:"+player.getStackIntData(player.getCurrentSlot(), "x")+" y:"+player.getStackIntData(player.getCurrentSlot(), "y")+" z:"+player.getStackIntData(player.getCurrentSlot(), "z"),mouseX+10,mouseY-20,0xFFFFFF);
}
}

if(a==1){
if(player.getLookX() != player.getStackIntData(player.getCurrentSlot(), "x")||player.getLookY() != player.getStackIntData(player.getCurrentSlot(), "y")||player.getLookZ() != player.getStackIntData(player.getCurrentSlot(), "z")){
			if(world.getBlockName(vx, vy, vz) == "shagecraft:e_tr"&&world.getBlockMetadata(vx, vy, vz) == 0){
	world.setBlockMetadata(vx, vy, vz, 1);
	world.setTileEntityIntData(vx, vy, vz,"destinyX",player.getStackIntData(player.getCurrentSlot(), "x"));
	world.setTileEntityIntData(vx, vy, vz,"destinyY",player.getStackIntData(player.getCurrentSlot(), "y"));
	world.setTileEntityIntData(vx, vy, vz,"destinyZ",player.getStackIntData(player.getCurrentSlot(), "z"));
player.clearSlot(player.getCurrentSlot());
}}}
