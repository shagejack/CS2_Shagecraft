var a=0
for(var i=0;i<8;i++){
	for(var o=0;o<3;o++){
		for(var u=0;u<8;u++){
if(world.getBlockName(position.x+i, position.y+o, position.z+u) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x+i, position.y+o, position.z+u) != 2){
a++;
world.setBlock(position.x+i, position.y+o, position.z+u, "minecraft:air");}
if(world.getBlockName(position.x+i, position.y-o, position.z-u) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x+i, position.y-o, position.z-u) != 2){
a++;
world.setBlock(position.x+i, position.y-o, position.z-u, "minecraft:air");}
if(world.getBlockName(position.x+i, position.y+o, position.z-u) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x+i, position.y+o, position.z-u) != 2){
a++;
world.setBlock(position.x+i, position.y+o, position.z-u, "minecraft:air");}
if(world.getBlockName(position.x+i, position.y-o, position.z+u) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x+i, position.y-o, position.z+u) != 2){
a++;
world.setBlock(position.x+i, position.y-o, position.z+u, "minecraft:air");}
if(world.getBlockName(position.x-i, position.y+o, position.z+u) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x-i, position.y+o, position.z+u) != 2){
a++;
world.setBlock(position.x-i, position.y+o, position.z+u, "minecraft:air");}
if(world.getBlockName(position.x-i, position.y-o, position.z-u) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x-i, position.y-o, position.z-u) != 2){
a++;
world.setBlock(position.x-i, position.y-o, position.z-u, "minecraft:air");}
if(world.getBlockName(position.x-i, position.y+o, position.z-u) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x-i, position.y+o, position.z-u) != 2){
a++;
world.setBlock(position.x-i, position.y+o, position.z-u, "minecraft:air");}
if(world.getBlockName(position.x-i, position.y-o, position.z+u) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x-i, position.y-o, position.z+u) != 2){
a++;
world.setBlock(position.x-i, position.y-o, position.z+u, "minecraft:air");}
}}}

if(a == 0){
world.setBlock(position, "minecraft:air");} else {
world.setBlockAndMetadata(position.x+1, position.y, position.z, "shagecraft:lifegame", 2);
world.setBlockAndMetadata(position.x-1, position.y, position.z, "shagecraft:lifegame", 2);
world.setBlockAndMetadata(position.x, position.y, position.z+1, "shagecraft:lifegame", 2);
world.setBlockAndMetadata(position.x, position.y, position.z-1, "shagecraft:lifegame", 2);
}