/*属性*/
name = "entityForge";//名称

/*特殊*/
//onItemSmelted = "";
ticksToSmelt = "18000";
usedFuelLists = "fuelForge";
usedRecipeLists = "recipeForge";

/*触发器*/
//onUpdate = "mod.loadScript('ForgeWorking.js');";
onItemSmelted = "mod.loadScript('forgeFuel.js')";