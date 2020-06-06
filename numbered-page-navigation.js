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

var home_page_url = location.href;	

function showpageCount(json) {
var thisUrl = home_page_url;
var htmlMap = new Array();
var thisNum = 1;
var postNum=1;
var itemCount = 0;
var fFlag = 0;
var eFlag = 0;
var html= '';
var upPageHtml ='';
var downPageHtml ='';

htmlMap[htmlMap.length]='/';
postNum++;

for(var i=pageCount-1, post; post = json.feed.entry[i]; i=i+pageCount) {

		
	var timestamp1 = post.published.$t.substring(0,19)+post.published.$t.substring(23,29);
	timestamp = encodeURIComponent(timestamp1);
	var title = post.title.$t;
			if(thisUrl.indexOf(timestamp)!=-1 ){
					thisNum = postNum;
			}
	
			postNum++;
			htmlMap[htmlMap.length] = '/search?updated-max='+timestamp+'&max-results='+pageCount;
	
}

var banyaknomer = htmlMap.length;
if (json.feed.entry.length % pageCount == 0){
	var banyaknomer = htmlMap.length -1 ;
	postNum=postNum-1;
};

	
for(var p =0;p< banyaknomer;p++){
	if(p>=(thisNum-displayPageNum-1) && p<(thisNum+displayPageNum)){
		if(fFlag ==0 && p == thisNum-2){
			if(thisNum==2){
				upPageHtml = '<span class="showpage"><a href="/">'+ upPageWord +'</a></span>';
			}else{
				upPageHtml = '<span class="showpage"><a href="'+htmlMap[p]+'">'+ upPageWord +'</a></span>';
			}
	
			fFlag++;
		}
	
		if(p==(thisNum-1)){
			html += '<span class="showpagePoint">'+thisNum+'</span>';
		}else{
			if(p==0){
					html += '<span class="showpageNum"><a href="/">1</a></span>';

			}else{
				html += '<span class="showpageNum"><a href="'+htmlMap[p]+'">'+ (p+1) +'</a></span>';
			}
		}
	
		if(eFlag ==0 && p == thisNum){
			downPageHtml = '<span class="showpage"> <a href="'+htmlMap[p]+'">'+ downPageWord +'</a></span>';
			eFlag++;
		}
	}
}
	
if(thisNum>1){
	html = ''+upPageHtml+' '+html +' ';
}
	
html = '<div class="showpageArea"><span style="COLOR: #000;" class="showpageOf"> Pages ('+(postNum-1)+')</span>'+html;
	
if(thisNum<(postNum-1)){
	html += downPageHtml;	
}
	
if(postNum==1) postNum++;
html += '</div>';
	

var pageArea = document.getElementsByName("pageArea");
var blogPager = document.getElementById("blog-pager");

if(postNum <= 2){
	html ='';
}

for(var p =0;p< pageArea.length;p++){
	pageArea[p].innerHTML = html;
}


if(pageArea&&pageArea.length>0){
	html ='';
}

if(blogPager){
	blogPager.innerHTML = html;
}


}


function showpageCount2(json) {

var thisUrl = home_page_url;
var htmlMap = new Array();
var isLablePage = thisUrl.indexOf("/search/label/")!=-1;
var thisLable = isLablePage ? thisUrl.substr(thisUrl.indexOf("/search/label/")+14,thisUrl.length) : "";
thisLable = thisLable.indexOf("?")!=-1 ? thisLable.substr(0,thisLable.indexOf("?")) : thisLable;
var thisNum = 1;
var postNum=1;
var itemCount = 0;
var fFlag = 0;
var eFlag = 0;
var html= '';
var upPageHtml ='';
var downPageHtml ='';

var labelHtml = '<span class="showpageNum"><a href="/search/label/'+thisLable+'?&max-results='+pageCount+'">';
var thisUrl = home_page_url;	

htmlMap[htmlMap.length]=labelHtml;
postNum++;

for(var i=pageCount-1, post; post = json.feed.entry[i]; i=i+pageCount) {
	var timestamp1 = post.published.$t.substring(0,19)+post.published.$t.substring(23,29);
	timestamp = encodeURIComponent(timestamp1);

	
	var title = post.title.$t;

			if(thisUrl.indexOf(timestamp)!=-1 ){
				thisNum = postNum;
			}
	
			if(title!='') postNum++;
			htmlMap[htmlMap.length] = '/search/label/'+thisLable+'?updated-max='+timestamp+'&max-results='+pageCount;
				
	itemCount++;
}

var banyaknomer = htmlMap.length;
if (json.feed.entry.length % pageCount == 0){
	var banyaknomer = htmlMap.length -1 ;
	postNum=postNum-1;
};
	
for(var p =0;p< banyaknomer;p++){
	if(p>=(thisNum-displayPageNum-1) && p<(thisNum+displayPageNum)){
		if(fFlag ==0 && p == thisNum-2){
			if(thisNum==2){
				upPageHtml = labelHtml + upPageWord +'</a></span>';
			}else{
				upPageHtml = '<span class="showpage"><a href="'+htmlMap[p]+'">'+ upPageWord +'</a></span>';
			}
	
			fFlag++;
		}
	
		if(p==(thisNum-1)){
			html += '<span class="showpagePoint">'+thisNum+'</span>';
		}else{
			if(p==0){
				html = labelHtml+'1</a></span>';
			}else{
				html += '<span class="showpageNum"><a href="'+htmlMap[p]+'">'+ (p+1) +'</a></span>';
			}
		}
	
		if(eFlag ==0 && p == thisNum){
			downPageHtml = '<span class="showpage"> <a href="'+htmlMap[p]+'">'+ downPageWord +'</a></span>';
			eFlag++;
		}
	}
}
	
if(thisNum>1){
	if(!isLablePage){
		html = ''+upPageHtml+' '+html +' ';
	}else{
		html = ''+upPageHtml+' '+html +' ';
	}
}
	
html = '<div class="showpageArea"><span style="COLOR: #000;" class="showpageOf"> Pages ('+(postNum-1)+')</span>'+html;
	
if(thisNum<(postNum-1)){
	html += downPageHtml;	
}
	
if(postNum==1) postNum++;
html += '</div>';
	
var pageArea = document.getElementsByName("pageArea");
var blogPager = document.getElementById("blog-pager");

if(postNum <= 2){
	html ='';
}

for(var p =0;p< pageArea.length;p++){
	pageArea[p].innerHTML = html;
}

if(pageArea&&pageArea.length>0){
	html ='';
}

if(blogPager){
	blogPager.innerHTML = html;
}


}

}
