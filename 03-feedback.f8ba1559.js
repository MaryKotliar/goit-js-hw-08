function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,l=c||u||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,f,c,u=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,u=t,a=e.apply(i,n)}function h(e){return u=e,f=setTimeout(O,t),l?y(e):a}function j(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-u>=i}function O(){var e=g();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return s?m(n,i-(e-u)):n}(e))}function T(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function w(){var e=g(),n=j(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return h(c);if(s)return f=setTimeout(O,t),y(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),u=0,r=c=o=f=void 0},w.flush=function(){return void 0===f?a:T(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),h={};!function(){try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(console.log(e),console.log(Object.entries(e)),Object.entries(e).forEach((([e,t])=>{y.elements[e].value=t})))}catch(e){console.error("Get state error: ",e.message)}}(),y.addEventListener("input",e(t)((function(e){const{name:t,value:n}=e.target;h[t]=n;try{localStorage.setItem("feedback-form-state",JSON.stringify(h))}catch(e){console.error("Get state error: ",e.message)}}),500)),y.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;console.log({email:t.value,message:n.value}),e.currentTarget.reset();try{localStorage.removeItem("feedback-form-state")}catch(e){console.error("Get state error: ",e.message)}}));
//# sourceMappingURL=03-feedback.f8ba1559.js.map