var vx=player.getLookX();
var vy=player.getLookY();
var vz=player.getLookZ();
player.sendMessage(world.getTileEntityIntData(vx, vy, vz,"destinyX"));
player.sendMessage(world.getTileEntityIntData(vx, vy, vz,"destinyY"));
player.sendMessage(world.getTileEntityIntData(vx, vy, vz,"destinyZ"));
player.sendMessage(world.getTileEntityIntData(vx, vy, vz,"e"));