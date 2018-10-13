if(itemstack.getIntData("isRegistered") != 1){
	
	itemstack.setIntData("charge", 0);
	itemstack.setIntData("maxCharge", 1000000);

	itemstack.setIntData("isRegistered",1);
}