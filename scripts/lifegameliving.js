//var a=0
var b=0
/* var c=0
var d=0
var e=0
var f=0
var g=0
var h=0
var i=0
var j=0 */
/* if(world.getBlockName(position.x, position.y-1, position.z) === null){
a++;
}
if(world.getBlockName(position.x, position.y+1, position.z) === null){
world.setBlockAndMetadata(position.x, position.y+1, position.z, "shagecraft:lifegame", world.getBlockMetadata(position)+1);
a++;
} */
//死细胞计数
/* if(world.getBlockName(position.x+1, position.y, position.z) === null){
a++;
}
if(world.getBlockName(position.x-1, position.y, position.z) === null){
a++;
}
if(world.getBlockName(position.x, position.y, position.z+1) === null){
a++;
}
if(world.getBlockName(position.x, position.y, position.z-1) === null){
a++;
}
if(world.getBlockName(position.x+1, position.y, position.z+1) === null){
a++;
}
if(world.getBlockName(position.x-1, position.y, position.z-1) === null){
a++;
}
if(world.getBlockName(position.x-1, position.y, position.z+1) === null){
a++;
}
if(world.getBlockName(position.x+1, position.y, position.z-1) === null){
a++;
} */
//活细胞计数
if(world.getBlockName(position.x+1, position.y, position.z) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x+1, position.y, position.z) == 0){
b++;
}
if(world.getBlockName(position.x-1, position.y, position.z) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x-1, position.y, position.z) == 0){
b++;
}
if(world.getBlockName(position.x, position.y, position.z+1) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x, position.y, position.z+1) == 0){
b++;
}
if(world.getBlockName(position.x, position.y, position.z-1) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x, position.y, position.z-1) == 0){
b++;
}
if(world.getBlockName(position.x+1, position.y, position.z+1) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x+1, position.y, position.z+1) == 0){
b++;
}
if(world.getBlockName(position.x-1, position.y, position.z-1) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x-1, position.y, position.z-1) == 0){
b++;
}
if(world.getBlockName(position.x-1, position.y, position.z+1) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x-1, position.y, position.z+1) == 0){
b++;
}
if(world.getBlockName(position.x+1, position.y, position.z-1) == "shagecraft:lifegame"&&world.getBlockMetadata(position.x+1, position.y, position.z-1) == 0){
b++;
}

if(b<2){
world.setBlockAndMetadata(position, "shagecraft:lifegame", 1);
}

if(b>3){
world.setBlockAndMetadata(position, "shagecraft:lifegame", 1);
}

