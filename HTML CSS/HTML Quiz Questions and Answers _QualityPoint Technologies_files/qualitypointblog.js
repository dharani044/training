<!-- Auto read more script Start -->
var thumbnail_mode = "no"; //yes -with thumbnail, no -no thumbnail
summary_noimg = 460; //summary length when no image
summary_img = 340; //summary length when with image
img_thumb_height = 200;
img_thumb_width = 200;

//<![CDATA[
function removeHtmlTag(strx,chop){ 
 if(strx.indexOf("<")!=-1)
 {
  var s = strx.split("<"); 
  for(var i=0;i<s.length;i++){ 
   if(s[i].indexOf(">")!=-1){ 
    s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length); 
   } 
  } 
  strx =  s.join(""); 
 }
 chop = (chop < strx.length-1) ? chop : strx.length-2; 
 while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++; 
 strx = strx.substring(0,chop-1); 
 return strx+'...'; 
}

function createSummaryAndThumb(pID){
 var div = document.getElementById(pID);
 var imgtag = "";
 var img = div.getElementsByTagName("img");
 var summ = summary_noimg;
        if(thumbnail_mode == "yes") {
 if(img.length>=1) { 
  imgtag = '<span style="float:left; padding:0px 10px 5px 0px;"><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px"/></span>';
  summ = summary_img;
 }
 }
 var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>';
 div.innerHTML = summary;
}
//]]>
<!-- Auto read more script End -->

<!-- google custom search-->
  google.load('search', '1', {language : 'en'});
  google.setOnLoadCallback(function() {
    var customSearchControl = new google.search.CustomSearchControl('partner-pub-7088803035940952:xghb9z-m01p');
    customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
    customSearchControl.draw('cse');
  }, true);

<!-- Select All/Clear All example -->
	function SetAllCheckBoxes(FormName, FieldName, CheckValue)
	{
		if(!document.forms[FormName])
			return;
		var objCheckBoxes = document.forms[FormName].elements[FieldName];
		if(!objCheckBoxes)
			return;
		var countCheckBoxes = objCheckBoxes.length;
		if(!countCheckBoxes)
			objCheckBoxes.checked = CheckValue;
		else
			
			for(var i = 0; i < countCheckBoxes; i++)
				objCheckBoxes[i].checked = CheckValue;
	}
	
var urlAddress = 'http://www.blog.qualitypointtech.com';
var pageName = 'QualityPoint Technoligies Blog';

function addToFavorites()
{ 
  if (window.sidebar)
    { // Mozilla Firefox Bookmark
		window.sidebar.addPanel(pageName, urlAddress,'');
	}
 else if( window.external )
  { // IE Favorite
		window.external.AddFavorite( urlAddress,pageName); 
  }
 else if(window.opera && window.print) 
  { // Opera Hotlist
		return true;
  }


}

<!--Below function is used for expanding/collapsing list-->
	function ExpandCollapse(divContent,spanSymbol) //javascript code for displaying resources into "+" and "-"
	{
		if(document.getElementById(divContent).style.display =="none") 
		{ 
			document.getElementById(divContent).style.display ="block"; 
			document.getElementById(spanSymbol).innerHTML = "-";
		}
		else 
		{ 
			document.getElementById(divContent).style.display ="none"; 
			document.getElementById(spanSymbol).innerHTML ="+";
		}
	}

<!-- below function is used in a post hide/show of div tag -->
function showHideOthers()
{  
if (document.frmadd.appointment_for.selectedIndex==0) //Hide others drop-down list if myself is selected
  {
 document.getElementById("others").style.display='none';
  }
   else //show drop-down list of others 
   {
     document.getElementById("others").style.display='block';
   }
}

  <!--RelatedPostsStarts-->
   
    //<![CDATA[
    var relatedTitles = new Array();
    var relatedTitlesNum = 0;
    var relatedUrls = new Array();
    function related_results_labels(json) {
    for (var i = 0; i < json.feed.entry.length; i++) {
    var entry = json.feed.entry[i];
    relatedTitles[relatedTitlesNum] = entry.title.$t;
    for (var k = 0; k < entry.link.length; k++) {
    if (entry.link[k].rel == 'alternate') {
    relatedUrls[relatedTitlesNum] = entry.link[k].href;
    relatedTitlesNum++;
    break;
    }
    }
    }
    }
    function removeRelatedDuplicates() {
    var tmp = new Array(0);
    var tmp2 = new Array(0);
    for(var i = 0; i < relatedUrls.length; i++) {
    if(!contains(tmp, relatedUrls[i])) {
    tmp.length += 1;
    tmp[tmp.length - 1] = relatedUrls[i];
    tmp2.length += 1;
    tmp2[tmp2.length - 1] = relatedTitles[i];
    }
    }
    relatedTitles = tmp2;
    relatedUrls = tmp;
    }
    function contains(a, e) {
    for(var j = 0; j < a.length; j++) if (a[j]==e) return true;
    return false;
    }
    function printRelatedLabels(currenturlvalue) {
    var r = Math.floor((relatedTitles.length - 1) * Math.random());
    var i = 0;
    document.write('<ul>');
    while (i < relatedTitles.length && i < 6) {
if (currenturlvalue!=relatedUrls[r])
{
    document.write('<li><a href="' + relatedUrls[r] + '">' + relatedTitles[r] + '</a></li>');
}
    if (r < relatedTitles.length - 1) {
    r++;
    } else {
    r = 0;
    }
    i++;
    }
    document.write('</ul>');
    }
    //]]>

<!--end of related post-->

<!--Analytics-->
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-7912827-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();