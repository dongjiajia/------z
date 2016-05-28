var sec=0;
var min=0;
var hou=0;
var flag=0;
window.setTimeout("update();",1000)
function update()
{
sec++;
if(sec==60)
{
sec=0;min+=1;
}
if(min==60)
{
min=0;hou+=1;
}
if((min>0)&&(flag==0))
{
alert("你停留一分钟，欢迎再来");
flag=1;
}
document.form3.textfield3.value=hou+"时"+min+"分"+sec+"秒";
window.setTimeout("update();",1000)
}