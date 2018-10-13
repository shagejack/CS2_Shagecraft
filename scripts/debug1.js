x=player.getLookX();
y=player.getLookY();
z=player.getLookZ();

player.sendMessage("T:"+world.getTileEntityFloatData(x,y,z,"temperature"));
player.sendMessage("F:"+world.getTileEntityFloatData(x,y,z,"flammable"));
player.sendMessage("W:"+world.getTileEntityFloatData(x,y,z,"water"));
