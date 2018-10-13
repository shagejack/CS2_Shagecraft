x=position.x;
y=position.y;
z=position.z;

a=0;
instable = 0;


var block = [world.getBlockName(x, y+1, z), world.getBlockName(x, y-1, z), world.getBlockName(x+1, y, z), world.getBlockName(x-1, y, z), world.getBlockName(x, y, z+1), world.getBlockName(x, y, z-1)];
var meta = [world.getBlockMetadata(x, y+1, z), world.getBlockMetadata(x, y-1, z), world.getBlockMetadata(x+1, y, z), world.getBlockMetadata(x-1, y, z), world.getBlockMetadata(x, y, z+1), world.getBlockMetadata(x, y, z-1)];

for(var i=0;i<block.length;i++){
if(block[i] == "shagecraft:blockVoid" && meta[i] == 0){
		instable = 1;
		//world.sendMessageToAllPlayers(blocks[i]);
	}
}

if(instable == 0){
	
	if(y==0){
		world.setBlock(position,"minecraft:bedrock");
	}
	
	for(var i=1;i<255;i++){
	if(world.getBlockName(x,y+i,z) != "minecraft:air"){
		a++;
	}
	}
	
	if(a==0){
		world.setBlock(position,"minecraft:grass");
	}else if(a<4){
		world.setBlock(position,"minecraft:dirt");
	}else{
		world.setBlock(position,"minecraft:stone");
	}
}
