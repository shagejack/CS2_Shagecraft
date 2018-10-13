//生成n到m的随机整数
function randomInteger(n, m){
        var random = Math.floor(Math.random()*(m-n+1)+n);
        return random;
}
//生成n到m的随机实数
function randomReal(n, m){
        var random = Math.random()*(m-n+1)+n;
        return random;
}
/* //输出随机字符串
//如randomString("a,b,c")输出->a或b或c
function randomString(string){
  var s=string.split(",");
var random = s[Math.floor(Math.random()*s.length)];
return random;
}
//输出随机整数
//如randomChoice("1,0xA,010")输出->1或10或8
function randomString(string){
  var s=string.split(",");
var random = parseInt(s[Math.floor(Math.random()*s.length)]);
return random;
} */
//生成期望值为n，范围为m的随机数
function randomMean(n, m){
	var random = Math.random()*((n+m/2)-(n-m/2)+1)+(n-m/2);
        return random;
}
//生成一个数量级为10^n的随机数
function randomOrder(n){
	var random = Math.random()*(9*Math.pow(10, n-1))+Math.pow(10, n-1);
	return random;
}
//随机生成数量级均匀的实数
function randomEven(n, m){
var b=-2;
for(var a=-2;Math.pow(10, a)<=Math.abs(m/10);a++){
b++;
}
	var rn = (Math.random()*(m-(n)+1)+(n))*(Math.pow(10, -b));
	var ro = Math.random()*(b+2)-2;
	var random = (rn*Math.pow(10, ro));
	return random;
}