/* //死细胞复活
//1
if(world.getBlockName(position.x+1, position.y, position.z) === null){
  if(world.getBlockName(position.x+2, position.y, position.z) == "shagecraft:lifegame"){
c++;
}
if(world.getBlockName(position.x, position.y, position.z) == "shagecraft:lifegame"){
c++;
}
if(world.getBlockName(position.x+1, position.y, position.z+1) == "shagecraft:lifegame"){
c++;
}
if(world.getBlockName(position.x+1, position.y, position.z-1) == "shagecraft:lifegame"){
c++;
}
if(world.getBlockName(position.x+2, position.y, position.z+1) == "shagecraft:lifegame"){
c++;
}
if(world.getBlockName(position.x, position.y, position.z-1) == "shagecraft:lifegame"){
c++;
}
if(world.getBlockName(position.x, position.y, position.z+1) == "shagecraft:lifegame"){
c++;
}
if(world.getBlockName(position.x+2, position.y, position.z-1) == "shagecraft:lifegame"){
c++;
}
}
//2
if(world.getBlockName(position.x-1, position.y, position.z) === null){
if(world.getBlockName(position.x, position.y, position.z) == "shagecraft:lifegame"){
d++;
}
if(world.getBlockName(position.x-2, position.y, position.z) == "shagecraft:lifegame"){
d++;
}
if(world.getBlockName(position.x-1, position.y, position.z+1) == "shagecraft:lifegame"){
d++;
}
if(world.getBlockName(position.x-1, position.y, position.z-1) == "shagecraft:lifegame"){
d++;
}
if(world.getBlockName(position.x, position.y, position.z+1) == "shagecraft:lifegame"){
d++;
}
if(world.getBlockName(position.x-2, position.y, position.z-1) == "shagecraft:lifegame"){
d++;
}
if(world.getBlockName(position.x-2, position.y, position.z+1) == "shagecraft:lifegame"){
d++;
}
if(world.getBlockName(position.x, position.y, position.z-1) == "shagecraft:lifegame"){
d++;
}
}
//3
if(world.getBlockName(position.x, position.y, position.z+1) === null){
if(world.getBlockName(position.x+1, position.y, position.z+1) == "shagecraft:lifegame"){
e++;
}
if(world.getBlockName(position.x-1, position.y, position.z+1) == "shagecraft:lifegame"){
e++;
}
if(world.getBlockName(position.x, position.y, position.z+2) == "shagecraft:lifegame"){
e++;
}
if(world.getBlockName(position.x, position.y, position.z) == "shagecraft:lifegame"){
e++;
}
if(world.getBlockName(position.x+1, position.y, position.z+2) == "shagecraft:lifegame"){
e++;
}
if(world.getBlockName(position.x-1, position.y, position.z) == "shagecraft:lifegame"){
e++;
}
if(world.getBlockName(position.x-1, position.y, position.z+2) == "shagecraft:lifegame"){
e++;
}
if(world.getBlockName(position.x+1, position.y, position.z) == "shagecraft:lifegame"){
e++;
}
}
//4
if(world.getBlockName(position.x, position.y, position.z-1) === null){
if(world.getBlockName(position.x+1, position.y, position.z-1) == "shagecraft:lifegame"){
f++;
}
if(world.getBlockName(position.x-1, position.y, position.z-1) == "shagecraft:lifegame"){
f++;
}
if(world.getBlockName(position.x, position.y, position.z) == "shagecraft:lifegame"){
f++;
}
if(world.getBlockName(position.x, position.y, position.z-2) == "shagecraft:lifegame"){
f++;
}
if(world.getBlockName(position.x+1, position.y, position.z) == "shagecraft:lifegame"){
f++;
}
if(world.getBlockName(position.x-1, position.y, position.z-2) == "shagecraft:lifegame"){
f++;
}
if(world.getBlockName(position.x-1, position.y, position.z) == "shagecraft:lifegame"){
f++;
}
if(world.getBlockName(position.x+1, position.y, position.z-2) == "shagecraft:lifegame"){
f++;
}
}
//5
if(world.getBlockName(position.x+1, position.y, position.z+1) === null){
if(world.getBlockName(position.x+2, position.y, position.z+1) == "shagecraft:lifegame"){
g++;
}
if(world.getBlockName(position.x, position.y, position.z+1) == "shagecraft:lifegame"){
g++;
}
if(world.getBlockName(position.x+1, position.y, position.z+2) == "shagecraft:lifegame"){
g++;
}
if(world.getBlockName(position.x+1, position.y, position.z) == "shagecraft:lifegame"){
g++;
}
if(world.getBlockName(position.x+2, position.y, position.z+2) == "shagecraft:lifegame"){
g++;
}
if(world.getBlockName(position.x, position.y, position.z) == "shagecraft:lifegame"){
g++;
}
if(world.getBlockName(position.x, position.y, position.z+2) == "shagecraft:lifegame"){
g++;
}
if(world.getBlockName(position.x+2, position.y, position.z) == "shagecraft:lifegame"){
g++;
}
}
//6
if(world.getBlockName(position.x-1, position.y, position.z-1) === null){
if(world.getBlockName(position.x, position.y, position.z-1) == "shagecraft:lifegame"){
h++;
}
if(world.getBlockName(position.x-2, position.y, position.z-1) == "shagecraft:lifegame"){
h++;
}
if(world.getBlockName(position.x-1, position.y, position.z) == "shagecraft:lifegame"){
h++;
}
if(world.getBlockName(position.x-1, position.y, position.z-2) == "shagecraft:lifegame"){
h++;
}
if(world.getBlockName(position.x, position.y, position.z) == "shagecraft:lifegame"){
h++;
}
if(world.getBlockName(position.x-2, position.y, position.z-2) == "shagecraft:lifegame"){
h++;
}
if(world.getBlockName(position.x-2, position.y, position.z) == "shagecraft:lifegame"){
h++;
}
if(world.getBlockName(position.x, position.y, position.z-2) == "shagecraft:lifegame"){
h++;
}
}
//7
if(world.getBlockName(position.x-1, position.y, position.z+1) === null){
if(world.getBlockName(position.x, position.y, position.z+1) == "shagecraft:lifegame"){
i++;
}
if(world.getBlockName(position.x-2, position.y, position.z+1) == "shagecraft:lifegame"){
i++;
}
if(world.getBlockName(position.x-1, position.y, position.z+2) == "shagecraft:lifegame"){
i++;
}
if(world.getBlockName(position.x-1, position.y, position.z) == "shagecraft:lifegame"){
i++;
}
if(world.getBlockName(position.x, position.y, position.z+2) == "shagecraft:lifegame"){
i++;
}
if(world.getBlockName(position.x-2, position.y, position.z) == "shagecraft:lifegame"){
i++;
}
if(world.getBlockName(position.x-2, position.y, position.z+2) == "shagecraft:lifegame"){
i++;
}
if(world.getBlockName(position.x, position.y, position.z) == "shagecraft:lifegame"){
i++;
}
}
//8
if(world.getBlockName(position.x+1, position.y, position.z-1) === null){
if(world.getBlockName(position.x+2, position.y, position.z-1) == "shagecraft:lifegame"){
j++;
}
if(world.getBlockName(position.x, position.y, position.z-1) == "shagecraft:lifegame"){
j++;
}
if(world.getBlockName(position.x+1, position.y, position.z) == "shagecraft:lifegame"){
j++;
}
if(world.getBlockName(position.x+1, position.y, position.z-2) == "shagecraft:lifegame"){
j++;
}
if(world.getBlockName(position.x+2, position.y, position.z) == "shagecraft:lifegame"){
j++;
}
if(world.getBlockName(position.x, position.y, position.z-2) == "shagecraft:lifegame"){
j++;
}
if(world.getBlockName(position.x, position.y, position.z) == "shagecraft:lifegame"){
j++;
}
if(world.getBlockName(position.x+2, position.y, position.z-2) == "shagecraft:lifegame"){
j++;
}
}




if(c=3){
		world.setBlock(position.x+1, position.y, position.z, "shagecraft:lifegame");
}
if(d=3){
		world.setBlock(position.x-1, position.y, position.z, "shagecraft:lifegame");
}
if(e=3){
		world.setBlock(position.x, position.y, position.z+1, "shagecraft:lifegame");
}
if(f=3){
		world.setBlock(position.x, position.y, position.z-1, "shagecraft:lifegame");
}
if(g=3){
		world.setBlock(position.x+1, position.y, position.z+1, "shagecraft:lifegame");
}
if(h=3){
		world.setBlock(position.x-1, position.y, position.z-1, "shagecraft:lifegame");
}
if(i=3){
		world.setBlock(position.x-1, position.y, position.z+1, "shagecraft:lifegame");
}
if(j=3){
		world.setBlock(position.x+1, position.y, position.z-1, "shagecraft:lifegame");
}
 */