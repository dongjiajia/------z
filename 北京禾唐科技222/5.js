function myVal() {
	var mypass1 = document.form1.textfield2.value;
	if (mypass1==""){
		alert("�����벻��Ϊ��");
		return false;
	}
	var myPass2 = document.form1.textfield3.value;
	if (myPass2==""){
		alert("ȷ�����벻��Ϊ��");
		return false;
	}
	if ((textfield2.value)!=(textfield3.value)){
		alert("�����������벻һ��");
		return false;
	}
	return true;
}