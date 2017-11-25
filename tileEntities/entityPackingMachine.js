/*木质变异室*/

/*属性*/
name = "entityPackingMachine";//名称

/*特殊*/
//onItemSmelted = "";
ticksToSmelt = "400";
usedFuelLists = "fuel";
usedRecipeLists = "WoodenVariation";

/*触发器*/
onUpdate = "if(world.getContainerSlotItemName(position,0)!= null){mod.loadScript('WoodenVariationRoomWorking.js');};";