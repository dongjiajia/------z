<?php
$number2    = "_REQUEST['number5']";
$password1 = "_REQUEST['password4']";
$link      = mysql_connect("localhost","user","password");
if(!$link)
{
	die('Error:'.mysql_error());
}
$select    = mysql_select_db("all");
$sql       = "SELECT * FROM `yonghu` WHERE Number2='$number2'";
$search[]  = mysql_fetch_row(mysql_query($sql));
if(!empty($search[0][0]))
{
	echo '请不要重复注册';
	mysql_close($link);
}
else
{
	$sql = "INSERT INTO `yonghu`(`Number2`,`Password1`) VALUES ('$number2','$password1')";
	if(!mysql_query($sql,$link))
	{
	 die('Error:'.mysql_error());
	}
	else
	{
		echo '添加成功';
		header('location:/登陆页面.html');
	}
	mysql_close($link);
}



?>