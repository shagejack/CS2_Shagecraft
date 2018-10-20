x = position.x;
y = position.y;
z = position.z;


if(world.getBlockName(x-1, y, z) == "shagecraft:blockBatteryContainer"){
	
	if(world.getBlockName(x-1, y+4, z) == "shagecraft:blockIndustrialElectrolyzer"){
	for(var i=2;i<5;i++){
	if(world.getContainerSlotItemName(x-1, y+4, z, i) !== null){
		if(world.getContainerSlotItemName(position, i) === null){
		var n = world.getContainerSlotItemName(x-1, y+4, z, i);
		var m = world.getContainerSlotMetadata(x-1, y+4, z, i);
		world.removeFromContainerSlot(x-1, y+4, z, i, 1);
		world.setContainerSlot(position, i, n, 1, m);
		} else if(world.getContainerSlotItemName(position, i) == world.getContainerSlotItemName(x-1, y+4, z, i) && world.getContainerSlotMetadata(position, i) == world.getContainerSlotMetadata(x-1, y+4, z, i) && world.getContainerSlotStackSize(position, i) < world.getContainerSlotMaxStackSize(position, i)){
			world.removeFromContainerSlot(x-1, y+4, z, i, 1);
			world.addToContainerSlot(position, i, 1);
		}
	}
	}
	}
	
} else if(world.getBlockName(x+1, y, z) == "shagecraft:blockBatteryContainer"){
	
	if(world.getBlockName(x+1, y+4, z) == "shagecraft:blockIndustrialElectrolyzer"){
		
	for(var i=2;i<5;i++){
	if(world.getContainerSlotItemName(x+1, y+4, z, i) !== null){
		if(world.getContainerSlotItemName(position, i) === null){
		var n = world.getContainerSlotItemName(x+1, y+4, z, i);
		var m = world.getContainerSlotMetadata(x+1, y+4, z, i);
		world.removeFromContainerSlot(x+1, y+4, z, i, 1);
		world.setContainerSlot(position, i, n, 1, m);
		} else if(world.getContainerSlotItemName(position, i) == world.getContainerSlotItemName(x+1, y+4, z, i) && world.getContainerSlotMetadata(position, i) == world.getContainerSlotMetadata(x+1, y+4, z, i) && world.getContainerSlotStackSize(position, i) < world.getContainerSlotMaxStackSize(position, i)){
			world.removeFromContainerSlot(x+1, y+4, z, i, 1);
			world.addToContainerSlot(position, i, 1);
		}
	}
	}
	}

} else if(world.getBlockName(x, y, z+1) == "shagecraft:blockBatteryContainer"){
	
	if(world.getBlockName(x, y+4, z+1) == "shagecraft:blockIndustrialElectrolyzer"){
	for(var i=2;i<5;i++){
	if(world.getContainerSlotItemName(x, y+4, z+1, i) !== null){
		if(world.getContainerSlotItemName(position, i) === null){
		var n = world.getContainerSlotItemName(x, y+4, z+1, i);
		var m = world.getContainerSlotMetadata(x, y+4, z+1, i);
		world.removeFromContainerSlot(x, y+4, z+1, i, 1);
		world.setContainerSlot(position, i, n, 1, m);
		} else if(world.getContainerSlotItemName(position, i) == world.getContainerSlotItemName(x, y+4, z+1, i) && world.getContainerSlotMetadata(position, i) == world.getContainerSlotMetadata(x, y+4, z+1, i) && world.getContainerSlotStackSize(position, i) < world.getContainerSlotMaxStackSize(position, i)){
			world.removeFromContainerSlot(x, y+4, z+1, i, 1);
			world.addToContainerSlot(position, i, 1);
		}
	}
	}
	}

} else if(world.getBlockName(x, y, z-1) == "shagecraft:blockBatteryContainer"){
	
	if(world.getBlockName(x, y+4, z-1) == "shagecraft:blockIndustrialElectrolyzer"){
	for(var i=2;i<5;i++){
	if(world.getContainerSlotItemName(x, y+4, z-1, i) !== null){
		if(world.getContainerSlotItemName(position, i) === null){
		var n = world.getContainerSlotItemName(x, y+4, z-1, i);
		var m = world.getContainerSlotMetadata(x, y+4, z-1, i);
		world.removeFromContainerSlot(x, y+4, z-1, i, 1);
		world.setContainerSlot(position, i, n, 1, m);
		} else if(world.getContainerSlotItemName(position, i) == world.getContainerSlotItemName(x, y+4, z-1, i) && world.getContainerSlotMetadata(position, i) == world.getContainerSlotMetadata(x, y+4, z-1, i) && world.getContainerSlotStackSize(position, i) < world.getContainerSlotMaxStackSize(position, i)){
			world.removeFromContainerSlot(x, y+4, z-1, i, 1);
			world.addToContainerSlot(position, i, 1);
		}
	}
	}
	}

}