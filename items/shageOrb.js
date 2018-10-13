name = "shageOrbA";
creativeTab = "_Shage";
maxStack = 1;

addToCreative[0] = true;
textureFile[0] = "shageOrbA0.png";

onUpdate[0] = "if(player.getItemname(player.getCurrentSlot())=='shagecraft:shageOrbA'){if(player.getStackFloatData(player.getCurrentSlot(),'Shage')==-1){player.setStackFloatData(player.getCurrentSlot(),'Shage',32);}}";
onUse[0] = "mod.loadScript('shageEssence.js')";
