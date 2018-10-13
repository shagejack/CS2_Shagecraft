x=position.x;
y=position.y;
z=position.z;
cur=-1;
space=0;
recipe=-1;
fire=0;

if(world.getTileEntityFloatData(position,"Durability")<=0){
	world.setBlock(position,"minecraft:air");
	world.createExplosion(position,1,false);
}

if(world.getTileEntityFloatData(position,"Durability")<5){
	world.setTileEntityFloatData(position,"Water",world.getTileEntityFloatData(position,"Water")-(Math.pow(world.getTileEntityFloatData(position,"Heat"),2)/1200000));
	if(world.getTileEntityFloatData(position,"Heat")>0){
	world.createExplosion(position,0,false);
	}
}

if(world.getTileEntityFloatData(position,"Water")<1000&&world.getBlockName(x,y+1,z)=="minecraft:water"&&world.getBlockMetadata(x,y+1,z)==0){
	world.setBlock(x,y+1,z,"minecraft:air");
	world.setTileEntityFloatData(position,"Water",1000);
}

for(var i=-1;i<2;i++){
	for(var u=-1;u<2;u++){
		var Bn = world.getBlockName(x+i,y-1,z+u);
		var Bm = world.getBlockMetadata(x+i,y-1,z+u);
		if(Bn=="minecraft:fire"){
			fire=fire+300;
		}
		if(Bn=="minecraft:torch"){
			fire=fire+15;
		}
		if(Bn=="minecraft:lava"&&Bm==0){
			fire=fire+100;
			if(Math.random()<0.0001){
				world.setBlock(x+i,y-1,z+u,"minecraft:stone");
			}
		}
	}
}

world.setTileEntityFloatData(position,"Heat",fire);

if(world.getTileEntityFloatData(position,"Water")>0&&world.getTileEntityFloatData(position,"Heat")>100&&world.getTileEntityFloatData(position,"Progress")<8){
	if(Math.random()*2000<world.getTileEntityFloatData(position,"Heat")){
		world.setTileEntityFloatData(position,"Progress",world.getTileEntityFloatData(position,"Progress")+1);
	}
	world.setTileEntityFloatData(position,"Water",world.getTileEntityFloatData(position,"Water")-(Math.pow(world.getTileEntityFloatData(position,"Heat"),2)/1200000));
}

if(world.getTileEntityFloatData(position,"Durability")>=(Math.pow(world.getTileEntityFloatData(position,"Heat"),2)/3000000)){
	if(Math.random()<(Math.pow(world.getTileEntityFloatData(position,"Heat"),2)/5000000)){
		world.setTileEntityFloatData(position,"Durability",world.getTileEntityFloatData(position,"Durability")-(Math.pow(world.getTileEntityFloatData(position,"Heat"),2)/100000000));
}
} else {
	world.setTileEntityFloatData(position,"Durability",0);
}
	
function canCook(slot){
	var name=world.getContainerSlotItemName(position,slot);
	var meta=world.getContainerSlotMetadata(position,slot);
	
	//配方检测接口
	var narr = ["minecraft:porkchop","minecraft:chicken","minecraft:beef","minecraft:potato","TwilightForest:item.meefRaw","harvestcraft:muttonrawItem","harvestcraft:turkeyrawItem","harvestcraft:rabbitrawItem","totemic:buffaloMeat","TwilightForest:item.venisonRaw","harvestcraft:calamarirawItem","harvestcraft:venisonrawItem","minecraft:rotten_flesh"];
	var marr = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	
	for(var o=0;o<narr.length;o++){
	if(name==narr[o]&&meta==marr[o]){
		return true;
	}
}
}

if(world.getTileEntityFloatData(position,"Progress")==8){
	for(var p=0;p<23;p++){
	if(canCook(p)){
		cur=p;
		break;
	}
	}
	

if(cur!=-1){
    N=world.getContainerSlotItemName(position,cur);
    M=world.getContainerSlotMetadata(position,cur);
	
	//配方接口
	Narr = ["minecraft:porkchop","minecraft:chicken","minecraft:beef","minecraft:potato","TwilightForest:item.meefRaw","harvestcraft:muttonrawItem","harvestcraft:turkeyrawItem","harvestcraft:rabbitrawItem","totemic:buffaloMeat","TwilightForest:item.venisonRaw","harvestcraft:calamarirawItem","harvestcraft:venisonrawItem","minecraft:rotten_flesh"];
	Marr = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	Carr = [1,1,1,1,1,1,1,1,1,1,1,1,4];
	rNarr = ["minecraft:cooked_porkchop","minecraft:cooked_chicken","minecraft:cooked_beef","minecraft:baked_potato","TwilightForest:item.meefSteak","harvestcraft:muttoncookedItem","harvestcraft:turkeycookedItem","harvestcraft:rabbitcookedItem","totemic:buffaloCookedMeat","TwilightForest:item.venisonCooked","harvestcraft:calamaricookedItem","harvestcraft:venisoncookedItem","Thaumcraft:ItemResource:4"];
	rMarr = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	rCarr = [1,1,1,1,1,1,1,1,1,1,1,1,1];
	
	for(var w=0;w<Narr.length;w++){
	if(N==Narr[w]&&M==Marr[w]){
		recipe=w;
		break;
	}
	
}

C=world.getContainerItemCount(position,Narr[recipe],Marr[recipe]);

	for(var a=0;a<23;a++){
	if(world.getContainerSlotItemName(position,a)===null||(world.getContainerSlotItemName(position,a)==rNarr[recipe]&&world.getContainerSlotMetadata(position,a)==rMarr[recipe]&&world.getContainerSlotStackSize(position,a)+rCarr[recipe]<=world.getContainerSlotMaxStackSize(position,a))){
	space=1;
	break;
	}
	}
	
	if(C>=Carr[recipe]){
	if(space==1){
		world.setTileEntityFloatData(position,"Progress",0);
		world.removeFromContainer(position,Narr[recipe],Carr[recipe],Marr[recipe]);
		world.addToContainer(position,rNarr[recipe],rCarr[recipe],rMarr[recipe]);
	}
	}



}
}


	

	