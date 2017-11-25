for(var i=0;i<50;i++){
	for(var o=0;o<2;o++){
		for(var u=0;u<50;u++){
if(world.getBlockName(position.x+i, position.y+o, position.z+u) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x+i, position.y+o, position.z+u) == 3){
world.setBlock(position.x+i, position.y+o, position.z+u, "shagecraft:lifegame");}
if(world.getBlockName(position.x+i, position.y-o, position.z-u) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x+i, position.y-o, position.z-u) == 3){
world.setBlock(position.x+i, position.y-o, position.z-u, "shagecraft:lifegame");}
if(world.getBlockName(position.x+i, position.y+o, position.z-u) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x+i, position.y+o, position.z-u) == 3){
world.setBlock(position.x+i, position.y+o, position.z-u, "shagecraft:lifegame");}
if(world.getBlockName(position.x+i, position.y-o, position.z+u) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x+i, position.y-o, position.z+u) == 3){
world.setBlock(position.x+i, position.y-o, position.z+u, "shagecraft:lifegame");}
if(world.getBlockName(position.x-i, position.y+o, position.z+u) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x-i, position.y+o, position.z+u) == 3){
world.setBlock(position.x-i, position.y+o, position.z+u, "shagecraft:lifegame");}
if(world.getBlockName(position.x-i, position.y-o, position.z-u) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x-i, position.y-o, position.z-u) == 3){
world.setBlock(position.x-i, position.y-o, position.z-u, "shagecraft:lifegame");}
if(world.getBlockName(position.x-i, position.y+o, position.z-u) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x-i, position.y+o, position.z-u) == 3){
world.setBlock(position.x-i, position.y+o, position.z-u, "shagecraft:lifegame");}
if(world.getBlockName(position.x-i, position.y-o, position.z+u) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x-i, position.y-o, position.z+u) == 3){
world.setBlock(position.x-i, position.y-o, position.z+u, "shagecraft:lifegame");}
}}}