x=position.x;
y=position.y;
z=position.z;

//mod.loadScript("apiRandomHandler.js");
world.setTileEntityIntData(position,"count",world.getTileEntityIntData(position,"count")+1);
if(world.getTileEntityIntData(position,"count")>80){
	world.setTileEntityFloatData(position,"kenergy",0);
}
	
if(world.getBlockName(x,y-1,z)=="shagecraft:millstone"&&world.getBlockName(x+1,y-1,z)=="shagecraft:millstone"&&world.getBlockName(x-1,y-1,z)=="shagecraft:millstone"&&world.getBlockName(x,y-1,z+1)=="shagecraft:millstone"&&world.getBlockName(x,y-1,z-1)=="shagecraft:millstone"&&world.getBlockName(x+1,y-1,z+1)=="shagecraft:millstone"&&world.getBlockName(x-1,y-1,z-1)=="shagecraft:millstone"&&world.getBlockName(x+1,y-1,z-1)=="shagecraft:millstone"&&world.getBlockName(x-1,y-1,z+1)=="shagecraft:millstone"&&world.getBlockName(x,y+1,z)=="shagecraft:millstonepart"){
  world.setTileEntityIntData(position,"complete",1);
} else {
  world.setTileEntityIntData(position,"complete",0);
}

if(world.getTileEntityIntData(position,"working")==1&&world.getTileEntityIntData(position,"complete")==0){
  world.createExplosion(position,3,false);
  world.setBlock(position,"minecraft:air");
}

if(world.getTileEntityIntData(position,"complete")==1){
  if(world.getTileEntityFloatData(position,"kenergy")>0){
      world.setTileEntityIntData(position,"working",1);
        if(world.getTileEntityFloatData(position,"kenergy")>=20){
      world.setTileEntityFloatData(position,"kenergy",world.getTileEntityFloatData(position,"kenergy")-20);
    } else {
      world.setTileEntityFloatData(position,"kenergy",0);
    }
  } else {
      world.setTileEntityIntData(position,"working",0);
  }
}

if(world.getTileEntityIntData(position,"working")==1){
  if(world.getContainerSlotItemName(position,0)=="shagecraft:ore_chunk_a"){
    type = world.getContainerSlotMetadata(position,0);
  }
  switch(type)
  {
    case 1:
      if(world.getTileEntityFloatData(position,"kenergy")>=12000){
        if(Math.random()<0.8){
        world.setContainerSlot(position,0, "shagecraft:ore_impure_a", 1, 1);
        world.setStackIntData(position,0, "purity", Math.floor(10+Math.random()*Math.random()*20+Math.random()*40));
        world.setStackIntData(position,0, "mass", 100000+Math.random()*200000);
        world.setStackIntData(position,0, "process", 0);
      } else {
        world.clearContainerSlot(position,0);
      }
      world.setTileEntityFloatData(position,"kenergy",0);
  }
  break;
    default:
      break;
}
}

if(world.getTileEntityFloatData(position,"kenergy")>=world.getTileEntityFloatData(position,"maxEnergy")){
  world.createExplosion(position,3,false);
  world.setBlock(position,"minecraft:air");
}
