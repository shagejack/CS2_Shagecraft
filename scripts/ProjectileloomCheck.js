if(world.getBlockName(position.x, position.y+1, position.z) != "shagecraft:blockwheel"){
world.setTileEntityIntData(position,"Process",0);
}

if(world.getContainerSlotStackSize(position,0)>1||world.getContainerSlotStackSize(position,1)>1){
world.setTileEntityIntData(position,"Process",0);
}

if(world.getContainerSlotStackSize(position,0)==0||world.getContainerSlotStackSize(position,1)==0){
world.setTileEntityIntData(position,"Process",0);
}

//这部分以后要做成不符合配方就把Process归零
/* if(world.getContainerSlotStackSize(position,0)==0||world.getContainerSlotStackSize(position,1)==0){
world.setTileEntityIntData(position,"Process",0);
} */

if(world.getTileEntityIntData(position,"Process")>=100){
	if(world.getContainerSlotItemName(position,0) == "minecraft:string"&&world.getContainerSlotItemName(position,1) == "minecraft:string"){
		world.clearContainerSlot(position,0);
		world.clearContainerSlot(position,1);
		world.setContainerSlot(position, 0, "shagecraft:boldstring", 1, 0);
	}
			world.setTileEntityIntData(position,"Process",0);
}