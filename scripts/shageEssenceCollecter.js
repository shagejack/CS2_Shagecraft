x=position.x;
y=position.y;
z=position.z;

mod.loadScript("apiRandomHandler.js");
if(world.getTileEntityIntData(position,'Counter')==0){
world.setTileEntityIntData(position,'Progress',world.getTileEntityIntData(position,'Progress')+1);
}

if(world.getTileEntityIntData(position,'UnstabilityCounter')==0){
world.setTileEntityFloatData(position,'UnstabilityTemp',world.getTileEntityFloatData(position,'UnstabilityPerm'));
}

if(world.getTileEntityIntData(position,'Progress')>1000){
	world.spawnItem(x,y+1,z,"shagecraft:shageEssence",1,0);
	world.setTileEntityIntData(position,'Counter',50);
	world.setTileEntityIntData(position,'Progress',0);
	world.setTileEntityIntData(position,'UnstabilityCounter',100);
	world.setTileEntityFloatData(position,'UnstabilityTemp',world.getTileEntityFloatData(position,'UnstabilityPerm')+1);
	if(world.getTileEntityFloatData(position,'UnstabilityPerm')<10.0){
	world.setTileEntityFloatData(position,'UnstabilityPerm',world.getTileEntityFloatData(position,'UnstabilityPerm')+0.01);
	}
}

if(world.getTileEntityIntData(position,'Counter')>1){
	world.setTileEntityIntData(position,'Counter',world.getTileEntityIntData(position,'Counter')-1);
}

if(world.getTileEntityIntData(position,'UnstabilityCounter')>0){
	world.setTileEntityIntData(position,'UnstabilityCounter',world.getTileEntityIntData(position,'UnstabilityCounter')-1);
}


if(world.getTileEntityIntData(position,'Counter')==1){
	world.setTileEntityIntData(position,'Counter',0);
	for(var i=0;i<10;i++){
		world.createExplosion(x+randomInteger(-15, 15),y+randomInteger(-15, 15),z+randomInteger(-15, 15),randomInteger(0, 100),true);
		}
}

if(Math.random()<world.getTileEntityFloatData(position,'UnstabilityTemp')&&world.getTileEntityIntData(position,'Counter')==0){
			switch(randomInteger(0, 3)){
		case 0:
		world.createExplosion(x+randomInteger(-5-(world.getTileEntityFloatData(position,'UnstabilityTemp')*20), 5+(world.getTileEntityFloatData(position,'UnstabilityTemp')*20)),y+randomInteger(-5-(world.getTileEntityFloatData(position,'UnstabilityTemp')*20), 5+(world.getTileEntityFloatData(position,'UnstabilityTemp')*20)),z+randomInteger(-5-(world.getTileEntityFloatData(position,'UnstabilityTemp')*20), 5+(world.getTileEntityFloatData(position,'UnstabilityTemp')*20)),randomInteger(0, 10+(world.getTileEntityFloatData(position,'UnstabilityTemp')*10)),false);
		break;
		case 1:
		world.createExplosion(x+randomInteger(-5-(world.getTileEntityFloatData(position,'UnstabilityTemp')*20), 5+(world.getTileEntityFloatData(position,'UnstabilityTemp')*20)),y+randomInteger(-5-(world.getTileEntityFloatData(position,'UnstabilityTemp')*20), 5+(world.getTileEntityFloatData(position,'UnstabilityTemp')*20)),z+randomInteger(-5-(world.getTileEntityFloatData(position,'UnstabilityTemp')*20), 5+(world.getTileEntityFloatData(position,'UnstabilityTemp')*20)),randomInteger(0, 10+(world.getTileEntityFloatData(position,'UnstabilityTemp')*10)),true);
		case 2:
		for(var i=0;i<100;i++){
		world.createThunderbolt(x+randomInteger(-5-(world.getTileEntityFloatData(position,'UnstabilityTemp')*20), 5+(world.getTileEntityFloatData(position,'UnstabilityTemp')*20)),y+randomInteger(-5-(world.getTileEntityFloatData(position,'UnstabilityTemp')*20), 5+(world.getTileEntityFloatData(position,'UnstabilityTemp')*20)),z+randomInteger(-5-(world.getTileEntityFloatData(position,'UnstabilityTemp')*20), 5+(world.getTileEntityFloatData(position,'UnstabilityTemp')*20)));
		}
		break;
		case 3:
		var dx = x+randomInteger(-15+(world.getTileEntityFloatData(position,'UnstabilityTemp')*10), 15+(world.getTileEntityFloatData(position,'UnstabilityTemp')*10));
		var dz = z+randomInteger(-15+(world.getTileEntityFloatData(position,'UnstabilityTemp')*10), 15+(world.getTileEntityFloatData(position,'UnstabilityTemp')*10));
		for(var p=0;p<255;p++){
			world.createExplosion(dx,255-p,dz,3,true);
   }
		default:
		world.createExplosion(x,y,z,0,false);
		}
}