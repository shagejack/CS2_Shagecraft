x=position.x;
y=position.y;
z=position.z;

if(world.getBlockName(x,y+1,z)=="minecraft:air"){
	world.setBlock(x,y+1,z,"minecraft:fire");
}

world.setTileEntityFloatData(position,"flammable",world.getTileEntityFloatData(position,"flammable")-(Math.pow(world.getTileEntityFloatData(position,"temperature"),2)/1440000));

if(world.getTileEntityFloatData(position,"flammable")<=0){
  if(world.getBlockName(x,y+1,z)=="shagecraft:woodstack"&&world.getBlockMetadata(x,y+1,z)==0){
    world.setBlockAndMetadata(x,y+1,z,"shagecraft:woodstack",1);
  }
  if(world.getBlockName(x,y-1,z)=="shagecraft:woodstack"&&world.getBlockMetadata(x,y-1,z)==0){
    world.setBlockAndMetadata(x,y-1,z,"shagecraft:woodstack",1);
  }
  if(world.getBlockName(x+1,y,z)=="shagecraft:woodstack"&&world.getBlockMetadata(x+1,y,z)==0){
    world.setBlockAndMetadata(x+1,y,z,"shagecraft:woodstack",1);
  }
  if(world.getBlockName(x-1,y,z)=="shagecraft:woodstack"&&world.getBlockMetadata(x-1,y,z)==0){
    world.setBlockAndMetadata(x-1,y,z,"shagecraft:woodstack",1);
  }
  if(world.getBlockName(x,y,z+1)=="shagecraft:woodstack"&&world.getBlockMetadata(x,y,z+1)==0){
    world.setBlockAndMetadata(x,y,z+1,"shagecraft:woodstack",1);
  }
  if(world.getBlockName(x,y,z-1)=="shagecraft:woodstack"&&world.getBlockMetadata(x,y,z-1)==0){
    world.setBlockAndMetadata(x,y,z-1,"shagecraft:woodstack",1);
  }
  if(world.getTileEntityFloatData(position,"temperature")<=1400){
    world.setBlock(position,"shagecraft:wooddust");
  } else {
    world.setBlock(position,"shagecraft:crackcoal");
  }
}

if(world.getBlockName(x,y+1,z)!="minecraft:air"&&world.getBlockName(x,y-1,z)!="minecraft:air"&&world.getBlockName(x+1,y,z)!="minecraft:air"&&world.getBlockName(x-1,y,z)!="minecraft:air"&&world.getBlockName(x,y,z+1)!="minecraft:air"&&world.getBlockName(x,y,z-1)!="minecraft:air"){
  if(world.getBlockName(x,y+1,z)!="shagecraft:wooddust"&&world.getBlockName(x,y-1,z)!="shagecraft:wooddust"&&world.getBlockName(x+1,y,z)!="shagecraft:wooddust"&&world.getBlockName(x-1,y,z)!="shagecraft:wooddust"&&world.getBlockName(x,y,z+1)!="shagecraft:wooddust"&&world.getBlockName(x,y,z-1)!="shagecraft:wooddust"){
    if(world.getTileEntityFloatData(position,"temperature")<=1600){
      world.setTileEntityFloatData(position,"temperature",world.getTileEntityFloatData(position,"temperature")+Math.random()*20);
    }
} else {
  if(world.getTileEntityFloatData(position,"temperature")<=1200){
    world.setTileEntityFloatData(position,"temperature",world.getTileEntityFloatData(position,"temperature")+Math.random()*10);
  } else {
    world.setTileEntityFloatData(position,"temperature",world.getTileEntityFloatData(position,"temperature")-Math.random()*30);
  }
}
} else {
  if(world.getTileEntityFloatData(position,"temperature")<=1300){
    world.setTileEntityFloatData(position,"temperature",world.getTileEntityFloatData(position,"temperature")+Math.random()*30);
  } else {
    world.setTileEntityFloatData(position,"temperature",world.getTileEntityFloatData(position,"temperature")-Math.random()*50);
  }
}
