x=player.getLookX();
y=player.getLookY();
z=player.getLookZ();

unable = 0;

var layerA = [[6,6,3,6,2,6,3,6,6],
					[6,6,3,1,2,1,3,6,6],
					[3,3,0,1,2,1,0,3,3],
					[6,1,1,1,1,1,1,1,6],
					[2,2,2,1,4,1,2,2,2],
					[6,1,1,1,1,1,1,1,6],
					[3,3,0,1,2,1,0,3,3],
					[6,6,3,1,2,1,3,6,6],
					[6,6,3,6,2,6,3,6,6]];

var layerB = [[6,6,6,6,2,6,6,6,6],
					[6,6,6,6,2,6,6,6,6],
					[6,6,0,6,2,6,0,6,6],
					[6,6,6,6,6,6,6,6,6],
					[2,2,2,6,6,6,2,2,2],
					[6,6,6,6,6,6,6,6,6],
					[6,6,0,6,2,6,0,6,6],
					[6,6,6,6,2,6,6,6,6],
					[6,6,6,6,2,6,6,6,6]];
			
var layerC = [[6,6,6,6,6,6,6,6,6],
					[6,6,6,6,6,6,6,6,6],
					[6,6,0,6,6,6,0,6,6],
					[6,6,6,6,6,6,6,6,6],
					[6,6,6,6,6,6,6,6,6],
					[6,6,6,6,6,6,6,6,6],
					[6,6,0,6,6,6,0,6,6],
					[6,6,6,6,6,6,6,6,6],
					[6,6,6,6,6,6,6,6,6]];
					
var layerD = [[6,6,6,6,6,6,6,6,6],
					[6,6,6,6,6,6,6,6,6],
					[6,6,0,6,6,6,0,6,6],
					[6,6,6,6,6,6,6,6,6],
					[6,6,6,6,6,6,6,6,6],
					[6,6,6,6,6,6,6,6,6],
					[6,6,0,6,6,6,0,6,6],
					[6,6,6,6,6,6,6,6,6],
					[6,6,6,6,6,6,6,6,6]];
					
var layerE = [[6,6,6,6,6,6,6,6,6],
					[6,6,6,6,6,6,6,6,6],
					[6,6,7,6,6,6,7,6,6],
					[6,6,6,6,6,6,6,6,6],
					[6,6,6,6,6,6,6,6,6],
					[6,6,6,6,6,6,6,6,6],
					[6,6,7,6,6,6,7,6,6],
					[6,6,6,6,6,6,6,6,6],
					[6,6,6,6,6,6,6,6,6]];
					
var layerF = [[6,6,6,5,5,5,5,5,6,6,6],
					[6,6,5,8,8,8,8,8,5,6,6],
					[6,5,8,6,6,6,6,6,8,5,6],
					[5,8,6,6,6,6,6,6,6,8,5],
					[5,8,6,6,6,6,6,6,6,8,5],
					[5,8,6,6,6,6,6,6,6,8,5],
					[5,8,6,6,6,6,6,6,6,8,5],
					[5,8,6,6,6,6,6,6,6,8,5],
					[6,5,8,6,6,6,6,6,8,5,6],
					[6,6,5,8,8,8,8,8,5,6,6],
					[6,6,6,5,5,5,5,5,6,6,6]];

//A
for(var i=0;i<9;i++){
for(var u=0;u<9;u++){
		if(layerA[u][i]==0&&(world.getBlockName(x+4-i,y,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y,z+4-u)!=0)){unable++;break;}
		if(layerA[u][i]==1&&(world.getBlockName(x+4-i,y,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y,z+4-u)!=1)){unable++;break;}
		if(layerA[u][i]==2&&(world.getBlockName(x+4-i,y,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y,z+4-u)!=2)){unable++;break;}
		if(layerA[u][i]==3&&(world.getBlockName(x+4-i,y,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y,z+4-u)!=3)){unable++;break;}
		if(layerA[u][i]==4&&(world.getBlockName(x+4-i,y,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y,z+4-u)!=4)){unable++;break;}
		if(layerA[u][i]==5&&(world.getBlockName(x+4-i,y,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y,z+4-u)!=5)){unable++;break;}
		if(layerA[u][i]==7&&(world.getBlockName(x+4-i,y,z+4-u)!="shagecraft:blockShageEssence"||world.getBlockMetadata(x+4-i,y,z+4-u)!=1)){unable++;break;}
		if(layerA[u][i]==8&&(world.getBlockName(x+4-i,y,z+4-u)!="Avaritia:Resource_Block"||world.getBlockMetadata(x+4-i,y,z+4-u)!=0)){unable++;break;}
		if(unable>0){break;}
		}
		if(unable>0){break;}
}

