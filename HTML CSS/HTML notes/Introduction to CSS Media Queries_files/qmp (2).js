addCFurlToListing =  function(event, object)
{
    switch (event)
    {
        
		case "QS.WidgetInstance:construct:out":
			if(QS.$.cookie('USERID_COOKIE')) {
				dataValueJson = object.propertiesToXapiRequest().getDataValues();
				dataValueJson.userID = encodeURIComponent(QS.$.cookie('USERID_COOKIE'));
				dataValueEncoded = encodeURIComponent(object.propertiesToXapiRequest().toXmlString(dataValueJson));
				object.setEDV(dataValueEncoded);
			}
			break;
		case "QS.WidgetInstance:displayAndExit:out":
        case "QS.WidgetInstance:display:out":
        case "QS.WidgetInstance:render:out":
            QS.jQuery("a.qsct, a.qsctSite, a.qsctCached").each(function(){
                if (!(/cfurl/.test(this.href)) && /^http:\/\//.test(this.href)) 
                {
                    var url = (window.location != window.parent.location)? document.referrer : document.location;
					this.href += (/\?/.test(this.href) ? '&' : '?') + "cfurl=" + encodeURIComponent(url);
                }
            });
			if(QS.jQuery('.assetNew').length == 1)
			{
				QS.jQuery('.assetNew-download-link').unbind('click');
				QS.jQuery('.assetNew-download-link').bind('click',function(e){
					e.preventDefault();
					QS.jQuery('.assetNew-download-link').click(function (e) {
						e.preventDefault();
					});
					var href = QS.jQuery(".assetNew-download-link").attr("href");
					window.open(href);
				});
			}
            break;
        default:
            break;
    }
    return;
}

/**
 * Event Handler to add cfurl
 */
QsWidgetEvents = function(event, object)
{
    addCFurlToListing(event, object);
}

