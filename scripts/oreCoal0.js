x=position.x;
y=position.y;
z=position.z;

a=0;

if(world.getBlockName(x,y+1,z)=="minecraft:fire"){
  world.setBlock(x,y+1,z,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
} else if(world.getBlockName(x,y-1,z)=="minecraft:fire"){
  world.setBlock(x,y-1,z,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
} else if(world.getBlockName(x+1,y,z)=="minecraft:fire"){
  world.setBlock(x+1,y,z,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
} else if(world.getBlockName(x-1,y,z)=="minecraft:fire"){
  world.setBlock(x-1,y,z,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
} else if(world.getBlockName(x,y,z+1)=="minecraft:fire"){
  world.setBlock(x,y,z+1,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
} else if(world.getBlockName(x,y,z-1)=="minecraft:fire"){
  world.setBlock(x,y,z-1,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
}

if(world.getBlockName(x,y+1,z)=="minecraft:torch"){
  world.setBlock(x,y+1,z,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
} else if(world.getBlockName(x,y-1,z)=="minecraft:torch"){
  world.setBlock(x,y-1,z,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
} else if(world.getBlockName(x+1,y,z)=="minecraft:torch"){
  world.setBlock(x+1,y,z,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
} else if(world.getBlockName(x-1,y,z)=="minecraft:torch"){
  world.setBlock(x-1,y,z,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
} else if(world.getBlockName(x,y,z+1)=="minecraft:torch"){
  world.setBlock(x,y,z+1,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
} else if(world.getBlockName(x,y,z-1)=="minecraft:torch"){
  world.setBlock(x,y,z-1,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
}

if(world.getBlockName(x,y+1,z)=="enviromine:firetorch"){
  world.setBlock(x,y+1,z,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
} else if(world.getBlockName(x,y-1,z)=="enviromine:firetorch"){
  world.setBlock(x,y-1,z,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
} else if(world.getBlockName(x+1,y,z)=="enviromine:firetorch"){
  world.setBlock(x+1,y,z,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
} else if(world.getBlockName(x-1,y,z)=="enviromine:firetorch"){
  world.setBlock(x-1,y,z,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
} else if(world.getBlockName(x,y,z+1)=="enviromine:firetorch"){
  world.setBlock(x,y,z+1,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
} else if(world.getBlockName(x,y,z-1)=="enviromine:firetorch"){
  world.setBlock(x,y,z-1,"minecraft:air");
  world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
}

for(var i=0;i<=2;i++){
	for(var o=0;o<=2;o++){
		for(var u=0;u<=2;u++){
if(world.getBlockName(position.x+i, position.y+o, position.z+u) == "shagecraft:oreCoal"&&world.getBlockMetadata(position.x+i, position.y+o, position.z+u) == 1){
a++;}
if(world.getBlockName(position.x+i, position.y-o, position.z-u) == "shagecraft:oreCoal"&&world.getBlockMetadata(position.x+i, position.y-o, position.z-u) == 1){
a++;}
if(world.getBlockName(position.x+i, position.y+o, position.z-u) == "shagecraft:oreCoal"&&world.getBlockMetadata(position.x+i, position.y+o, position.z-u) == 1){
a++;}
if(world.getBlockName(position.x+i, position.y-o, position.z+u) == "shagecraft:oreCoal"&&world.getBlockMetadata(position.x+i, position.y-o, position.z+u) == 1){
a++;}
if(world.getBlockName(position.x-i, position.y+o, position.z+u) == "shagecraft:oreCoal"&&world.getBlockMetadata(position.x-i, position.y+o, position.z+u) == 1){
a++;}
if(world.getBlockName(position.x-i, position.y-o, position.z-u) == "shagecraft:oreCoal"&&world.getBlockMetadata(position.x-i, position.y-o, position.z-u) == 1){
a++;}
if(world.getBlockName(position.x-i, position.y+o, position.z-u) == "shagecraft:oreCoal"&&world.getBlockMetadata(position.x-i, position.y+o, position.z-u) == 1){
a++;}
if(world.getBlockName(position.x-i, position.y-o, position.z+u) == "shagecraft:oreCoal"&&world.getBlockMetadata(position.x-i, position.y-o, position.z+u) == 1){
a++;}
}}}

if(a>0){
	world.setBlockAndMetadata(position,"shagecraft:oreCoal",1);
}