//B
if(unable==0){

for(var i=0;i<9;i++){
for(var u=0;u<9;u++){
		if(layerB[u][i]==0&&(world.getBlockName(x+4-i,y+1,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+1,z+4-u)!=0)){unable++;break;}
		if(layerB[u][i]==1&&(world.getBlockName(x+4-i,y+1,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+1,z+4-u)!=1)){unable++;break;}
		if(layerB[u][i]==2&&(world.getBlockName(x+4-i,y+1,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+1,z+4-u)!=2)){unable++;break;}
		if(layerB[u][i]==3&&(world.getBlockName(x+4-i,y+1,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+1,z+4-u)!=3)){unable++;break;}
		if(layerB[u][i]==4&&(world.getBlockName(x+4-i,y+1,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+1,z+4-u)!=4)){unable++;break;}
		if(layerB[u][i]==5&&(world.getBlockName(x+4-i,y+1,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+1,z+4-u)!=5)){unable++;break;}
		if(layerB[u][i]==7&&(world.getBlockName(x+4-i,y+1,z+4-u)!="shagecraft:blockShageEssence"||world.getBlockMetadata(x+4-i,y+1,z+4-u)!=1)){unable++;break;}
		if(layerB[u][i]==8&&(world.getBlockName(x+4-i,y+1,z+4-u)!="Avaritia:Resource_Block"||world.getBlockMetadata(x+4-i,y+1,z+4-u)!=0)){unable++;break;}
		if(unable>0){break;}
		}
		if(unable>0){break;}
}

}		

//C
if(unable==0){

for(var i=0;i<9;i++){
for(var u=0;u<9;u++){
		if(layerC[u][i]==0&&(world.getBlockName(x+4-i,y+2,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+2,z+4-u)!=0)){unable++;break;}
		if(layerC[u][i]==1&&(world.getBlockName(x+4-i,y+2,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+2,z+4-u)!=1)){unable++;break;}
		if(layerC[u][i]==2&&(world.getBlockName(x+4-i,y+2,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+2,z+4-u)!=2)){unable++;break;}
		if(layerC[u][i]==3&&(world.getBlockName(x+4-i,y+2,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+2,z+4-u)!=3)){unable++;break;}
		if(layerC[u][i]==4&&(world.getBlockName(x+4-i,y+2,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+2,z+4-u)!=4)){unable++;break;}
		if(layerC[u][i]==5&&(world.getBlockName(x+4-i,y+2,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+2,z+4-u)!=5)){unable++;break;}
		if(layerC[u][i]==7&&(world.getBlockName(x+4-i,y+2,z+4-u)!="shagecraft:blockShageEssence"||world.getBlockMetadata(x+4-i,y+2,z+4-u)!=1)){unable++;break;}
		if(layerC[u][i]==8&&(world.getBlockName(x+4-i,y+2,z+4-u)!="Avaritia:Resource_Block"||world.getBlockMetadata(x+4-i,y+2,z+4-u)!=0)){unable++;break;}
		if(unable>0){break;}
		}
		if(unable>0){break;}
}

}	
	
//D
if(unable==0){

for(var i=0;i<9;i++){
for(var u=0;u<9;u++){
		if(layerD[u][i]==0&&(world.getBlockName(x+4-i,y+3,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+3,z+4-u)!=0)){unable++;break;}
		if(layerD[u][i]==1&&(world.getBlockName(x+4-i,y+3,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+3,z+4-u)!=1)){unable++;break;}
		if(layerD[u][i]==2&&(world.getBlockName(x+4-i,y+3,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+3,z+4-u)!=2)){unable++;break;}
		if(layerD[u][i]==3&&(world.getBlockName(x+4-i,y+3,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+3,z+4-u)!=3)){unable++;break;}
		if(layerD[u][i]==4&&(world.getBlockName(x+4-i,y+3,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+3,z+4-u)!=4)){unable++;break;}
		if(layerD[u][i]==5&&(world.getBlockName(x+4-i,y+3,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+3,z+4-u)!=5)){unable++;break;}
		if(layerD[u][i]==7&&(world.getBlockName(x+4-i,y+3,z+4-u)!="shagecraft:blockShageEssence"||world.getBlockMetadata(x+4-i,y+3,z+4-u)!=1)){unable++;break;}
		if(layerD[u][i]==8&&(world.getBlockName(x+4-i,y+3,z+4-u)!="Avaritia:Resource_Block"||world.getBlockMetadata(x+4-i,y+3,z+4-u)!=0)){unable++;break;}
		if(unable>0){break;}
		}
		if(unable>0){break;}
}

}

