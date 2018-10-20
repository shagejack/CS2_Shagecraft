name = "blockMultiblockOutput";
material = "rock";
stepSound = "stone";
creativeTab = "_Shage";

drop[0] = "shagecraft:blockMultiblockOutput";
addToCreative[0] = true;
toolClass[0] = "pickaxe";
harvestLevel[0] = 1;
hardness[0] = 1.0;
textureFileXP[0] = "blockMultiblockOutputSide0.png";
textureFileXN[0] = "blockMultiblockOutputSide0.png";
textureFileYP[0] = "blockMultiblock0.png";
textureFileYN[0] = "blockMultiblock0.png";
textureFileZP[0] = "blockMultiblockOutputSide0.png";
textureFileZN[0] = "blockMultiblockOutputSide0.png";

tileEntity[0] = "entityMultiblockOutput";
hasTileEntity[0] = true;

//onAdded[0] = "world.setTileEntityIntData(position,'null',-1);";
onActivated[0] = "player.openGui('blockMultiblockOutputGUI', position); result = true;";
onUpdate[0] = "mod.loadScript('blockMultiblockOutput.js');";

