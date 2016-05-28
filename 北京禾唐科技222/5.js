function myVal() {
	var mypass1 = document.form1.textfield2.value;
	if (mypass1==""){
		alert("新密码不能为空");
		return false;
	}
	var myPass2 = document.form1.textfield3.value;
	if (myPass2==""){
		alert("确认密码不能为空");
		return false;
	}
	if ((textfield2.value)!=(textfield3.value)){
		alert("密码两次输入不一致");
		return false;
	}
	return true;
}