var dx = world.getTileEntityIntData(position,"destinyX");
var dy = world.getTileEntityIntData(position,"destinyY");
var dz = world.getTileEntityIntData(position,"destinyZ");
var x = position.x;
var y = position.y;
var z = position.z;
if(Math.pow(x-dx, 2)+Math.pow(y-dy, 2)+Math.pow(z-dz, 2) <= 10){
if(world.getTileEntityIntData(position,"e")>=0&&world.getTileEntityIntData(world.getTileEntityIntData(position,"destinyX"), world.getTileEntityIntData(position,"destinyY"),world.getTileEntityIntData(position,"destinyZ"), "e")>0&&world.getTileEntityIntData(position,"e")<256){
world.setTileEntityIntData(position,"e",world.getTileEntityIntData(position,"e")+1);
world.setTileEntityIntData(world.getTileEntityIntData(position,"destinyX"),world.getTileEntityIntData(position,"destinyY"),world.getTileEntityIntData(position,"destinyZ"), "e", world.getTileEntityIntData(world.getTileEntityIntData(world.getTileEntityIntData(position,"destinyX"),world.getTileEntityIntData(position,"destinyY"),world.getTileEntityIntData(position,"destinyZ"),"e"))-1);
}}
if(world.getTileEntityIntData(position.x,position.y-1,position.z,"e")>0&&world.getTileEntityIntData(position,"e")<256&&world.getBlockName(position.x,position.y-1,position.z) != "shagecraft:e_stor"){
world.setTileEntityIntData(position,"e",world.getTileEntityIntData(position,"e")+1);
world.setTileEntityIntData(position.x,position.y-1,position.z,"e",world.getTileEntityIntData(position,"e")-1);
}