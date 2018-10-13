x=player.getLookX();
y=player.getLookY();
z=player.getLookZ();

player.sendMessage("Stage:"+world.getTileEntityIntData(x,y-1,z,"Stage"));
player.sendMessage("Count:"+world.getTileEntityIntData(x,y-1,z,"Count"));
player.sendMessage("Progress:"+world.getTileEntityFloatData(x,y-1,z,"Progress"));