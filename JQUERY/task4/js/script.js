/* 
	$(document).ready(function(){
    $("p").slice(0,2).css("background-color", "gray");
	}); 
*/ 
/*
	$(document).ready(function(){
    $("span").parent().css({"font-size": "20px","padding":"10px","text-align" : 
    "justify", "border": "3px solid blue"});
	}); 
*/ 
/*
	$(document).ready(function(){
		$("ul").click(function(){
			$(this).children().hide();
		});
	});
*/
/*
$(document).ready(function(){
	$("h3").click(function(){
		$(this).next().hide();
	});
});
*/
/*
$(document).ready(function(){
	$("h3").click(function(){
		$(this).siblings().hide();
	});
});
*/
/*
$(document).ready(function(){
	$("p").not(".just").hide();
});
*/
$(document).ready(function(){
    $("li").parents().css({"color": "red"});
});