/*! For license information please see 38.71ea9222.chunk.js.LICENSE.txt */
(this["webpackJsonpbetwixt-free-mint-web"]=this["webpackJsonpbetwixt-free-mint-web"]||[]).push([[38],{2431:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SafeAppProvider=void 0;var n=r(2432);Object.defineProperty(e,"SafeAppProvider",{enumerable:!0,get:function(){return n.SafeAppProvider}})},2432:function(t,e,r){"use strict";var n=r(442).default,o=r(435).default,a=r(438).default,s=r(106).default,i=r(107).default,u=r(434).default,c=r(439).default;Object.defineProperty(e,"__esModule",{value:!0}),e.SafeAppProvider=void 0;var f=r(153),h=r(2433),l=function(t){u(r,t);var e=c(r);function r(t,n){var o;return s(this,r),(o=e.call(this)).submittedTxs=new Map,o.safe=t,o.sdk=n,o}return i(r,[{key:"connect",value:function(){var t=a(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.emit("connect",{chainId:this.chainId}),t.abrupt("return");case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=a(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return");case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"chainId",get:function(){return this.safe.chainId}},{key:"request",value:function(){var t=a(o().mark((function t(e){var r,a,s,i,u,c,f,l,p,d,y,v,x,g,b,m;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.method,a=e.params,s=void 0===a?[]:a,t.t0=r,t.next="eth_accounts"===t.t0?4:"net_version"===t.t0||"eth_chainId"===t.t0?5:"personal_sign"===t.t0?6:"eth_sign"===t.t0?12:"eth_sendTransaction"===t.t0?18:"eth_blockNumber"===t.t0?24:"eth_getBalance"===t.t0?28:"eth_getCode"===t.t0?29:"eth_getTransactionCount"===t.t0?30:"eth_getStorageAt"===t.t0?31:"eth_getBlockByNumber"===t.t0?32:"eth_getBlockByHash"===t.t0?33:"eth_getTransactionByHash"===t.t0?34:"eth_getTransactionReceipt"===t.t0?47:"eth_estimateGas"===t.t0?58:"eth_call"===t.t0?59:"eth_getLogs"===t.t0?60:"eth_gasPrice"===t.t0?61:62;break;case 4:return t.abrupt("return",[this.safe.safeAddress]);case 5:return t.abrupt("return","0x".concat(this.chainId.toString(16)));case 6:if(i=n(s,2),u=i[0],c=i[1],this.safe.safeAddress.toLowerCase()===c.toLowerCase()){t.next=9;break}throw new Error("The address or message hash is invalid");case 9:return t.next=11,this.sdk.txs.signMessage(u);case 11:return t.abrupt("return","0x");case 12:if(f=n(s,2),l=f[0],p=f[1],this.safe.safeAddress.toLowerCase()===l.toLowerCase()&&p.startsWith("0x")){t.next=15;break}throw new Error("The address or message hash is invalid");case 15:return t.next=17,this.sdk.txs.signMessage(p);case 17:return t.abrupt("return","0x");case 18:return d=Object.assign({value:"0",data:"0x"},s[0]),t.next=21,this.sdk.txs.send({txs:[d]});case 21:return y=t.sent,this.submittedTxs.set(y.safeTxHash,{from:this.safe.safeAddress,hash:y.safeTxHash,gas:0,gasPrice:"0x00",nonce:0,input:d.data,value:d.value,to:d.to,blockHash:null,blockNumber:null,transactionIndex:null}),t.abrupt("return",y.safeTxHash);case 24:return t.next=26,this.sdk.eth.getBlockByNumber(["latest"]);case 26:return v=t.sent,t.abrupt("return",v.number);case 28:return t.abrupt("return",this.sdk.eth.getBalance([(0,h.getLowerCase)(s[0]),s[1]]));case 29:return t.abrupt("return",this.sdk.eth.getCode([(0,h.getLowerCase)(s[0]),s[1]]));case 30:return t.abrupt("return",this.sdk.eth.getTransactionCount([(0,h.getLowerCase)(s[0]),s[1]]));case 31:return t.abrupt("return",this.sdk.eth.getStorageAt([(0,h.getLowerCase)(s[0]),s[1],s[2]]));case 32:return t.abrupt("return",this.sdk.eth.getBlockByNumber([s[0],s[1]]));case 33:return t.abrupt("return",this.sdk.eth.getBlockByHash([s[0],s[1]]));case 34:return x=s[0],t.prev=35,t.next=38,this.sdk.txs.getBySafeTxHash(x);case 38:g=t.sent,x=g.txHash||x,t.next=44;break;case 42:t.prev=42,t.t1=t.catch(35);case 44:if(!this.submittedTxs.has(x)){t.next=46;break}return t.abrupt("return",this.submittedTxs.get(x));case 46:return t.abrupt("return",this.sdk.eth.getTransactionByHash([x]).then((function(t){return t&&(t.hash=s[0]),t})));case 47:return b=s[0],t.prev=48,t.next=51,this.sdk.txs.getBySafeTxHash(b);case 51:m=t.sent,b=m.txHash||b,t.next=57;break;case 55:t.prev=55,t.t2=t.catch(48);case 57:return t.abrupt("return",this.sdk.eth.getTransactionReceipt([b]).then((function(t){return t&&(t.transactionHash=s[0]),t})));case 58:return t.abrupt("return",this.sdk.eth.getEstimateGas(s[0]));case 59:return t.abrupt("return",this.sdk.eth.call([s[0],s[1]]));case 60:return t.abrupt("return",this.sdk.eth.getPastLogs([s[0]]));case 61:return t.abrupt("return",this.sdk.eth.getGasPrice());case 62:throw Error('"'.concat(e.method,'" not implemented'));case 63:case"end":return t.stop()}}),t,this,[[35,42],[48,55]])})));return function(e){return t.apply(this,arguments)}}()},{key:"send",value:function(t,e){t||e("Undefined request"),this.request(t).then((function(r){return e(null,{jsonrpc:"2.0",id:t.id,result:r})})).catch((function(t){return e(t,null)}))}}]),r}(f.EventEmitter);e.SafeAppProvider=l},2433:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getLowerCase=void 0,e.getLowerCase=function(t){return t?t.toLowerCase():t}},434:function(t,e,r){var n=r(462);t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&n(t,e)},t.exports.__esModule=!0,t.exports.default=t.exports},435:function(t,e,r){var n=r(467).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,a=r.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},i=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(S){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),s=new O(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var i=k(s,r);if(i){if(i===p)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,s),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=h;var p={};function d(){}function y(){}function v(){}var x={};f(x,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(P([])));b&&b!==r&&a.call(b,i)&&(x=b);var m=v.prototype=d.prototype=Object.create(x);function w(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,s,i,u){var c=l(t[o],t,s);if("throw"!==c.type){var f=c.arg,h=f.value;return h&&"object"==n(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(h).then((function(t){f.value=t,i(f)}),(function(t){return r("throw",t,i,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return y.prototype=v,f(m,"constructor",v),f(v,"constructor",y),y.displayName=f(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,f(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},e.awrap=function(t){return{__await:t}},w(_.prototype),f(_.prototype,u,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var s=new _(h(t,r,n,o),a);return e.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},w(m),f(m,c,"Generator"),f(m,i,(function(){return this})),f(m,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return s.type="throw",s.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},438:function(t,e){function r(t,e,r,n,o,a,s){try{var i=t[a](s),u=i.value}catch(c){return void r(c)}i.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var s=t.apply(e,n);function i(t){r(s,o,a,i,u,"next",t)}function u(t){r(s,o,a,i,u,"throw",t)}i(void 0)}))}},t.exports.__esModule=!0,t.exports.default=t.exports},439:function(t,e,r){var n=r(445),o=r(492),a=r(460);t.exports=function(t){var e=o();return function(){var r,o=n(t);if(e){var s=n(this).constructor;r=Reflect.construct(o,arguments,s)}else r=o.apply(this,arguments);return a(this,r)}},t.exports.__esModule=!0,t.exports.default=t.exports},442:function(t,e,r){var n=r(472),o=r(473),a=r(229),s=r(474);t.exports=function(t,e){return n(t)||o(t,e)||a(t,e)||s()},t.exports.__esModule=!0,t.exports.default=t.exports},445:function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},449:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.__esModule=!0,t.exports.default=t.exports},460:function(t,e,r){var n=r(467).default,o=r(449);t.exports=function(t,e){if(e&&("object"===n(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return o(t)},t.exports.__esModule=!0,t.exports.default=t.exports},462:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e,n)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},467:function(t,e){function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},472:function(t,e){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},473:function(t,e){t.exports=function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],s=!0,i=!1;try{for(r=r.call(t);!(s=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);s=!0);}catch(u){i=!0,o=u}finally{try{s||null==r.return||r.return()}finally{if(i)throw o}}return a}},t.exports.__esModule=!0,t.exports.default=t.exports},474:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},492:function(t,e){t.exports=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=38.71ea9222.chunk.js.map