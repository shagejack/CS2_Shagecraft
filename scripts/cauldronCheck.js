if(world.getTileEntityFloatData(position,'Water')<=0){
	player.sendMessage('\u6ca1\u6c34\u4e86\u3002');
		} else {player.sendMessage('\u4e00\u5207\u6b63\u5e38\u3002');}

if(world.getTileEntityFloatData(position,"Durability")<5){
	a=Math.floor(Math.random()*4.99);
	switch(a)
	{
	case 0:
		player.sendMessage("\u9505\u5e95\u70e7\u7a7f\u4e86\u4e00\u4e2a\u6d1e\u3002");
		break;
	case 1:
		player.sendMessage("\u9505\u8eab\u70b8\u88c2\u4e86\u3002");
		break;
	case 2:
		player.sendMessage("\u9ad8\u538b\u84b8\u6c7d\u628a\u9505\u8eab\u6495\u88c2\u4e86\u3002");
		break;
	case 3:
		player.sendMessage("\u9505\u7684\u5916\u58f3\u9508\u8680\u4e86\u3002");
		break;
	case 4:
		player.sendMessage("\u9505\u8eab\u4e0a\u51fa\u73b0\u4e86\u4e00\u4e2a\u5927\u7f3a\u53e3\u3002");
		break;
	default:
		player.sendMessage("\u4e0d\u77e5\u4e3a\u4f55\u8fd9\u73a9\u610f\u6709\u4e9b\u95ee\u9898\u3002");
		break;
	}
}