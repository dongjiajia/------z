// JavaScript Document
function mod()
{
	var mynumber=document.form3.number4;
	if(mynumber.value=="")
	{
		alert("������Ҫ�޸ĵ�����");
		
	}
	var mymodnumber=window.prompt("�������޸ĵ�����");
	if(mymodnumber=="")
	{
		alert("�������޸ĵ�����");
	}
	mynumber.value=mymodnumber;
}
function mysetvalue()
{
	var myset=document.form3.text2;
	var mymodset=window.prompt("�Ƿ�����ΪĬ���˻����������ǻ��");
	myset.value=mymodset;
}
            $(function () {
                $("img").bind("click", function () {
                    if ($("#hidval").val() == 0) {
                        $("ul").show()
                        $("#hidval").val(1);
                    } else {
                       $("ul").hide()
                        $("#hidval").val(0);
                    }
                });
            });
        