//E
if(unable==0){

for(var i=0;i<9;i++){
for(var u=0;u<9;u++){
		if(layerE[u][i]==0&&(world.getBlockName(x+4-i,y+4,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+4,z+4-u)!=0)){unable++;break;}
		if(layerE[u][i]==1&&(world.getBlockName(x+4-i,y+4,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+4,z+4-u)!=1)){unable++;break;}
		if(layerE[u][i]==2&&(world.getBlockName(x+4-i,y+4,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+4,z+4-u)!=2)){unable++;break;}
		if(layerE[u][i]==3&&(world.getBlockName(x+4-i,y+4,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+4,z+4-u)!=3)){unable++;break;}
		if(layerE[u][i]==4&&(world.getBlockName(x+4-i,y+4,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+4,z+4-u)!=4)){unable++;break;}
		if(layerE[u][i]==5&&(world.getBlockName(x+4-i,y+4,z+4-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+4-i,y+4,z+4-u)!=5)){unable++;break;}
		if(layerE[u][i]==7&&(world.getBlockName(x+4-i,y+4,z+4-u)!="shagecraft:blockShageEssence"||world.getBlockMetadata(x+4-i,y+4,z+4-u)!=1)){unable++;break;}
		if(layerE[u][i]==8&&(world.getBlockName(x+4-i,y+4,z+4-u)!="Avaritia:Resource_Block"||world.getBlockMetadata(x+4-i,y+4,z+4-u)!=0)){unable++;break;}
		if(unable>0){break;}
		}
		if(unable>0){break;}
}

}

//F
if(unable==0){

for(var i=0;i<11;i++){
for(var u=0;u<11;u++){
		if(layerF[u][i]==0&&(world.getBlockName(x+5-i,y+7,z+5-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+5-i,y+7,z+5-u)!=0)){unable++;break;}
		if(layerF[u][i]==1&&(world.getBlockName(x+5-i,y+7,z+5-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+5-i,y+7,z+5-u)!=1)){unable++;break;}
		if(layerF[u][i]==2&&(world.getBlockName(x+5-i,y+7,z+5-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+5-i,y+7,z+5-u)!=2)){unable++;break;}
		if(layerF[u][i]==3&&(world.getBlockName(x+5-i,y+7,z+5-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+5-i,y+7,z+5-u)!=3)){unable++;break;}
		if(layerF[u][i]==4&&(world.getBlockName(x+5-i,y+7,z+5-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+5-i,y+7,z+5-u)!=4)){unable++;break;}
		if(layerF[u][i]==5&&(world.getBlockName(x+5-i,y+7,z+5-u)!="shagecraft:blockEndGame"||world.getBlockMetadata(x+5-i,y+7,z+5-u)!=5)){unable++;break;}
		if(layerF[u][i]==7&&(world.getBlockName(x+5-i,y+7,z+5-u)!="shagecraft:blockShageEssence"||world.getBlockMetadata(x+5-i,y+7,z+5-u)!=1)){unable++;break;}
		if(layerF[u][i]==8&&(world.getBlockName(x+5-i,y+7,z+5-u)!="Avaritia:Resource_Block"||world.getBlockMetadata(x+5-i,y+7,z+5-u)!=0)){unable++;break;}
		if(unable>0){break;}
		}
		if(unable>0){break;}
}

}	

if(unable>0){
	player.sendMessage("\u8fd9\u5e76\u4e0d\u8db3\u4ee5\u6fc0\u53d1\u51fa\u5bf0\u5b87\u5d29\u6790\u4e4b\u529b");
} else {
	world.setTileEntityIntData(x, y, z, "active", 1);
	world.setTileEntityStringData(x, y, z, "owner", player.getUsername());
	player.sendMessage("\u5bf0\u5b87\u7684\u610f\u5fd7\u5df2\u7136\u89c9\u9192\uff0c\u8fd9\u4e2a\u4e16\u754c\u5c06\u8fce\u6765\u91cd\u542f\u3002");
}