!function(){function bindReady(){if(!readyBound){if(readyBound=!0,jQuery.browser.mozilla||jQuery.browser.opera)document.addEventListener("DOMContentLoaded",jQuery.ready,!1);else if(jQuery.browser.msie){document.write("<script id=__ie_init defer=true src=//:></script>");var e=document.getElementById("__ie_init");e&&(e.onreadystatechange=function(){"complete"==this.readyState&&jQuery.ready()}),e=null}else jQuery.browser.safari&&(jQuery.safariTimer=setInterval(function(){("loaded"==document.readyState||"complete"==document.readyState)&&(clearInterval(jQuery.safariTimer),jQuery.safariTimer=null,jQuery.ready())},10));jQuery.event.add(window,"load",jQuery.ready)}}if("undefined"!=typeof jQuery)var _jQuery=jQuery;var jQuery=window.jQuery=function(e,t){return window!=this&&this.init?this.init(e,t):new jQuery(e,t)};if("undefined"!=typeof $)var _$=$;window.$=jQuery;var quickExpr=/^[^<]*(<(.|\s)+>)[^>]*$|^#(\w+)$/;jQuery.fn=jQuery.prototype={init:function(e,t){if(e=e||document,"string"==typeof e){var r=quickExpr.exec(e);if(!r||!r[1]&&t)return new jQuery(t).find(e);if(r[1])e=jQuery.clean([r[1]],t);else{var n=document.getElementById(r[3]);if(n)return n.id!=r[3]?jQuery().find(e):(this[0]=n,this.length=1,this);e=[]}}else if(jQuery.isFunction(e))return new jQuery(document)[jQuery.fn.ready?"ready":"load"](e);return this.setArray(e.constructor==Array&&e||(e.jquery||e.length&&e!=window&&!e.nodeType&&void 0!=e[0]&&e[0].nodeType)&&jQuery.makeArray(e)||[e])},jquery:"1.2",size:function(){return this.length},length:0,get:function(e){return void 0==e?jQuery.makeArray(this):this[e]},pushStack:function(e){var t=jQuery(e);return t.prevObject=this,t},setArray:function(e){return this.length=0,Array.prototype.push.apply(this,e),this},each:function(e,t){return jQuery.each(this,e,t)},index:function(e){var t=-1;return this.each(function(r){this==e&&(t=r)}),t},attr:function(e,t,r){var n=e;if(e.constructor==String){if(void 0==t)return this.length&&jQuery[r||"attr"](this[0],e)||void 0;n={},n[e]=t}return this.each(function(e){for(var t in n)jQuery.attr(r?this.style:this,t,jQuery.prop(this,n[t],r,e,t))})},css:function(e,t){return this.attr(e,t,"curCSS")},text:function(e){if("object"!=typeof e&&null!=e)return this.empty().append(document.createTextNode(e));var t="";return jQuery.each(e||this,function(){jQuery.each(this.childNodes,function(){8!=this.nodeType&&(t+=1!=this.nodeType?this.nodeValue:jQuery.fn.text([this]))})}),t},wrapAll:function(e){return this[0]&&jQuery(e,this[0].ownerDocument).clone().insertBefore(this[0]).map(function(){for(var e=this;e.firstChild;)e=e.firstChild;return e}).append(this),this},wrapInner:function(e){return this.each(function(){jQuery(this).contents().wrapAll(e)})},wrap:function(e){return this.each(function(){jQuery(this).wrapAll(e)})},append:function(){return this.domManip(arguments,!0,1,function(e){this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,-1,function(e){this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,1,function(e){this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,-1,function(e){this.parentNode.insertBefore(e,this.nextSibling)})},end:function(){return this.prevObject||jQuery([])},find:function(e){var t=jQuery.map(this,function(t){return jQuery.find(e,t)});return this.pushStack(/[^+>] [^+>]/.test(e)||e.indexOf("..")>-1?jQuery.unique(t):t)},clone:function(e){var t=this.map(function(){return this.outerHTML?jQuery(this.outerHTML)[0]:this.cloneNode(!0)});if(e===!0){var r=t.find("*").andSelf();this.find("*").andSelf().each(function(e){var t=jQuery.data(this,"events");for(var n in t)for(var i in t[n])jQuery.event.add(r[e],n,t[n][i],t[n][i].data)})}return t},filter:function(e){return this.pushStack(jQuery.isFunction(e)&&jQuery.grep(this,function(t,r){return e.apply(t,[r])})||jQuery.multiFilter(e,this))},not:function(e){return this.pushStack(e.constructor==String&&jQuery.multiFilter(e,this,!0)||jQuery.grep(this,function(t){return e.constructor==Array||e.jquery?jQuery.inArray(t,e)<0:t!=e}))},add:function(e){return this.pushStack(jQuery.merge(this.get(),e.constructor==String?jQuery(e).get():void 0==e.length||e.nodeName&&"FORM"!=e.nodeName?[e]:e))},is:function(e){return e?jQuery.multiFilter(e,this).length>0:!1},hasClass:function(e){return this.is("."+e)},val:function(e){if(void 0!=e)return this.each(function(){if(e.constructor==Array&&/radio|checkbox/.test(this.type))this.checked=jQuery.inArray(this.value,e)>=0||jQuery.inArray(this.name,e)>=0;else if(jQuery.nodeName(this,"select")){var t=e.constructor==Array?e:[e];jQuery("option",this).each(function(){this.selected=jQuery.inArray(this.value,t)>=0||jQuery.inArray(this.text,t)>=0}),t.length||(this.selectedIndex=-1)}else this.value=e});if(this.length){var t=this[0];if(jQuery.nodeName(t,"select")){var r=t.selectedIndex,n=[],i=t.options,a="select-one"==t.type;if(0>r)return null;for(var o=a?r:0,s=a?r+1:i.length;s>o;o++){var u=i[o];if(u.selected){var e=jQuery.browser.msie&&!u.attributes.value.specified?u.text:u.value;if(a)return e;n.push(e)}}return n}return this[0].value.replace(/\r/g,"")}},html:function(e){return void 0==e?this.length?this[0].innerHTML:null:this.empty().append(e)},replaceWith:function(e){return this.after(e).remove()},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments))},map:function(e){return this.pushStack(jQuery.map(this,function(t,r){return e.call(t,r,t)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(e,t,r,n){var i,a=this.length>1;return this.each(function(){i||(i=jQuery.clean(e,this.ownerDocument),0>r&&i.reverse());var o=this;t&&jQuery.nodeName(this,"table")&&jQuery.nodeName(i[0],"tr")&&(o=this.getElementsByTagName("tbody")[0]||this.appendChild(document.createElement("tbody"))),jQuery.each(i,function(){jQuery.nodeName(this,"script")?this.src?jQuery.ajax({url:this.src,async:!1,dataType:"script"}):jQuery.globalEval(this.text||this.textContent||this.innerHTML||""):n.apply(o,[a?this.cloneNode(!0):this])})})}},jQuery.extend=jQuery.fn.extend=function(){var e=arguments[0]||{},t=1,r=arguments.length,n=!1;e.constructor==Boolean&&(n=e,e=arguments[1]||{}),1==r&&(e=this,t=0);for(var i;r>t;t++)if(null!=(i=arguments[t]))for(var a in i)e!=i[a]&&(n&&"object"==typeof i[a]&&e[a]?jQuery.extend(e[a],i[a]):void 0!=i[a]&&(e[a]=i[a]));return e};var expando="jQuery"+(new Date).getTime(),uuid=0,win={};jQuery.extend({noConflict:function(e){return window.$=_$,e&&(window.jQuery=_jQuery),jQuery},isFunction:function(e){return!!e&&"string"!=typeof e&&!e.nodeName&&e.constructor!=Array&&/function/i.test(e+"")},isXMLDoc:function(e){return e.documentElement&&!e.body||e.tagName&&e.ownerDocument&&!e.ownerDocument.body},globalEval:function(e){e=jQuery.trim(e),e&&(window.execScript?window.execScript(e):jQuery.browser.safari?window.setTimeout(e,0):eval.call(window,e))},nodeName:function(e,t){return e.nodeName&&e.nodeName.toUpperCase()==t.toUpperCase()},cache:{},data:function(e,t,r){e=e==window?win:e;var n=e[expando];return n||(n=e[expando]=++uuid),t&&!jQuery.cache[n]&&(jQuery.cache[n]={}),void 0!=r&&(jQuery.cache[n][t]=r),t?jQuery.cache[n][t]:n},removeData:function(e,t){e=e==window?win:e;var r=e[expando];if(t){if(jQuery.cache[r]){delete jQuery.cache[r][t],t="";for(t in jQuery.cache[r])break;t||jQuery.removeData(e)}}else{try{delete e[expando]}catch(n){e.removeAttribute&&e.removeAttribute(expando)}delete jQuery.cache[r]}},each:function(e,t,r){if(r)if(void 0==e.length)for(var n in e)t.apply(e[n],r);else for(var n=0,i=e.length;i>n&&t.apply(e[n],r)!==!1;n++);else if(void 0==e.length)for(var n in e)t.call(e[n],n,e[n]);else for(var n=0,i=e.length,a=e[0];i>n&&t.call(a,n,a)!==!1;a=e[++n]);return e},prop:function(e,t,r,n,i){jQuery.isFunction(t)&&(t=t.call(e,[n]));var a=/z-?index|font-?weight|opacity|zoom|line-?height/i;return t&&t.constructor==Number&&"curCSS"==r&&!a.test(i)?t+"px":t},className:{add:function(e,t){jQuery.each((t||"").split(/\s+/),function(t,r){jQuery.className.has(e.className,r)||(e.className+=(e.className?" ":"")+r)})},remove:function(e,t){e.className=void 0!=t?jQuery.grep(e.className.split(/\s+/),function(e){return!jQuery.className.has(t,e)}).join(" "):""},has:function(e,t){return jQuery.inArray(t,(e.className||e).toString().split(/\s+/))>-1}},swap:function(e,t,r){for(var n in t)e.style["old"+n]=e.style[n],e.style[n]=t[n];r.apply(e,[]);for(var n in t)e.style[n]=e.style["old"+n]},css:function(e,t){if("height"==t||"width"==t){var r,n,i={},a=["Top","Bottom","Right","Left"];return jQuery.each(a,function(){i["padding"+this]=0,i["border"+this+"Width"]=0}),jQuery.swap(e,i,function(){if(jQuery(e).is(":visible"))r=e.offsetHeight,n=e.offsetWidth;else{e=jQuery(e.cloneNode(!0)).find(":radio").removeAttr("checked").end().css({visibility:"hidden",position:"absolute",display:"block",right:"0",left:"0"}).appendTo(e.parentNode)[0];var t=jQuery.css(e.parentNode,"position")||"static";"static"==t&&(e.parentNode.style.position="relative"),r=e.clientHeight,n=e.clientWidth,"static"==t&&(e.parentNode.style.position="static"),e.parentNode.removeChild(e)}}),"height"==t?r:n}return jQuery.curCSS(e,t)},curCSS:function(e,t,r){function n(e){if(!jQuery.browser.safari)return!1;var t=document.defaultView.getComputedStyle(e,null);return!t||""==t.getPropertyValue("color")}var i,a=[],o=[];if("opacity"==t&&jQuery.browser.msie)return i=jQuery.attr(e.style,"opacity"),""==i?"1":i;if(t.match(/float/i)&&(t=styleFloat),!r&&e.style[t])i=e.style[t];else if(document.defaultView&&document.defaultView.getComputedStyle){t.match(/float/i)&&(t="float"),t=t.replace(/([A-Z])/g,"-$1").toLowerCase();var s=document.defaultView.getComputedStyle(e,null);if(s&&!n(e))i=s.getPropertyValue(t);else{for(var u=e;u&&n(u);u=u.parentNode)a.unshift(u);for(u=0;u<a.length;u++)n(a[u])&&(o[u]=a[u].style.display,a[u].style.display="block");for(i="display"==t&&null!=o[a.length-1]?"none":document.defaultView.getComputedStyle(e,null).getPropertyValue(t)||"",u=0;u<o.length;u++)null!=o[u]&&(a[u].style.display=o[u])}"opacity"==t&&""==i&&(i="1")}else if(e.currentStyle){var l=t.replace(/\-(\w)/g,function(e,t){return t.toUpperCase()});if(i=e.currentStyle[t]||e.currentStyle[l],!/^\d+(px)?$/i.test(i)&&/^\d/.test(i)){var d=e.style.left,c=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,e.style.left=i||0,i=e.style.pixelLeft+"px",e.style.left=d,e.runtimeStyle.left=c}}return i},clean:function(e,t){var r=[];return t=t||document,jQuery.each(e,function(e,n){if(n){if(n.constructor==Number&&(n=n.toString()),"string"==typeof n){n=n.replace(/(<(\w+)[^>]*?)\/>/g,function(e,t,r){return r.match(/^(abbr|br|col|img|input|link|meta|param|hr|area)$/i)?e:t+"></"+r+">"});var i=jQuery.trim(n).toLowerCase(),a=t.createElement("div"),o=[],s=!i.indexOf("<opt")&&[1,"<select>","</select>"]||!i.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||i.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!i.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!i.indexOf("<td")||!i.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!i.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||jQuery.browser.msie&&[1,"div<div>","</div>"]||[0,"",""];for(a.innerHTML=s[1]+n+s[2];s[0]--;)a=a.lastChild;if(jQuery.browser.msie){!i.indexOf("<table")&&i.indexOf("<tbody")<0?o=a.firstChild&&a.firstChild.childNodes:"<table>"==s[1]&&i.indexOf("<tbody")<0&&(o=a.childNodes);for(var u=o.length-1;u>=0;--u)jQuery.nodeName(o[u],"tbody")&&!o[u].childNodes.length&&o[u].parentNode.removeChild(o[u]);/^\s/.test(n)&&a.insertBefore(t.createTextNode(n.match(/^\s*/)[0]),a.firstChild)}n=jQuery.makeArray(a.childNodes)}(0!==n.length||jQuery.nodeName(n,"form")||jQuery.nodeName(n,"select"))&&(void 0==n[0]||jQuery.nodeName(n,"form")||n.options?r.push(n):r=jQuery.merge(r,n))}}),r},attr:function(e,t,r){var n=jQuery.isXMLDoc(e)?{}:jQuery.props;if("selected"==t&&jQuery.browser.safari&&e.parentNode.selectedIndex,n[t])return void 0!=r&&(e[n[t]]=r),e[n[t]];if(jQuery.browser.msie&&"style"==t)return jQuery.attr(e.style,"cssText",r);if(void 0==r&&jQuery.browser.msie&&jQuery.nodeName(e,"form")&&("action"==t||"method"==t))return e.getAttributeNode(t).nodeValue;if(e.tagName){if(void 0!=r){if("type"==t&&jQuery.nodeName(e,"input")&&e.parentNode)throw"type property can't be changed";e.setAttribute(t,r)}return jQuery.browser.msie&&/href|src/.test(t)&&!jQuery.isXMLDoc(e)?e.getAttribute(t,2):e.getAttribute(t)}return"opacity"==t&&jQuery.browser.msie?(void 0!=r&&(e.zoom=1,e.filter=(e.filter||"").replace(/alpha\([^)]*\)/,"")+("NaN"==parseFloat(r).toString()?"":"alpha(opacity="+100*r+")")),e.filter?(parseFloat(e.filter.match(/opacity=([^)]*)/)[1])/100).toString():""):(t=t.replace(/-([a-z])/gi,function(e,t){return t.toUpperCase()}),void 0!=r&&(e[t]=r),e[t])},trim:function(e){return(e||"").replace(/^\s+|\s+$/g,"")},makeArray:function(e){var t=[];if("array"!=typeof e)for(var r=0,n=e.length;n>r;r++)t.push(e[r]);else t=e.slice(0);return t},inArray:function(e,t){for(var r=0,n=t.length;n>r;r++)if(t[r]==e)return r;return-1},merge:function(e,t){if(jQuery.browser.msie)for(var r=0;t[r];r++)8!=t[r].nodeType&&e.push(t[r]);else for(var r=0;t[r];r++)e.push(t[r]);return e},unique:function(e){var t=[],r={};try{for(var n=0,i=e.length;i>n;n++){var a=jQuery.data(e[n]);r[a]||(r[a]=!0,t.push(e[n]))}}catch(o){t=e}return t},grep:function(elems,fn,inv){"string"==typeof fn&&(fn=eval("false||function(a,i){return "+fn+"}"));for(var result=[],i=0,el=elems.length;el>i;i++)(!inv&&fn(elems[i],i)||inv&&!fn(elems[i],i))&&result.push(elems[i]);return result},map:function(elems,fn){"string"==typeof fn&&(fn=eval("false||function(a){return "+fn+"}"));for(var result=[],i=0,el=elems.length;el>i;i++){var val=fn(elems[i],i);null!==val&&void 0!=val&&(val.constructor!=Array&&(val=[val]),result=result.concat(val))}return result}});var userAgent=navigator.userAgent.toLowerCase();jQuery.browser={version:(userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(userAgent),opera:/opera/.test(userAgent),msie:/msie/.test(userAgent)&&!/opera/.test(userAgent),mozilla:/mozilla/.test(userAgent)&&!/(compatible|webkit)/.test(userAgent)};var styleFloat=jQuery.browser.msie?"styleFloat":"cssFloat";jQuery.extend({boxModel:!jQuery.browser.msie||"CSS1Compat"==document.compatMode,styleFloat:jQuery.browser.msie?"styleFloat":"cssFloat",props:{"for":"htmlFor","class":"className","float":styleFloat,cssFloat:styleFloat,styleFloat:styleFloat,innerHTML:"innerHTML",className:"className",value:"value",disabled:"disabled",checked:"checked",readonly:"readOnly",selected:"selected",maxlength:"maxLength"}}),jQuery.each({parent:"a.parentNode",parents:"jQuery.dir(a,'parentNode')",next:"jQuery.nth(a,2,'nextSibling')",prev:"jQuery.nth(a,2,'previousSibling')",nextAll:"jQuery.dir(a,'nextSibling')",prevAll:"jQuery.dir(a,'previousSibling')",siblings:"jQuery.sibling(a.parentNode.firstChild,a)",children:"jQuery.sibling(a.firstChild)",contents:"jQuery.nodeName(a,'iframe')?a.contentDocument||a.contentWindow.document:jQuery.makeArray(a.childNodes)"},function(e,t){jQuery.fn[e]=function(e){var r=jQuery.map(this,t);return e&&"string"==typeof e&&(r=jQuery.multiFilter(e,r)),this.pushStack(jQuery.unique(r))}}),jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){jQuery.fn[e]=function(){var e=arguments;return this.each(function(){for(var r=0,n=e.length;n>r;r++)jQuery(e[r])[t](this)})}}),jQuery.each({removeAttr:function(e){jQuery.attr(this,e,""),this.removeAttribute(e)},addClass:function(e){jQuery.className.add(this,e)},removeClass:function(e){jQuery.className.remove(this,e)},toggleClass:function(e){jQuery.className[jQuery.className.has(this,e)?"remove":"add"](this,e)},remove:function(e){(!e||jQuery.filter(e,[this]).r.length)&&(jQuery.removeData(this),this.parentNode.removeChild(this))},empty:function(){for(jQuery("*",this).each(function(){jQuery.removeData(this)});this.firstChild;)this.removeChild(this.firstChild)}},function(e,t){jQuery.fn[e]=function(){return this.each(t,arguments)}}),jQuery.each(["Height","Width"],function(e,t){var r=t.toLowerCase();jQuery.fn[r]=function(e){return this[0]==window?jQuery.browser.safari&&self["inner"+t]||jQuery.boxModel&&Math.max(document.documentElement["client"+t],document.body["client"+t])||document.body["client"+t]:this[0]==document?Math.max(document.body["scroll"+t],document.body["offset"+t]):void 0==e?this.length?jQuery.css(this[0],r):null:this.css(r,e.constructor==String?e:e+"px")}});var chars=jQuery.browser.safari&&parseInt(jQuery.browser.version)<417?"(?:[\\w*_-]|\\\\.)":"(?:[\\wĨ-￿*_-]|\\\\.)",quickChild=new RegExp("^>\\s*("+chars+"+)"),quickID=new RegExp("^("+chars+"+)(#)("+chars+"+)"),quickClass=new RegExp("^([#.]?)("+chars+"*)");jQuery.extend({expr:{"":"m[2]=='*'||jQuery.nodeName(a,m[2])","#":"a.getAttribute('id')==m[2]",":":{lt:"i<m[3]-0",gt:"i>m[3]-0",nth:"m[3]-0==i",eq:"m[3]-0==i",first:"i==0",last:"i==r.length-1",even:"i%2==0",odd:"i%2","first-child":"a.parentNode.getElementsByTagName('*')[0]==a","last-child":"jQuery.nth(a.parentNode.lastChild,1,'previousSibling')==a","only-child":"!jQuery.nth(a.parentNode.lastChild,2,'previousSibling')",parent:"a.firstChild",empty:"!a.firstChild",contains:"(a.textContent||a.innerText||'').indexOf(m[3])>=0",visible:'"hidden"!=a.type&&jQuery.css(a,"display")!="none"&&jQuery.css(a,"visibility")!="hidden"',hidden:'"hidden"==a.type||jQuery.css(a,"display")=="none"||jQuery.css(a,"visibility")=="hidden"',enabled:"!a.disabled",disabled:"a.disabled",checked:"a.checked",selected:"a.selected||jQuery.attr(a,'selected')",text:"'text'==a.type",radio:"'radio'==a.type",checkbox:"'checkbox'==a.type",file:"'file'==a.type",password:"'password'==a.type",submit:"'submit'==a.type",image:"'image'==a.type",reset:"'reset'==a.type",button:'"button"==a.type||jQuery.nodeName(a,"button")',input:"/input|select|textarea|button/i.test(a.nodeName)",has:"jQuery.find(m[3],a).length",header:"/h\\d/i.test(a.nodeName)",animated:"jQuery.grep(jQuery.timers,function(fn){return a==fn.elem;}).length"}},parse:[/^(\[) *@?([\w-]+) *([!*$^~=]*) *('?"?)(.*?)\4 *\]/,/^(:)([\w-]+)\("?'?(.*?(\(.*?\))?[^(]*?)"?'?\)/,new RegExp("^([:.#]*)("+chars+"+)")],multiFilter:function(e,t,r){for(var n,i=[];e&&e!=n;){n=e;var a=jQuery.filter(e,t,r);e=a.t.replace(/^\s*,\s*/,""),i=r?t=a.r:jQuery.merge(i,a.r)}return i},find:function(e,t){if("string"!=typeof e)return[e];t&&!t.nodeType&&(t=null),t=t||document;for(var r,n=[t],i=[];e&&r!=e;){var a=[];r=e,e=jQuery.trim(e);var o=!1,s=quickChild,u=s.exec(e);if(u){for(var l=u[1].toUpperCase(),d=0;n[d];d++)for(var c=n[d].firstChild;c;c=c.nextSibling)1!=c.nodeType||"*"!=l&&c.nodeName.toUpperCase()!=l.toUpperCase()||a.push(c);if(n=a,e=e.replace(s,""),0==e.indexOf(" "))continue;o=!0}else if(s=/^([>+~])\s*(\w*)/i,null!=(u=s.exec(e))){a=[];var l=u[2],h={};u=u[1];for(var y=0,f=n.length;f>y;y++)for(var p="~"==u||"+"==u?n[y].nextSibling:n[y].firstChild;p;p=p.nextSibling)if(1==p.nodeType){var m=jQuery.data(p);if("~"==u&&h[m])break;if(l&&p.nodeName.toUpperCase()!=l.toUpperCase()||("~"==u&&(h[m]=!0),a.push(p)),"+"==u)break}n=a,e=jQuery.trim(e.replace(s,"")),o=!0}if(e&&!o)if(e.indexOf(",")){var j=quickID,u=j.exec(e);u?u=[0,u[2],u[3],u[1]]:(j=quickClass,u=j.exec(e)),u[2]=u[2].replace(/\\/g,"");var Q=n[n.length-1];if("#"==u[1]&&Q&&Q.getElementById&&!jQuery.isXMLDoc(Q)){var g=Q.getElementById(u[2]);(jQuery.browser.msie||jQuery.browser.opera)&&g&&"string"==typeof g.id&&g.id!=u[2]&&(g=jQuery('[@id="'+u[2]+'"]',Q)[0]),n=a=!g||u[3]&&!jQuery.nodeName(g,u[3])?[]:[g]}else{for(var d=0;n[d];d++){var v="#"==u[1]&&u[3]?u[3]:""!=u[1]||""==u[0]?"*":u[2];"*"==v&&"object"==n[d].nodeName.toLowerCase()&&(v="param"),a=jQuery.merge(a,n[d].getElementsByTagName(v))}if("."==u[1]&&(a=jQuery.classFilter(a,u[2])),"#"==u[1]){for(var b=[],d=0;a[d];d++)if(a[d].getAttribute("id")==u[2]){b=[a[d]];break}a=b}n=a}e=e.replace(j,"")}else t==n[0]&&n.shift(),i=jQuery.merge(i,n),a=n=[t],e=" "+e.substr(1,e.length);if(e){var w=jQuery.filter(e,a);n=a=w.r,e=jQuery.trim(w.t)}}return e&&(n=[]),n&&t==n[0]&&n.shift(),i=jQuery.merge(i,n)},classFilter:function(e,t,r){t=" "+t+" ";for(var n=[],i=0;e[i];i++){var a=(" "+e[i].className+" ").indexOf(t)>=0;(!r&&a||r&&!a)&&n.push(e[i])}return n},filter:function(t,r,not){for(var last;t&&t!=last;){last=t;for(var p=jQuery.parse,m,i=0;p[i];i++)if(m=p[i].exec(t)){t=t.substring(m[0].length),m[2]=m[2].replace(/\\/g,"");break}if(!m)break;if(":"==m[1]&&"not"==m[2])r=jQuery.filter(m[3],r,!0).r;else if("."==m[1])r=jQuery.classFilter(r,m[2],not);else if("["==m[1]){for(var tmp=[],type=m[3],i=0,rl=r.length;rl>i;i++){var a=r[i],z=a[jQuery.props[m[2]]||m[2]];(null==z||/href|src|selected/.test(m[2]))&&(z=jQuery.attr(a,m[2])||""),(""==type&&!!z||"="==type&&z==m[5]||"!="==type&&z!=m[5]||"^="==type&&z&&!z.indexOf(m[5])||"$="==type&&z.substr(z.length-m[5].length)==m[5]||("*="==type||"~="==type)&&z.indexOf(m[5])>=0)^not&&tmp.push(a)}r=tmp}else if(":"==m[1]&&"nth-child"==m[2]){for(var merge={},tmp=[],test=/(\d*)n\+?(\d*)/.exec("even"==m[3]&&"2n"||"odd"==m[3]&&"2n+1"||!/\D/.test(m[3])&&"n+"+m[3]||m[3]),first=(test[1]||1)-0,last=test[2]-0,i=0,rl=r.length;rl>i;i++){var node=r[i],parentNode=node.parentNode,id=jQuery.data(parentNode);if(!merge[id]){for(var c=1,n=parentNode.firstChild;n;n=n.nextSibling)1==n.nodeType&&(n.nodeIndex=c++);merge[id]=!0}var add=!1;1==first?(0==last||node.nodeIndex==last)&&(add=!0):(node.nodeIndex+last)%first==0&&(add=!0),add^not&&tmp.push(node)}r=tmp}else{var f=jQuery.expr[m[1]];"string"!=typeof f&&(f=jQuery.expr[m[1]][m[2]]),f=eval("false||function(a,i){return "+f+"}"),r=jQuery.grep(r,f,not)}}return{r:r,t:t}},dir:function(e,t){for(var r=[],n=e[t];n&&n!=document;)1==n.nodeType&&r.push(n),n=n[t];return r},nth:function(e,t,r,n){t=t||1;for(var i=0;e&&(1!=e.nodeType||++i!=t);e=e[r]);return e},sibling:function(e,t){for(var r=[];e;e=e.nextSibling)1!=e.nodeType||t&&e==t||r.push(e);return r}}),jQuery.event={add:function(e,t,r,n){if(jQuery.browser.msie&&void 0!=e.setInterval&&(e=window),r.guid||(r.guid=this.guid++),void 0!=n){var i=r;r=function(){return i.apply(this,arguments)},r.data=n,r.guid=i.guid}var a=t.split(".");t=a[0],r.type=a[1];var o=jQuery.data(e,"events")||jQuery.data(e,"events",{}),s=jQuery.data(e,"handle",function(){var t;return"undefined"==typeof jQuery||jQuery.event.triggered?t:t=jQuery.event.handle.apply(e,arguments)}),u=o[t];u||(u=o[t]={},e.addEventListener?e.addEventListener(t,s,!1):e.attachEvent("on"+t,s)),u[r.guid]=r,this.global[t]=!0},guid:1,global:{},remove:function(e,t,r){var n,i=jQuery.data(e,"events");if("string"==typeof t){var a=t.split(".");t=a[0]}if(i){if(t&&t.type&&(r=t.handler,t=t.type),t){if(i[t]){if(r)delete i[t][r.guid];else for(r in i[t])a[1]&&i[t][r].type!=a[1]||delete i[t][r];for(n in i[t])break;n||(e.removeEventListener?e.removeEventListener(t,jQuery.data(e,"handle"),!1):e.detachEvent("on"+t,jQuery.data(e,"handle")),n=null,delete i[t])}}else for(t in i)this.remove(e,t);for(n in i)break;n||(jQuery.removeData(e,"events"),jQuery.removeData(e,"handle"))}},trigger:function(e,t,r,n,i){if(t=jQuery.makeArray(t||[]),r){var a,o=jQuery.isFunction(r[e]||null),s=!t[0]||!t[0].preventDefault;s&&t.unshift(this.fix({type:e,target:r})),jQuery.isFunction(jQuery.data(r,"handle"))&&(a=jQuery.data(r,"handle").apply(r,t)),!o&&r["on"+e]&&r["on"+e].apply(r,t)===!1&&(a=!1),s&&t.shift(),i&&i.apply(r,t)===!1&&(a=!1),!o||n===!1||a===!1||jQuery.nodeName(r,"a")&&"click"==e||(this.triggered=!0,r[e]()),this.triggered=!1}else this.global[e]&&jQuery("*").add([window,document]).trigger(e,t);return a},handle:function(e){var t;e=jQuery.event.fix(e||window.event||{});var r=e.type.split(".");e.type=r[0];var n=jQuery.data(this,"events")&&jQuery.data(this,"events")[e.type],i=Array.prototype.slice.call(arguments,1);i.unshift(e);for(var a in n)if(i[0].handler=n[a],i[0].data=n[a].data,!r[1]||n[a].type==r[1]){var o=n[a].apply(this,i);t!==!1&&(t=o),o===!1&&(e.preventDefault(),e.stopPropagation())}return jQuery.browser.msie&&(e.target=e.preventDefault=e.stopPropagation=e.handler=e.data=null),t},fix:function(e){var t=e;if(e=jQuery.extend({},t),e.preventDefault=function(){t.preventDefault&&t.preventDefault(),t.returnValue=!1},e.stopPropagation=function(){t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0},!e.target&&e.srcElement&&(e.target=e.srcElement),jQuery.browser.safari&&3==e.target.nodeType&&(e.target=t.target.parentNode),!e.relatedTarget&&e.fromElement&&(e.relatedTarget=e.fromElement==e.target?e.toElement:e.fromElement),null==e.pageX&&null!=e.clientX){var r=document.documentElement,n=document.body;e.pageX=e.clientX+(r&&r.scrollLeft||n.scrollLeft||0),e.pageY=e.clientY+(r&&r.scrollTop||n.scrollTop||0)}return e.which||!e.charCode&&!e.keyCode||(e.which=e.charCode||e.keyCode),!e.metaKey&&e.ctrlKey&&(e.metaKey=e.ctrlKey),!e.which&&e.button&&(e.which=1&e.button?1:2&e.button?3:4&e.button?2:0),e}},jQuery.fn.extend({bind:function(e,t,r){return"unload"==e?this.one(e,t,r):this.each(function(){jQuery.event.add(this,e,r||t,r&&t)})},one:function(e,t,r){return this.each(function(){jQuery.event.add(this,e,function(e){return jQuery(this).unbind(e),(r||t).apply(this,arguments)},r&&t)})},unbind:function(e,t){return this.each(function(){jQuery.event.remove(this,e,t)})},trigger:function(e,t,r){return this.each(function(){jQuery.event.trigger(e,t,this,!0,r)})},triggerHandler:function(e,t,r){return this[0]?jQuery.event.trigger(e,t,this[0],!1,r):void 0},toggle:function(){var e=arguments;return this.click(function(t){return this.lastToggle=0==this.lastToggle?1:0,t.preventDefault(),e[this.lastToggle].apply(this,[t])||!1})},hover:function(e,t){function r(r){for(var n=r.relatedTarget;n&&n!=this;)try{n=n.parentNode}catch(r){n=this}return n==this?!1:("mouseover"==r.type?e:t).apply(this,[r])}return this.mouseover(r).mouseout(r)},ready:function(e){return bindReady(),jQuery.isReady?e.apply(document,[jQuery]):jQuery.readyList.push(function(){return e.apply(this,[jQuery])}),this}}),jQuery.extend({isReady:!1,readyList:[],ready:function(){jQuery.isReady||(jQuery.isReady=!0,jQuery.readyList&&(jQuery.each(jQuery.readyList,function(){this.apply(document)}),jQuery.readyList=null),(jQuery.browser.mozilla||jQuery.browser.opera)&&document.removeEventListener("DOMContentLoaded",jQuery.ready,!1),window.frames.length||jQuery(window).load(function(){jQuery("#__ie_init").remove()}))}}),jQuery.each("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,change,select,submit,keydown,keypress,keyup,error".split(","),function(e,t){jQuery.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}});var readyBound=!1;jQuery.fn.extend({load:function(e,t,r){if(jQuery.isFunction(e))return this.bind("load",e);var n=e.indexOf(" ");if(n>=0){var i=e.slice(n,e.length);e=e.slice(0,n)}r=r||function(){};var a="GET";t&&(jQuery.isFunction(t)?(r=t,t=null):(t=jQuery.param(t),a="POST"));var o=this;return jQuery.ajax({url:e,type:a,data:t,complete:function(e,t){("success"==t||"notmodified"==t)&&o.html(i?jQuery("<div/>").append(e.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(i):e.responseText),setTimeout(function(){o.each(r,[e.responseText,t,e])},13)}}),this},serialize:function(){return jQuery.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return jQuery.nodeName(this,"form")?jQuery.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password/i.test(this.type))}).map(function(e,t){var r=jQuery(this).val();return null==r?null:r.constructor==Array?jQuery.map(r,function(e,r){return{name:t.name,value:r}}):{name:t.name,value:r}}).get()}}),jQuery.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(e,t){jQuery.fn[t]=function(e){return this.bind(t,e)}});var jsc=(new Date).getTime();jQuery.extend({get:function(e,t,r,n){return jQuery.isFunction(t)&&(r=t,t=null),jQuery.ajax({type:"GET",url:e,data:t,success:r,dataType:n})},getScript:function(e,t){return jQuery.get(e,null,t,"script")},getJSON:function(e,t,r){return jQuery.get(e,t,r,"json")},post:function(e,t,r,n){return jQuery.isFunction(t)&&(r=t,t={}),jQuery.ajax({type:"POST",url:e,data:t,success:r,dataType:n})},ajaxSetup:function(e){jQuery.extend(jQuery.ajaxSettings,e)},ajaxSettings:{global:!0,type:"GET",timeout:0,contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,data:null},lastModified:{},ajax:function(e){function t(){e.success&&e.success(a,i),e.global&&jQuery.event.trigger("ajaxSuccess",[h,e])}function r(){e.complete&&e.complete(h,i),e.global&&jQuery.event.trigger("ajaxComplete",[h,e]),e.global&&!--jQuery.active&&jQuery.event.trigger("ajaxStop")}var n,i,a,o=/=(\?|%3F)/g;e=jQuery.extend(!0,e,jQuery.extend(!0,{},jQuery.ajaxSettings,e)),e.data&&e.processData&&"string"!=typeof e.data&&(e.data=jQuery.param(e.data));var s=e.url.indexOf("?");if(s>-1&&(e.data=(e.data?e.data+"&":"")+e.url.slice(s+1),e.url=e.url.slice(0,s)),"jsonp"==e.dataType&&(e.data&&e.data.match(o)||(e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?"),e.dataType="json"),"json"==e.dataType&&e.data&&e.data.match(o)&&(n="jsonp"+jsc++,e.data=e.data.replace(o,"="+n),e.dataType="script",window[n]=function(e){a=e,t(),window[n]=void 0;try{delete window[n]}catch(r){}}),"script"==e.dataType&&null==e.cache&&(e.cache=!1),e.cache===!1&&"get"==e.type.toLowerCase()&&(e.data=(e.data?e.data+"&":"")+"_="+(new Date).getTime()),e.data&&"get"==e.type.toLowerCase()&&(e.url+="?"+e.data,e.data=null),e.global&&!jQuery.active++&&jQuery.event.trigger("ajaxStart"),!e.url.indexOf("http")&&"script"==e.dataType){var u=document.getElementsByTagName("head")[0],l=document.createElement("script");if(l.src=e.url,!n&&(e.success||e.complete)){var d=!1;l.onload=l.onreadystatechange=function(){d||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(d=!0,t(),r(),u.removeChild(l))}}return void u.appendChild(l)}var c=!1,h=window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest;h.open(e.type,e.url,e.async),e.data&&h.setRequestHeader("Content-Type",e.contentType),e.ifModified&&h.setRequestHeader("If-Modified-Since",jQuery.lastModified[e.url]||"Thu, 01 Jan 1970 00:00:00 GMT"),h.setRequestHeader("X-Requested-With","XMLHttpRequest"),e.beforeSend&&e.beforeSend(h),e.global&&jQuery.event.trigger("ajaxSend",[h,e]);var y=function(o){if(!c&&h&&(4==h.readyState||"timeout"==o)){if(c=!0,f&&(clearInterval(f),f=null),i="timeout"==o&&"timeout"||!jQuery.httpSuccess(h)&&"error"||e.ifModified&&jQuery.httpNotModified(h,e.url)&&"notmodified"||"success","success"==i)try{a=jQuery.httpData(h,e.dataType)}catch(s){i="parsererror"}if("success"==i){var u;try{u=h.getResponseHeader("Last-Modified")}catch(s){}e.ifModified&&u&&(jQuery.lastModified[e.url]=u),n||t()}else jQuery.handleError(e,h,i);r(),e.async&&(h=null)}};if(e.async){var f=setInterval(y,13);e.timeout>0&&setTimeout(function(){h&&(h.abort(),c||y("timeout"))},e.timeout)}try{h.send(e.data)}catch(p){jQuery.handleError(e,h,null,p)}return e.async||y(),h},handleError:function(e,t,r,n){e.error&&e.error(t,r,n),e.global&&jQuery.event.trigger("ajaxError",[t,e,n])},active:0,httpSuccess:function(e){try{return!e.status&&"file:"==location.protocol||e.status>=200&&e.status<300||304==e.status||jQuery.browser.safari&&void 0==e.status}catch(t){}return!1},httpNotModified:function(e,t){try{var r=e.getResponseHeader("Last-Modified");return 304==e.status||r==jQuery.lastModified[t]||jQuery.browser.safari&&void 0==e.status}catch(n){}return!1},httpData:function(r,type){var ct=r.getResponseHeader("content-type"),xml="xml"==type||!type&&ct&&ct.indexOf("xml")>=0,data=xml?r.responseXML:r.responseText;if(xml&&"parsererror"==data.documentElement.tagName)throw"parsererror";return"script"==type&&jQuery.globalEval(data),"json"==type&&(data=eval("("+data+")")),data},param:function(e){var t=[];if(e.constructor==Array||e.jquery)jQuery.each(e,function(){t.push(encodeURIComponent(this.name)+"="+encodeURIComponent(this.value));
});else for(var r in e)e[r]&&e[r].constructor==Array?jQuery.each(e[r],function(){t.push(encodeURIComponent(r)+"="+encodeURIComponent(this))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t.join("&").replace(/%20/g,"+")}}),jQuery.fn.extend({show:function(e,t){return e?this.animate({height:"show",width:"show",opacity:"show"},e,t):this.filter(":hidden").each(function(){this.style.display=this.oldblock?this.oldblock:"","none"==jQuery.css(this,"display")&&(this.style.display="block")}).end()},hide:function(e,t){return e?this.animate({height:"hide",width:"hide",opacity:"hide"},e,t):this.filter(":visible").each(function(){this.oldblock=this.oldblock||jQuery.css(this,"display"),"none"==this.oldblock&&(this.oldblock="block"),this.style.display="none"}).end()},_toggle:jQuery.fn.toggle,toggle:function(e,t){return jQuery.isFunction(e)&&jQuery.isFunction(t)?this._toggle(e,t):e?this.animate({height:"toggle",width:"toggle",opacity:"toggle"},e,t):this.each(function(){jQuery(this)[jQuery(this).is(":hidden")?"show":"hide"]()})},slideDown:function(e,t){return this.animate({height:"show"},e,t)},slideUp:function(e,t){return this.animate({height:"hide"},e,t)},slideToggle:function(e,t){return this.animate({height:"toggle"},e,t)},fadeIn:function(e,t){return this.animate({opacity:"show"},e,t)},fadeOut:function(e,t){return this.animate({opacity:"hide"},e,t)},fadeTo:function(e,t,r){return this.animate({opacity:t},e,r)},animate:function(e,t,r,n){var i=jQuery.speed(t,r,n);return this[i.queue===!1?"each":"queue"](function(){i=jQuery.extend({},i);var t=jQuery(this).is(":hidden"),r=this;for(var n in e){if("hide"==e[n]&&t||"show"==e[n]&&!t)return jQuery.isFunction(i.complete)&&i.complete.apply(this);("height"==n||"width"==n)&&(i.display=jQuery.css(this,"display"),i.overflow=this.style.overflow)}return null!=i.overflow&&(this.style.overflow="hidden"),i.curAnim=jQuery.extend({},e),jQuery.each(e,function(n,a){var o=new jQuery.fx(r,i,n);if(/toggle|show|hide/.test(a))o["toggle"==a?t?"show":"hide":a](e);else{var s=a.toString().match(/^([+-]?)([\d.]+)(.*)$/),u=o.cur(!0)||0;s?(end=parseFloat(s[2]),unit=s[3]||"px","px"!=unit&&(r.style[n]=end+unit,u=end/o.cur(!0)*u,r.style[n]=u+unit),s[1]&&(end=("-"==s[1]?-1:1)*end+u),o.custom(u,end,unit)):o.custom(u,a,"")}}),!0})},queue:function(e,t){return t||(t=e,e="fx"),arguments.length?this.each(function(){t.constructor==Array?queue(this,e,t):(queue(this,e).push(t),1==queue(this,e).length&&t.apply(this))}):queue(this[0],e)},stop:function(){var e=jQuery.timers;return this.each(function(){for(var t=0;t<e.length;t++)e[t].elem==this&&e.splice(t--,1)}).dequeue()}});var queue=function(e,t,r){if(e){var n=jQuery.data(e,t+"queue");return(!n||r)&&(n=jQuery.data(e,t+"queue",r?jQuery.makeArray(r):[])),n}};jQuery.fn.dequeue=function(e){return e=e||"fx",this.each(function(){var t=queue(this,e);t.shift(),t.length&&t[0].apply(this)})},jQuery.extend({speed:function(e,t,r){var n=e&&e.constructor==Object?e:{complete:r||!r&&t||jQuery.isFunction(e)&&e,duration:e,easing:r&&t||t&&t.constructor!=Function&&t};return n.duration=(n.duration&&n.duration.constructor==Number?n.duration:{slow:600,fast:200}[n.duration])||400,n.old=n.complete,n.complete=function(){jQuery(this).dequeue(),jQuery.isFunction(n.old)&&n.old.apply(this)},n},easing:{linear:function(e,t,r,n){return r+n*e},swing:function(e,t,r,n){return(-Math.cos(e*Math.PI)/2+.5)*n+r}},timers:[],fx:function(e,t,r){this.options=t,this.elem=e,this.prop=r,t.orig||(t.orig={})}}),jQuery.fx.prototype={update:function(){this.options.step&&this.options.step.apply(this.elem,[this.now,this]),(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this),("height"==this.prop||"width"==this.prop)&&(this.elem.style.display="block")},cur:function(e){if(null!=this.elem[this.prop]&&null==this.elem.style[this.prop])return this.elem[this.prop];var t=parseFloat(jQuery.curCSS(this.elem,this.prop,e));return t&&t>-1e4?t:parseFloat(jQuery.css(this.elem,this.prop))||0},custom:function(e,t,r){function n(){return i.step()}this.startTime=(new Date).getTime(),this.start=e,this.end=t,this.unit=r||this.unit||"px",this.now=this.start,this.pos=this.state=0,this.update();var i=this;if(n.elem=this.elem,jQuery.timers.push(n),1==jQuery.timers.length)var a=setInterval(function(){for(var e=jQuery.timers,t=0;t<e.length;t++)e[t]()||e.splice(t--,1);e.length||clearInterval(a)},13)},show:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop),this.options.show=!0,this.custom(0,this.cur()),("width"==this.prop||"height"==this.prop)&&(this.elem.style[this.prop]="1px"),jQuery(this.elem).show()},hide:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(){var e=(new Date).getTime();if(e>this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;var t=!0;for(var r in this.options.curAnim)this.options.curAnim[r]!==!0&&(t=!1);if(t&&(null!=this.options.display&&(this.elem.style.overflow=this.options.overflow,this.elem.style.display=this.options.display,"none"==jQuery.css(this.elem,"display")&&(this.elem.style.display="block")),this.options.hide&&(this.elem.style.display="none"),this.options.hide||this.options.show))for(var n in this.options.curAnim)jQuery.attr(this.elem.style,n,this.options.orig[n]);return t&&jQuery.isFunction(this.options.complete)&&this.options.complete.apply(this.elem),!1}var i=e-this.startTime;return this.state=i/this.options.duration,this.pos=jQuery.easing[this.options.easing||(jQuery.easing.swing?"swing":"linear")](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update(),!0}},jQuery.fx.step={scrollLeft:function(e){e.elem.scrollLeft=e.now},scrollTop:function(e){e.elem.scrollTop=e.now},opacity:function(e){jQuery.attr(e.elem.style,"opacity",e.now)},_default:function(e){e.elem.style[e.prop]=e.now+e.unit}},jQuery.fn.offset=function(){function border(e){add(jQuery.css(e,"borderLeftWidth"),jQuery.css(e,"borderTopWidth"))}function add(e,t){left+=parseInt(e)||0,top+=parseInt(t)||0}var results,left=0,top=0,elem=this[0];if(elem)with(jQuery.browser){var absolute="absolute"==jQuery.css(elem,"position"),parent=elem.parentNode,offsetParent=elem.offsetParent,doc=elem.ownerDocument,safari2=safari&&!absolute&&parseInt(version)<522;if(elem.getBoundingClientRect){if(box=elem.getBoundingClientRect(),add(box.left+Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft),box.top+Math.max(doc.documentElement.scrollTop,doc.body.scrollTop)),msie){var border=jQuery("html").css("borderWidth");border=("medium"==border||jQuery.boxModel&&parseInt(version)>=7)&&2||border,add(-border,-border)}}else{for(add(elem.offsetLeft,elem.offsetTop);offsetParent;)add(offsetParent.offsetLeft,offsetParent.offsetTop),(mozilla&&/^t[d|h]$/i.test(parent.tagName)||!safari2)&&border(offsetParent),safari2&&!absolute&&"absolute"==jQuery.css(offsetParent,"position")&&(absolute=!0),offsetParent=offsetParent.offsetParent;for(;parent.tagName&&/^body|html$/i.test(parent.tagName);)/^inline|table-row.*$/i.test(jQuery.css(parent,"display"))&&add(-parent.scrollLeft,-parent.scrollTop),mozilla&&"visible"!=jQuery.css(parent,"overflow")&&border(parent),parent=parent.parentNode;safari&&absolute&&add(-doc.body.offsetLeft,-doc.body.offsetTop)}results={top:top,left:left}}return results}}();