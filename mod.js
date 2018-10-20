
//方块

mod.addBlock("millstonepart.js", "fence");
mod.addBlock("millstone.js", "normal");
mod.addBlock("millstoneGUIBlock.js", "normal");
mod.addBlock("ore_a.js", "normal");
mod.addBlock("cauldron.js", "normal");
mod.addBlock("blockClayBrick.js", "normal");
mod.addBlock("blockClayBrickFailed.js", "normal");
mod.addBlock("charm.js","carpet");
mod.addBlock("shageEssenceCollecter.js","normal");
mod.addBlock("blockShageEssence.js","normal");
mod.addBlock("blockShageAltar.js","normal");
mod.addBlock("shieldStone.js","normal");
mod.addBlock("blockClayBrickHeater.js","normal");
mod.addBlock("woodstack.js","normal");
mod.addBlock("wooddust.js","gravity");
mod.addBlock("crackcoal.js","normal");
mod.addBlock("fan.js","normal");
mod.addBlock("jar.js","normal");
mod.addBlock("washingPlant.js","normal");
mod.addBlock("unfiredJar.js","normal");
mod.addBlock("blockClayBucket.js","carpet");
mod.addBlock("opHeater.js","normal");
mod.addBlock("scorchedEarth.js","normal");
mod.addBlock("oreCoal.js","normal");
mod.addBlock("blockTransformer.js","normal");
mod.addBlock("blockEndGame.js","normal");
mod.addBlock("blockVoid.js","normal");
mod.addBlock("blockBatteryContainer.js","normal");
mod.addBlock("blockMultiblock.js","normal");
mod.addBlock("blockIndustrialElectrolyzer.js","normal");
mod.addBlock("blockMultiblockOutput.js","normal");
mod.addBlock("BatteryCharger.js","normal");

//物品
mod.addItem("itemDebugTool.js", "normal");
mod.addItem("logo.js", "normal");
mod.addItem("ItemSmallFlintBroken.js", "normal");
mod.addItem("ItemSmallFlint.js", "normal");
mod.addItem("itemFuel.js", "normal");
mod.addItem("itemRaw.js", "normal");
mod.addItem("itemFirestarter.js", "normal");
mod.addItem("itemMachineParts.js", "normal");
mod.addItem("itemPebbleStick.js", "normal");
mod.addItem("ore_chunk_a.js", "normal");
mod.addItem("ore_impure_a.js", "normal");
mod.addItem("ore_processed_a.js", "normal");
mod.addItem("itemshaft.js", "normal");
mod.addItem("itemFlintGraver.js","normal");
mod.addItem("itemChalk.js","normal");
mod.addItem("shageEssence.js","normal");
mod.addItem("item_cracked_coal.js","normal");
mod.addItem("itemClayBucket.js","normal");
mod.addItem("itemUnfiredClayBucket.js","normal");
mod.addItem("itemThermometer.js","normal");
mod.addItem("itemUseless.js","normal");
mod.addItem("itemSieveNet.js","normal");
mod.addItem("shageOrb.js","normal");
mod.addItem("itemAlloyIngots.js","normal");
mod.addItem("itemA.js","normal");
mod.addItem("itemB.js","normal");
mod.addItem("itemC.js","normal");
mod.addItem("itemD.js","normal");
mod.addItem("industrialBattery.js","normal");
mod.addItem("itemMultimeter.js","normal");


//GUI
mod.addGui("millstoneGUI.js","chest");
mod.addGui("cauldronGUI.js","chest");
mod.addGui("shageAltarGUI.js","chest");
mod.addGui("washingPlantGUI.js","chest");
mod.addGui("jarGUI.js","chest");
mod.addGui("blockTransformerGUI.js","chest");
mod.addGui("blockBatteryContainerGUI.js","chest");
mod.addGui("blockIndustrialElectrolyzerGUI.js","chest");
mod.addGui("blockMultiblockOutputGUI.js","chest");
mod.addGui("batteryChargerGUI.js","chest");

//方块实体
mod.addTileEntity("entityData.js", "normal");
mod.addTileEntity("entityShageAltar.js", "chestBlock");
mod.addTileEntity("entityMillstoneGUIBlock.js","chestBlock");
mod.addTileEntity("entityCauldron.js","chestBlock");
mod.addTileEntity("entityWashingPlant.js","chestBlock");
mod.addTileEntity("entityJar.js","chestBlock");
mod.addTileEntity("entityTransformer.js","chestBlock");
mod.addTileEntity("entityBatteryContainer.js","chestBlock");
mod.addTileEntity("entityIndustrialElectrolyzer.js","chestBlock");
mod.addTileEntity("entityMultiblockOutput.js","chestBlock");
mod.addTileEntity("entityBatteryCharger.js","chestBlock");

//脚本

//配方
mod.addSmeltingRecipeFor("recipeBurn", "shagecraft:blank", "shagecraft:blank");
mod.addFuelFor("fuelForge", "shagecraft:itemFuel", 10);

//mod.addShapelessRecipeFor("vanilla", "RotaryCraft:rotarycraft_item_shaftcraft:2","shagecraft:itemRaw:12");
//mod.addShapelessRecipeFor("vanilla", "RotaryCraft:rotarycraft_item_shaftcraft","shagecraft:itemRaw:13");
//mod.removeRecipesByResult("ChromatiCraft:chromaticraft_item_placer:5");

//创造模式物品栏
mod.addCreativeTab("_Shage", "shagecraft:blockShageEssence:1");
