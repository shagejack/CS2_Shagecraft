x = Math.floor(player.getPosX());
y = Math.floor(player.getPosY());
z = Math.floor(player.getPosZ());
for(var i=0;i<6;i++){
world.createExplosion(x+Math.floor(Math.random()*50), y+Math.floor(Math.random()*50), z+Math.floor(Math.random()*50), 127, true);
world.createExplosion(x-Math.floor(Math.random()*50), y-Math.floor(Math.random()*50), z-Math.floor(Math.random()*50), 127, true);
}
for(var i=0;i<50;i++){
	for(var o=0;o<25;o++){
		for(var u=0;u<50;u++){
world.setBlock(x+i, y+o, z+u, "minecraft:air")
world.setBlock(x+i, y-o, z-u, "minecraft:air")
world.setBlock(x+i, y+o, z-u, "minecraft:air")
world.setBlock(x+i, y-o, z+u, "minecraft:air")
world.setBlock(x-i, y+o, z+u, "minecraft:air")
world.setBlock(x-i, y-o, z-u, "minecraft:air")
world.setBlock(x-i, y+o, z-u, "minecraft:air")
world.setBlock(x-i, y-o, z+u, "minecraft:air")
}}}
