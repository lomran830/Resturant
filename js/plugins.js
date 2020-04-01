/*global $, document, window*/
$(document).ready(function () {
	
	'use strict';
	
	$("body").niceScroll({cursorcolor: "#FCDA9A"});
	
	$(window).on("scroll", function () {
				
		if ($(window).scrollTop()) {
            $("nav").addClass("black");
        } else {
            $('nav').removeClass('black');
        }
    });
	$(window).on("scroll", function () {
		if($(this).scrollTop()>= 720)
			{
				$(".up").fadeIn();
			} else{
				$(".up").fadeOut();
			}
	});
	$(".up").on("click", function () {
		$("html, body").animate({scrollTop: 0},600)
	});
$(".mains").on("click",function () {
           $(".part1").slideDown();
$(".menu .our-menu ul li").css("color", "#212529");
	$(".menu .our-menu ul li.mains").css("color", "#FCDA9A");
		});

	$(".dinner-food").on("click", function () {
		$(".menu .drink, .menu .launch,.menu .sweet").slideUp(1000, function () {
			$(".dinner").slideDown();
		});
		$(".menu .our-menu ul li").css("color", "#212529");
		$(".menu .our-menu ul li.dinner-food").css("color", "#FCDA9A");
	});
	
	$(".launch-food").on("click", function () {
		$(".menu .drink, .menu .dinner,.menu .sweet").slideUp(1000, function () {
			$(".launch").slideDown();
		});
		$(".menu .our-menu ul li").css("color", "#212529");
		$(".menu .our-menu ul li.launch-food").css("color", "#FCDA9A");
	});
	
	$(".drink-food").on("click", function () {
		$(".menu .launch, .menu .dinner,.menu .sweet").slideUp(2000, function () {
			$(".drink").slideDown();
		});
		$(".menu .our-menu ul li").css("color", "#212529");
		$(".menu .our-menu ul li.drink-food").css("color", "#FCDA9A");
	});
	
	$(".sweet-food").on("click", function () {
		$(".menu .drink, .menu .dinner,.menu .launch").slideUp(2000, function () {
			$(".sweet").slideDown();
		});
		$(".menu .our-menu ul li ").css("color", "#212529");
		$(".menu .our-menu ul li.sweet-food").css("color", "#FCDA9A");
	});
    $(".chief1").hover(
        function () {
            $(".more").fadeIn();


        },
        function () {
            $(".more").fadeOut();
        }
    );
	$(".more p").on("click", function () {
		$(".info_chief").fadeIn();
		$(".hide").show();
	})
	$(".team  svg.svg-inline--fa.fa-times.fa-w-11").on("click", function () {
			$(".info_chief, .in_ch2, .in_ch3, .in_ch4").fadeOut(function () {
			$(".hide").fadeOut();
		})
	});

	
	$(".chief2").hover(
        function () {
            $(".more1").fadeIn();


        },
        function () {
            $(".more1").fadeOut();
        }
    );
	
	
			$(".more1 p").on("click", function () {
		$(".in_ch2").fadeIn();
		$(".hide").show();
	})

	
	$(".chief3").hover(
        function () {
            $(".more2").fadeIn();


        },
        function () {
            $(".more2").fadeOut();
        }
    );
		$(".more2 p").on("click", function () {
		$(".in_ch3").fadeIn();
		$(".hide").show();
	});

	
	$(".chief4").hover(
        function () {
            $(".more3").fadeIn();


        },
        function () {
            $(".more3").fadeOut();
   }
	);
	
	
	$(".more3 p").on("click", function () {
		$(".in_ch4").fadeIn();
		$(".hide").show();
	});
	
    $(window).on("load",function () {
		$(".spinner").fadeOut(2000, function () {
			$(this).parent().fadeOut();
		});

			
	});
			
		    $(window).on("load",function () {
		$(".loader").fadeOut(2000, function () {
			$(this).parent().fadeOut();
		});
			});
	$(".contact").on("click", function () {
		$(".Sign").fadeIn()
	})
	$(" .custom,.false").on("click" ,function () {
		$(".Sign").fadeOut();
	})
//	$(".team .hide").width("200px");
	$(".log_sign").on("click",function () {
		
		$(".LOG1, .hide").fadeIn(2000);
		
	})
	$(".creat2").on("click",function () {
		$(".log_in").fadeOut(2000, function () {
			$(".log_up").fadeIn();
		});
	});
		
	$(".creat3").on("click",function () {
		$(".log_up").fadeOut(2000, function () {
			$(".log_in").fadeIn();
		});
	})
	$(".custom2").on("click", function () {
		$(".LOG1").fadeOut(2000, function () {
			$(".hide").fadeOut();
		});
	})

	$(".SERV1").hover(function () {
		$(".imges .details_services1 .IM1, .imges .details_services1 .HH").slideUp();
		$(".imges .details_services1  .IM").fadeIn(function () {
			$(".imges .INNER").fadeIn();
		})
	},function () {
		$(".imges .details_services1  .img").fadeOut(function () {
			$(".imges  .detail_inner1").fadeOut();
			$(".imges .details_services1 .IM1, .imges .details_services1 .HH").slideDown();
	})
	});
	
		$(".SERV2").hover(function () {
		$(".imges .details_services1 .IM3, .imges .details_services1 .HH2").slideUp();
		$(".imges .details_services1  .IM2").fadeIn(function () {
			$(".imges .INNER2").fadeIn();
		})
	},function () {
		$(".imges .details_services1  .IM2").fadeOut(function () {
			$(".imges  .INNER2").fadeOut();
			$(".imges .details_services1 .IM3, .imges .details_services1 .HH2").slideDown();
	})
	});
	
			$(".SERV3").hover(function () {
		$(".imges .details_services1 .IM5, .imges .details_services1 .HH3").slideUp();
		$(".imges .details_services1  .IM4").fadeIn(function () {
			$(".imges .INNER3").fadeIn();
		})
	},function () {
		$(".imges .details_services1  .IM4").fadeOut(function () {
			$(".imges  .INNER3").fadeOut();
			$(".imges .details_services1 .IM5, .imges .details_services1 .HH3").slideDown();
	})
	});
	
				$(".SERV4").hover(function () {
		$(".imges .details_services1 .IM7, .imges .details_services1 .HH4").slideUp();
		$(".imges .details_services1  .IM6").fadeIn(function () {
			$(".imges .INNER4").fadeIn();
		})
	},function () {
		$(".imges .details_services1  .IM6").fadeOut(function () {
			$(".imges  .INNER4").fadeOut();
			$(".imges .details_services1 .IM7, .imges .details_services1 .HH4").slideDown();
	})
	});
	
	$(".SERV5").hover(function () {
		$(".imges .details_services1 .IM9, .imges .details_services1 .HH5").slideUp();
		$(".imges .details_services1  .IM8").fadeIn(function () {
			$(".imges .INNER5").fadeIn();
		})
	},function () {
		$(".imges .details_services1  .IM8").fadeOut(function () {
			$(".imges  .INNER5").fadeOut();
			$(".imges .details_services1 .IM9, .imges .details_services1 .HH5").slideDown();
	})
	});
	
	$(".SERV6").hover(function () {
		$(".imges .details_services1 .IM11, .imges .details_services1 .HH6").slideUp();
		$(".imges .details_services1  .IM10").fadeIn(function () {
			$(".imges .INNER6").fadeIn();
		})
	},function () {
		$(".imges .details_services1  .IM10").fadeOut(function () {
			$(".imges  .INNER6").fadeOut();
			$(".imges .details_services1 .IM11, .imges .details_services1 .HH6").slideDown();
	})
	});
	
		$(".SERV7").hover(function () {
		$(".imges .details_services1 .IM13, .imges .details_services1 .HH7").slideUp();
		$(".imges .details_services1  .IM12").fadeIn(function () {
			$(".imges .INNER7").fadeIn();
		})
	},function () {
		$(".imges .details_services1  .IM12").fadeOut(function () {
			$(".imges  .INNER7").fadeOut();
			$(".imges .details_services1 .IM13, .imges .details_services1 .HH7").slideDown();
	})
	});
});