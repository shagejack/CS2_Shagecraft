name = "blockClayBrick";
material = "clay";
stepSound = "gravel";
creativeTab = "_Shage";
drop[0] = "minecraft:clay_ball 1-2";
tileEntity[0] = "entityData";
hasTileEntity[0] = true;
addToCreative[0] = true;
hardness[0] = 1.0;
toolClass[0] = "shovel";
harvestLevel[0] = 1;
textureFileXP[0] = "blockClayBrick0.png";
textureFileXN[0] = "blockClayBrick0.png";
textureFileYP[0] = "blockClayBrick0.png";
textureFileYN[0] = "blockClayBrick0.png";
textureFileZP[0] = "blockClayBrick0.png";
textureFileZN[0] = "blockClayBrick0.png";

onAdded[0] = "world.setTileEntityFloatData(position,'Progress',0.0);world.setTileEntityIntData(position,'Stage',0);world.setTileEntityIntData(position,'Count',20);";
onUpdate[0] = "mod.loadScript('firing.js');";
//onBreak[0] = "if(world.getTileEntityIntData(position,'Stage')!=0){world.setBlock(position,'minecraft:air');world.spawnItem(position,'minecraft:blockClayBrickFailed',1,2);}";

