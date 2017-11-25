world.setTileEntityIntData(position,"OreCount",102400+Math.random()*Math.random()*1000000);
world.setTileEntityIntData(position,"OreGenSpeed", Math.random()*90+50);

if(world.getBlockMetadata(position) == 0){
world.setTileEntityStringData(position,"OreType", "minecraft:iron_ore");
world.setTileEntityIntData(position,"OreMetadata", 0);
}
