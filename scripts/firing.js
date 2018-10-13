x=position.x;
y=position.y;
z=position.z;

if(world.getTileEntityIntData(position,"Stage")==0){
	
	if(world.getBlockName(x,y-2,z)=="minecraft:fire"){
world.setTileEntityIntData(position,"Count",0);
} else {
	if(world.getTileEntityIntData(position,"Count")<30){
	world.setTileEntityIntData(position,"Count",world.getTileEntityIntData(position,"Count")+1);
	}
}

if(world.getTileEntityFloatData(position,"Progress")!=0){
if(world.getBlockName(x,y+1,z)=="minecraft:dirt"&&world.getBlockName(x,y-1,z)=="minecraft:dirt"&&world.getBlockName(x+1,y,z)=="minecraft:dirt"&&world.getBlockName(x-1,y,z)=="minecraft:dirt"&&world.getBlockName(x,y,z+1)=="minecraft:dirt"&&world.getBlockName(x,y,z-1)=="minecraft:dirt"&&world.getTileEntityIntData(position,"Count")<30){
world.setTileEntityFloatData(position,"Progress",world.getTileEntityFloatData(position,"Progress")+1);
} else {
	if(world.getTileEntityFloatData(position,"Progress")>0){
		
	if(world.getTileEntityFloatData(position,"Progress")<500){
		world.setTileEntityIntData(position,'Stage',1);
	}
	if(world.getTileEntityFloatData(position,"Progress")>500&&world.getTileEntityFloatData(position,"Progress")<800){
		world.setTileEntityIntData(position,'Stage',2);
	}
	if(world.getTileEntityFloatData(position,"Progress")>800&&world.getTileEntityFloatData(position,"Progress")<1600){
		world.setTileEntityIntData(position,'Stage',3);
	}
	if(world.getTileEntityFloatData(position,"Progress")>1600){
		world.setBlockAndMetadata(position,"shagecraft:blockClayBrickFailed",2);
	}
	
	}
}

} else if(world.getBlockName(x,y-2,z)=="minecraft:fire"){
	world.setTileEntityFloatData(position,"Progress",world.getTileEntityFloatData(position,"Progress")+1);
	}
	
}

if(world.getTileEntityIntData(position,"Stage")!=0){
	if(world.getBlockName(x,y-2,z)=="minecraft:fire"){
		if(Math.random()<0.05){
		world.setBlockAndMetadata(position,"shagecraft:blockClayBrickFailed",2);
		}
	}
	
	if(world.getTileEntityFloatData(position,"Progress")>0){
		world.setTileEntityFloatData(position,"Progress",world.getTileEntityFloatData(position,"Progress")-1);
	} else {
w=world.getTileEntityIntData(position,"Stage");
		switch(w)
		{
			case 1:
			world.setBlock(position,"shagecraft:blockClayBrickFailed");
			break;
			case 2:
			world.setBlock(position,"minecraft:brick_block");
			break;
			case 3:
			world.setBlockAndMetadata(position,"shagecraft:blockClayBrickFailed",1);
			break;
			default:
			world.setBlockAndMetadata(position,"shagecraft:blockClayBrickFailed",2);
		}
	}
}
