$(function(){
	$("form[name=form1]").submit(function(){
		//用户名
		var val1=$("#username").val();
		var reg3=/^1[3456789]\d{9}$/;
		var reg2=/^([A-z]|[0-9])(\w|\-)+@[A-z0-9]+\.([A-z]{2,4})$/;
		// var reg1=/^[A-z0-9]{6,}$/
		if(val1==""){
			$("#username").next().text("用户名不能为空");
			return false;
		}else if(reg2.test(val1)==false&&reg3.test(val1)==false){
			$("#username").next().text("用户名输入有误");
			return false;
		}else{
			$("#username").next().text("");
		}
		//密码
		var val2=$("#pwd").val();
		var reg4=/^[A-z0-9]{6,13}$/
		if(val2==""){
			$("#pwd").next().text("密码不能为空");
			return false;
		}else if(reg4.test(val2)==false){
			$("#pwd").next().text("密码输入有误");
			return false;
		}else{
			$("#pwd").next().text("");
		}
	})
});