x=position.x;
y=position.y;
z=position.z;

var recipe=-1;

var Narr = ["shagecraft:woodstack","shagecraft:unfiredJar","shagecraft:jar","shagecraft:blockClayBucket","shagecraft:blockClayBucket"];
var Marr = [0,0,0,0,1];
var ONarr = ["shagecraft:woodstack","shagecraft:jar","shagecraft:unfiredJar","shagecraft:blockClayBucket","shagecraft:blockClayBucket"];
var OMarr = [1,0,1,1,2];
var TimeArr = [200,200,300,100,200];

	for(var i=0;i<Narr.length;i++){
	 if(world.getBlockName(x,y+1,z)==Narr[i]&&world.getBlockMetadata(x,y+1,z)==Marr[i]){
			recipe=i;
		}
	}


if(world.getBlockName(x,y+2,z)=="minecraft:brick_block"&&world.getBlockName(x+1,y+1,z)=="minecraft:brick_block"&&world.getBlockName(x-1,y+1,z)=="minecraft:brick_block"&&world.getBlockName(x,y+1,z+1)=="minecraft:brick_block"&&world.getBlockName(x,y+1,z-1)=="minecraft:brick_block"){
	if(world.getBlockName(x,y-1,z)=="minecraft:fire"&&recipe!=-1){
		if(world.getTileEntityIntData(position,"Progress")<TimeArr[recipe]){
		world.setTileEntityIntData(position,"Progress",world.getTileEntityIntData(position,"Progress")+1);
		}
	} else {
		if(world.getTileEntityIntData(position,"Progress")>=5){
		world.setTileEntityIntData(position,"Progress",world.getTileEntityIntData(position,"Progress")-3);
		} else {
			world.setTileEntityIntData(position,"Progress",0);
		}
	}
} else {
	world.setTileEntityIntData(position,"Progress",0);
}

if(world.getTileEntityIntData(position,"Progress")==TimeArr[recipe]){
	world.setBlock(x,y+1,z,"minecraft:air");
	world.setBlockAndMetadata(x,y+1,z,ONarr[recipe],OMarr[recipe]);
	world.setTileEntityIntData(position,"Progress",0);
}