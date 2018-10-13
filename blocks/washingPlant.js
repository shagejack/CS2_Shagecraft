name = "washingPlant";
material = "rock";
stepSound = "stone";
creativeTab = "_Shage";
drop[0] = "shagecraft:washingPlant";
tileEntity[0] = "entityWashingPlant";
hasTileEntity[0] = true;
addToCreative[0] = true;
hardness[0] = 1.0;
toolClass[0] = "pickaxe";
harvestLevel[0] = 1;
textureFileXP[0] = "washingplant0.png";
textureFileXN[0] = "washingplant0.png";
textureFileYP[0] = "washingplant1.png";
textureFileYN[0] = "washingplantBottom0.png";
textureFileZP[0] = "washingplant0.png";
textureFileZN[0] = "washingplant0.png";

onAdded[0] = "world.setTileEntityFloatData(position,'water',0);world.setTileEntityFloatData(position,'durability',100);";
onActivated[0] = "player.openGui('washingPlantGUI', position); result = true;";
onUpdate[0] = "mod.loadScript('washingplant.js');";

drop[1] = "shagecraft:washingPlant";
tileEntity[1] = "entityWashingPlant";
hasTileEntity[1] = true;
addToCreative[1] = true;
hardness[1] = 1.0;
toolClass[1] = "pickaxe";
harvestLevel[1] = 1;
textureFileXP[1] = "washingplant1.png";
textureFileXN[1] = "washingplant1.png";
textureFileYP[1] = "washingplant1.png";
textureFileYN[1] = "washingplantBottom0.png";
textureFileZP[1] = "washingplant1.png";
textureFileZN[1] = "washingplant1.png";

onActivated[1] = "player.openGui('washingPlantGUI', position); result = true;";
