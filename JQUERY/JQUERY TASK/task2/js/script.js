$(document).ready(function() {
	$(".click1").click(function() {
		$(" ul ul ").toggle();
		$("ul ul ul").css({"display":"none","margin-left":"120px", "top":"0px"});
	});
		$(".subclick1").click(function() {
			$(".submenu1").toggle();
			$(".submenu2").css("display","none");
		}); 
		   $(".subclick2").click(function() {
				$(".submenu2").toggle();
				$(".submenu1").css("display","none");
			}); 
});