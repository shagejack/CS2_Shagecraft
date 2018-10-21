x = position.x;
y = position.y;
z = position.z;

//返回实际增长的能量
function getRealCharge(t){
	//var arr = [32, 256, 2048, 8092, 128, 1024, 8192, 32768];
		
	if(world.getStackIntData(position, 1, "maxCharge") - world.getStackIntData(position, 1, "charge") <= t){
	if(world.getStackFloatData(position, 0, "charge") <= world.getStackIntData(position, 1, "maxCharge") - world.getStackIntData(position, 1, "charge")){
		return world.getStackFloatData(position, 0, "charge");
	} else {
		return world.getStackIntData(position, 1, "maxCharge") - world.getStackIntData(position, 1, "charge");
	}
	} else if(world.getStackFloatData(position, 0, "charge") <= t){
		return world.getStackFloatData(position, 0, "charge");
	} else {
		return t;
	}
}

if(world.getContainerSlotItemName(position, 1) == "shagecraft:industrialBattery"){
	if(world.getContainerSlotItemName(position, 0) == "IC2:itemBatRE"){
		world.setStackFloatData(position, 0, "charge", world.getStackFloatData(position, 0, "charge") - getRealCharge(32));
		world.setStackIntData(position, 1, "charge", world.getStackIntData(position, 1, "charge") + getRealCharge(32));
	} else if(world.getContainerSlotItemName(position, 0) == "IC2:itemAdvBat"){
		world.setStackFloatData(position, 0, "charge", world.getStackFloatData(position, 0, "charge") - getRealCharge(256));
		world.setStackIntData(position, 1, "charge", world.getStackIntData(position, 1, "charge") + getRealCharge(256));
	} else if(world.getContainerSlotItemName(position, 0) == "IC2:itemBatCrystal"){
		world.setStackFloatData(position, 0, "charge", world.getStackFloatData(position, 0, "charge") - getRealCharge(2048));
		world.setStackIntData(position, 1, "charge", world.getStackIntData(position, 1, "charge") + getRealCharge(2048));
	} else if(world.getContainerSlotItemName(position, 0) == "IC2:itemBatLamaCrystal"){
		world.setStackFloatData(position, 0, "charge", world.getStackFloatData(position, 0, "charge") - getRealCharge(8092));
		world.setStackIntData(position, 1, "charge", world.getStackIntData(position, 1, "charge") + getRealCharge(8092));
	} else if(world.getContainerSlotItemName(position, 0) == "IC2:itemBatChargeRE"){
		world.setStackFloatData(position, 0, "charge", world.getStackFloatData(position, 0, "charge") - getRealCharge(128));
		world.setStackIntData(position, 1, "charge", world.getStackIntData(position, 1, "charge") + getRealCharge(128));
	} else if(world.getContainerSlotItemName(position, 0) == "IC2:itemBatChargeAdv"){
		world.setStackFloatData(position, 0, "charge", world.getStackFloatData(position, 0, "charge") - getRealCharge(1024));
		world.setStackIntData(position, 1, "charge", world.getStackIntData(position, 1, "charge") + getRealCharge(1024));
	} else if(world.getContainerSlotItemName(position, 0) == "IC2:itemBatChargeCrystal"){
		world.setStackFloatData(position, 0, "charge", world.getStackFloatData(position, 0, "charge") - getRealCharge(8192));
		world.setStackIntData(position, 1, "charge", world.getStackIntData(position, 1, "charge") + getRealCharge(8192));
	} else if(world.getContainerSlotItemName(position, 0) == "IC2:itemBatChargeLamaCrystal"){
		world.setStackFloatData(position, 0, "charge", world.getStackFloatData(position, 0, "charge") - getRealCharge(32768));
		world.setStackIntData(position, 1, "charge", world.getStackIntData(position, 1, "charge") + getRealCharge(32768));
	} else if(world.getContainerSlotItemName(position, 0) == "IC2:itemDebug"){
		world.setStackIntData(position, 1, "charge", world.getStackIntData(position, 1, "maxCharge"));
	}
}
