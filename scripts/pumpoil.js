x = position.x;
y = position.y;
z = position.z;

if(world.getBlockMetadata(position)<12){
	if(world.getBlockName(x, y+1, z) == "minecraft:water"&&world.getBlockMetadata(x, y+1, z) == 0){
	world.setBlock(x, y+1, z, "minecraft:air");
	world.setBlockMetadata(position,world.getBlockMetadata(position)+4);
	}
	if(world.getBlockName(x-1, y, z) == "minecraft:water"&&world.getBlockMetadata(x-1, y, z) == 0){
	world.setBlock(x-1, y, z, "minecraft:air");
	world.setBlockMetadata(position,world.getBlockMetadata(position)+4);
	}
	if(world.getBlockName(x+1, y, z) == "minecraft:water"&&world.getBlockMetadata(x+1, y, z) == 0){
	world.setBlock(x+1, y, z, "minecraft:air");
	world.setBlockMetadata(position,world.getBlockMetadata(position)+4);
	}
	if(world.getBlockName(x, y-1, z) == "minecraft:water"&&world.getBlockMetadata(x, y-1, z) == 0){
	world.setBlock(x, y-1, z, "minecraft:air");
	world.setBlockMetadata(position,world.getBlockMetadata(position)+4);
	}
	if(world.getBlockName(x, y, z+1) == "minecraft:water"&&world.getBlockMetadata(x, y, z+1) == 0){
	world.setBlock(x, y, z+1, "minecraft:air");
	world.setBlockMetadata(position,world.getBlockMetadata(position)+4);
	}
	if(world.getBlockName(x, y, z-1) == "minecraft:water"&&world.getBlockMetadata(x, y, z-1) == 0){
	world.setBlock(x, y, z-1, "minecraft:air");
	world.setBlockMetadata(position,world.getBlockMetadata(position)+4);
	}
}