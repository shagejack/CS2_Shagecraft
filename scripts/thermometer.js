x=player.getLookX();
y=player.getLookY();
z=player.getLookZ();

dx=Math.floor(player.getPosX());
dy=Math.floor(player.getPosY());
dz=Math.floor(player.getPosZ());

if((Math.pow((x-dx),2)+Math.pow((y-dy),2)+Math.pow((z-dz),2))<=25){
	if(world.getBlockName(x,y,z)=="shagecraft:woodstack"){
		if(world.getBlockMetadata(x,y,z)==1){
player.damageItem(player.getCurrentSlot(),1);
  player.sendMessage("\u6e29\u5ea6:"+Math.round(world.getTileEntityFloatData(x,y,z,"temperature"))+"\u2103");
		} else {
			player.sendMessage("\u6e29\u5ea6:20\u2103");
		}
  } else {
player.sendMessage("\u5947\u602a\u7684\u662f\uff0c\u4f60\u6d4b\u4e0d\u51fa\u8fd9\u73a9\u610f\u7684\u6e29\u5ea6\u3002");
}
} else {
player.sendMessage("\u90a3\u592a\u8fdc\u4e86\uff01");
}
