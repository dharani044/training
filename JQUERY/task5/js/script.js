 $(document).ready(function()
 {
 	$("*").css({
 			"margin":"0 auto",
 			"color":"white",
 			"background-color":"teal",
 			"text-decoration":"none",
 			"list-style-type": "none"});
 	$("title").append("WEBPAGE USING JQUERY");
 	$("body").css({
 		"border":"2px solid white",
 		"width":"1000px",
 		"margin-top" : "10px",
 		"height":"1250px",
 		"margin-bottom":"10px"});
 	//header
 	$("header").attr("id", "header");
 	//header-div 1 (logo)
 	$("#header").children().first().attr("class","logo")
 	.css({
 		"width":"500px",
 		"margin":"0",
 		"padding":"10px",
 		"float":"left"});
 	//header div2(search)
 	$("#header").children().last().attr("class","search").css({"width":"250px","float":"right"});
 	$("input").css({
 		"width":"200px",
 		"height":"25", 
 		"font-size":"17px",
 		"border":"2px solid white",
 		"margin":"10px",
 		"margin-top":"50px"});
 	//classes
	$("nav").attr("id", "nav").css({"clear":"both"});
	$("article").attr("id", "content");
	$("#content").children().first().attr("class", "right");
	$("#content").children().last().attr("class", "left");
	$("footer").attr("id", "footer");
	$("#footer").children().first().attr("class","name");
	$("#footer").children().last().attr("class","copyright");
 	/* logo attributes... */
 	$(".logo img").attr("alt","logo-image");
 	$(".logo img").attr("src","images/logo1.png");
 	//sear box attributes
	$("input").attr("type","text").css({"border-radius":"8px"});
	$("input").attr("placeholder"," search here....!");
	//navigation bar
	$("ul li a").css({
		"width":"154px",
		"color":"teal",
		"background-color":"white",
		"float":"left",
		"text-align":"center",
		"padding":"10px",
		"margin-right":"10px",
		"font-size":"18px",
		"font-style":"italic",
		"border-radius":"4px"});
	$("ul li a").slice(0,1).append("Home");
	$("ul li a").slice(1,2).append("Kids wear");
	$("ul li a").slice(2,3).append("Jewellery");
	$("ul li a").slice(3,4).append("Fancy");
	$("ul li a").slice(4,5).append("Contact us");
	$("a").attr("href","#");
	//article content 1
	var content1="<p><p>ABOUT</p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThe act of purchasing products or services over the Internet. Online shopping has grown in popularity over the years, mainly because people find it convenient and easy to bargain shop from the comfort of their home or office. One of the most enticing factor about online shopping, particularly during a holiday season, is it alleviates the need to wait in long lines or search from store to store for a particular item.</p>";
	var content2="<p>BETTRE PRICES<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThe vast majority of online stores offer prices that are much lower than what you will find at a physical store. There are a few reasons for this. The first is because many people use the Internet to find cheaper items. Online business owners understand this. They will usually reduce their profit margin to get more customers.Another reason is because you can easily browse through dozens of different websites to find the best price. You can do the same at a mall, but it would take about an hour or longer. You also may not be taxed because most ecommerce stores won’t tax you unless they are stationed in your state.</p><p>CONVENIENCE</p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspShopping online is convenient. You don’t need to get dressed and drive to your favorite store. You can easily visit their website, find the product you want and buy it without getting out of your pyjamas. It’s also convenient because you don’t need to wait for the store to open.If you work irregular hours or are very busy, then you probably don’t have the time to visit the store. Shopping online allows you to buy things without hurting your schedule.</p></p>"
	$("article").children().first().append(content1).css({
		"text-align":"justify",
		"margin":"0",
		"float":"left",
		"margin-top":"20px",
		"padding":"20px",
		"margin-left":"30px",
		"font-size":"18px",
		"width":"43%"});
	$("article").children().first().append(content2);
	//article content 2
	var content3="<p><p>VARIETY</p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThe act of purchasing products or services over the Internet. Online shopping has grown in popularity over the years, mainly because people find it convenient and easy to bargain shop from the comfort of their home or office. One of the most enticing factor about online shopping, particularly during a holiday season, is it alleviates the need to wait in long lines or search from store to store for a particular item.</p>";
	var content4="<p>FEWER TRAPS<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThe vast majority of online stores offer prices that are much lower than what you will find at a physical store. There are a few reasons for this. The first is because many people use the Internet to find cheaper items. Online business owners understand this. They will usually reduce their profit margin to get more customers.Another reason is because you can easily browse through dozens of different websites to find the best price. You can do the same at a mall, but it would take about an hour or longer. You also may not be taxed because most ecommerce stores won’t tax you unless they are stationed in your state.</p><p>DISCOUNTS</p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspShopping online is convenient. You don’t need to get dressed and drive to your favorite store. You can easily visit their website, find the product you want and buy it without getting out of your pyjamas. It’s also convenient because you don’t need to wait for the store to open.If you work irregular hours or are very busy, then you probably don’t have the time to visit the store. Shopping online allows you to buy things without hurting your schedule.</p></p>"
	$("article").children().last().append(content3).css({
		"text-align":"justify",
		"margin":"0",
		"float":"right",
		"margin-top":"20px",
		"padding":"20px",
		"margin-right":"20px",
		"font-size":"18px",
		"width":"43%",});
	$("article").children().last().append(content4);
	//footer-logo
	$("footer div img").attr("alt","footer-icon");
	$("footer div img").attr("src","images/footer.jpg").css({
		"margin-left":"50px",
		"float":"left",
		"width":"426px"});
	//copyright
	var copy="&copy; Copyright protected. All rights reserved."
	$("footer div  p").append(copy).css({
		"margin-right":"50px",
		"float":"right",
		"margin-top":"30px",
		"width":"42%"});
 });
