if(world.getBlockName(position.x, position.y-1, position.z) == "shagecraft:projectileloom"){
world.setTileEntityIntData(position.x,position.y-1,position.z,"Process",world.getTileEntityIntData(position.x,position.y-1,position.z,"Process")+(Math.random()*10));
}
var a = Math.random()*100
if(a>=50){
	world.setBlockMetadata(position.x, position.y, position.z, 0);
}
if(a<50){
	world.setBlockMetadata(position.x, position.y, position.z, 1);
}