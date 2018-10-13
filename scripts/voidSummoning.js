x=position.x;
y=position.y;
z=position.z;

if(world.getTileEntityIntData(position, "active") == 1){
	world.setTileEntityIntData(position, "activeTime", world.getTileEntityIntData(x, y, z, "activeTime") + 1);
	world.sendMessageToAllPlayers("\u4e16\u754c\u91cd\u542f\u8fdb\u7a0b:"+ world.getTileEntityIntData(x, y, z, "activeTime") + "%");
}

if(world.getTileEntityIntData(x, y, z, "activeTime") == 1){
	world.sendMessageToAllPlayers(world.getTileEntityStringData(position,"owner") +"\u5728(" + x + "," + y + "," + z + ")\u542f\u52a8\u4e86\u4e16\u754c\u91cd\u542f\u8fdb\u7a0b\uff01");
	world.setTileEntityIntData(position, "activeTime", 2);
}

if(world.getTileEntityIntData(x, y, z, "activeTime") == 20){
	if(world.getBlockName(x+2, y+4, z+2) == "shagecraft:blockShageEssence" && world.getBlockMetadata(x+2, y+4, z+2) == 1 && world.getBlockName(x-2, y+4, z+2) == "shagecraft:blockShageEssence" && world.getBlockMetadata(x-2, y+4, z+2) == 1 && world.getBlockName(x+2, y+4, z-2) == "shagecraft:blockShageEssence" && world.getBlockMetadata(x+2, y+4, z-2) == 1 && world.getBlockName(x-2, y+4, z-2) == "shagecraft:blockShageEssence" && world.getBlockMetadata(x-2, y+4, z-2) == 1){
		world.createThunderbolt(x+2, y+4, z+2);
		world.createThunderbolt(x-2, y+4, z+2);
		world.createThunderbolt(x+2, y+4, z-2);
		world.createThunderbolt(x-2, y+4, z-2);
		world.setBlock(x+2, y+4, z+2, "minecraft:air");
		world.setBlock(x-2, y+4, z+2, "minecraft:air");
		world.setBlock(x+2, y+4, z-2, "minecraft:air");
		world.setBlock(x-2, y+4, z-2, "minecraft:air");
		world.setTileEntityIntData(position, "activeTime", 21);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
}

if(world.getTileEntityIntData(x, y, z, "activeTime") > 40){
	var a = world.getTileEntityIntData(x, y, z, "activeTime")%23;
	switch(a){
	case 0:
	if(world.getBlockName(x+3,y+7,z+3) == "Avaritia:Resource_Block" && world.getBlockMetadata(x+3,y+7,z+3) == 0){
	world.createExplosion(x+3,y+8,z+3,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 1:
	if(world.getBlockName(x+4,y+7,z+2) == "Avaritia:Resource_Block" && world.getBlockMetadata(x+4,y+7,z+2) == 0){
	world.createExplosion(x+4,y+8,z+2,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 2:
	if(world.getBlockName(x+4,y+7,z+1) == "Avaritia:Resource_Block" && world.getBlockMetadata(x+4,y+7,z+1) == 0){
	world.createExplosion(x+4,y+7,z+1,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 3:
	if(world.getBlockName(x+4,y+7,z) == "Avaritia:Resource_Block" && world.getBlockMetadata(x+4,y+7,z) == 0){
	world.createExplosion(x+4,y+8,z,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 4:
	if(world.getBlockName(x+4,y+7,z-1) == "Avaritia:Resource_Block" && world.getBlockMetadata(x+4,y+7,z-1) == 0){
	world.createExplosion(x+4,y+8,z-1,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 5:
	if(world.getBlockName(x+4,y+7,z-2) == "Avaritia:Resource_Block" && world.getBlockMetadata(x+4,y+7,z-2) == 0){
	world.createExplosion(x+4,y+8,z-2,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 6:
	if(world.getBlockName(x+3,y+7,z-3) == "Avaritia:Resource_Block" && world.getBlockMetadata(x+3,y+7,z-3) == 0){
	world.createExplosion(x+3,y+8,z-3,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 7:
	if(world.getBlockName(x+2,y+7,z-4) == "Avaritia:Resource_Block" && world.getBlockMetadata(x+2,y+7,z-4) == 0){
	world.createExplosion(x+2,y+8,z-4,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 8:
	if(world.getBlockName(x+1,y+7,z-4) == "Avaritia:Resource_Block" && world.getBlockMetadata(x+1,y+7,z-4) == 0){
	world.createExplosion(x+1,y+8,z-4,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 9:
	if(world.getBlockName(x,y+7,z-4) == "Avaritia:Resource_Block" && world.getBlockMetadata(x,y+7,z-4) == 0){
	world.createExplosion(x,y+8,z-4,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 10:
	if(world.getBlockName(x-1,y+7,z-4) == "Avaritia:Resource_Block" && world.getBlockMetadata(x-1,y+7,z-4) == 0){
	world.createExplosion(x-1,y+8,z-4,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 11:
	if(world.getBlockName(x-2,y+7,z-4) == "Avaritia:Resource_Block" && world.getBlockMetadata(x-2,y+7,z-4) == 0){
	world.createExplosion(x-2,y+8,z-4,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 12:
	if(world.getBlockName(x-3,y+7,z-3) == "Avaritia:Resource_Block" && world.getBlockMetadata(x-3,y+7,z-3) == 0){
	world.createExplosion(x-3,y+8,z-3,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 13:
	if(world.getBlockName(x-4,y+7,z-2) == "Avaritia:Resource_Block" && world.getBlockMetadata(x-4,y+7,z-2) == 0){
	world.createExplosion(x-4,y+8,z-2,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 14:
	if(world.getBlockName(x-4,y+7,z-1) == "Avaritia:Resource_Block" && world.getBlockMetadata(x-4,y+7,z-1) == 0){
	world.createExplosion(x-4,y+8,z-1,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 15:
	if(world.getBlockName(x-4,y+7,z) == "Avaritia:Resource_Block" && world.getBlockMetadata(x-4,y+7,z) == 0){
	world.createExplosion(x-4,y+8,z,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 16:
	if(world.getBlockName(x-4,y+7,z+1) == "Avaritia:Resource_Block" && world.getBlockMetadata(x-4,y+7,z+1) == 0){
	world.createExplosion(x-4,y+8,z+1,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 17:
	if(world.getBlockName(x-4,y+7,z+2) == "Avaritia:Resource_Block" && world.getBlockMetadata(x-4,y+7,z+2) == 0){
	world.createExplosion(x-4,y+8,z+2,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 18:
	if(world.getBlockName(x-3,y+7,z+3) == "Avaritia:Resource_Block" && world.getBlockMetadata(x-3,y+7,z+3) == 0){
	world.createExplosion(x-3,y+8,z+3,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 19:
	if(world.getBlockName(x-2,y+7,z+4) == "Avaritia:Resource_Block" && world.getBlockMetadata(x-2,y+7,z+4) == 0){
	world.createExplosion(x-2,y+8,z+4,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 20:
	if(world.getBlockName(x-1,y+7,z+4) == "Avaritia:Resource_Block" && world.getBlockMetadata(x-1,y+7,z+4) == 0){
	world.createExplosion(x-1,y+8,z+4,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 21:
	if(world.getBlockName(x,y+7,z+4) == "Avaritia:Resource_Block" && world.getBlockMetadata(x,y+7,z+4) == 0){
	world.createExplosion(x,y+8,z+4,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 22:
	if(world.getBlockName(x+1,y+7,z+4) == "Avaritia:Resource_Block" && world.getBlockMetadata(x+1,y+7,z+4) == 0){
	world.createExplosion(x+1,y+8,z+4,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	case 23:
	if(world.getBlockName(x+2,y+7,z+4) == "Avaritia:Resource_Block" && world.getBlockMetadata(x+2,y+7,z+4) == 0){
	world.createExplosion(x+2,y+8,z+4,3,false);
	} else {
		world.setTileEntityIntData(position, "active", 0);
		world.setTileEntityIntData(position, "activeTime", 0);
		world.sendMessageToAllPlayers("\u91cd\u542f\u8fdb\u7a0b\u7ec8\u6b62\u2026\u2026\u8fd9\u91cc\u5c11\u4e86\u4e9b\u4ec0\u4e48\u3002");
	}
	break;
	
	default:

	}
}

if(world.getTileEntityIntData(x, y, z, "activeTime") > 70){
	world.createExplosion(x,y+7,z,2,true);
}
	
if(world.getTileEntityIntData(x, y, z, "activeTime") == 100){
	for(var i=255;i>0;i--){
		world.createExplosion(x,i,z,10,true);
	}
	
	for(var i=0;i<32;i++){
	for(var o=0;o<32;o++){
		for(var u=0;u<32;u++){
if((Math.pow(i,2)+Math.pow(o,2)+Math.pow(u,2))<Math.pow(16,2)){
  if(world.getBlockName(x+i, y+o, z+u)!="minecraft:air"){
world.setBlock(x+i, y+o, z+u, "shagecraft:blockVoid");
	}
	if(world.getBlockName(x+i, y-o, z-u)!="shagecraft:air"){
world.setBlock(x+i, y-o, z-u, "shagecraft:blockVoid");
}
	if(world.getBlockName(x+i, y+o, z-u)!="minecraft:air"){
world.setBlock(x+i, y+o, z-u, "shagecraft:blockVoid");
}
	if(world.getBlockName(x+i, y-o, z+u)!="minecraft:air"){
world.setBlock(x+i, y-o, z+u, "shagecraft:blockVoid");
}
	if(world.getBlockName(x-i, y+o, z+u)!="minecraft:air"){
world.setBlock(x-i, y+o, z+u, "shagecraft:blockVoid");
}
	if(world.getBlockName(x-i, y-o, z-u)!="minecraft:air"){
world.setBlock(x-i, y-o, z-u, "shagecraft:blockVoid");
}
	if(world.getBlockName(x-i, y+o, z-u)!="minecraft:air"){
world.setBlock(x-i, y+o, z-u, "shagecraft:blockVoid");
}
	if(world.getBlockName(x-i, y-o, z+u)!="minecraft:air"){
world.setBlock(x-i, y-o, z+u, "shagecraft:blockVoid");
	}
}
}
}
}


}