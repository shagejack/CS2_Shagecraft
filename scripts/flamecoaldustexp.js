if(world.getBlockName(position.x, position.y-1, position.z) === null){
world.setBlock(position.x, position.y-1, position.z, "shagecraft:flamecoaloredust");
world.setBlock(position, "minecraft:air");
} else {
if(world.getBlockName(position.x, position.y-1, position.z) == "shagecraft:coaloredust"){
world.setBlock(position.x, position.y-1, position.z, "shagecraft:flamecoaloredust");
} else {
if(world.getBlockName(position.x, position.y-1, position.z) == "shagecraft:coaloredust"){
world.setBlock(position.x, position.y+1, position.z, "shagecraft:flamecoaloredust");
}
if(world.getBlockName(position.x, position.y+1, position.z) == "shagecraft:coaloredust"){
world.setBlock(position.x, position.y+1, position.z, "shagecraft:flamecoaloredust");
}
if(world.getBlockName(position.x+1, position.y, position.z) == "shagecraft:coaloredust"){
world.setBlock(position.x+1, position.y, position.z, "shagecraft:flamecoaloredust");
}
if(world.getBlockName(position.x-1, position.y, position.z) == "shagecraft:coaloredust"){
world.setBlock(position.x-1, position.y, position.z, "shagecraft:flamecoaloredust");
}
if(world.getBlockName(position.x, position.y, position.z+1) == "shagecraft:coaloredust"){
world.setBlock(position.x, position.y, position.z+1, "shagecraft:flamecoaloredust");
}
if(world.getBlockName(position.x, position.y, position.z-1) == "shagecraft:coaloredust"){
world.setBlock(position.x, position.y, position.z-1, "shagecraft:flamecoaloredust");
}
}
}

if(Math.random()<0.001){
world.setBlock(position, "minecraft:air");
world.createExplosion(position, 3, true);
}