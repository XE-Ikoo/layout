(function($){
    $(function(){
        var $gnb = $('.gnb');
        var $loginEl = $('.login_area');
        var $containerEl = $('.container');
        var $gnbOffsetTop = $('.gnb').offset().top;
        
        // Fixed header
        $(window).scroll(function() {
            var scroll = getCurrentScroll();
            if( scroll >= $gnbOffsetTop ) {
               $containerEl.addClass('fixed_header');
            }
            else {
               $containerEl.removeClass('fixed_header');
            }
        });
        
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
        
        // Gnb 
        $gnb.find('>ul>li>ul').hide();
        $gnb.find('>ul>li>a')
        .mouseover(function(){
            $gnb.find('>ul>li>ul:visible').hide().parent('li').removeClass('on')
            $(this).next('ul:hidden').stop().fadeIn(200).parent('li').addClass('on')
        })
        .focus(function(){
            $(this).mouseover();
        })
        .end()
        .mouseleave(function(){
            $gnb.find('>ul>li>ul').hide().parent().removeClass('on')
        });

        // login popup
        $loginEl.hover(
            function(){
                $(this).find('.ly_login').stop().fadeIn(200);
                $(this).addClass('hover');
            },
            function(){
                $(this).find('.ly_login').hide();
                $(this).removeClass('hover');
            }
        );
        
        // Scroll to top
        var scrollToTop = function() {
            var link = $('.btn_top');
            var windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
            $(window).scroll(function() {
                if (($(this).scrollTop() > 150) && (windowW > 1000)) {
                    link.fadeIn(100);
                } else {
                    link.fadeOut(100);
                }
            });
    
            link.click(function() {
                $('html, body').animate({scrollTop: 0}, 400);
                return false;
            });
        };
        scrollToTop();
        
		// Sidebar
		$(".tab_content").hide();
		$("ul.tabs li:first").addClass("active").show();
		$(".tab_content:first").show();
 
		$("ul.tabs li").click(function() {
			$("ul.tabs li").removeClass("active"); 
			$(this).addClass("active"); 
			$(".tab_content").hide(); 
 
			var activeTab = $(this).find("a").attr("href");
			$(activeTab).slideToggle("slow");
			return false;
		});

    })
	
})(jQuery);
