/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v1.2.0 (c) Kyle Simpson
    MIT License
*/
(function(ak){var aj="string",ac="head",s="body",o="script",ag="readyState",am="preloaddone",aa="loadtrigger",n="srcuri",I="preload",a="complete",X="done",W="which",m="preserve",D="onreadystatechange",aA="onload",l="hasOwnProperty",az="script/cache",g="[object ",af=g+"Function]",ae=g+"Array]",au=null,ap=true,an=false,al=ak.document,ay=ak.location,ax=ak.ActiveXObject,K=ak.setTimeout,aw=ak.clearTimeout,f=function(e){return al.getElementsByTagName(e)},d=Object.prototype.toString,C=function(){},ai={},c={},av=/^[^?#]*\//.exec(ay.href)[0],at=/^\w+\:\/\/\/?[^\/]+/.exec(av)[0],ab=f(o),ar=ak.opera&&d.call(ak.opera)==g+"Opera]",aq=("MozAppearance" in al.documentElement.style),ao=(al.createElement(o).async===true),ad={cache:!(aq||ar),order:aq||ar||ao,xhr:ap,dupe:ap,base:"",which:ac};ad[m]=an;ad[I]=ap;ai[ac]=al.head||f(ac);ai[s]=f(s);function J(e){return d.call(e)===af}function b(h,e){var j=/^\w+\:\/\//,i;if(typeof h!=aj){h=""}if(typeof e!=aj){e=""}i=((/^\/\//.test(h))?ay.protocol:"")+h;i=(j.test(i)?"":e)+i;return((j.test(i)?"":(i.charAt(0)==="/"?at:av))+i)}function Y(e){return(b(e).indexOf(at)===0)}function V(h){var e,i=-1;while(e=ab[++i]){if(typeof e.src==aj&&h===b(e.src)&&e.type!==az){return ap}}return an}function t(x,E){x=!(!x);if(E==au){E=ad}var j=an,A=x&&E[I],i=A&&E.cache,w=A&&E.order,h=A&&E.xhr,R=E[m],P=E.which,N=E.base,e=C,v=an,z,y=ap,B={},u=[],r=au;A=i||h||w;function T(Z,U){if((Z[ag]&&Z[ag]!==a&&Z[ag]!=="loaded")||U[X]){return an}Z[aA]=Z[D]=au;return ap}function q(Z,U,aC){aC=!(!aC);if(!aC&&!(T(Z,U))){return}U[X]=ap;for(var aB in B){if(B[l](aB)&&!(B[aB][X])){return}}j=ap;e()}function S(U){if(J(U[aa])){U[aa]();U[aa]=au}}function L(Z,U){if(!T(Z,U)){return}U[am]=ap;K(function(){ai[U[W]].removeChild(Z);S(U)},0)}function G(Z,U){if(Z[ag]===4){Z[D]=C;U[am]=ap;K(function(){S(U)},0)}}function p(U,aF,aD,Z,aB,aE){var aC=U[W];K(function(){if("item" in ai[aC]){if(!ai[aC][0]){K(arguments.callee,25);return}ai[aC]=ai[aC][0]}var aG=al.createElement(o);if(typeof aD==aj){aG.type=aD}if(typeof Z==aj){aG.charset=Z}if(J(aB)){aG[aA]=aG[D]=function(){aB(aG,U)};aG.src=aF;if(ao){aG.async=an}}ai[aC].insertBefore(aG,(aC===ac?ai[aC].firstChild:au));if(typeof aE==aj){aG.text=aE;q(aG,U,ap)}},0)}function Q(Z,U,aC,aB){c[Z[n]]=ap;p(Z,U,aC,aB,q)}function O(Z,U,aD,aC){var aB=arguments;if(y&&Z[am]==au){Z[am]=an;p(Z,U,az,aC,L)}else{if(!y&&Z[am]!=au&&!Z[am]){Z[aa]=function(){O.apply(au,aB)}}else{if(!y){Q.apply(au,aB)}}}}function M(Z,U,aE,aD){var aB=arguments,aC;if(y&&Z[am]==au){Z[am]=an;aC=Z.xhr=(ax?new ax("Microsoft.XMLHTTP"):new ak.XMLHttpRequest());aC[D]=function(){G(aC,Z)};aC.open("GET",U);aC.send("")}else{if(!y&&Z[am]!=au&&!Z[am]){Z[aa]=function(){M.apply(au,aB)}}else{if(!y){c[Z[n]]=ap;p(Z,U,aE,aD,au,Z.xhr.responseText);Z.xhr=au}}}}function H(Z){if(typeof Z=="undefined"||!Z){return}if(Z.allowDup==au){Z.allowDup=E.dupe}var U=Z.src,aG=Z.type,aE=Z.charset,aB=Z.allowDup,aC=b(U,N),aF,aD=Y(aC);if(typeof aE!=aj){aE=au}aB=!(!aB);if(!aB&&((c[aC]!=au)||(y&&B[aC])||V(aC))){if(B[aC]!=au&&B[aC][am]&&!B[aC][X]&&aD){q(au,B[aC],ap)}return}if(B[aC]==au){B[aC]={}}aF=B[aC];if(aF[W]==au){aF[W]=P}aF[X]=an;aF[n]=aC;v=ap;if(!w&&h&&aD){M(aF,aC,aG,aE)}else{if(!w&&i){O(aF,aC,aG,aE)}else{Q(aF,aC,aG,aE)}}}function k(U){if(x&&!w){u.push(U)}if(!x||A){U()}}function F(Z){var U=[],aB;for(aB=-1;++aB<Z.length;){if(d.call(Z[aB])===ae){U=U.concat(F(Z[aB]))}else{U[U.length]=Z[aB]}}return U}z={script:function(){aw(r);var Z=F(arguments),U=z,aB;if(R){for(aB=-1;++aB<Z.length;){if(J(Z[aB])){Z[aB]=Z[aB]()}if(aB===0){k(function(){H((typeof Z[0]==aj)?{src:Z[0]}:Z[0])})}else{U=U.script(Z[aB])}U=U.wait()}}else{for(aB=-1;++aB<Z.length;){if(J(Z[aB])){Z[aB]=Z[aB]()}}k(function(){for(aB=-1;++aB<Z.length;){H((typeof Z[aB]==aj)?{src:Z[aB]}:Z[aB])}})}r=K(function(){y=an},5);return U},wait:function(Z){aw(r);y=an;if(!J(Z)){Z=C}var U=t(x||v,E),aD=U.trigger,aC=function(){try{Z()}catch(aE){}aD()};delete U.trigger;var aB=function(){if(v&&!j){e=aC}else{aC()}};if(x&&!v){u.push(aB)}else{k(aB)}return U}};if(x){z.trigger=function(){var Z,U=-1;while(Z=u[++U]){Z()}u=[]}}else{z.trigger=C}return z}function ah(h){var e,k={},j={UseCachePreload:"cache",UseLocalXHR:"xhr",UsePreloading:I,AlwaysPreserveOrder:m,AllowDuplicates:"dupe"},i={AppendTo:W,BasePath:"base"};for(e in j){i[e]=j[e]}k.order=!(!ad.order);for(e in i){if(i[l](e)&&ad[i[e]]!=au){k[i[e]]=(h[e]!=au)?h[e]:ad[i[e]]}}for(e in j){if(j[l](e)){k[j[e]]=!(!k[j[e]])}}if(!k[I]){k.cache=k.order=k.xhr=an}k.which=(k.which===ac||k.which===s)?k.which:ac;return k}ak.$LAB={setGlobalDefaults:function(e){ad=ah(e)},setOptions:function(e){return t(an,ah(e))},script:function(){return t().script.apply(au,arguments)},wait:function(){return t().wait.apply(au,arguments)}};(function(h,e,i){if(al[ag]==au&&al[h]){al[ag]="loading";al[h](e,i=function(){al.removeEventListener(e,i,an);al[ag]=a},an)}})("addEventListener","DOMContentLoaded")})(window);(function(){var b="onDomReady";var d=false;var e=[];if(window[b]&&typeof window[b]=="function"){return}var a=function(){if(!document.body){return setTimeout(a,13)}for(var f=0;f<e.length;f++){e[f]()}e=[]};var c=function(){if(document.addEventListener){var g=function(){document.removeEventListener("DOMContentLoaded",g,false);a()};document.addEventListener("DOMContentLoaded",g,false);window.addEventListener("load",a,false)}else{if(document.attachEvent){var j=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",j);a()}};document.attachEvent("onreadystatechange",j);window.attachEvent("onload",a);var h=false;try{h=window.frameElement==null}catch(i){}if(document.documentElement.doScroll&&h){var f=function(){if(e.length==0){return}try{document.documentElement.doScroll("left")}catch(k){setTimeout(f,1);return}a()};f()}}}};window[b]=function(f){e.push(f);if(document.readyState=="complete"){a()}else{if(!d){c();d=true}}}})();var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows())}};var CORE={utilities:{},globals:{},instance:{},modules:[],classes:{},behaviour:{page:{},modules:{},nullFunction:function(){}}};var SITE={utilities:{},globals:{},instance:{},modules:{},classes:{},behaviour:{page:{},nullFunction:function(){}}};CORE.globals.isIE6=false
/*@cc_on || @_jscript_version < 5.7 @*/
;CORE.globals.isMSIE=
/*@cc_on!@*/
false;CORE.utilities.example=function(){};CORE.utilities.getTimeSince=function(c){var b=Date.parse(c.replace(/-/g," "));var d=-1;var a=-1;if(isNaN(b)===false){d=Math.floor((new Date()-b)/1000);a=Math.floor(d/31536000);if(a>1){return(a+" years ago")}a=Math.floor(d/2592000);if(a>1){return(a+" months ago")}a=Math.floor(d/86400);if(a>1){return(a+" days ago")}a=Math.floor(d/3600);if(a>1){return(a+" hours ago")}a=Math.floor(d/60);if(a>1){return(a+" minutes ago")}return(a+" seconds ago")}else{return c}};CORE.utilities.deleteById=function(c){var a=document.getElementById(c);var b=null;if(a){b=a.parentNode;b.removeChild(a)}};CORE.utilities.getUrlContent=function(e,h){var d=e.split("#");var g=d[0]+"";var c=d[1]+"";var b=null;var f="getUrlContent";var a=null;if(document.getElementById(c)==null){$.get(g,function(i){a=document.createElement("div");a.id=f;a.innerHTML=i;a.style.display="none";document.body.appendChild(a);b=document.getElementById(c)?document.getElementById(c):null;CORE.utilities.deleteById(f);if(b){h(b)}else{return false}})}};CORE.utilities.placeUrlContent=function(b,g,c){var h=b.split("#");var e=h[0]+"";var f=h[1]+"";var j=null;var i="getUrlContent";var d=null;var a=document.getElementById(g);if(a&&document.getElementById(f)==null){$.get(e,function(k){d=document.createElement("div");d.id=i;d.innerHTML=k;d.style.display="none";document.body.appendChild(d);j=document.getElementById(f)?document.getElementById(f):null;CORE.utilities.deleteById(i);if(j){a.appendChild(j);c()}else{return false}})}};CORE.utilities.launchCallbackOnScroll=function(a,b){$(window).scroll(function(){var i=$(window).scrollTop();var d=$(window).height();var c=0;var f=f?f:[];var e=null;var g=null;var h="";for(h in f){if(f.hasOwnProperty(h)){g=f[h];e=$(g);if(e.length){c=e.offset().top;break}}}g=e=null;if(i+d>=c){b();$(window).unbind("scroll")}})};CORE.utilities.isVisible=function(d){var c=d.offsetTop;var e=d.offsetLeft;var b=d.offsetWidth;var a=d.offsetHeight;while(d.offsetParent){d=d.offsetParent;c+=d.offsetTop;e+=d.offsetLeft}return(c<(window.pageYOffset+window.innerHeight)&&e<(window.pageXOffset+window.innerWidth)&&(c+a)>window.pageYOffset&&(e+b)>window.pageXOffset)};(function(){var e;var d=function d(){};var b=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"];var c=b.length;var a=(window.console=window.console||{});while(c--){e=b[c];if(!a[e]){a[e]=d}}}());CORE.utilities.IsEmail=function(e){var c="@";var d=".";var a=e.indexOf(c);var f=e.length;var b=e.indexOf(d);if(a==-1){return false}else{if(a==-1||a==0||a==f){return false}else{if(b==-1||b==0||b==f){return false}else{if(e.indexOf(c,(a+1))!=-1){return false}else{if(e.substring(a-1,a)==d||e.substring(a+1,a+2)==d){return false}else{if(e.indexOf(d,(a+2))==-1){return false}else{if(e.indexOf(" ")!=-1){return false}else{return true}}}}}}}};$LAB.setOptions({AlwaysPreserveOrder:false,UsePreloading:true,UseLocalXHR:true,UseCachePreload:true,AllowDuplicates:false,AppendTo:"head",BasePath:""});CORE.behaviour.modules.isset=function(a){};onDomReady(function(){var b="DEVICE: ";if(!document.querySelectorAll){document.querySelectorAll=function(d){var f=document,e=f.documentElement.firstChild,c=f.createElement("STYLE");e.appendChild(c);f.__qsaels=[];c.styleSheet.cssText=d+"{x:expression(document.__qsaels.push(this))}";window.scrollBy(0,0);return f.__qsaels}}if(isMobile.any()){$LAB.script(basePathConfig.mobile).wait(function(){b+="Mobile\n";a()})}else{$LAB.script(basePathConfig.desktop).wait(function(){b+="Desktop\n";a()}).wait(function(){var c=bPolyfills?bPolyfills:false;if(c){$LAB.script(basePathConfig.polyfills).wait(function(){$.webshims.setOptions({basePath:sHostStatic+"/js/libs/webshims/shims/",waitReady:false});$.webshims.polyfill()})}})}function a(){var e="",d=document.querySelectorAll("[id]");b+="LAUNCH MODULES: ";for(var c=0;c<d.length;c++){e=d[c].id;if(CORE.behaviour.modules[e]!==undefined){if(CORE.behaviour.modules[e].require!==undefined){$LAB.script(CORE.behaviour.modules[e].require).wait(CORE.behaviour.modules[e].init())}else{CORE.behaviour.modules[e].init()}b+=e+" | "}}if(console){console.log(b+"\nTOTAL ID ELEMENTS:"+c)}if(CORE.behaviour.common!==undefined){CORE.behaviour.common()}if(typeof CORE.behaviour.page[document.body.id]!="undefined"){CORE.behaviour.page[document.body.id]()}}});