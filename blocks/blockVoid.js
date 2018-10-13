name = "blockVoid";
material = "rock";
stepSound = "stone";
creativeTab = "_Shage";
opacity = 0;
semiTransparent = false;//是否使用半透明纹理
transparent = true;//是否使用透明纹理

drop[0] = "shagecraft:ItemUseless";
tileEntity[0] = "entityData";
addToCreative[0] = false;
hardness[0] = 3.0;
resistance[0] = 100;
toolClass[0] = "pickaxe";
harvestLevel[0] = 10;
textureFileXP[0] = "blockVoidUnstable.png";
textureFileXN[0] = "blockVoidUnstable.png";
textureFileYP[0] = "blockVoidUnstable.png";
textureFileYN[0] = "blockVoidUnstable.png";
textureFileZP[0] = "blockVoidUnstable.png";
textureFileZN[0] = "blockVoidUnstable.png";
light[0] = 15;
hasCollision[0] = true;
tileTransparent[0] = true;

onUpdate[0] = "mod.loadScript('voidExpanding.js');";

drop[1] = "shagecraft:ItemUseless";
tileEntity[1] = "entityData";
addToCreative[1] = true;
hardness[1] = -1.0;
resistance[1] = 1000000000;
toolClass[1] = "pickaxe";
harvestLevel[1] = 10000;
textureFileXP[1] = "blank.png";
textureFileXN[1] = "blank.png";
textureFileYP[1] = "blank.png";
textureFileYN[1] = "blank.png";
textureFileZP[1] = "blank.png";
textureFileZN[1] = "blank.png";
light[1] = 15;
hasCollision[1] = true;
tileTransparent[1] = true;

onUpdate[1] = "mod.loadScript('restart.js');";
