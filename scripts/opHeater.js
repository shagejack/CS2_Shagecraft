x=position.x;
y=position.y;
z=position.z;

if(world.getBlockName(x+1,y,z)=="shagecraft:woodstack"&&world.getBlockMetadata(x+1,y,z)==1){
    world.setTileEntityFloatData(x+1,y,z,"temperature",world.getTileEntityFloatData(position,"temperature"));
}

if(world.getBlockName(x-1,y,z)=="shagecraft:woodstack"&&world.getBlockMetadata(x-1,y,z)==1){
    world.setTileEntityFloatData(x-1,y,z,"temperature",world.getTileEntityFloatData(position,"temperature"));
}

if(world.getBlockName(x,y+1,z)=="shagecraft:woodstack"&&world.getBlockMetadata(x,y+1,z)==1){
        world.setTileEntityFloatData(x,y+1,z,"temperature",world.getTileEntityFloatData(position,"temperature"));
}

if(world.getBlockName(x,y-1,z)=="shagecraft:woodstack"&&world.getBlockMetadata(x,y-1,z)==1){
    world.setTileEntityFloatData(x,y-1,z,"temperature",world.getTileEntityFloatData(position,"temperature"));
}

if(world.getBlockName(x,y,z+1)=="shagecraft:woodstack"&&world.getBlockMetadata(x,y,z+1)==1){
    world.setTileEntityFloatData(x,y,z+1,"temperature",world.getTileEntityFloatData(position,"temperature"));
}

if(world.getBlockName(x,y,z-1)=="shagecraft:woodstack"&&world.getBlockMetadata(x,y,z-1)==1){
    world.setTileEntityFloatData(x,y,z-1,"temperature",world.getTileEntityFloatData(position,"temperature"));
}
