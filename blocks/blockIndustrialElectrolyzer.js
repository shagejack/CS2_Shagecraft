name = "blockIndustrialElectrolyzer";
material = "rock";
stepSound = "stone";
creativeTab = "_Shage";

drop[0] = "shagecraft:blockIndustrialElectrolyzer";
addToCreative[0] = true;
hardness[0] = 1.0;
toolClass[0] = "pickaxe";
harvestLevel[0] = 1;
textureFileXP[0] = "blockIndustrialElectrolyzerSide0.png";
textureFileXN[0] = "blockIndustrialElectrolyzerSide0.png";
textureFileYP[0] = "blockIndustrialElectrolyzerTop0.png";
textureFileYN[0] = "blockIndustrialElectrolyzerBottom0.png";
textureFileZP[0] = "blockIndustrialElectrolyzerSide0.png";
textureFileZN[0] = "blockIndustrialElectrolyzerSide0.png";

tileEntity[0] = "entityIndustrialElectrolyzer";
hasTileEntity[0] = true;

onAdded[0] = "world.setTileEntityIntData(position,'recipe',-1);world.setTileEntityIntData(position,'complete',0);world.setTileEntityIntData(position,'working',0);world.setTileEntityIntData(position,'progress',0);world.setTileEntityIntData(position,'maxProgress',0);";
onActivated[0] = "if(world.getTileEntityIntData(position,'complete') == 1){player.openGui('blockIndustrialElectrolyzerGUI', position); result = true;} else {player.sendMessage('\u770b\u8d77\u6765\u4ec0\u4e48\u5730\u65b9\u51fa\u4e86\u70b9\u95ee\u9898\u2026\u2026');}";
onUpdate[0] = "mod.loadScript('blockIndustrialElectrolyzer.js');";


