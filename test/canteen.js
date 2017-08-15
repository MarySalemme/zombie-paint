;!function(){function a(a,b){var c,d=a.length;for(c=0;d>c;c++)b(a[c],c)}function b(a,b){var c=Math.pow(10,b);return Math.round(a*c)/c}function c(a,c){var d,f=a.length,g=[];for(d=0;f>d;d++)g.push(e(a[d])?b(a[d],c):a[d]);return g}function d(a){return a&&"[object Function]"==={}.toString.call(a)}function e(a){return"number"==typeof a}var f=["fillStyle","font","globalAlpha","globalCompositeOperation","lineCap","lineDashOffset","lineJoin","lineWidth","miterLimit","shadowBlur","shadowColor","shadowOffsetX","shadowOffsetY","strokeStyle","textAlign","textBaseline"],g=function(b){var c=this;this._stack=[],this.context=b,a(f,function(a){Object.defineProperty(c,a,{get:function(){return c.context[a]},set:function(b){c._pushAttr(a,b),c.context[a]=b}})})};g.prototype={stack:function(d){var d=d||{},f=d.loose,g=void 0===d.decimalPoints?3:d.decimalPoints,h=[];return f?a(this._stack,function(a){h.push(a.method||a.attr)}):a(this._stack,function(a){a.method?h.push({method:a.method,arguments:c(a.arguments,g)}):a.attr&&h.push({attr:a.attr,val:e(a.val)?b(a.val,g):a.val})}),h},json:function(a){return JSON.stringify(this.stack(a))},hash:function(a){return g.md5(this.json(a))},clear:function(){this._stack=[]},_pushMethod:function(a,b){this._stack.push({method:a,arguments:Array.prototype.slice.call(b,0)}),this._slice()},_pushAttr:function(a,b){this._stack.push({attr:a,val:b}),this._slice()},_slice:function(){var a=this._stack,b=a.length,c=b-g.globals.STACK_SIZE;c>0&&(this._stack=a.slice(c))}},function(){function a(a){g.prototype[a]=function(){return this._pushMethod(a,arguments),this.context[a].apply(this.context,arguments)}}var b,c,e,f=CanvasRenderingContext2D.prototype;for(b in f)e=Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,b),c=e&&e.value?f[b]:null,d(c)&&a(b,c)}(),g.globals={STACK_SIZE:1e4},function(){var a=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(){var b=a.apply(this,arguments);return b.canteen?b.canteen:(b.canteen=new g(b),b.canteen)}}(),window.Canteen=g}(),function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}"function"==typeof define&&define.amd?define(function(){return t}):a.md5=t}(Canteen);


