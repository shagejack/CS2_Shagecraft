x=position.x;
y=position.y;
z=position.z;

var nArr = ["shagecraft:itemRaw","shagecraft:itemRaw"];
var mArr = [12,13];

var rnArr = ["RotaryCraft:rotarycraft_item_shaftcraft","RotaryCraft:rotarycraft_item_shaftcraft"];
var rmArr = [2,0];

if(world.getContainerSlotItemName(position, 0) === null){
	//DO NOTHING
} else {
	for(var i=0;i<nArr.length;i++){
		if(world.getContainerSlotItemName(x, y, z, 0) == nArr[i] && world.getContainerSlotMetadata(x, y, z, 0) == mArr[i]){
		world.setContainerSlot(x, y, z, 0, rnArr[i], world.getContainerSlotStackSize(x, y, z, 0), rmArr[i]);
		}
	}
}
