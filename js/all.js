
//回到顶部
	var ctop=document.querySelector(".gotop");
		document.onscroll=function(){
			var h=document.body.scrollTop || document.documentElement.scrollTop;
			if(h>=200){
				ctop.style.opacity="1";
			}else{
				ctop.style.opacity="0";
			}
		}
	ctop.onclick=function(){
		var h=document.body.scrollTop || document.documentElement.scrollTop;
		var time=setInterval(function(){
			if(h>=5){
				h-=100;
				document.body.scrollTop=h;
				document.documentElement.scrollTop=h;
			}else{
				document.body.scrollTop=0;
				document.documentElement.scrollTop=0;
				clearInterval(time);
			}
		});
	}