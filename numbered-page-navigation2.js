var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

 /*!
 * http://oqzigen.com
 */	
	var thisUrl = home_page_url;
	if (thisUrl.indexOf("/search/label/")!=-1){
		if (thisUrl.indexOf("?updated-max")!=-1){
			var lblname1 = thisUrl.substring(thisUrl.indexOf("/search/label/")+14,thisUrl.indexOf("?updated-max"));
		}else{
			var lblname1 = thisUrl.substring(thisUrl.indexOf("/search/label/")+14,thisUrl.indexOf("?&max"));
		}
	}

	var home_page = "/";
	if (thisUrl.indexOf("?q=")==-1 && thisUrl.indexOf(".html")==-1){	
		if (thisUrl.indexOf("/search/label/")==-1){			
			document.write('<script src="'+home_page+'feeds/posts/summary?alt=json-in-script&callback=showpageCount&max-results=99999" ><\/script>')
		}else{document.write('<script src="'+home_page+'feeds/posts/full/-/'+lblname1+'?alt=json-in-script&callback=showpageCount2&max-results=99999" ><\/script>')
		}
	}

}