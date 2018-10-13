name = "itemThermometer";
creativeTab = "_Shage";
maxDamage = 255;
maxStack = 1;

addToCreative[0] = true;
textureFile[0] = "itemThermometer0.png";
information[0] = "§4\u7279\u79cd\u6e29\u5ea6\u8ba1\uff0c\u4ec5\u7528\u4e8e\u6d4b\u91cf\u6728\u67f4\u5806\u7684\u6e29\u5ea6\u3002|§4\u770b\u8d77\u6765\u50cf\u4e00\u4e2a\u6c34\u94f6\u6e29\u5ea6\u8ba1\u3002";

onUse[0] = "mod.loadScript('thermometer.js');";
