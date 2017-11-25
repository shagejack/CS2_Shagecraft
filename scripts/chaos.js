
if(world.getBlockName(position.x+1, position.y, position.z) !== null){
world.setBlockAndMetadata(position.x+1, position.y, position.z, "shagecraft:lifegame", 4);
}

if(world.getBlockName(position.x-1, position.y, position.z) !== null){
world.setBlockAndMetadata(position.x-1, position.y, position.z, "shagecraft:lifegame", 4);
}

if(world.getBlockName(position.x, position.y, position.z+1) !== null){
world.setBlockAndMetadata(position.x, position.y, position.z+1, "shagecraft:lifegame", 4);
}

if(world.getBlockName(position.x, position.y, position.z-1) !== null){
world.setBlockAndMetadata(position.x, position.y, position.z-1, "shagecraft:lifegame", 4);
}

if(world.getBlockName(position.x, position.y+1, position.z) !== null){
world.setBlockAndMetadata(position.x, position.y+1, position.z, "shagecraft:lifegame", 4);
}

if(world.getBlockName(position.x, position.y-1, position.z) !== null){
world.setBlockAndMetadata(position.x, position.y-1, position.z, "shagecraft:lifegame", 4);
}