function hideAddressBar() {
	window.scrollTo(0, 0);
}
setTimeout(hideAddressBar, 0);

$(function () {
	
	var windowlocation = window.location.href;
	changeLocation = windowlocation.replace(/\//g,' & ');
	newurl = changeLocation.split(/[\s&]+/);
	getPageName = newurl[newurl.length-1].split('.html')[0];
	getPageNamephp = newurl[newurl.length-1].split('.php')[0];
	$('[href="'+windowlocation+'"]').parents("li").addClass('active');
	//$('[href="'+getPageNamephp+'.html"]').parents("li").addClass('active');
	
	
	
	$("nav li a").next('ul').prev().addClass('havemenu')
	$("nav li li a").click(function(){
			$(this).parent('li').parent('ul').hide();
	})
	
	setTimeout(function(){
		$(".socialIcon").animate({'left':'0'},1000);
	},100);
		setInterval(function(){
		$(".socialIcon").animate({'left':'-100%'},400, function(){
							$(".socialIcon").animate({'left':'0%'},300)
						});	
	},20000);
	
	if( $('pre').length > 0){
	
	$('pre').addClass('prettyprint').addClass('lang-html').addClass('linenums');
	    window.prettyPrint && prettyPrint();
	}
	
    $('#menu').toggle(function(){
        $(this).next('nav').find('ul:first').slideDown(200);
    },function(){
        $(this).next('nav').find('ul:first').slideUp(200);
    });
    
     $(window).resize(function() {
       getSreenWidth = $(window).width();
        if(getSreenWidth>767){
        $('nav > ul:hidden').show()
        
        }else{
            $('nav > ul:visible').hide()
        
       }
       
 });
    
     $('#runsnippets').click(function(e){
        e.preventDefault()
        fil = $('#viewsnippets').attr('src');
        $('#viewsnippets').removeAttr('src').attr('src', fil)
     })
     
     $(window).scroll(function(){
        if ($(window).scrollTop() >= 1) {
           $('#header').addClass('fixed-header');
        }
        else {
           $('#header').removeClass('fixed-header');
        }
});
	
});

