System.register(["./event-legacy.0bfbd831.js"],(function(e){"use strict";var n,t;return{setters:[function(e){n=e.a,t=e.b}],execute:function(){e("v",{beforeMount:function(e,u){var o,r=null,a=function(){return u.value&&u.value()},c=function(){Date.now()-o<100&&a(),clearInterval(r),r=null};n(e,"mousedown",(function(e){0===e.button&&(o=Date.now(),t(document,"mouseup",c),clearInterval(r),r=setInterval(a,100))}))}})}}}));
