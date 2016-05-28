// JavaScript Document
function mod()
{
	var mynumber=document.form3.number4;
	if(mynumber.value=="")
	{
		alert("请输入要修改的内容");
		
	}
	var mymodnumber=window.prompt("请输入修改的内容");
	if(mymodnumber=="")
	{
		alert("请输入修改的内容");
	}
	mynumber.value=mymodnumber;
}
function mysetvalue()
{
	var myset=document.form3.text2;
	var mymodset=window.prompt("是否设置为默认账户，请输入是或否");
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
        