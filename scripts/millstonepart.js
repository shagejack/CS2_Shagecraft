x=position.x;
y=position.y;
z=position.z;

if(world.getBlockName(x,y-1,z)=="shagecraft:millstoneGUIBlock"){
	if(player.getHunger()>4){
	world.setTileEntityFloatData(x,y-1,z,"kenergy",world.getTileEntityFloatData(x,y-1,z,"kenergy")+100);
	world.setTileEntityIntData(x,y-1,z,"count",0);
	if(Math.random()<0.08){
	player.setHunger(player.getHunger()-0.5);
	}
	if(world.getContainerSlotItemName(x,y-1,z,0)===null){
		if(Math.random()<0.03){
			world.setBlock(x,y-1,z,"minecraft:air");
		}
	}
	} else {
		player.sendMessage("\u4f60\u592a\u7d2f\u4e86\uff0c\u4f60\u9700\u8981\u4f11\u606f");
	}
}