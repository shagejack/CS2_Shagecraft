name = "shageEssenceCollecter";
material = "rock";
stepSound = "stone";
creativeTab = "_Shage";
drop[0] = "minecraft:air";
tileEntity[0] = "entityData";
hasTileEntity[0] = true;
addToCreative[0] = true;
hardness[0] = 2.0;
toolClass[0] = "pickaxe";
harvestLevel[0] = 1;
textureFileXP[0] = "shageEssenceCollecter.png";
textureFileXN[0] = "shageEssenceCollecter.png";
textureFileYP[0] = "shageEssenceCollecterTop.png";
textureFileYN[0] = "shageEssenceCollecter.png";
textureFileZP[0] = "shageEssenceCollecter.png";
textureFileZN[0] = "shageEssenceCollecter.png";

resistance[0] = 10000;

onAdded[0] = "world.setTileEntityIntData(position,'Progress',0);world.setTileEntityIntData(position,'Counter',0);world.setTileEntityFloatData(position,'UnstabilityPerm',0.05);world.setTileEntityFloatData(position,'UnstabilityTemp',0.05);world.setTileEntityIntData(position,'UnstabilityCounter',0);";
onUpdate[0] = "mod.loadScript('shageEssenceCollecter.js');"