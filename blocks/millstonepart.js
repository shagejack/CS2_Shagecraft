name = "millstonepart";
material = "wood";
stepSound = "wood";
creativeTab = "_Shage";
drop[0] = "shagecraft:itemShaft";
hasTileEntity[0] = false;
addToCreative[0] = false;
hardness[0] = 1.0;
toolClass[0] = "axe";
harvestLevel[0] = 1;
textureFileXP[0] = "wood.png";
textureFileXN[0] = "wood.png";
textureFileYP[0] = "wood.png";
textureFileYN[0] = "wood.png";
textureFileZP[0] = "wood.png";
textureFileZN[0] = "wood.png";

onActivated[0] = "mod.loadScript('millstonepart.js');";
onUpdate[0] = "if(world.getBlockName(position.x,position.y-1,position.z)!='shagecraft:millstoneGUIBlock'||world.getTileEntityIntData(position.x,position.y-1,position.z,'complete')==0){world.setBlock(position,'minecraft:air');}";