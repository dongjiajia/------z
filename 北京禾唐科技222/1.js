function myVal() {
	var mypass1 = document.form1.password1.value;
	if (mypass1==""){
		alert("密码不能为空");
		return false;
	}
	var myPass2 = document.form1.password2.value;
	if (myPass2==""){
		alert("密码不能为空");
		return false;
	}
	if ((password1.value)!=(password2.value)){
		alert("密码两次输入不一致");
		return false;
	}
	if (myPass2.length>12){
		alert("输入的密码不能大于12位");
		return false;
		}
	if (mypass1.length>12){
		alert("输入的密码不能大于12位");
		return false;
		}
	return true;
}
function checkNumber()
{
	var mynumber=document.form1.number2.value;
	if(mynumber=="")
	{
		alert("请输入账号号码")
	}
}
function CharMode(iN){ 
if (iN>=48 && iN <=57) //数字 
return 1; 
if (iN>=65 && iN <=90) //大写字母 
return 2; 
if (iN>=97 && iN <=122) //小写 
return 4; 
else 
return 8; //特殊字符 
} 
//bitTotal函数 
//计算出当前密码当中一共有多少种模式 
function bitTotal(num){ 
modes=0; 
for (i=0;i<4;i++){ 
if (num & 1) modes++; 
num>>>=1; 
} 
return modes; 
} 
//checkStrong函数 
//返回密码的强度级别 
function checkStrong(sPW){ 
if (sPW.length<=4) 
return 0; //密码太短 
Modes=0; 
for (i=0;i<sPW.length;i++){ 
//测试每一个字符的类别并统计一共有多少种模式. 
Modes|=CharMode(sPW.charCodeAt(i)); 
} 
return bitTotal(Modes); 
} 
//pwStrength函数 
//当用户放开键盘或密码输入框失去焦点时,根据不同的级别显示不同的颜色 
function pwStrength(pwd){ 
O_color="#e0f0ff"; 
L_color="#FF0000"; 
M_color="#FF9900"; 
H_color="#33CC00"; 
if (pwd==null||pwd==''){ 
Lcolor=Mcolor=Hcolor=O_color; 
} 
else 
{ 
S_level=checkStrong(pwd); 
//alert(S_level); 
switch(S_level) 
{ 
case 0: 
Lcolor=Mcolor=Hcolor=O_color; 
case 1: 
Lcolor=L_color; 
Mcolor=Hcolor=O_color; 
break; 
case 2: 
Lcolor=Mcolor=M_color; 
Hcolor=O_color; 
break; 
default: 
Lcolor=Mcolor=Hcolor=H_color; 
} 
} 
document.getElementById("strength_L").style.background=Lcolor; 
document.getElementById("strength_M").style.background=Mcolor; 
document.getElementById("strength_H").style.background=Hcolor; 
return; 
}
function MM_setTextOfTextfield(objId,x,newText) { //v9.0
  with (document){ if (getElementById){
    var obj = getElementById(objId);} if (obj) obj.value = newText;
  }
}

var code;  
window.onload = function createCode(){  
     code = "";   
     var codeLength = 4;//验证码的长度  
     var checkCode = document.getElementById("code");   
     var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
     'S','T','U','V','W','X','Y','Z');//随机数  
     for(var i = 0; i < codeLength; i++) {//循环操作  
        var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）  
        code += random[index];//根据索引取得随机数加到code上  
    }  
    checkCode.value = code;//把code值赋给验证码  
}  
//校验验证码  
function validate(){  
    var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写        
    if(inputCode.length <= 0) { //若输入的验证码长度为0  
        alert("请输入验证码！"); //则弹出请输入验证码  
    }         
    else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时  
        alert("验证码输入错误！@_@"); //则弹出验证码输入错误  
        createCode();//刷新验证码  
        document.getElementById("input").value = "";//清空文本框  
    }         
    else { //输入正确时  
        alert("输入正确");  
    }             
}  