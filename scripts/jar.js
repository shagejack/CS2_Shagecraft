x=position.x;
y=position.y;
z=position.z;

if(world.getBlockName(x,y+1,z)=="shagecraft:wooddust"&&world.getBlockName(x,y-1,z)=="shagecraft:woodstack"&&world.getBlockMetadata(x,y-1,z)==1&&world.getBlockName(x+1,y,z)!="minecraft:air"&&world.getBlockName(x-1,y,z)!="minecraft:air"&&world.getBlockName(x,y,z+1)!="minecraft:air"&&world.getBlockName(x,y,z-1)!="minecraft:air"){
  if(world.getTileEntityFloatData(x,y-1,z,"temperature")>50){
  world.setTileEntityFloatData(x,y-1,z,"temperature",world.getTileEntityFloatData(x,y-1,z,"temperature")-Math.random()*10);
  world.setTileEntityFloatData(position,"temperature",world.getTileEntityFloatData(x,y-1,z,"temperature"));
  }
} else {
  world.setTileEntityFloatData(position,"temperature",0);
}


for(i=0;i<=3;i++){
if(world.getContainerSlotItemName(position,i)=="shagecraft:ore_impure_a"){
	
  if(world.getContainerSlotMetadata(position,i)==1){
    if(world.getTileEntityFloatData(position,"temperature")>=1800){
      if(world.getStackIntData(position,i,"process")<100){
		  if(Math.random()<0.5){
		  if(Math.random()<(world.getTileEntityFloatData(x,y-1,z,"temperature")/1000-1.5)){
        world.setStackIntData(position,i,"process",world.getStackIntData(position,i,"process")+1);
		  }
		  }
        if(world.getStackIntData(position,i,"purity")<100){
		if(world.getTileEntityFloatData(x,y-1,z,"temperature")<2000){
        if(Math.random()<0.01){
        world.setStackIntData(position,i,"purity",world.getStackIntData(position,i,"purity")+(3-Math.floor(world.getStackIntData(position,i,"temperature")/1000)));
        }
	} else {
		if(Math.random()<0.003){
        world.setStackIntData(position,i,"purity",world.getStackIntData(position,i,"purity")+(3-Math.floor(world.getStackIntData(position,i,"temperature")/1000)));
        }
	}
			
		
      }
      if(world.getTileEntityFloatData(position,"temperature")>=2200){
		  if(world.getStackIntData(position,i,"mass")>0){
        world.setStackIntData(position,i,"mass",world.getStackIntData(position,i,"mass")-Math.floor(Math.random()*world.getTileEntityFloatData(position,"temperature")*0.5));
		  } else {
		 world.clearContainerSlot(position,i);
		  }
      }
    } else {
      var mass = world.getStackIntData(position,i,"mass");
      var purity = world.getStackIntData(position,i,"purity");
      world.setContainerSlot(position,i, "shagecraft:ore_processed_a", 1, 1);
      world.setStackIntData(position,i,"mass",mass);
      world.setStackIntData(position,i,"purity",purity);
	}
    }
    }
  }
}
// //Slot 1
// if(world.getContainerSlotItemName(position,1)=="shagecraft:ore_impure_a"){
//   if(world.getContainerSlotMetadata(position,1)==0){
//     if(world.getTileEntityFloatData(position,"temperature")>=1400){
//     world.setContainerSlot(position,1, "shagecraft:ore_processed_a", 1, 0)
//     }
//   }
//   if(world.getContainerSlotMetadata(position,1)==1){
//     if(world.getTileEntityFloatData(position,"temperature")>=1800){
//       if(world.getStackIntData(position,1,"process")<100){
//         world.setStackIntData(position,1,"process",world.getStackIntData(position,1,"process")+1);
//         if(world.getStackIntData(position,1,"purity")<100){
//           if(Math.random()<0.08){
//         world.setStackIntData(position,1,"purity",world.getStackIntData(position,1,"purity")+1);
//         }
//       }
//       if(world.getTileEntityFloatData(position,"temperature")>=2200){
//         world.setStackIntData(position,1,"mass",world.getStackIntData(position,1,"mass")-Math.random()*1500);
//       }
//     } else {
//       var mass = world.getStackIntData(position,1,"mass");
//       var purity = world.getStackIntData(position,1,"purity");
//       world.setContainerSlot(position,1, "shagecraft:ore_processed_a", 1, 1);
//       world.setStackIntData(position,1,"mass",mass);
//       world.setStackIntData(position,1,"purity",purity);
//     }
//     }
//   }
// }
// //Slot 2
// if(world.getContainerSlotItemName(position,2)=="shagecraft:ore_impure_a"){
//   if(world.getContainerSlotMetadata(position,2)==0){
//     if(world.getTileEntityFloatData(position,"temperature")>=1400){
//     world.setContainerSlot(position,2, "shagecraft:ore_processed_a", 1, 0)
//     }
//   }
//   if(world.getContainerSlotMetadata(position,2)==1){
//     if(world.getTileEntityFloatData(position,"temperature")>=1800){
//       if(world.getStackIntData(position,2,"process")<100){
//         world.setStackIntData(position,2,"process",world.getStackIntData(position,2,"process")+1);
//         if(world.getStackIntData(position,2,"purity")<100){
//           if(Math.random()<0.08){
//         world.setStackIntData(position,2,"purity",world.getStackIntData(position,2,"purity")+1);
//         }
//       }
//       if(world.getTileEntityFloatData(position,"temperature")>=2200){
//         world.setStackIntData(position,2,"mass",world.getStackIntData(position,2,"mass")-Math.random()*1500);
//       }
//     } else {
//       var mass = world.getStackIntData(position,2,"mass");
//       var purity = world.getStackIntData(position,2,"purity");
//       world.setContainerSlot(position,2, "shagecraft:ore_processed_a", 1, 1);
//       world.setStackIntData(position,2,"mass",mass);
//       world.setStackIntData(position,2,"purity",purity);
//     }
//     }
//   }
// }
// //Slot 3
// if(world.getContainerSlotItemName(position,3)=="shagecraft:ore_impure_a"){
//   if(world.getContainerSlotMetadata(position,3)==0){
//     if(world.getTileEntityFloatData(position,"temperature")>=1400){
//     world.setContainerSlot(position,3, "shagecraft:ore_processed_a", 1, 0)
//     }
//   }
//   if(world.getContainerSlotMetadata(position,3)==1){
//     if(world.getTileEntityFloatData(position,"temperature")>=1800){
//       if(world.getStackIntData(position,3,"process")<100){
//         world.setStackIntData(position,3,"process",world.getStackIntData(position,3,"process")+1);
//         if(world.getStackIntData(position,3,"purity")<100){
//           if(Math.random()<0.08){
//         world.setStackIntData(position,3,"purity",world.getStackIntData(position,3,"purity")+1);
//         }
//       }
//       if(world.getTileEntityFloatData(position,"temperature")>=2200){
//         world.setStackIntData(position,3,"mass",world.getStackIntData(position,3,"mass")-Math.random()*1500);
//       }
//     } else {
//       var mass = world.getStackIntData(position,3,"mass");
//       var purity = world.getStackIntData(position,3,"purity");
//       world.setContainerSlot(position,3, "shagecraft:ore_processed_a", 1, 1);
//       world.setStackIntData(position,3,"mass",mass);
//       world.setStackIntData(position,3,"purity",purity);
//     }
//     }
//   }
// }
