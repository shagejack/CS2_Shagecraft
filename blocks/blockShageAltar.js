name = "blockShageAltar";
material = "rock";
stepSound = "stone";
creativeTab = "_Shage";

drop[0] = "shagecraft:blockShageAltar";
addToCreative[0] = true;
hardness[0] = 1.0;
toolClass[0] = "pickaxe";
harvestLevel[0] = 1;
textureFileXP[0] = "blockShageAltar0.png";
textureFileXN[0] = "blockShageAltar0.png";
textureFileYP[0] = "shageEssenceCollecterTop.png";
textureFileYN[0] = "blockShageEssence1.png";
textureFileZP[0] = "blockShageAltar0.png";
textureFileZN[0] = "blockShageAltar0.png";

tileEntity[0] = "entityShageAltar";
hasTileEntity[0] = true;

onAdded[0] = "world.setTileEntityIntData(position,'Progress',0);world.setTileEntityFloatData(position,'Shage',0.0);world.setTileEntityFloatData(position,'maxShage',1000.0);world.setTileEntityIntData(position,'Tier',0);world.setTileEntityFloatData(position,'Unstability',1.0);";
onActivated[0] = "player.openGui('shageAltarGUI', position); result = true;";
onUpdate[0] = "mod.loadScript('shageAltar.js');";

resistance[0] = 10000;