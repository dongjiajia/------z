function myVal() {
	var mypass1 = document.form1.password1.value;
	if (mypass1==""){
		alert("���벻��Ϊ��");
		return false;
	}
	var myPass2 = document.form1.password2.value;
	if (myPass2==""){
		alert("���벻��Ϊ��");
		return false;
	}
	if ((password1.value)!=(password2.value)){
		alert("�����������벻һ��");
		return false;
	}
	if (myPass2.length>12){
		alert("��������벻�ܴ���12λ");
		return false;
		}
	if (mypass1.length>12){
		alert("��������벻�ܴ���12λ");
		return false;
		}
	return true;
}
function checkNumber()
{
	var mynumber=document.form1.number2.value;
	if(mynumber=="")
	{
		alert("�������˺ź���")
	}
}
function CharMode(iN){ 
if (iN>=48 && iN <=57) //���� 
return 1; 
if (iN>=65 && iN <=90) //��д��ĸ 
return 2; 
if (iN>=97 && iN <=122) //Сд 
return 4; 
else 
return 8; //�����ַ� 
} 
//bitTotal���� 
//�������ǰ���뵱��һ���ж�����ģʽ 
function bitTotal(num){ 
modes=0; 
for (i=0;i<4;i++){ 
if (num & 1) modes++; 
num>>>=1; 
} 
return modes; 
} 
//checkStrong���� 
//���������ǿ�ȼ��� 
function checkStrong(sPW){ 
if (sPW.length<=4) 
return 0; //����̫�� 
Modes=0; 
for (i=0;i<sPW.length;i++){ 
//����ÿһ���ַ������ͳ��һ���ж�����ģʽ. 
Modes|=CharMode(sPW.charCodeAt(i)); 
} 
return bitTotal(Modes); 
} 
//pwStrength���� 
//���û��ſ����̻����������ʧȥ����ʱ,���ݲ�ͬ�ļ�����ʾ��ͬ����ɫ 
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
     var codeLength = 4;//��֤��ĳ���  
     var checkCode = document.getElementById("code");   
     var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
     'S','T','U','V','W','X','Y','Z');//�����  
     for(var i = 0; i < codeLength; i++) {//ѭ������  
        var index = Math.floor(Math.random()*36);//ȡ���������������0~35��  
        code += random[index];//��������ȡ��������ӵ�code��  
    }  
    checkCode.value = code;//��codeֵ������֤��  
}  
//У����֤��  
function validate(){  
    var inputCode = document.getElementById("input").value.toUpperCase(); //ȡ���������֤�벢ת��Ϊ��д        
    if(inputCode.length <= 0) { //���������֤�볤��Ϊ0  
        alert("��������֤�룡"); //�򵯳���������֤��  
    }         
    else if(inputCode != code ) { //���������֤�����������֤�벻һ��ʱ  
        alert("��֤���������@_@"); //�򵯳���֤���������  
        createCode();//ˢ����֤��  
        document.getElementById("input").value = "";//����ı���  
    }         
    else { //������ȷʱ  
        alert("������ȷ");  
    }             
}  