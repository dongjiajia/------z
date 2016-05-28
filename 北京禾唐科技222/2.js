function myVal2() {
	var myPass3 = document.form2.password3.value;
	if (myPass3==""){
		alert("密码不能为空");
		return false;
	}
	if (myPass3.length>12){
		alert("输入的密码不能大于12位");
		return false;
	}
	if ((password1.value)!=(password3.value)){
		alert("密码输入错误");
		return false;
	}
	return true;
}
function checkNumber()
{
	var mynumber=document.form2.number2.value;
	if(mynumber=="")
	{
		alert("请输入账号号码")
	}
}
