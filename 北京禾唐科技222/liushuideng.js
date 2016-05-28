var temp_i=1 
function flash_sms() 
{ 
for (i=1;i<=10;i++) 
{ 
if (i==temp_i) temp_str="red"; else temp_str="green"; 
eval("a"+i+".style.color='"+temp_str+"';"); 
} 
temp_i++; 
if (temp_i>10) temp_i=1; 
} 
setInterval("flash_sms()",200); 