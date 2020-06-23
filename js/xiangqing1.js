$(function(){
	$(window).bind("scroll",function(){
		console.log($(window).scrollTop())
		console.log($("nav ul li:eq(1)").siblings("li"))
		if($(window).scrollTop()>100){
			$("nav").slideDown();
			$("nav ul li:eq(0)").addClass("licss").siblings("li").removeClass("licss");
		}else{
			$("nav").slideUp(0);
		}
		if($(window).scrollTop()>500){
			$("nav ul li:eq(1)").addClass("licss").siblings("li").removeClass("licss");
		}
		if($(window).scrollTop()>1000){
			$("nav ul li:eq(2)").addClass("licss").siblings("li").removeClass("licss");
		}
		if($(window).scrollTop()>1440){
			$("nav ul li:eq(3)").addClass("licss").siblings("li").removeClass("licss");
		}
	})
	// 点击跳到指定位置
	$("nav ul li:eq(0)").click(function(){
		$("html,body").animate({
			scrollTop:"0px",
		},100);
	})
	$("nav ul li:eq(1)").click(function(){
		$("html,body").animate({
			scrollTop:"510px",
		},100);
	})
	$("nav ul li:eq(2)").click(function(){
		$("html,body").animate({
			scrollTop:"1010px",
		},100);
	})
	$("nav ul li:eq(3)").click(function(){
		$("html,body").animate({
			scrollTop:"1450px",
		},100);
	})
})