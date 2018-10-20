x = position.x;
y = position.y;
z = position.z;

//返回实际增长的能量
function getRealCharge(m){
	var arr = [-1, 200, 800, 8000, 32000];
		
	if(world.getStackIntData(position, 1, "maxCharge") - world.getStackIntData(position, 1, "charge") <= arr[m]){
	if(world.getStackIntData(position, 0, "Energy") <= world.getStackIntData(position, 1, "maxCharge") - world.getStackIntData(position, 1, "charge")){
		return world.getStackIntData(position, 0, "Energy");
	} else {
		return world.getStackIntData(position, 1, "maxCharge") - world.getStackIntData(position, 1, "charge");
	}
	} else if(world.getStackIntData(position, 0, "Energy") <= arr[m]){
		return world.getStackIntData(position, 0, "Energy");
	} else {
		return arr[m];
	}
}

if(world.getContainerSlotItemName(position, 0) == "ThermalExpansion:Cell" && world.getContainerSlotItemName(position, 1) == "shagecraft:industrialBattery"){
	if(world.getContainerSlotMetadata(position,0) == 0){
		world.setStackIntData(position, 1, "charge", world.getStackIntData(position, 1, "maxCharge"));
	} else {
		world.setStackIntData(position, 0, "Energy", world.getStackIntData(position, 0, "Energy") - getRealCharge(world.getContainerSlotMetadata(position, 0)));
		world.setStackIntData(position, 1, "charge", world.getStackIntData(position, 1, "charge") + getRealCharge(world.getContainerSlotMetadata(position, 0)));
	}
}