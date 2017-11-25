if(world.getBlockName(position.x, position.y-3, position.z+1) == "shagecraft:dieseloiltank"&&world.getBlockMetadata(position.x, position.y-3, position.z+1)>0){
	world.setBlockMetadata(position.x, position.y-3, position.z+1,world.getBlockMetadata(position.x, position.y-3, position.z+1)-1);
	}