x=position.x;
y=position.y;
z=position.z;


for(var i=0;i<=255;i++){
if(world.getBlockName(x,y+i,z)=="minecraft:dirt"||world.getBlockName(x,y+i,z)=="minecraft:grass"){
	world.setBlock(x,y+i,z,"shagecraft:scorchedEarth");
}
}
