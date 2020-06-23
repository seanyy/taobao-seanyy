var mySwiper = new Swiper ('.banner', {
	loop: true, // 循环模式选项
	loopedSlides:1,//如果是1的话不写也行
	on:{
		init:function(){
			console.log(this);
			var total=this.slides.length-2;
			console.log(total);
			$('.total').text(total);
			this.emit('transitionEnd');
		},
	transitionEnd:function(){
		console.log(this.realIndex);
		var index=this.realIndex+1;
		$(".active").text(index);
		}
	},
})