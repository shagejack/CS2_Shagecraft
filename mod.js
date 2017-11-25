//blocks
mod.addBlock("cracked_coal_block.js", "normal");
mod.addBlock("firestarter.js", "normal");
mod.addBlock("packmachine.js", "normal");
mod.addBlock("logstack.js", "normal");
mod.addBlock("blockcompressedcookie.js", "normal");
mod.addBlock("ores.js", "normal");
mod.addBlock("siliconnitridebrick.js", "normal");
mod.addBlock("siliconnitrideguiblock.js", "normal");
mod.addBlock("windvalve.js", "normal");
mod.addBlock("checkvalve.js", "normal");
mod.addBlock("dieseloiltank.js", "normal");
//mod.addBlock("coaloredust.js", "normal");
//mod.addBlock("flamecoaloredust.js", "normal");
mod.addBlock("warningblock.js", "normal");
mod.addBlock("e1.js", "normal");
mod.addBlock("e_tr.js", "normal");
//mod.addBlock("lifegame.js", "normal");
mod.addBlock("e_stor.js", "normal");
mod.addBlock("oresource.js", "normal");
mod.addBlock("oresourceempty.js", "normal");
mod.addBlock("blockwheel.js", "normal");
mod.addBlock("projectileloom.js", "normal");

//items
mod.addItem("cracked_coal_drop.js", "normal");
mod.addItem("debugitem.js", "normal");
mod.addItem("logo.js", "normal");
mod.addItem("ItemSmallFlintBroken.js", "normal");
mod.addItem("ItemSmallFlint.js", "normal");
mod.addItem("jellycookie.js", "food");
mod.addItem("compressedcookie.js", "normal");
mod.addItem("stackcookie.js", "food");
mod.addItem("OreFinder.js", "normal");
mod.addItem("ZPEM.js", "normal");
mod.addItem("boldstring.js", "normal");
mod.addItem("itemFuel.js", "normal");
mod.addItem("coaldust.js", "normal");
mod.addItem("dusts.js", "normal");
mod.addItem("orechunks.js", "normal");
mod.addItem("copper_e.js", "normal");
mod.addItem("oresourceinfo.js", "normal");

//guis
mod.addGui("packingMachineGUI.js", "furnace");
mod.addGui("forgeGUI.js", "furnace");
mod.addGui("ProjectileloomGUI.js", "chest");

//tileEntities
mod.addTileEntity("entityPackingMachine.js", "furnace");
mod.addTileEntity("entityForge.js", "furnace");
mod.addTileEntity("entityTr.js", "normal");
mod.addTileEntity("entityStor.js", "normal");
mod.addTileEntity("entityCreativegen.js", "normal");
mod.addTileEntity("entityOresource.js", "normal");
mod.addTileEntity("entityProjectileloom.js", "chestBlock");

//scripts
mod.loadScript("apiRandomHandler.js");
mod.loadScript("apiCheckHandler.js");

//creativetabs
//mod.addCreativeTab("_Stone", "shagecraft:itemsmallFlint");
//mod.addCreativeTab("_Motlen", "shagecraft:itemSmallFlint");
//mod.addCreativeTab("_SteamPower", "shagecraft:itemSmallFlint");
//mod.addCreativeTab("_Eletrical", "shagecraft:itemSmallFlint");

//fuel&recipes
mod.addFuelFor("fuelForge", "shagecraft:itemFuel", 10);
mod.addSmeltingRecipeFor("recipeForge", "shagecraft:orechunks:0", "shagecraft:dusts:0");
