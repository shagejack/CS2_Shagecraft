var vx=player.getLookX();
var vy=player.getLookY();
var vz=player.getLookZ();
if(world.getBlockName(vx, vy, vz) == "shagecraft:oresource"){
player.sendMessage("矿源位置: x:"+vx+" y:"+vy+" z:"+vz);
player.sendMessage("矿源类型: "+world.getTileEntityStringData(vx, vy, vz, "OreType"));
player.sendMessage("矿源数据值: "+world.getTileEntityStringData(vx, vy, vz, "OreMetadata"));
player.sendMessage("矿源剩余: "+world.getTileEntityIntData(vx, vy, vz, "OreCount"));
player.sendMessage("矿源产率: "+world.getTileEntityIntData(vx, vy, vz, "OreGenSpeed"));
player.sendMessage("注:每个游戏刻中当一个0-1的随机实数乘以产率的平方大于2048时在矿源上方生成矿物(产率始终≥50)");
} else {
	player.sendMessage("目标不是一个矿源!");
}