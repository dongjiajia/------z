<?php
$number2   = "_REQUEST['number2']";
$password1 = "_REQUEST['password3']";
$cookie   = "_REQUEST['cookie']";
$radio   = "_REQUEST['radio']";
$link      = mysql_connect("localhost","user","password");
if(!$link)
{
	die('Error:'.mysql_error());
}
$select    = mysql_select_db("all");
$sql       = "SELECT * FROM `yonghu` WHERE Number2='$number2'";
$search[]  = mysql_fetch_row(mysql_query($sql));
if(empty($search[0][0]))
{
	echo '账号不存在';
	mysql_close($link);
}
else
{
	$password = $searcn[0][1];
	if($password1!=$password1)
	{
		echo '密码错误';
		mysql_close($link);
	}
	else
	{
		if(empty($radio))
		{
			session_start();
			$_SESSION['zhanghu'] = $zhanghu;
			$_SESSION['number2'] = $number2;
			ini_set('session.save_path','/');
			ini_set('session.gc_maxlifetime', "$cookie");
			header('location:/主页.html');
			mysql_close($link);
		}
		else
		{
			session_start();   
			$lifeTime = 168 * 3600;   
			setcookie(session_name(), session_id(), time() + $lifeTime, "/");  
			$_SESSION['zhanghu'] = $zhanghu;
			$_SESSION['number2'] = $number2;
			header('location:/主页.html');
			mysql_close($link);

		}
	}

}



?>