var x = position.x;
var y = position.y;
var z = position.z;

if(world.getTileEntityIntData(position,"OreCount")>0){
if(world.getBlockName(x, y+1, z) == "minecraft:stone"||world.getBlockName(x, y+1, z) == "minecraft:cobblestone"||world.getBlockName(x, y+1, z) === null){
	if(Math.random()*Math.pow(world.getTileEntityIntData(position,"OreGenSpeed"), 2)>2048){
		world.setBlockAndMetadata(position.x, position.y+1, position.z, world.getTileEntityStringData(position,"OreType"), world.getTileEntityIntData(position,"OreMetadata"));
		world.setTileEntityIntData(position,"OreCount",world.getTileEntityIntData(position,"OreCount")-1);
	}
}
} else {
	world.setBlock(position.x, position.y, position.z, "shagecraft:oresourceempty");
}