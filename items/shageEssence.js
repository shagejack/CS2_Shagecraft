name = "shageEssence";
creativeTab = "_Shage";
maxStack = 1;

addToCreative[0] = true;
textureFile[0] = "shageEssence0.png";

onUpdate[0] = "if(player.getItemname(player.getCurrentSlot())=='shagecraft:shageEssence'){if(player.getStackFloatData(player.getCurrentSlot(),'Shage')==-1){player.setStackFloatData(player.getCurrentSlot(),'Shage',16);}if(player.getStackFloatData(player.getCurrentSlot(),'Shage')==0){player.clearSlot(player.getCurrentSlot());}}";
onUse[0] = "mod.loadScript('shageEssence.js')";
