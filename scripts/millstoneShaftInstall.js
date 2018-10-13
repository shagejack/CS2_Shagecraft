x=player.getLookX();
y=player.getLookY();
z=player.getLookZ();

if(world.getBlockName(x,y,z)=="shagecraft:millstoneGUIBlock"&&world.getBlockName(x,y+1,z)=="minecraft:air"){
	world.setBlock(x,y+1,z,"shagecraft:millstonepart");
	player.remove("shagecraft:itemShaft",1,0);
}