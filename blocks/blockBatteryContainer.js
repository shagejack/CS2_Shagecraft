name = "blockBatteryContainer";
material = "rock";
stepSound = "stone";
creativeTab = "_Shage";

drop[0] = "shagecraft:blockBatteryContainer";
addToCreative[0] = true;
hardness[0] = 1.0;
toolClass[0] = "pickaxe";
harvestLevel[0] = 1;
textureFileXP[0] = "blockBatteryContainerSide0.png";
textureFileXN[0] = "blockBatteryContainerSide0.png";
textureFileYP[0] = "blockBatteryContainerTop0.png";
textureFileYN[0] = "blockBatteryContainerBottom0.png";
textureFileZP[0] = "blockBatteryContainerSide0.png";
textureFileZN[0] = "blockBatteryContainerSide0.png";

tileEntity[0] = "entityBatteryContainer";
hasTileEntity[0] = true;

onAdded[0] = "world.setTileEntityIntData(position,'charge',0);world.setTileEntityIntData(position,'maxCharge',5000000);";
onActivated[0] = "player.openGui('blockBatteryContainerGUI', position); result = true;";
onUpdate[0] = "mod.loadScript('blockBatteryContainer.js');";

//中压
drop[1] = "shagecraft:blockBatteryContainer:1";
addToCreative[1] = true;
hardness[1] = 1.0;
toolClass[1] = "pickaxe";
harvestLevel[1] = 1;
textureFileXP[1] = "blockBatteryContainerSide1.png";
textureFileXN[1] = "blockBatteryContainerSide1.png";
textureFileYP[1] = "blockBatteryContainerTop1.png";
textureFileYN[1] = "blockBatteryContainerBottom1.png";
textureFileZP[1] = "blockBatteryContainerSide1.png";
textureFileZN[1] = "blockBatteryContainerSide1.png";

tileEntity[1] = "entityBatteryContainer";
hasTileEntity[1] = true;

onAdded[1] = "world.setTileEntityIntData(position,'charge',0);world.setTileEntityIntData(position,'maxCharge',10000000);";
onActivated[1] = "player.openGui('blockBatteryContainerGUI', position); result = true;";
onUpdate[1] = "mod.loadScript('blockBatteryContainer.js');";

//高压
drop[2] = "shagecraft:blockBatteryContainer";
addToCreative[2] = true;
hardness[2] = 1.0;
toolClass[2] = "pickaxe";
harvestLevel[2] = 1;
textureFileXP[2] = "blockBatteryContainerSide2.png";
textureFileXN[2] = "blockBatteryContainerSide2.png";
textureFileYP[2] = "blockBatteryContainerTop2.png";
textureFileYN[2] = "blockBatteryContainerBottom2.png";
textureFileZP[2] = "blockBatteryContainerSide2.png";
textureFileZN[2] = "blockBatteryContainerSide2.png";

tileEntity[2] = "entityBatteryContainer";
hasTileEntity[2] = true;

onAdded[2] = "world.setTileEntityIntData(position,'charge',0);world.setTileEntityIntData(position,'maxCharge',200000000);";
onActivated[2] = "player.openGui('blockBatteryContainerGUI', position); result = true;";
onUpdate[2] = "mod.loadScript('blockBatteryContainer.js');";



