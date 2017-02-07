
$(function() {
	var i = 0;
	var _timer = 0;
	var _left = 0;

	function delay() {
		$("#btn span").eq(i).css("background-color", "red");
		$("#images a").eq(i).css({
			"display": "none",
			"opacity": 0.3
		});
		i++;
		if(i >= $("#images a").size()) {
			i = 0;
		}
		$("#images a").eq(i).css("display", "block");
		$("#btn span").eq(i).css("background-color", "#ccc");
		player(true);
	}

	function player(_cmd) {
		$("#btn span").eq(i).css("background-color", "#ccc");
		$("#images a").eq(i).animate({
			"opacity": 1,
		}, 600, function() {
			if(_cmd) {
				window.clearTimeout(_timer);
				_timer = window.setTimeout(delay, 2000);
			} else {
				$("#images a").eq(i).stop();
				window.clearTimeout(_timer);
			}
		});
	}
	player(true);

	function eventHandle(_current) {
		$("#images a").eq(i).finish();
		$("#images a").css({
			"display": "none",
			"opacity": 0.3
		});
		$("#btn span").css({
			"background-color": "red"
		});
		$(_current).css({
			"background-color": "#ccc"
		});
		i = $(_current).index();
		$("#images a").eq(i).css({
			"display": "block"
		});
		window.clearTimeout(_timer);
		player(false);
	}

	function scrollevent() {
		if($(document).scrollTop() > 1200) {
			$(".m-fn-fixcont").css("top", "0px");
			$(".m-fn-siderbar").css("display", "block");
			$(".m-fn-lift").css("display", "block");
			
			$(".m-fn-lift .oh li").removeClass("active");
			$(".m-fn-lift .oh li:nth(0)").attr("class", "active");
			
			
			$(".m-fn-lift .oh li:nth(0)").click(function(){
				$(document).scrollTop(1200)
			});
			$(".m-fn-lift .oh li:nth(1)").click(function(){
				$(document).scrollTop(1900)
			});
			$(".m-fn-lift .oh li:nth(2)").click(function(){
				$(document).scrollTop(2500)
			});
			$(".m-fn-lift .oh li:nth(3)").click(function(){
				$(document).scrollTop(3100)
			});
			
			$(".m-fn-floor .u-t .f-tab li,.m-w-floor .u-t .f-tab li").mouseenter(function() {
				$(this).attr("class", "z-select");
				var a = $(this).attr("data-index");
				var a = $(this).attr("data-index");
				var l = ".list" + Number(a);
				//console.log(l)
				$(l).removeClass("hide");
				$(l).mouseenter(function() {
					$(l).removeClass("hide");
				})

			});
			$(".m-fn-floor .u-t .f-tab li,.m-w-floor .u-t .f-tab li").mouseleave(function(){
				var a = $(this).attr("data-index");
				var a = $(this).attr("data-index");
				var l = ".list" + Number(a);
				$(this).removeAttr("class", "z-select");
				$(l).addClass("hide");

			});
			//console.log($(document).scrollTop())
			if($(document).scrollTop() > 1800) {
				$(".m-fn-lift .oh li").removeClass("active");
				$(".m-fn-lift .oh li:nth(1)").attr("class", "active");
				
			}
			if($(document).scrollTop() > 2500) {
				$(".m-fn-lift .oh li").removeClass("active");
				$(".m-fn-lift .oh li:nth(2)").attr("class", "active");
				
			}
			if($(document).scrollTop() > 3100) {
				$(".m-fn-lift .oh li").removeClass("active");
				$(".m-fn-lift .oh li:nth(3)").attr("class", "active");
				
			}

		} else {
			$(".m-fn-fixcont").css("top", "-50px");
			$(".m-fn-siderbar").css("display", "none");
			$(".m-fn-lift").css("display", "none");
		}
	}

	$("#main").mouseenter(function() {
		window.clearTimeout(_timer);
		$("#images a").eq(i).stop();
	});
	$("#main").mouseleave(function() {
		player(true);
	});
	$("#btn span").mouseenter(function() {
		eventHandle(this);
	});
	$("#arrow span.left").click(function() {
		eventHandle($("#btn span").eq(--i)[0]);
	});
	$("#arrow span.right").click(function() {
		eventHandle($("#btn span").eq(++i)[0]);
	});

	/*轮播2*/
	$(".u-rmd-slide").mouseenter(function() {
		$(".l-2").css("display", "block");

		$(".s-prev").click(function() {
			if(Math.abs($(".s-lst").position().left) < 3000) {
				$(".s-lst").animate({
					left: '-=1000px'
				})
			} else {
				$(".s-lst").css("left", 0);
			}
		});
		$(".s-next").click(function() {
			if(Math.abs($(".s-lst").position().left) <= 0) {
				$(".s-lst").css("left", "-3000px");
			} else {
				$(".s-lst").animate({
					left: '+=1000px'
				})

			}
		});

	});
	$(".u-rmd-slide").mouseleave(function() {
		$(".l-2").css("display", "none");
	});
	/*轮播3*/
	$(".m-c-slide").mouseenter(function() {
		$(".l-3").css("display", "block");

		$(".slider-prev").click(function() {
			if(Math.abs($(".slider-main2").position().left) < 1200) {
				console.log($(".slider-main2").position().left)
				$(".slider-main2").animate({
					left: '-=400px'
				})
			} else {
				$(".slider-main2").css("left", 0);
			}
		});
		$(".slider-next").click(function() {
			if(Math.abs($(".slider-main2").position().left) <= 400) {
				$(".slider-main2").css("left", "-1200px");
			} else {
				$(".slider-main2").animate({
					left: '+=400px'
				})

			}
		});

	});
	$(".m-c-slide").mouseleave(function() {
		$(".l-3").css("display", "none");
	});
	$(".J_go_top").click(function(){
		$(document).scrollTop(0)
	});
	
	/*悬浮     分页*/
	var int = self.setInterval(scrollevent, 50);
});
