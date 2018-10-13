x = position.x;
y = position.y;
z = position.z;
meta = world.getBlockMetadata(position);

function getCharge(){
	return world.getTileEntityIntData(position, "charge");
}

function getMaxCharge(){
	return world.getTileEntityIntData(position, "maxCharge");
}

function setCharge(charge){
	world.setTileEntityIntData(position, "charge", charge);
}

function getSlotCharge(slot){
	return world.getStackIntData(position, slot, "charge");
}

function getSlotMaxCharge(slot){
	return world.getStackIntData(position, slot, "maxCharge");
}

function setSlotCharge(slot, charge){
	world.setStackIntData(position, slot, "charge", charge);
}

//返回实际增长的能量
function getRealChargeAmount(meta, slot){
	switch(meta){
	//低压
	case 0:
	if(world.getTileEntityIntData(position, "maxCharge") - world.getTileEntityIntData(position, "charge") <= 64){
	if(world.getStackIntData(position, slot, "charge") <= world.getTileEntityIntData(position, "maxCharge") - world.getTileEntityIntData(position, "charge")){
		return world.getStackIntData(position, slot, "charge");
	} else {
		return world.getTileEntityIntData(position, "maxCharge") - world.getTileEntityIntData(position, "charge");
	}
	} else if(world.getStackIntData(position, slot, "charge") <= 64){
		return world.getStackIntData(position, slot, "charge");
	} else {
		return 64;
	}
	break;
	//中压
	case 1:
	if(world.getTileEntityIntData(position, "maxCharge") - world.getTileEntityIntData(position, "charge") <= 256){
	if(world.getStackIntData(position, slot, "charge") <= world.getTileEntityIntData(position, "maxCharge") - world.getTileEntityIntData(position, "charge")){
		return world.getStackIntData(position, slot, "charge");
	} else {
		return world.getTileEntityIntData(position, "maxCharge") - world.getTileEntityIntData(position, "charge");
	}
	} else if(world.getStackIntData(position, slot, "charge") <= 256){
		return world.getStackIntData(position, slot, "charge");
	} else {
		return 256;
	}
	break;
	//高压
	case 2:
	if(world.getTileEntityIntData(position, "maxCharge") - world.getTileEntityIntData(position, "charge") <= 1024){
	if(world.getStackIntData(position, slot, "charge") <= world.getTileEntityIntData(position, "maxCharge") - world.getTileEntityIntData(position, "charge")){
		return world.getStackIntData(position, slot, "charge");
	} else {
		return world.getTileEntityIntData(position, "maxCharge") - world.getTileEntityIntData(position, "charge");
	}
	} else if(world.getStackIntData(position, slot, "charge") <= 1024){
		return world.getStackIntData(position, slot, "charge");
	} else {
		return 1024;
	}
	break;
	default:
	return 0;
	}
}

//world.sendMessageToAllPlayers(getSlotCharge(0) + " | " + getCharge() + " | " + getRealChargeAmount(meta, 0));

for(var i = 0; i <= 7; i++){
		if(world.getContainerSlotItemName(position, i) == "shagecraft:industrialBattery"){
		if(getRealChargeAmount(meta, i) > 0){
		setSlotCharge(i, getSlotCharge(i) - getRealChargeAmount(meta, i));
		setCharge(getCharge() + getRealChargeAmount(meta, i));
		}
	}
}
