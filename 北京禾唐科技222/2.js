function myVal2() {
	var myPass3 = document.form2.password3.value;
	if (myPass3==""){
		alert("���벻��Ϊ��");
		return false;
	}
	if (myPass3.length>12){
		alert("��������벻�ܴ���12λ");
		return false;
	}
	if ((password1.value)!=(password3.value)){
		alert("�����������");
		return false;
	}
	return true;
}
function checkNumber()
{
	var mynumber=document.form2.number2.value;
	if(mynumber=="")
	{
		alert("�������˺ź���")
	}
}
