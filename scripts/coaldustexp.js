if(world.getBlockName(position.x, position.y-1, position.z) === null){
world.setBlockAndMetadata(position.x, position.y-1, position.z, "shagecraft:coaloredust", world.getBlockMetadata(position));
world.setBlock(position, "minecraft:air");
} else {
if(world.getBlockName(position.x, position.y-1, position.z) == "shagecraft:coaloredust"&&world.getBlockMetadata(position.x, position.y-1, position.z)<15&&world.getBlockMetadata(position.x, position.y-1, position.z)>world.getBlockMetadata(position)){
world.setBlockAndMetadata(position.x, position.y-1, position.z, "shagecraft:coaloredust", world.getBlockMetadata(position.x, position.y-1, position.z)-world.getBlockMetadata(position));
world.setBlock(position, "minecraft:air");
} else {
	if(Math.random()<0.1){
if(world.getBlockName(position.x, position.y+1, position.z) === null){
world.setBlockAndMetadata(position.x, position.y+1, position.z, "shagecraft:coaloredust", world.getBlockMetadata(position)+1);
	}}
	if(Math.random()<0.1){
if(world.getBlockName(position.x+1, position.y, position.z) === null){
world.setBlockAndMetadata(position.x+1, position.y, position.z, "shagecraft:coaloredust", world.getBlockMetadata(position)+1);
}}
if(Math.random()<0.1){
if(world.getBlockName(position.x-1, position.y, position.z) === null){
world.setBlockAndMetadata(position.x-1, position.y, position.z, "shagecraft:coaloredust", world.getBlockMetadata(position)+1);
}}
if(Math.random()<0.1){
if(world.getBlockName(position.x, position.y, position.z+1) === null){
world.setBlockAndMetadata(position.x, position.y, position.z+1, "shagecraft:coaloredust", world.getBlockMetadata(position)+1);
}}
if(Math.random()<0.1){
if(world.getBlockName(position.x, position.y, position.z-1) === null){
world.setBlockAndMetadata(position.x, position.y, position.z-1, "shagecraft:coaloredust", world.getBlockMetadata(position)+1);
}}
}
}

if(world.getBlockName(position.x, position.y-1, position.z) == "minecraft:fire"){
world.setBlock(position, "shagecraft:flamecoaloredust");
}
if(world.getBlockName(position.x, position.y+1, position.z) == "minecraft:fire"){
world.setBlock(position, "shagecraft:flamecoaloredust");
}
if(world.getBlockName(position.x+1, position.y, position.z) == "minecraft:fire"){
world.setBlock(position, "shagecraft:flamecoaloredust");
}
if(world.getBlockName(position.x-1, position.y, position.z) == "minecraft:fire"){
world.setBlock(position, "shagecraft:flamecoaloredust");
}
if(world.getBlockName(position.x, position.y, position.z+1) == "minecraft:fire"){
world.setBlock(position, "shagecraft:flamecoaloredust");
}
if(world.getBlockName(position.x, position.y, position.z-1) == "minecraft:fire"){
world.setBlock(position, "shagecraft:flamecoaloredust");
}