creativeTab = "_Shage";
maxStack = 1;
name = "itemSmallFlint";//名称
leaveContainerItem = false;//是否参与合成后残留在合成格中
repairable = false;//能否使用修复配方

addToCreative[0] = true;//是否添加到创造标签下

textureFile[0] = "flint1.png";
textureFile[1] = "flint2.png";
textureFile[2] = "flint3.png";
textureFile[3] = "flint4.png";

onUse[0] = "mod.loadScript('polish.js');";
onUse[1] = "mod.loadScript('polish.js');";
onUse[2] = "mod.loadScript('polish.js');";
onUse[3] = "mod.loadScript('polish.js');";
onUse[4] = "mod.loadScript('polish.js');";
//if(world.getBlockname(position)=='yegamolchattels:grindstone')

