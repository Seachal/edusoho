webpackJsonp(["app/js/activity/doc/index"],{"9a5c59a43068776403d1":function(t,e){!function(t){t.fn.WaterMark=function(e){function i(){var e=f();v=t('<div id="waterMark" class="watermark"></div>');var i="rotate("+u.rotate+"deg)";return v.addClass("active"),v.css({opacity:u.opacity,"-webkit-transform":i,"-moz-transform":i,"-ms-transform":i,"-o-transform":i,transform:i,filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678, sizingMethod='auto expand')"}),v.css(u.style),e>=8&&e<9&&v.css({height:60,filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678, sizingMethod='auto expand')progid:DXImageTransform.Microsoft.Alpha(opacity="+100*parseFloat(u.opacity)+")"}),v.html(u.contents),v}function n(){a()}function a(){o(),v.css({top:m,left:y}),v.show()}function r(){a(),d=setInterval(function(){a(),setTimeout(function(){v.hide()},u.duringTime)},u.interval)}function o(){u.isUseRandomPos?s():l()}function s(){var t=h.height()-v.height()-p,e=h.width()-v.width()-w;m=Math.random()*t+p,y=Math.random()*e}function l(){"left"==u.xPosition&&(y=w),"center"==u.xPosition&&(y=(h.width()-v.width())/2),"right"==u.xPosition&&(y=h.width()-v.width()-w),"top"==u.yPosition&&(m=p),"center"==u.yPosition&&(m=(h.height()-v.height())/2+p),"bottom"==u.yPosition&&(m=h.height()-v.height()-p)}function c(){u.isAlwaysShow?n():r()}function f(){var t=-1;if("Microsoft Internet Explorer"==navigator.appName){var e=navigator.userAgent;null!=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(e)&&(t=parseFloat(RegExp.$1))}return t}var d,u=t.extend({duringTime:3e5,interval:6e5,isAlwaysShow:!0,xPosition:"center",yPosition:"top",isUseRandomPos:!1,opacity:.8,rotate:45,style:{},contents:""},e),h=t(this),p=40,w=15,m=p,y=w,v=null;!function(){h.append(i()),c()}()}}($)},d5da001241035cf6ddb3:function(t,e,i){"use strict";function n(t){new r.a({element:o,swfUrl:o.data("swf"),pdfUrl:o.data("pdf"),watermarkOptions:{contents:t,xPosition:"center",yPosition:"center",rotate:45},canCopy:o.data("disableCopy")})}Object.defineProperty(e,"__esModule",{value:!0});var a=i("e3591734a7ec9a6a6c56"),r=i.n(a),o=$("#document-content"),s=o.data("watermark-url");s?$.get(s,function(t){n(t)}):n("")},e3591734a7ec9a6a6c56:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i("c04c1b91e3806f24595a"),o=function(t){return t&&t.__esModule?t:{default:t}}(r);i("9a5c59a43068776403d1");var s=function(){function t(e){var i=e.element,a=e.swfUrl,r=e.pdfUrl,o=e.watermarkOptions,s=e.canCopy;n(this,t),this.element=$(i),this.swfUrl=a||"",this.pdfUrl=r||"",this.swfPlayerWidth="100%",this.swfPlayerHeight="100%",this.swfPlayerUrl="",this.watermarkOptions=o||"",this.canCopy=s||!1,this.init()}return a(t,[{key:"init",value:function(){this.isSupportHtml5()&&!this.isIE9()?this.initPDFJSViewer():this.initSwfViewer(),this.onFullScreen()}},{key:"onFullScreen",value:function(t){window.onmessage=function(t){if(null!=t&&void 0!=t){var e=t.data;if("boolean"==typeof e){var i=$("#task-content-iframe",window.parent.document);e?(i.removeClass("screen-full"),i.width("100%")):(i.addClass("screen-full"),i.width(window.document.body.offsetWidth+"px"))}}}}},{key:"isIE9",value:function(){return-1!=navigator.appVersion.indexOf("MSIE 9.")}},{key:"isSupportHtml5",value:function(){return $.support.leadingWhitespace}},{key:"initPDFJSViewer",value:function(){$("html").attr("dir","ltr");var t="//service-cdn.qiqiuyun.net/js-sdk/document-player/v7/viewer.html#"+this.pdfUrl;this.canCopy||(t+="#false");var e='<iframe id="doc-pdf-player" class="task-content-iframe" \n     src="'+t+'" style="width:100%;height:100%;border:0px" \n     allowfullscreen="" webkitallowfullscreen="">\n      </iframe>';this.element.append(e),this.addWatermark()}},{key:"initSwfViewer",value:function(){$.html('<div id="website"><p align="center" class="style1">'+Translator.trans("您还没有安装flash播放器 请点击")+'<a href="http://www.adobe.com/go/getflashplayer">'+Translator.trans("这里")+"</a>"+Translator.trans("安装")+"</p></div>");var t={doc_url:decodeURI(this.swfUrl.value)},e={bgcolor:"#efefef",allowFullScreen:!0,wmode:"window",allowNetworking:"all",allowscriptaccess:"always",autoPlay:!1},i={id:"website"};o.default.embedSWF(this.swfPlayerUrl,"website",this.swfPlayerWidth,this.swfPlayerHeight,"9.0.45",null,t,e,i),this.addWatermark()}},{key:"addWatermark",value:function(){this.watermarkOptions&&this.element.WaterMark(this.watermarkOptions)}}]),t}();e.default=s}},["d5da001241035cf6ddb3"]);