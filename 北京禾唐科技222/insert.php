<?php
$zhengian  = "_REQUEST['zhengjian']";
$number    = "_REQUEST['number']";
$zhanghu   = "_REQUEST['zhanghu']";
$number2   = "_REQUEST['number2']";
$password1 = "_REQUEST['password1']";
$number3   = "_REQUEST['number3']";
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
	$sql = "INSERT INTO `yonghu`(`Zhengjian`, `Number`, `Zhanghu`,`Number2`,`Password1`,`Number3`) VALUES ('$zhengjian','$number','$zhanghu','$number2','$password1','$number3')";
	if(!mysql_query($sql,$link))
	{
	 die('Error:'.mysql_error());
	}
	else
	{
		echo '注册成功';
		header('location:/登陆页面.html');
	}
	mysql_close($link);
}



?>