// (function() {
//   // ================================ Constants ================================
//   var CONTEXT_2D_ATTRIBUTES = [
//     'fillStyle',
//     'font',
//     'globalAlpha',
//     'globalCompositeOperation',
//     'lineCap',
//     'lineDashOffset',
//     'lineJoin',
//     'lineWidth',
//     'miterLimit',
//     'shadowBlur',
//     'shadowColor',
//     'shadowOffsetX',
//     'shadowOffsetY',
//     'strokeStyle',
//     'textAlign',
//     'textBaseline'
//   ];
//
//   // ================================ Utils ================================
//
//   function each(arr, func) {
//     var len = arr.length,
//         n;
//
//     for (n=0; n<len; n++) {
//       func(arr[n], n);
//     }
//   }
//
//   function round(val, decimalPoints) {
//     var power = Math.pow(10, decimalPoints);
//     return Math.round(val * power) / power;
//   }
//
//   function roundArr(arr, decimalPoints) {
//     var len = arr.length,
//         ret = [],
//         n;
//
//     for (n=0; n<len; n++) {
//       if (isNumber(arr[n])) {
//         ret.push(round(arr[n], decimalPoints));
//       }
//       else {
//         ret.push(arr[n]);
//       }
//     }
//
//     return ret;
//   }
//
//   function isFunction(func) {
//     return func && {}.toString.call(func) === '[object Function]';
//   }
//
//   function isNumber(val) {
//     return typeof val === 'number';
//   }
//
//   // ================================ Canteen Class ================================
//
//   /**
//    * Canteen Constructor
//    * @constructor
//    */
//   var Canteen = function(context) {
//     var that = this;
//
//     this._stack = [];
//     this.context = context;
//
//     // add observable attributes
//     each(CONTEXT_2D_ATTRIBUTES, function(key, n) {
//       Object.defineProperty(that, key, {
//         get: function() {
//           return that.context[key];
//         },
//         set: function(val) {
//           that._pushAttr(key, val);
//           that.context[key] = val;
//         }
//       });
//     });
//   };
//
//   // Canteen methods
//   Canteen.prototype = {
//     /**
//      * get a stack of operations
//      * @method stack
//      * @param {Object} config
//      * @param {String} [config.loose=false] - strict mode returns method calls with arguments and property names
//      *  with values.  loose mode only returns method calls and property names
//      * @param {Number} [config.decimalPoints=3] - number of decimal points to round numeric values to.  The default is
//      *  3, i.e. 1.23456 will round to 1.234
//      * @returns {Array}
//      * @public
//      */
//     stack: function(config) {
//       var config = config || {},
//           loose = config.loose,
//           decimalPoints = config.decimalPoints === undefined ? 3 : config.decimalPoints,
//           ret = [];
//
//       if (loose) {
//         each(this._stack, function(el, n) {
//           ret.push(el.method || el.attr);
//         });
//       }
//       else {
//         each(this._stack, function(el, n) {
//           // if method instruction
//           if (el.method) {
//             ret.push({
//               method: el.method,
//               arguments: roundArr(el.arguments, decimalPoints)
//             });
//           }
//           // if attr
//           else if (el.attr) {
//             ret.push({
//               attr: el.attr,
//               val: isNumber(el.val) ? round(el.val, decimalPoints) : el.val
//             });
//           }
//         });
//       }
//
//       return ret;
//     },
//     /**
//      * serialize a stack into a string
//      * @method json
//      * @param {Object} config
//      * @param {String} [config.loose=false] - strict mode returns method calls with arguments and property names
//      *  with values.  loose mode only returns method calls and property names
//      * @param {Number} [config.decimalPoints=3] - number of decimal points to round numeric values to.  The default is
//      *  3, i.e. 1.23456 will round to 1.234
//      * @returns {String}
//      * @public
//      */
//     json: function(config) {
//       return JSON.stringify(this.stack(config));
//     },
//     /**
//      * convert a stack into a small hash string for easy comparisons
//      * @method hash
//      * @param {Object} config
//      * @param {String} [config.loose=false] - strict mode returns method calls with arguments and property names
//      *  with values.  loose mode only returns method calls and property names
//      * @param {Number} [config.decimalPoints=3] - number of decimal points to round numeric values to.  The default is
//      *  3, i.e. 1.23456 will round to 1.234
//      * @public
//      * @returns {String}
//      */
//     hash: function(config) {
//       return Canteen.md5(this.json(config));
//     },
//     /**
//      * clear the stack
//      * @method clear
//      * @public
//      */
//     clear: function() {
//       this._stack = [];
//     },
//     /**
//      * push instruction method onto the stack
//      * @method _pushMethod
//      * @param {String} method
//      * @param {arguments} args
//      * @private
//      */
//     _pushMethod: function(method, args) {
//       this._stack.push({
//         method: method,
//         arguments: Array.prototype.slice.call(args, 0)
//       });
//
//       this._slice();
//     },
//     /**
//      * push instruction attribute onto the stack
//      * @method _pushAttr
//      * @param {String} attr
//      * @param {*} val
//      * @private
//      */
//     _pushAttr: function(attr, val) {
//       this._stack.push({
//         attr: attr,
//         val: val
//       });
//
//       this._slice();
//     },
//     /**
//      * slice the stack if needed.  This means making sure that it doesn't exceed
//      *  the STACK_SIZE.  if it does, then shorten the stack starting from the beginning
//      * @method _slice
//      * @private
//      */
//     _slice: function() {
//       var stack = this._stack,
//           len = stack.length,
//           exceded = len - Canteen.globals.STACK_SIZE;
//       if (exceded > 0) {
//         this._stack = stack.slice(exceded);
//       }
//     }
//   };
//
//   // generate observable methods and add them to the Canteen prototype
//   (function(){
//     var proto = CanvasRenderingContext2D.prototype,
//       key, val, desc;
//
//     function addMethod(key, val) {
//       Canteen.prototype[key] = function() {
//         this._pushMethod(key, arguments);
//         return this.context[key].apply(this.context, arguments);
//       };
//     }
//
//     for (key in proto) {
// 	  desc = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, key);
//       val = (desc && desc.value ? proto[key] : null);
//       if (isFunction(val)) {
//         addMethod(key, val);
//       }
//     }
//   })();
//
//   // ================================ Global Config ================================
//   /**
//    * global config.  You can directly change these values in order to configure Canteen
//    * @static
//    * @example
//    *  // change stack size to 3000
//    *  Canteen.globals.STACK_SIZE = 3000;
//    */
//   Canteen.globals = {
//     STACK_SIZE: 10000
//   };
//
//   // ================================ Initialization ================================
//
//   // override the canvas context getContext method in order to automatically instantiate
//   // a Canteen instance and wrap the native context object
//   (function(){
//     var origGetContext = HTMLCanvasElement.prototype.getContext;
//
//     HTMLCanvasElement.prototype.getContext = function() {
//       var context = origGetContext.apply(this, arguments);
//
//       // if the context already has a canteen instance, then return it
//       if (context.canteen) {
//         return context.canteen
//       }
//       // if the context does not have a canteen instance, then instantiate one
//       // and return it
//       else {
//         context.canteen = new Canteen(context);
//         return context.canteen;
//       }
//     }
//   })();
//
//   // make the Canteen namespace global so that developers can configure
//   // it via Canteen.globals, or override methods if desired
//   window.Canteen = Canteen;
// })();
