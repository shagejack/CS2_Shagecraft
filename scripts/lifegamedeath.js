var a=0
//死细胞计数
if(world.getBlockName(position.x+1, position.y, position.z) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x+1, position.y, position.z) == 0){
a++;
}
if(world.getBlockName(position.x-1, position.y, position.z) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x-1, position.y, position.z) == 0){
a++;
}
if(world.getBlockName(position.x, position.y, position.z+1) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x, position.y, position.z+1) == 0){
a++;
}
if(world.getBlockName(position.x, position.y, position.z-1) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x, position.y, position.z-1) == 0){
a++;
}
if(world.getBlockName(position.x+1, position.y, position.z+1) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x+1, position.y, position.z+1) == 0){
a++;
}
if(world.getBlockName(position.x-1, position.y, position.z-1) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x-1, position.y, position.z-1) == 0){
a++;
}
if(world.getBlockName(position.x-1, position.y, position.z+1) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x-1, position.y, position.z+1) == 0){
a++;
}
if(world.getBlockName(position.x+1, position.y, position.z-1) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x+1, position.y, position.z-1) == 0){
a++;
}

if(a == 3){
	world.setBlock(position, "shagecraft:lifegame");
}

//死细胞无限拓展
if(Math.random()<0.1){
if(world.getBlockName(position.x+1, position.y, position.z) === null){
world.setBlockAndMetadata(position.x+1, position.y, position.z, "shagecraft:lifegame", 1);
}}
if(Math.random()<0.1){
if(world.getBlockName(position.x-1, position.y, position.z) === null){
world.setBlockAndMetadata(position.x-1, position.y, position.z, "shagecraft:lifegame", 1);
}}
if(Math.random()<0.1){
if(world.getBlockName(position.x, position.y, position.z+1) === null){
world.setBlockAndMetadata(position.x, position.y, position.z+1, "shagecraft:lifegame", 1);
}}
if(Math.random()<0.1){
if(world.getBlockName(position.x, position.y, position.z-1) === null){
world.setBlockAndMetadata(position.x, position.y, position.z-1, "shagecraft:lifegame", 1);
}}
