var a=0;
x = Math.floor(player.getPosX());
y = Math.floor(player.getPosY());
z = Math.floor(player.getPosZ());

for(var i=0;i<25;i++){
	for(var o=0;o<257;o++){
		for(var u=0;u<25;u++){
if(world.getBlockName(x+i, y+o, z+u) == "minecraft:iron_ore"){
a++;}
if(world.getBlockName(x+i, y-o, z-u) == "minecraft:iron_ore"){
a++;}
if(world.getBlockName(x+i, y+o, z-u) == "minecraft:iron_ore"){
a++;}
if(world.getBlockName(x+i, y-o, z+u) == "minecraft:iron_ore"){
a++;}
if(world.getBlockName(x-i, y+o, z+u) == "minecraft:iron_ore"){
a++;}
if(world.getBlockName(x-i, y-o, z-u) == "minecraft:iron_ore"){
a++;}
if(world.getBlockName(x-i, y+o, z-u) == "minecraft:iron_ore"){
a++;}
if(world.getBlockName(x-i, y-o, z+u) == "minecraft:iron_ore"){
a++;}
}}}
if(a>0){
player.sendMessage("Iron Detected!");
var a=0;
}


