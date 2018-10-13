var slot = player.getCurrentSlot()
var a = player.getItemMetadata(slot);
var b = player.getItemStackSize(slot);

switch(a){
	case 12:
	player.setSlot(slot, "RotaryCraft:rotarycraft_item_shaftcraft", b, 2);
	break;
	case 13:
	player.setSlot(slot, "RotaryCraft:rotarycraft_item_shaftcraft", b, 0);
	break;
	default:
}
	
