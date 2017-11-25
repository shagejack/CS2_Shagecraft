var a=player.getItemMetadata(player.getCurrentSlot());
if(a<4)
  {if(Math.random()<0.02){player.setSlot(player.getCurrentSlot(),"shagecraft:itemSmallFlint",1,a+1);}}
else{player.setSlot(player.getCurrentSlot(),"shagecraft:itemSmallFlintBroken",1,0);};
//if(Math.random()<0.02){world.setBlock(position,"yegamolchattels:grindstone");};