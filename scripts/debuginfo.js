x = Math.floor(player.getPosX());
y = Math.floor(player.getPosY());
z = Math.floor(player.getPosZ());
player.sendMessage(world.getBlockName(x, y, z));
b = Math.random()*100;
player.sendMessage(b);