$(function(){
	//模拟下拉框
		$('.select input,.input_in>span').on('click',function(){
			// if($('.select .city').is('.hide')){
			// 	$('.select .city').removeClass('hide');
			// }else{
			// 	$('.select .city').addClass('hide');
			// }
			if($(this).parent().next().is('.hide')){
				$(this).parent().next().removeClass('hide');
			}else{
				$(this).parent().next().addClass('hide');
			}
			$(this).next().toggleClass("xuanzhuan");
		})
		$('.input_in>span').on('click',function(){
			$(this).toggleClass("xuanzhuan")
		})
		$('.select ul li').on('click',function(){
			$(this).parent().parent().prev().children("input").val($(this).html());
			$('.select .city').addClass('hide');
			$('.input_in>span').removeClass("xuanzhuan");
		})
		$('.select ul li').hover(
			function(){
				$(this).css({'backgroundColor':'#f5f5f5'});
			},function(){
				$(this).css({'backgroundColor':'white'});
			}
		)
		//全选
		$("#all").click(function(){
			var jiage1=0;
			$("[class*='tb']").toggleClass("orange")
			$("[class*='tb']").children("span").toggle();
			for(var i=0;i<$(".texts>i>span").length;i++){
				jiage1+=Number($(".texts>i>span")[i].textContent);
			}
			console.log(jiage1)			
			// $("#heji").html("&yen; "+jiage1);
			// if($("[id='all']").attr("class","orange")){
				$("#heji").html("&yen; "+jiage1).toggle();
				$("#jiesuan").html(jiage1).toggleClass("white").toggle();
				$("#jiesuan").parent().addClass("ab")
			// }else{
			// 	$("#heji").html("&yen; 0");
			// }
		})
		//单选
		$("[class*='tb1']").click(function(){
			$(this).toggleClass("orange");
			$(this).children("span").toggle();
		})
		//加减
		var num=1;
		$(".jia").click(function(){
			num++;
			if(num>10){
				num=10;
				$(".tt").text("已经到极限不能再加啦")
				$(".tt").fadeIn(1000)
				setInterval(function(){
					$(".tt").fadeOut();
				},3000);
			}
			$(this).prev().val(num);
		})
		$(".jian").click(function(){
			num--;
			if(num<1){
				num=1;
				$(".tt").text("已经到极限不能再减啦")
				$(".tt").fadeIn(1000)
				setInterval(function(){
					$(".tt").fadeOut();
				},3000);
			}
			$(this).next().val(num);
		})
		// console.log($("[id='all']").attr("class","orange")==true)
})