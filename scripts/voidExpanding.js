x=position.x;
y=position.y;
z=position.z;

stable = 0;
var blocks = [world.getBlockName(x, y+1, z), world.getBlockName(x, y-1, z), world.getBlockName(x+1, y, z), world.getBlockName(x-1, y, z), world.getBlockName(x, y, z+1), world.getBlockName(x, y, z-1)];

for(var i=0;i<blocks.length;i++){
if(blocks[i] != "minecraft:air" && blocks[i] != "shagecraft:blockVoid"){
		switch(i){
		case 0:
		world.setBlock(x, y+1, z, "shagecraft:blockVoid");
		break;
		case 1:
		world.setBlock(x, y-1, z, "shagecraft:blockVoid");
		break;
		case 2:
		world.setBlock(x+1, y, z, "shagecraft:blockVoid");
		break;
		case 3:
		world.setBlock(x-1, y, z, "shagecraft:blockVoid");
		break;
		case 4:
		world.setBlock(x, y, z+1, "shagecraft:blockVoid");
		break;
		case 5:
		world.setBlock(x, y, z-1, "shagecraft:blockVoid");
		break;
		default:
		}
		stable = 1;
		//world.sendMessageToAllPlayers(blocks[i]);
	}
}

if(stable == 0){
	world.setBlockMetadata(position, 1);
}

