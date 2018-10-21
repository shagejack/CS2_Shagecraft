var vx=player.getLookX();
var vy=player.getLookY();
var vz=player.getLookZ();
if(world.getBlockName(vx, vy, vz) == "shagecraft:blockBatteryContainer"){
player.sendMessage(world.getTileEntityIntData(vx, vy, vz, "charge") +" EU / " + world.getTileEntityIntData(vx, vy, vz, "maxCharge") + " EU");
}
if(world.getBlockName(vx, vy, vz) == "shagecraft:blockIndustrialElectrolyzer"){
	if(world.getTileEntityIntData(vx, vy, vz, "complete") == 1){
		if(world.getTileEntityIntData(vx, vy, vz, "working") == 1){
			player.sendMessage("\u6b63\u5728\u8fdb\u884c" + world.getTileEntityIntData(vx, vy, vz, "recipe") + "\u53f7\u52a0\u5de5\u914d\u65b9\uff0c\u5f53\u524d\u52a0\u5de5\u8fdb\u884c\u4e86 " + Math.floor(world.getTileEntityIntData(vx, vy, vz, "progress")/world.getTileEntityIntData(vx, vy, vz, "maxProgress")*100) + "%\u3002");
			player.sendMessage("\u84c4\u7535\u6c60\uff1a" + world.getTileEntityIntData(vx, vy-4, vz, "charge") + " EU / " + world.getTileEntityIntData(vx, vy-4, vz, "maxCharge") + " EU");
		} else {
			player.sendMessage("\u8fd9\u53f0\u673a\u5668\u6ca1\u6709\u5728\u52a0\u5de5\u4efb\u4f55\u7269\u54c1\uff01");
			player.sendMessage("\u84c4\u7535\u6c60\uff1a" + world.getTileEntityIntData(vx, vy-4, vz, "charge") + " EU / " + world.getTileEntityIntData(vx, vy-4, vz, "maxCharge") + " EU");
		}
	} else {
			player.sendMessage("\u8fd9\u53f0\u673a\u5668\u4e0d\u5b8c\u6574\uff01");
	}
}