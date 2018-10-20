name = "industrialBattery";
creativeTab = "_Shage";
maxStack = 1;

addToCreative[0] = true;
textureFile[0] = "industrialBattery0.png";

onUpdate[0] = "mod.loadScript('batteryRegistery.js');";
onRightClick[0] = "player.sendMessage(itemstack.getIntData('charge')+' RF / 1000000 RF');";