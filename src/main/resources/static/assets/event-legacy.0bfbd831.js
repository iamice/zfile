System.register([],(function(n){"use strict";return{execute:function(){var e=n("a",(function(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];n&&e&&t&&(null==n||n.addEventListener(e,t,r))})),t=n("o",(function(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];n&&e&&t&&(null==n||n.removeEventListener(e,t,r))}));n("b",(function(n,r,i){e(n,r,(function e(){if(i){for(var o=arguments.length,u=new Array(o),v=0;v<o;v++)u[v]=arguments[v];i.apply(this,u)}t(n,r,e)}))})),n("c",(function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.checkForDefaultPrevented,i=void 0===r||r,o=function(t){var r=null==n?void 0:n(t);if(!1===i||!r)return null==e?void 0:e(t)};return o})),n("w",(function(n){return function(e){return"mouse"===e.pointerType?n(e):void 0}}))}}}));
