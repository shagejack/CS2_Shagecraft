x=position.x;
y=position.y;
z=position.z;

if(world.getTileEntityFloatData(position,"durability")==0){
	world.setBlockMetadata(position,1);
}

if(world.getTileEntityFloatData(position,"water")<=3000){
  if(world.getBlockName(x, y+1, z) == "minecraft:water"&&world.getBlockMetadata(x, y+1, z) == 0){
world.setBlock(x, y+1, z, "minecraft:air");
world.setTileEntityFloatData(position,"water",world.getTileEntityFloatData(position,"water")+1000);
}}
if(world.getTileEntityFloatData(position,"water")<=3000){
if(world.getBlockName(x-1, y, z) == "minecraft:water"&&world.getBlockMetadata(x-1, y, z) == 0){
world.setBlock(x-1, y, z, "minecraft:air");
world.setTileEntityFloatData(position,"water",world.getTileEntityFloatData(position,"water")+1000);
}}
if(world.getTileEntityFloatData(position,"water")<=3000){
if(world.getBlockName(x+1, y, z) == "minecraft:water"&&world.getBlockMetadata(x+1, y, z) == 0){
world.setBlock(x+1, y, z, "minecraft:air");
world.setTileEntityFloatData(position,"water",world.getTileEntityFloatData(position,"water")+1000);
}}
if(world.getTileEntityFloatData(position,"water")<=3000){
if(world.getBlockName(x, y-1, z) == "minecraft:water"&&world.getBlockMetadata(x, y-1, z) == 0){
world.setBlock(x, y-1, z, "minecraft:air");
world.setTileEntityFloatData(position,"water",world.getTileEntityFloatData(position,"water")+1000);
}}
if(world.getTileEntityFloatData(position,"water")<=3000){
if(world.getBlockName(x, y, z+1) == "minecraft:water"&&world.getBlockMetadata(x, y, z+1) == 0){
world.setBlock(x, y, z+1, "minecraft:air");
world.setTileEntityFloatData(position,"water",world.getTileEntityFloatData(position,"water")+1000);
}}
if(world.getTileEntityFloatData(position,"water")<=3000){
if(world.getBlockName(x, y, z-1) == "minecraft:water"&&world.getBlockMetadata(x, y, z-1) == 0){
world.setBlock(x, y, z-1, "minecraft:air");
world.setTileEntityFloatData(position,"water",world.getTileEntityFloatData(position,"water")+1000);
}}

if(world.getBlockName(x, y+1, z) == "minecraft:water"&&world.getBlockMetadata(x, y+1, z) != 0){
for(var i=0;i<9;i++){
  if(world.getContainerSlotItemName(position,i)=="shagecraft:ore_processed_a"){

/*     if(world.getContainerSlotMetadata(position,i)==0){
      if(world.getTileEntityFloatData(position,"water")>0){
        if(Math.random()<0.08){
      world.clearContainerSlot(position,i);
    }
      world.setTileEntityFloatData(position,"water",world.getTileEntityFloatData(position,"water")-1);
      }
    } */

    if(world.getContainerSlotMetadata(position,i)==1){
      if(world.getTileEntityFloatData(position,"water")>0){
        if(world.getStackIntData(position,i,"purity")<100){
          if(Math.random()<0.1){
          world.setStackIntData(position,i,"purity",world.getStackIntData(position,i,"purity")+1);
		  if(Math.random()<0.8){
          world.setStackIntData(position,i,"mass",world.getStackIntData(position,i,"mass")-Math.floor(Math.random()*4000));
		  if(Math.random()<0.3){
		  world.spawnItem(x,y+1,z,"exnihilo:stone",1,0);
		  }
		  if(Math.random()<0.01){
		  world.setBlock(x,y+1,z,"minecraft:cobblestone");
		  }
		  }
        }
          world.setTileEntityFloatData(position,"water",world.getTileEntityFloatData(position,"water")-1);
          } else {
            if(Math.floor(world.getStackIntData(position,i,"mass")/30000)>0){
          world.setContainerSlot(position,i, "ThermalFoundation:material", Math.floor(world.getStackIntData(position,i,"mass")/30000), 8);
          world.setTileEntityFloatData(position,"water",world.getTileEntityFloatData(position,"water")-1);
        } else {
          world.clearContainerSlot(position,i);
          world.setTileEntityFloatData(position,"water",world.getTileEntityFloatData(position,"water")-1);
        }
          }
      }
    }
		world.setTileEntityFloatData(position,"durability",world.getTileEntityFloatData(position,"durability")-0.00005);
  }
}
}
