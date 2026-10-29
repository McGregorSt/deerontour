/*! For license information please see main.67eb4657.js.LICENSE.txt */
(()=>{var e={730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new h(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new h(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new h(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new h(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new h(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new h(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(m,e)||!d.call(p,e)&&(f.test(e)?m[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),_=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),R=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var L=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var N=Symbol.iterator;function O(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=N&&e[N]||e["@@iterator"])?e:null}var A,D=Object.assign;function I(e){if(void 0===A)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return"\n"+A+e}var M=!1;function F(e,t){if(!e||M)return"";M=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),o=r.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do{if(i--,0>--l||a[i]!==o[l]){var s="\n"+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{M=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function U(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1);case 11:return e=F(e.type.render,!1);case 1:return e=F(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case C:return"Profiler";case E:return"StrictMode";case z:return"Suspense";case T:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case j:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case $:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return B(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function J(e,t){X(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function oe(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function he(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=he(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){me.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ee=null;function Ce(e){if(e=ba(e)){if("function"!==typeof Se)throw Error(o(280));var t=e.stateNode;t&&(t=wa(t),Se(e.stateNode,e.type,t))}}function je(e){ke?Ee?Ee.push(e):Ee=[e]:ke=e}function _e(){if(ke){var e=ke,t=Ee;if(Ee=ke=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Pe(e,t){return e(t)}function ze(){}var Te=!1;function $e(e,t,n){if(Te)return e(t,n);Te=!0;try{return Pe(e,t,n)}finally{Te=!1,(null!==ke||null!==Ee)&&(ze(),_e())}}function Re(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Le=!1;if(c)try{var Ne={};Object.defineProperty(Ne,"passive",{get:function(){Le=!0}}),window.addEventListener("test",Ne,Ne),window.removeEventListener("test",Ne,Ne)}catch(ce){Le=!1}function Oe(e,t,n,r,a,o,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ae=!1,De=null,Ie=!1,Me=null,Fe={onError:function(e){Ae=!0,De=e}};function Ue(e,t,n,r,a,o,i,l,s){Ae=!1,De=null,Oe.apply(Fe,arguments)}function Be(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Be(e)!==e)throw Error(o(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return He(a),e;if(i===r)return He(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var Qe=a.unstable_scheduleCallback,Ye=a.unstable_cancelCallback,Ge=a.unstable_shouldYield,qe=a.unstable_requestPaint,Xe=a.unstable_now,Je=a.unstable_getCurrentPriorityLevel,Ze=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,ot=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~a;0!==l?r=dt(l):0!==(o&=i)&&(r=dt(o))}else 0!==(i=n&~a)?r=dt(i):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-it(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,Et,Ct,jt=!1,_t=[],Pt=null,zt=null,Tt=null,$t=new Map,Rt=new Map,Lt=[],Nt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ot(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":$t.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rt.delete(t.pointerId)}}function At(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=ba(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Dt(e){var t=ya(e.target);if(null!==t){var n=Be(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void Ct(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function It(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ba(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function Mt(e,t,n){It(e)&&n.delete(t)}function Ft(){jt=!1,null!==Pt&&It(Pt)&&(Pt=null),null!==zt&&It(zt)&&(zt=null),null!==Tt&&It(Tt)&&(Tt=null),$t.forEach(Mt),Rt.forEach(Mt)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,jt||(jt=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ft)))}function Bt(e){function t(t){return Ut(t,e)}if(0<_t.length){Ut(_t[0],e);for(var n=1;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&Ut(Pt,e),null!==zt&&Ut(zt,e),null!==Tt&&Ut(Tt,e),$t.forEach(t),Rt.forEach(t),n=0;n<Lt.length;n++)(r=Lt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&null===(n=Lt[0]).blockedOn;)Dt(n),null===n.blockedOn&&Lt.shift()}var Wt=x.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,r){var a=bt,o=Wt.transition;Wt.transition=null;try{bt=1,Qt(e,t,n,r)}finally{bt=a,Wt.transition=o}}function Kt(e,t,n,r){var a=bt,o=Wt.transition;Wt.transition=null;try{bt=4,Qt(e,t,n,r)}finally{bt=a,Wt.transition=o}}function Qt(e,t,n,r){if(Ht){var a=Gt(e,t,n,r);if(null===a)Hr(e,t,r,Yt,n),Ot(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Pt=At(Pt,e,t,n,r,a),!0;case"dragenter":return zt=At(zt,e,t,n,r,a),!0;case"mouseover":return Tt=At(Tt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return $t.set(o,At($t.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Rt.set(o,At(Rt.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Ot(e,r),4&t&&-1<Nt.indexOf(e)){for(;null!==a;){var o=ba(a);if(null!==o&&wt(o),null===(o=Gt(e,t,n,r))&&Hr(e,t,r,Yt,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Yt=null;function Gt(e,t,n,r){if(Yt=null,null!==(e=ya(e=we(r))))if(null===(t=Be(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,a="value"in Xt?Xt.value:Xt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Zt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=D({},un,{view:0,detail:0}),fn=an(dn),pn=D({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),mn=an(pn),hn=an(D({},pn,{dataTransfer:0})),gn=an(D({},dn,{relatedTarget:0})),vn=an(D({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=D({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=an(yn),xn=an(D({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function Cn(){return En}var jn=D({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),_n=an(jn),Pn=an(D({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),zn=an(D({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Tn=an(D({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=D({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rn=an($n),Ln=[9,13,27,32],Nn=c&&"CompositionEvent"in window,On=null;c&&"documentMode"in document&&(On=document.documentMode);var An=c&&"TextEvent"in window&&!On,Dn=c&&(!Nn||On&&8<On&&11>=On),In=String.fromCharCode(32),Mn=!1;function Fn(e,t){switch(e){case"keyup":return-1!==Ln.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Bn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Vn(e,t,n,r){je(r),0<(t=Kr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Qn=null;function Yn(e){Ir(e,0)}function Gn(e){if(Q(xa(e)))return e}function qn(e,t){if("change"===e)return t}var Xn=!1;if(c){var Jn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Xn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),Qn=Kn=null)}function nr(e){if("value"===e.propertyName&&Gn(Qn)){var t=[];Vn(t,Qn,e,we(e)),$e(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Qn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Qn)}function or(e,t){if("click"===e)return Gn(t)}function ir(e,t){if("input"===e||"change"===e)return Gn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=cr(n,o);var i=cr(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,br=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==Y(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&sr(yr,r)||(yr=r,0<(r=Kr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Er={};function Cr(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return kr[e]=n[t];return e}c&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var jr=Cr("animationend"),_r=Cr("animationiteration"),Pr=Cr("animationstart"),zr=Cr("transitionend"),Tr=new Map,$r="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(e,t){Tr.set(e,t),s(t,[e])}for(var Lr=0;Lr<$r.length;Lr++){var Nr=$r[Lr];Rr(Nr.toLowerCase(),"on"+(Nr[0].toUpperCase()+Nr.slice(1)))}Rr(jr,"onAnimationEnd"),Rr(_r,"onAnimationIteration"),Rr(Pr,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(zr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ar=new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));function Dr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,l,s,u){if(Ue.apply(this,arguments),Ae){if(!Ae)throw Error(o(198));var c=De;Ae=!1,De=null,Ie||(Ie=!0,Me=c)}}(r,t,void 0,e),e.currentTarget=null}function Ir(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Dr(a,l,u),o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Dr(a,l,u),o=s}}}if(Ie)throw e=Me,Ie=!1,Me=null,e}function Mr(e,t){var n=t[ha];void 0===n&&(n=t[ha]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Fr(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Ur]){e[Ur]=!0,i.forEach((function(t){"selectionchange"!==t&&(Ar.has(t)||Fr(t,!1,e),Fr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,Fr("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(qt(t)){case 1:var a=Vt;break;case 4:a=Kt;break;default:a=Qt}n=a.bind(null,t,n,e),a=void 0,!Le||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=ya(l)))return;if(5===(s=i.tag)||6===s){r=o=i;continue e}l=l.parentNode}}r=r.return}$e((function(){var r=o,a=we(n),i=[];e:{var l=Tr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=_n;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=hn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=zn;break;case jr:case _r:case Pr:s=vn;break;case zr:s=Tn;break;case"scroll":s=fn;break;case"wheel":s=Rn;break;case"copy":case"cut":case"paste":s=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,m=r;null!==m;){var h=(p=m).stateNode;if(5===p.tag&&null!==h&&(p=h,null!==f&&(null!=(h=Re(m,f))&&c.push(Vr(m,h,p)))),d)break;m=m.return}0<c.length&&(l=new s(l,u,null,n,a),i.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!ya(u)&&!u[ma])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?ya(u):null)&&(u!==(d=Be(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=mn,h="onMouseLeave",f="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(c=Pn,h="onPointerLeave",f="onPointerEnter",m="pointer"),d=null==s?l:xa(s),p=null==u?l:xa(u),(l=new c(h,m+"leave",s,n,a)).target=d,l.relatedTarget=p,h=null,ya(a)===r&&((c=new c(f,m+"enter",u,n,a)).target=p,c.relatedTarget=d,h=c),d=h,s&&u)e:{for(f=u,m=0,p=c=s;p;p=Qr(p))m++;for(p=0,h=f;h;h=Qr(h))p++;for(;0<m-p;)c=Qr(c),m--;for(;0<p-m;)f=Qr(f),p--;for(;m--;){if(c===f||null!==f&&c===f.alternate)break e;c=Qr(c),f=Qr(f)}c=null}else c=null;null!==s&&Yr(i,l,s,c,!1),null!==u&&null!==d&&Yr(i,d,u,c,!0)}if("select"===(s=(l=r?xa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=qn;else if(Hn(l))if(Xn)g=ir;else{g=ar;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=or);switch(g&&(g=g(e,r))?Vn(i,g,n,a):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?xa(r):window,e){case"focusin":(Hn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,xr(i,n,a);break;case"selectionchange":if(hr)break;case"keydown":case"keyup":xr(i,n,a)}var y;if(Nn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Bn?Fn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Dn&&"ko"!==n.locale&&(Bn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Bn&&(y=en()):(Jt="value"in(Xt=a)?Xt.value:Xt.textContent,Bn=!0)),0<(v=Kr(r,b)).length&&(b=new xn(b,e,null,n,a),i.push({event:b,listeners:v}),y?b.data=y:null!==(y=Un(n))&&(b.data=y))),(y=An?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Mn=!0,In);case"textInput":return(e=t.data)===In&&Mn?null:e;default:return null}}(e,n):function(e,t){if(Bn)return"compositionend"===e||!Nn&&Fn(e,t)?(e=en(),Zt=Jt=Xt=null,Bn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(a=new xn("onBeforeInput","beforeinput",null,n,a),i.push({event:a,listeners:r}),a.data=y))}Ir(i,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=Re(e,n))&&r.unshift(Vr(e,o,a)),null!=(o=Re(e,t))&&r.push(Vr(e,o,a))),e=e.return}return r}function Qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=Re(n,o))&&i.unshift(Vr(n,s,l)):a||null!=(s=Re(n,o))&&i.push(Vr(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Gr=/\r\n?/g,qr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(qr,"")}function Jr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(o(425))}function Zr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,oa="function"===typeof Promise?Promise:void 0,ia="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oa?function(e){return oa.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Bt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Bt(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ma="__reactContainer$"+da,ha="__reactEvents$"+da,ga="__reactListeners$"+da,va="__reactHandles$"+da;function ya(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ma]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[fa])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function ba(e){return!(e=e[fa]||e[ma])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wa(e){return e[pa]||null}var Sa=[],ka=-1;function Ea(e){return{current:e}}function Ca(e){0>ka||(e.current=Sa[ka],Sa[ka]=null,ka--)}function ja(e,t){ka++,Sa[ka]=e.current,e.current=t}var _a={},Pa=Ea(_a),za=Ea(!1),Ta=_a;function $a(e,t){var n=e.type.contextTypes;if(!n)return _a;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ra(e){return null!==(e=e.childContextTypes)&&void 0!==e}function La(){Ca(za),Ca(Pa)}function Na(e,t,n){if(Pa.current!==_a)throw Error(o(168));ja(Pa,t),ja(za,n)}function Oa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,W(e)||"Unknown",a));return D({},n,r)}function Aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_a,Ta=Pa.current,ja(Pa,e),ja(za,za.current),!0}function Da(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Oa(e,t,Ta),r.__reactInternalMemoizedMergedChildContext=e,Ca(za),Ca(Pa),ja(Pa,e)):Ca(za),ja(za,n)}var Ia=null,Ma=!1,Fa=!1;function Ua(e){null===Ia?Ia=[e]:Ia.push(e)}function Ba(){if(!Fa&&null!==Ia){Fa=!0;var e=0,t=bt;try{var n=Ia;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ia=null,Ma=!1}catch(a){throw null!==Ia&&(Ia=Ia.slice(e+1)),Qe(Ze,Ba),a}finally{bt=t,Fa=!1}}return null}var Wa=[],Ha=0,Va=null,Ka=0,Qa=[],Ya=0,Ga=null,qa=1,Xa="";function Ja(e,t){Wa[Ha++]=Ka,Wa[Ha++]=Va,Va=e,Ka=t}function Za(e,t,n){Qa[Ya++]=qa,Qa[Ya++]=Xa,Qa[Ya++]=Ga,Ga=e;var r=qa;e=Xa;var a=32-it(r)-1;r&=~(1<<a),n+=1;var o=32-it(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,qa=1<<32-it(t)+a|n<<a|r,Xa=o+e}else qa=1<<o|n<<a|r,Xa=e}function eo(e){null!==e.return&&(Ja(e,1),Za(e,1,0))}function to(e){for(;e===Va;)Va=Wa[--Ha],Wa[Ha]=null,Ka=Wa[--Ha],Wa[Ha]=null;for(;e===Ga;)Ga=Qa[--Ya],Qa[Ya]=null,Xa=Qa[--Ya],Qa[Ya]=null,qa=Qa[--Ya],Qa[Ya]=null}var no=null,ro=null,ao=!1,oo=null;function io(e,t){var n=$u(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ga?{id:qa,overflow:Xa}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=$u(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function so(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function uo(e){if(ao){var t=ro;if(t){var n=t;if(!lo(e,t)){if(so(e))throw Error(o(418));t=ua(n.nextSibling);var r=no;t&&lo(e,t)?io(r,n):(e.flags=-4097&e.flags|2,ao=!1,no=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,ao=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function fo(e){if(e!==no)return!1;if(!ao)return co(e),ao=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ro)){if(so(e))throw po(),Error(o(418));for(;t;)io(e,t),t=ua(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ua(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=ua(e.nextSibling)}function mo(){ro=no=null,ao=!1}function ho(e){null===oo?oo=[e]:oo.push(e)}var go=x.ReactCurrentBatchConfig;function vo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bo(e){return(0,e._init)(e._payload)}function xo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Lu(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Du(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===R&&bo(o)===t.type)?((r=a(t,n.props)).ref=vo(e,t,n),r.return=e,r):((r=Nu(n.type,n.key,n.props,null,e.mode,r)).ref=vo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Iu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Ou(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Du(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Nu(t.type,t.key,t.props,null,e.mode,n)).ref=vo(e,null,t),n.return=e,n;case S:return(t=Iu(t,e.mode,n)).return=e,t;case R:return f(e,(0,t._init)(t._payload),n)}if(te(t)||O(t))return(t=Ou(t,e.mode,n,null)).return=e,t;yo(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?u(e,t,n,r):null;case S:return n.key===a?c(e,t,n,r):null;case R:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||O(n))return null!==a?null:d(e,t,n,r,null);yo(e,n)}return null}function m(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case R:return m(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||O(r))return d(t,e=e.get(n)||null,r,a,null);yo(t,r)}return null}function h(a,o,l,s){for(var u=null,c=null,d=o,h=o=0,g=null;null!==d&&h<l.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var v=p(a,d,l[h],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(a,d),o=i(v,o,h),null===c?u=v:c.sibling=v,c=v,d=g}if(h===l.length)return n(a,d),ao&&Ja(a,h),u;if(null===d){for(;h<l.length;h++)null!==(d=f(a,l[h],s))&&(o=i(d,o,h),null===c?u=d:c.sibling=d,c=d);return ao&&Ja(a,h),u}for(d=r(a,d);h<l.length;h++)null!==(g=m(d,a,h,l[h],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?h:g.key),o=i(g,o,h),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(a,e)})),ao&&Ja(a,h),u}function g(a,l,s,u){var c=O(s);if("function"!==typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var d=c=null,h=l,g=l=0,v=null,y=s.next();null!==h&&!y.done;g++,y=s.next()){h.index>g?(v=h,h=null):v=h.sibling;var b=p(a,h,y.value,u);if(null===b){null===h&&(h=v);break}e&&h&&null===b.alternate&&t(a,h),l=i(b,l,g),null===d?c=b:d.sibling=b,d=b,h=v}if(y.done)return n(a,h),ao&&Ja(a,g),c;if(null===h){for(;!y.done;g++,y=s.next())null!==(y=f(a,y.value,u))&&(l=i(y,l,g),null===d?c=y:d.sibling=y,d=y);return ao&&Ja(a,g),c}for(h=r(a,h);!y.done;g++,y=s.next())null!==(y=m(h,a,g,y.value,u))&&(e&&null!==y.alternate&&h.delete(null===y.key?g:y.key),l=i(y,l,g),null===d?c=y:d.sibling=y,d=y);return e&&h.forEach((function(e){return t(a,e)})),ao&&Ja(a,g),c}return function e(r,o,i,s){if("object"===typeof i&&null!==i&&i.type===k&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var u=i.key,c=o;null!==c;){if(c.key===u){if((u=i.type)===k){if(7===c.tag){n(r,c.sibling),(o=a(c,i.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===R&&bo(u)===c.type){n(r,c.sibling),(o=a(c,i.props)).ref=vo(r,c,i),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}i.type===k?((o=Ou(i.props.children,r.mode,s,i.key)).return=r,r=o):((s=Nu(i.type,i.key,i.props,null,r.mode,s)).ref=vo(r,o,i),s.return=r,r=s)}return l(r);case S:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(r,o.sibling),(o=a(o,i.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Iu(i,r.mode,s)).return=r,r=o}return l(r);case R:return e(r,o,(c=i._init)(i._payload),s)}if(te(i))return h(r,o,i,s);if(O(i))return g(r,o,i,s);yo(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,i)).return=r,r=o):(n(r,o),(o=Du(i,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var wo=xo(!0),So=xo(!1),ko=Ea(null),Eo=null,Co=null,jo=null;function _o(){jo=Co=Eo=null}function Po(e){var t=ko.current;Ca(ko),e._currentValue=t}function zo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function To(e,t){Eo=e,jo=Co=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bl=!0),e.firstContext=null)}function $o(e){var t=e._currentValue;if(jo!==e)if(e={context:e,memoizedValue:t,next:null},null===Co){if(null===Eo)throw Error(o(308));Co=e,Eo.dependencies={lanes:0,firstContext:e}}else Co=Co.next=e;return t}var Ro=null;function Lo(e){null===Ro?Ro=[e]:Ro.push(e)}function No(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Lo(t)):(n.next=a.next,a.next=n),t.interleaved=n,Oo(e,r)}function Oo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ao=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Io(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ps)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Oo(e,n)}return null===(a=r.interleaved)?(t.next=t,Lo(r)):(t.next=a.next,a.next=t),r.interleaved=t,Oo(e,n)}function Uo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Bo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wo(e,t,n,r){var a=e.updateQueue;Ao=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?o=u:i.next=u,i=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,c=u=s=null,l=o;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,h=l;switch(f=t,p=n,h.tag){case 1:if("function"===typeof(m=h.payload)){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(f="function"===typeof(m=h.payload)?m.call(p,d,f):m)||void 0===f)break e;d=D({},d,f);break e;case 2:Ao=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,i|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{i|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);As|=i,e.lanes=i,e.memoizedState=d}}function Ho(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var Vo={},Ko=Ea(Vo),Qo=Ea(Vo),Yo=Ea(Vo);function Go(e){if(e===Vo)throw Error(o(174));return e}function qo(e,t){switch(ja(Yo,t),ja(Qo,e),ja(Ko,Vo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ca(Ko),ja(Ko,t)}function Xo(){Ca(Ko),Ca(Qo),Ca(Yo)}function Jo(e){Go(Yo.current);var t=Go(Ko.current),n=se(t,e.type);t!==n&&(ja(Qo,e),ja(Ko,n))}function Zo(e){Qo.current===e&&(Ca(Ko),Ca(Qo))}var ei=Ea(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function ri(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var ai=x.ReactCurrentDispatcher,oi=x.ReactCurrentBatchConfig,ii=0,li=null,si=null,ui=null,ci=!1,di=!1,fi=0,pi=0;function mi(){throw Error(o(321))}function hi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,a,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=null===e||null===e.memoizedState?Zi:el,e=n(r,a),di){i=0;do{if(di=!1,fi=0,25<=i)throw Error(o(301));i+=1,ui=si=null,t.updateQueue=null,ai.current=tl,e=n(r,a)}while(di)}if(ai.current=Ji,t=null!==si&&null!==si.next,ii=0,ui=si=li=null,ci=!1,t)throw Error(o(300));return e}function vi(){var e=0!==fi;return fi=0,e}function yi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ui?li.memoizedState=ui=e:ui=ui.next=e,ui}function bi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ui?li.memoizedState:ui.next;if(null!==t)ui=t,si=e;else{if(null===e)throw Error(o(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ui?li.memoizedState=ui=e:ui=ui.next=e}return ui}function xi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=bi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=si,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((ii&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,li.lanes|=d,As|=d}c=c.next}while(null!==c&&c!==i);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(bl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,li.lanes|=i,As|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Si(e){var t=bi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);lr(i,t.memoizedState)||(bl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ki(){}function Ei(e,t){var n=li,r=bi(),a=t(),i=!lr(r.memoizedState,a);if(i&&(r.memoizedState=a,bl=!0),r=r.queue,Ai(_i.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ui&&1&ui.memoizedState.tag){if(n.flags|=2048,$i(9,ji.bind(null,n,r,a,t),void 0,null),null===zs)throw Error(o(349));0!==(30&ii)||Ci(n,t,a)}return a}function Ci(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function ji(e,t,n,r){t.value=n,t.getSnapshot=r,Pi(t)&&zi(e)}function _i(e,t,n){return n((function(){Pi(t)&&zi(e)}))}function Pi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function zi(e){var t=Oo(e,1);null!==t&&nu(t,e,1,-1)}function Ti(e){var t=yi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=Yi.bind(null,li,e),[t.memoizedState,e]}function $i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ri(){return bi().memoizedState}function Li(e,t,n,r){var a=yi();li.flags|=e,a.memoizedState=$i(1|t,n,void 0,void 0===r?null:r)}function Ni(e,t,n,r){var a=bi();r=void 0===r?null:r;var o=void 0;if(null!==si){var i=si.memoizedState;if(o=i.destroy,null!==r&&hi(r,i.deps))return void(a.memoizedState=$i(t,n,o,r))}li.flags|=e,a.memoizedState=$i(1|t,n,o,r)}function Oi(e,t){return Li(8390656,8,e,t)}function Ai(e,t){return Ni(2048,8,e,t)}function Di(e,t){return Ni(4,2,e,t)}function Ii(e,t){return Ni(4,4,e,t)}function Mi(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Fi(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ni(4,4,Mi.bind(null,t,e),n)}function Ui(){}function Bi(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&hi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wi(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&hi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hi(e,t,n){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=n):(lr(n,t)||(n=ht(),li.lanes|=n,As|=n,e.baseState=!0),t)}function Vi(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=oi.transition;oi.transition={};try{e(!1),t()}finally{bt=n,oi.transition=r}}function Ki(){return bi().memoizedState}function Qi(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gi(e))qi(t,n);else if(null!==(n=No(e,t,n,r))){nu(n,e,r,eu()),Xi(n,t,r)}}function Yi(e,t,n){var r=tu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gi(e))qi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(a.next=a,Lo(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=No(e,t,a,r))&&(nu(n,e,r,a=eu()),Xi(n,t,r))}}function Gi(e){var t=e.alternate;return e===li||null!==t&&t===li}function qi(e,t){di=ci=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xi(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Ji={readContext:$o,useCallback:mi,useContext:mi,useEffect:mi,useImperativeHandle:mi,useInsertionEffect:mi,useLayoutEffect:mi,useMemo:mi,useReducer:mi,useRef:mi,useState:mi,useDebugValue:mi,useDeferredValue:mi,useTransition:mi,useMutableSource:mi,useSyncExternalStore:mi,useId:mi,unstable_isNewReconciler:!1},Zi={readContext:$o,useCallback:function(e,t){return yi().memoizedState=[e,void 0===t?null:t],e},useContext:$o,useEffect:Oi,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Li(4194308,4,Mi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Li(4194308,4,e,t)},useInsertionEffect:function(e,t){return Li(4,2,e,t)},useMemo:function(e,t){var n=yi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qi.bind(null,li,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yi().memoizedState=e},useState:Ti,useDebugValue:Ui,useDeferredValue:function(e){return yi().memoizedState=e},useTransition:function(){var e=Ti(!1),t=e[0];return e=Vi.bind(null,e[1]),yi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=li,a=yi();if(ao){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===zs)throw Error(o(349));0!==(30&ii)||Ci(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Oi(_i.bind(null,r,i,e),[e]),r.flags|=2048,$i(9,ji.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yi(),t=zs.identifierPrefix;if(ao){var n=Xa;t=":"+t+"R"+(n=(qa&~(1<<32-it(qa)-1)).toString(32)+n),0<(n=fi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:$o,useCallback:Bi,useContext:$o,useEffect:Ai,useImperativeHandle:Fi,useInsertionEffect:Di,useLayoutEffect:Ii,useMemo:Wi,useReducer:wi,useRef:Ri,useState:function(){return wi(xi)},useDebugValue:Ui,useDeferredValue:function(e){return Hi(bi(),si.memoizedState,e)},useTransition:function(){return[wi(xi)[0],bi().memoizedState]},useMutableSource:ki,useSyncExternalStore:Ei,useId:Ki,unstable_isNewReconciler:!1},tl={readContext:$o,useCallback:Bi,useContext:$o,useEffect:Ai,useImperativeHandle:Fi,useInsertionEffect:Di,useLayoutEffect:Ii,useMemo:Wi,useReducer:Si,useRef:Ri,useState:function(){return Si(xi)},useDebugValue:Ui,useDeferredValue:function(e){var t=bi();return null===si?t.memoizedState=e:Hi(t,si.memoizedState,e)},useTransition:function(){return[Si(xi)[0],bi().memoizedState]},useMutableSource:ki,useSyncExternalStore:Ei,useId:Ki,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=D({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:D({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Mo(r,a);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Fo(e,o,a))&&(nu(t,e,a,r),Uo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Mo(r,a);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Fo(e,o,a))&&(nu(t,e,a,r),Uo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),a=Mo(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Fo(e,a,r))&&(nu(t,e,r,n),Uo(t,e,r))}};function ol(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,o))}function il(e,t,n){var r=!1,a=_a,o=t.contextType;return"object"===typeof o&&null!==o?o=$o(o):(a=Ra(t)?Ta:Pa.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?$a(e,a):_a),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Do(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=$o(o):(o=Ra(t)?Ta:Pa.current,a.context=$a(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rl(e,t,o,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Wo(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var a=n}catch(o){a="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:a,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Mo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hs||(Hs=!0,Vs=r),dl(0,t)},n}function ml(e,t,n){(n=Mo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ks?Ks=new Set([this]):Ks.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function hl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Mo(-1,1)).tag=2,Fo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var yl=x.ReactCurrentOwner,bl=!1;function xl(e,t,n,r){t.child=null===e?So(t,null,n,r):wo(t,e.child,n,r)}function wl(e,t,n,r,a){n=n.render;var o=t.ref;return To(t,a),r=gi(e,t,n,r,o,a),n=vi(),null===e||bl?(ao&&n&&eo(t),t.flags|=1,xl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Hl(e,t,a))}function Sl(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Ru(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Nu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,kl(e,t,o,r,a))}if(o=e.child,0===(e.lanes&a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return Hl(e,t,a)}return t.flags|=1,(e=Lu(o,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(bl=!1,t.pendingProps=r=o,0===(e.lanes&a))return t.lanes=e.lanes,Hl(e,t,a);0!==(131072&e.flags)&&(bl=!0)}}return jl(e,t,n,r,a)}function El(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ja(Ls,Rs),Rs|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ja(Ls,Rs),Rs|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,ja(Ls,Rs),Rs|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,ja(Ls,Rs),Rs|=r;return xl(e,t,a,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jl(e,t,n,r,a){var o=Ra(n)?Ta:Pa.current;return o=$a(t,o),To(t,a),n=gi(e,t,n,r,o,a),r=vi(),null===e||bl?(ao&&r&&eo(t),t.flags|=1,xl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Hl(e,t,a))}function _l(e,t,n,r,a){if(Ra(n)){var o=!0;Aa(t)}else o=!1;if(To(t,a),null===t.stateNode)Wl(e,t),il(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;"object"===typeof u&&null!==u?u=$o(u):u=$a(t,u=Ra(n)?Ta:Pa.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,i,r,u),Ao=!1;var f=t.memoizedState;i.state=f,Wo(t,r,i,a),s=t.memoizedState,l!==r||f!==s||za.current||Ao?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Ao||ol(t,n,l,r,f,s,u))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Io(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),i.props=u,d=t.pendingProps,f=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=$o(s):s=$a(t,s=Ra(n)?Ta:Pa.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,i,r,s),Ao=!1,f=t.memoizedState,i.state=f,Wo(t,r,i,a);var m=t.memoizedState;l!==d||f!==m||za.current||Ao?("function"===typeof p&&(rl(t,n,p,r),m=t.memoizedState),(u=Ao||ol(t,n,u,r,f,m,s)||!1)?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,m,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,m,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),i.props=r,i.state=m,i.context=s,r=u):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,o,a)}function Pl(e,t,n,r,a,o){Cl(e,t);var i=0!==(128&t.flags);if(!r&&!i)return a&&Da(t,n,!1),Hl(e,t,o);r=t.stateNode,yl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,l,o)):xl(e,t,l,o),t.memoizedState=r.state,a&&Da(t,n,!0),t.child}function zl(e){var t=e.stateNode;t.pendingContext?Na(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Na(0,t.context,!1),qo(e,t.containerInfo)}function Tl(e,t,n,r,a){return mo(),ho(a),t.flags|=256,xl(e,t,n,r),t.child}var $l,Rl,Ll,Nl,Ol={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dl(e,t,n){var r,a=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),ja(ei,1&i),null===e)return uo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Au(s,a,0,null),e=Ou(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Al(n),t.memoizedState=Ol,e):Il(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,l){if(n)return 256&t.flags?(t.flags&=-257,Ml(e,t,l,r=cl(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Au({mode:"visible",children:r.children},a,0,null),(i=Ou(i,a,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,l),t.child.memoizedState=Al(l),t.memoizedState=Ol,i);if(0===(1&t.mode))return Ml(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Ml(e,t,l,r=cl(i=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),bl||s){if(null!==(r=zs)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Oo(e,a),nu(r,e,a,-1))}return hu(),Ml(e,t,l,r=cl(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=_u.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ro=ua(a.nextSibling),no=t,ao=!0,oo=null,null!==e&&(Qa[Ya++]=qa,Qa[Ya++]=Xa,Qa[Ya++]=Ga,qa=e.id,Xa=e.overflow,Ga=t),t=Il(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,i,n);if(l){l=a.fallback,s=t.mode,r=(i=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Lu(i,u)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Lu(r,l):(l=Ou(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Al(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ol,a}return e=(l=e.child).sibling,a=Lu(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Il(e,t){return(t=Au({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ml(e,t,n,r){return null!==r&&ho(r),wo(t,e.child,null,n),(e=Il(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Fl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),zo(e.return,t,n)}function Ul(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Bl(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=ei.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fl(e,n,t);else if(19===e.tag)Fl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ja(ei,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===ti(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ul(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ti(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ul(t,!0,n,null,o);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),As|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Lu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Lu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ao)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ql(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kl(t),null;case 1:case 17:return Ra(t.type)&&La(),Kl(t),null;case 3:return r=t.stateNode,Xo(),Ca(za),Ca(Pa),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(iu(oo),oo=null))),Rl(e,t),Kl(t),null;case 5:Zo(t);var a=Go(Yo.current);if(n=t.type,null!==e&&null!=t.stateNode)Ll(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Kl(t),null}if(e=Go(Ko.current),fo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[fa]=t,r[pa]=i,e=0!==(1&t.mode),n){case"dialog":Mr("cancel",r),Mr("close",r);break;case"iframe":case"object":case"embed":Mr("load",r);break;case"video":case"audio":for(a=0;a<Or.length;a++)Mr(Or[a],r);break;case"source":Mr("error",r);break;case"img":case"image":case"link":Mr("error",r),Mr("load",r);break;case"details":Mr("toggle",r);break;case"input":q(r,i),Mr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Mr("invalid",r);break;case"textarea":ae(r,i),Mr("invalid",r)}for(var s in ye(n,i),a=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Mr("scroll",r)}switch(n){case"input":K(r),Z(r,i,!0);break;case"textarea":K(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Zr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fa]=t,e[pa]=r,$l(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(n,r),n){case"dialog":Mr("cancel",e),Mr("close",e),a=r;break;case"iframe":case"object":case"embed":Mr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Or.length;a++)Mr(Or[a],e);a=r;break;case"source":Mr("error",e),a=r;break;case"img":case"image":case"link":Mr("error",e),Mr("load",e),a=r;break;case"details":Mr("toggle",e),a=r;break;case"input":q(e,r),a=G(e,r),Mr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=D({},r,{value:void 0}),Mr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Mr("invalid",e)}for(i in ye(n,a),u=a)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?ge(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===i?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Mr("scroll",e):null!=c&&b(e,i,c,s))}switch(n){case"input":K(e),Z(e,r,!1);break;case"textarea":K(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Kl(t),null;case 6:if(e&&null!=t.stateNode)Nl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Go(Yo.current),Go(Ko.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(i=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return Kl(t),null;case 13:if(Ca(ei),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ao&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))po(),mo(),t.flags|=98560,i=!1;else if(i=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[fa]=t}else mo(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Kl(t),i=!1}else null!==oo&&(iu(oo),oo=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===Ns&&(Ns=3):hu())),null!==t.updateQueue&&(t.flags|=4),Kl(t),null);case 4:return Xo(),Rl(e,t),null===e&&Br(t.stateNode.containerInfo),Kl(t),null;case 10:return Po(t.type._context),Kl(t),null;case 19:if(Ca(ei),null===(i=t.memoizedState))return Kl(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Vl(i,!1);else{if(0!==Ns||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Vl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ja(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Xe()>Bs&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ti(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!ao)return Kl(t),null}else 2*Xe()-i.renderingStartTime>Bs&&1073741824!==n&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Xe(),t.sibling=null,n=ei.current,ja(ei,r?1&n|2:1&n),t):(Kl(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Rs)&&(Kl(t),6&t.subtreeFlags&&(t.flags|=8192)):Kl(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Yl(e,t){switch(to(t),t.tag){case 1:return Ra(t.type)&&La(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xo(),Ca(za),Ca(Pa),ri(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zo(t),null;case 13:if(Ca(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));mo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ca(ei),null;case 4:return Xo(),null;case 10:return Po(t.type._context),null;case 22:case 23:return du(),null;default:return null}}$l=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Rl=function(){},Ll=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Go(Ko.current);var o,i=null;switch(n){case"input":a=G(e,a),r=G(e,r),i=[];break;case"select":a=D({},a,{value:void 0}),r=D({},r,{value:void 0}),i=[];break;case"textarea":a=re(e,a),r=re(e,r),i=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in ye(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(i=i||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(i=i||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Mr("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}},Nl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gl=!1,ql=!1,Xl="function"===typeof WeakSet?WeakSet:Set,Jl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Eu(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Eu(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&es(t,n,o)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fa],delete t[pa],delete t[ha],delete t[ga],delete t[va])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:ql||Zl(n,t);case 6:var r=cs,a=ds;cs=null,fs(e,t,n),ds=a,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Bt(e)):sa(cs,n.stateNode));break;case 4:r=cs,a=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=a;break;case 0:case 11:case 14:case 15:if(!ql&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!==(2&o)||0!==(4&o))&&es(n,t,i),a=a.next}while(a!==r)}fs(e,t,n);break;case 1:if(!ql&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Eu(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(ql=(r=ql)||null!==n.memoizedState,fs(e,t,n),ql=r):fs(e,t,n);break;default:fs(e,t,n)}}function ms(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach((function(t){var r=Pu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function hs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(o(160));ps(i,l,a),cs=null,ds=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){Eu(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hs(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Eu(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Eu(e,e.return,g)}}break;case 1:hs(t,e),vs(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(hs(t,e),vs(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(g){Eu(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===i.type&&null!=i.name&&X(a,i),be(s,l);var c=be(s,i);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):b(a,d,f,c)}switch(s){case"input":J(a,i);break;case"textarea":oe(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var m=i.value;null!=m?ne(a,!!i.multiple,m,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(a,!!i.multiple,i.defaultValue,!0):ne(a,!!i.multiple,i.multiple?[]:"",!1))}a[pa]=i}catch(g){Eu(e,e.return,g)}}break;case 6:if(hs(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(g){Eu(e,e.return,g)}}break;case 3:if(hs(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(g){Eu(e,e.return,g)}break;case 4:default:hs(t,e),vs(e);break;case 13:hs(t,e),vs(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(Us=Xe())),4&r&&ms(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(ql=(c=ql)||d,hs(t,e),ql=c):hs(t,e),vs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Jl=e,d=e.child;null!==d;){for(f=Jl=d;null!==Jl;){switch(m=(p=Jl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Zl(p,p.return);var h=p.stateNode;if("function"===typeof h.componentWillUnmount){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(g){Eu(r,n,g)}}break;case 5:Zl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==m?(m.return=p,Jl=m):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=he("display",l))}catch(g){Eu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Eu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:hs(t,e),vs(e),4&r&&ms(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),us(e,ls(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(o(161))}}catch(l){Eu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ys(e,t,n){Jl=e,bs(e,t,n)}function bs(e,t,n){for(var r=0!==(1&e.mode);null!==Jl;){var a=Jl,o=a.child;if(22===a.tag&&r){var i=null!==a.memoizedState||Gl;if(!i){var l=a.alternate,s=null!==l&&null!==l.memoizedState||ql;l=Gl;var u=ql;if(Gl=i,(ql=s)&&!u)for(Jl=a;null!==Jl;)s=(i=Jl).child,22===i.tag&&null!==i.memoizedState?Ss(a):null!==s?(s.return=i,Jl=s):Ss(a);for(;null!==o;)Jl=o,bs(o,t,n),o=o.sibling;Jl=a,Gl=l,ql=u}xs(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,Jl=o):xs(e)}}function xs(e){for(;null!==Jl;){var t=Jl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:ql||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!ql)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Ho(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ho(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Bt(f)}}}break;default:throw Error(o(163))}ql||512&t.flags&&as(t)}catch(p){Eu(t,t.return,p)}}if(t===e){Jl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Jl=n;break}Jl=t.return}}function ws(e){for(;null!==Jl;){var t=Jl;if(t===e){Jl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Jl=n;break}Jl=t.return}}function Ss(e){for(;null!==Jl;){var t=Jl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Eu(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){Eu(t,a,s)}}var o=t.return;try{as(t)}catch(s){Eu(t,o,s)}break;case 5:var i=t.return;try{as(t)}catch(s){Eu(t,i,s)}}}catch(s){Eu(t,t.return,s)}if(t===e){Jl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Jl=l;break}Jl=t.return}}var ks,Es=Math.ceil,Cs=x.ReactCurrentDispatcher,js=x.ReactCurrentOwner,_s=x.ReactCurrentBatchConfig,Ps=0,zs=null,Ts=null,$s=0,Rs=0,Ls=Ea(0),Ns=0,Os=null,As=0,Ds=0,Is=0,Ms=null,Fs=null,Us=0,Bs=1/0,Ws=null,Hs=!1,Vs=null,Ks=null,Qs=!1,Ys=null,Gs=0,qs=0,Xs=null,Js=-1,Zs=0;function eu(){return 0!==(6&Ps)?Xe():-1!==Js?Js:Js=Xe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Ps)&&0!==$s?$s&-$s:null!==go.transition?(0===Zs&&(Zs=ht()),Zs):0!==(e=bt)?e:e=void 0===(e=window.event)?16:qt(e.type)}function nu(e,t,n,r){if(50<qs)throw qs=0,Xs=null,Error(o(185));vt(e,n,r),0!==(2&Ps)&&e===zs||(e===zs&&(0===(2&Ps)&&(Ds|=n),4===Ns&&lu(e,$s)),ru(e,r),1===n&&0===Ps&&0===(1&t.mode)&&(Bs=Xe()+500,Ma&&Ba()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-it(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=pt(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=ft(e,e===zs?$s:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Ma=!0,Ua(e)}(su.bind(null,e)):Ua(su.bind(null,e)),ia((function(){0===(6&Ps)&&Ba()})),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=zu(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Js=-1,Zs=0,0!==(6&Ps))throw Error(o(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=ft(e,e===zs?$s:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var a=Ps;Ps|=2;var i=mu();for(zs===e&&$s===t||(Ws=null,Bs=Xe()+500,fu(e,t));;)try{yu();break}catch(s){pu(e,s)}_o(),Cs.current=i,Ps=a,null!==Ts?t=0:(zs=null,$s=0,t=Ns)}if(0!==t){if(2===t&&(0!==(a=mt(e))&&(r=a,t=ou(e,a))),1===t)throw n=Os,fu(e,0),lu(e,r),ru(e,Xe()),n;if(6===t)lu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!lr(o(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gu(e,r))&&(0!==(i=mt(e))&&(r=i,t=ou(e,i))),1===t))throw n=Os,fu(e,0),lu(e,r),ru(e,Xe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wu(e,Fs,Ws);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Us+500-Xe())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(wu.bind(null,e,Fs,Ws),t);break}wu(e,Fs,Ws);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>a&&(a=l),r&=~i}if(r=a,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Es(r/1960))-r)){e.timeoutHandle=ra(wu.bind(null,e,Fs,Ws),r);break}wu(e,Fs,Ws);break;default:throw Error(o(329))}}}return ru(e,Xe()),e.callbackNode===n?au.bind(null,e):null}function ou(e,t){var n=Ms;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=Fs,Fs=n,null!==t&&iu(t)),e}function iu(e){null===Fs?Fs=e:Fs.push.apply(Fs,e)}function lu(e,t){for(t&=~Is,t&=~Ds,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&Ps))throw Error(o(327));Su();var t=ft(e,0);if(0===(1&t))return ru(e,Xe()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=mt(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Os,fu(e,0),lu(e,t),ru(e,Xe()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Fs,Ws),ru(e,Xe()),null}function uu(e,t){var n=Ps;Ps|=1;try{return e(t)}finally{0===(Ps=n)&&(Bs=Xe()+500,Ma&&Ba())}}function cu(e){null!==Ys&&0===Ys.tag&&0===(6&Ps)&&Su();var t=Ps;Ps|=1;var n=_s.transition,r=bt;try{if(_s.transition=null,bt=1,e)return e()}finally{bt=r,_s.transition=n,0===(6&(Ps=t))&&Ba()}}function du(){Rs=Ls.current,Ca(Ls)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Ts)for(n=Ts.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&La();break;case 3:Xo(),Ca(za),Ca(Pa),ri();break;case 5:Zo(r);break;case 4:Xo();break;case 13:case 19:Ca(ei);break;case 10:Po(r.type._context);break;case 22:case 23:du()}n=n.return}if(zs=e,Ts=e=Lu(e.current,null),$s=Rs=t,Ns=0,Os=null,Is=Ds=As=0,Fs=Ms=null,null!==Ro){for(t=0;t<Ro.length;t++)if(null!==(r=(n=Ro[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var i=o.next;o.next=a,r.next=i}n.pending=r}Ro=null}return e}function pu(e,t){for(;;){var n=Ts;try{if(_o(),ai.current=Ji,ci){for(var r=li.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}ci=!1}if(ii=0,ui=si=li=null,di=!1,fi=0,js.current=null,null===n||null===n.return){Ns=1,Os=t,Ts=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=$s,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=gl(l);if(null!==m){m.flags&=-257,vl(m,l,s,0,t),1&m.mode&&hl(i,c,t),u=c;var h=(t=m).updateQueue;if(null===h){var g=new Set;g.add(u),t.updateQueue=g}else h.add(u);break e}if(0===(1&t)){hl(i,c,t),hu();break e}u=Error(o(426))}else if(ao&&1&s.mode){var v=gl(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),ho(ul(u,s));break e}}i=u=ul(u,s),4!==Ns&&(Ns=2),null===Ms?Ms=[i]:Ms.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Bo(i,pl(0,u,t));break e;case 1:s=u;var y=i.type,b=i.stateNode;if(0===(128&i.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Ks||!Ks.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,Bo(i,ml(i,s,t));break e}}i=i.return}while(null!==i)}xu(n)}catch(x){t=x,Ts===n&&null!==n&&(Ts=n=n.return);continue}break}}function mu(){var e=Cs.current;return Cs.current=Ji,null===e?Ji:e}function hu(){0!==Ns&&3!==Ns&&2!==Ns||(Ns=4),null===zs||0===(268435455&As)&&0===(268435455&Ds)||lu(zs,$s)}function gu(e,t){var n=Ps;Ps|=2;var r=mu();for(zs===e&&$s===t||(Ws=null,fu(e,t));;)try{vu();break}catch(a){pu(e,a)}if(_o(),Ps=n,Cs.current=r,null!==Ts)throw Error(o(261));return zs=null,$s=0,Ns}function vu(){for(;null!==Ts;)bu(Ts)}function yu(){for(;null!==Ts&&!Ge();)bu(Ts)}function bu(e){var t=ks(e.alternate,e,Rs);e.memoizedProps=e.pendingProps,null===t?xu(e):Ts=t,js.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ql(n,t,Rs)))return void(Ts=n)}else{if(null!==(n=Yl(n,t)))return n.flags&=32767,void(Ts=n);if(null===e)return Ns=6,void(Ts=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ts=t);Ts=t=e}while(null!==t);0===Ns&&(Ns=5)}function wu(e,t,n){var r=bt,a=_s.transition;try{_s.transition=null,bt=1,function(e,t,n,r){do{Su()}while(null!==Ys);if(0!==(6&Ps))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-it(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,i),e===zs&&(Ts=zs=null,$s=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Qs||(Qs=!0,zu(tt,(function(){return Su(),null}))),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=_s.transition,_s.transition=null;var l=bt;bt=1;var s=Ps;Ps|=4,js.current=null,function(e,t){if(ea=Ht,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(m=f.firstChild);)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===i&&++d===r&&(u=l),null!==(m=f.nextSibling))break;p=(f=p).parentNode}f=m}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Ht=!1,Jl=t;null!==Jl;)if(e=(t=Jl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Jl=e;else for(;null!==Jl;){t=Jl;try{var h=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,v=h.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(o(163))}}catch(w){Eu(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Jl=e;break}Jl=t.return}h=ts,ts=!1}(e,n),gs(n,e),mr(ta),Ht=!!ea,ta=ea=null,e.current=n,ys(n,e,a),qe(),Ps=s,bt=l,_s.transition=i}else e.current=n;if(Qs&&(Qs=!1,Ys=e,Gs=a),i=e.pendingLanes,0===i&&(Ks=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Hs)throw Hs=!1,e=Vs,Vs=null,e;0!==(1&Gs)&&0!==e.tag&&Su(),i=e.pendingLanes,0!==(1&i)?e===Xs?qs++:(qs=0,Xs=e):qs=0,Ba()}(e,t,n,r)}finally{_s.transition=a,bt=r}return null}function Su(){if(null!==Ys){var e=xt(Gs),t=_s.transition,n=bt;try{if(_s.transition=null,bt=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,Gs=0,0!==(6&Ps))throw Error(o(331));var a=Ps;for(Ps|=4,Jl=e.current;null!==Jl;){var i=Jl,l=i.child;if(0!==(16&Jl.flags)){var s=i.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Jl=c;null!==Jl;){var d=Jl;switch(d.tag){case 0:case 11:case 15:ns(8,d,i)}var f=d.child;if(null!==f)f.return=d,Jl=f;else for(;null!==Jl;){var p=(d=Jl).sibling,m=d.return;if(os(d),d===c){Jl=null;break}if(null!==p){p.return=m,Jl=p;break}Jl=m}}}var h=i.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Jl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Jl=l;else e:for(;null!==Jl;){if(0!==(2048&(i=Jl).flags))switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,Jl=y;break e}Jl=i.return}}var b=e.current;for(Jl=b;null!==Jl;){var x=(l=Jl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Jl=x;else e:for(l=b;null!==Jl;){if(0!==(2048&(s=Jl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){Eu(s,s.return,S)}if(s===l){Jl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Jl=w;break e}Jl=s.return}}if(Ps=a,Ba(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(S){}r=!0}return r}finally{bt=n,_s.transition=t}}return!1}function ku(e,t,n){e=Fo(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function Eu(e,t,n){if(3===e.tag)ku(e,e,n);else for(;null!==t;){if(3===t.tag){ku(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ks||!Ks.has(r))){t=Fo(t,e=ml(t,e=ul(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,zs===e&&($s&n)===n&&(4===Ns||3===Ns&&(130023424&$s)===$s&&500>Xe()-Us?fu(e,0):Is|=n),ru(e,t)}function ju(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Oo(e,t))&&(vt(e,t,n),ru(e,n))}function _u(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),ju(e,n)}function Pu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),ju(e,n)}function zu(e,t){return Qe(e,t)}function Tu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $u(e,t,n,r){return new Tu(e,t,n,r)}function Ru(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Lu(e,t){var n=e.alternate;return null===n?((n=$u(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Nu(e,t,n,r,a,i){var l=2;if(r=e,"function"===typeof e)Ru(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Ou(n.children,a,i,t);case E:l=8,a|=8;break;case C:return(e=$u(12,n,t,2|a)).elementType=C,e.lanes=i,e;case z:return(e=$u(13,n,t,a)).elementType=z,e.lanes=i,e;case T:return(e=$u(19,n,t,a)).elementType=T,e.lanes=i,e;case L:return Au(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case j:l=10;break e;case _:l=9;break e;case P:l=11;break e;case $:l=14;break e;case R:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=$u(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Ou(e,t,n,r){return(e=$u(7,e,r,t)).lanes=n,e}function Au(e,t,n,r){return(e=$u(22,e,r,t)).elementType=L,e.lanes=n,e.stateNode={isHidden:!1},e}function Du(e,t,n){return(e=$u(6,e,null,t)).lanes=n,e}function Iu(e,t,n){return(t=$u(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mu(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Fu(e,t,n,r,a,o,i,l,s){return e=new Mu(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=$u(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Do(o),e}function Uu(e){if(!e)return _a;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ra(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Ra(n))return Oa(e,n,t)}return t}function Bu(e,t,n,r,a,o,i,l,s){return(e=Fu(n,r,!0,e,0,o,0,l,s)).context=Uu(null),n=e.current,(o=Mo(r=eu(),a=tu(n))).callback=void 0!==t&&null!==t?t:null,Fo(n,o,a),e.current.lanes=a,vt(e,a,r),ru(e,r),e}function Wu(e,t,n,r){var a=t.current,o=eu(),i=tu(a);return n=Uu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Mo(o,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fo(a,t,i))&&(nu(e,a,i,o),Uo(e,a,i)),i}function Hu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ku(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||za.current)bl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bl=!1,function(e,t,n){switch(t.tag){case 3:zl(t),mo();break;case 5:Jo(t);break;case 1:Ra(t.type)&&Aa(t);break;case 4:qo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ja(ko,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(ja(ei,1&ei.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Dl(e,t,n):(ja(ei,1&ei.current),null!==(e=Hl(e,t,n))?e.sibling:null);ja(ei,1&ei.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Bl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),ja(ei,ei.current),r)break;return null;case 22:case 23:return t.lanes=0,El(e,t,n)}return Hl(e,t,n)}(e,t,n);bl=0!==(131072&e.flags)}else bl=!1,ao&&0!==(1048576&t.flags)&&Za(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var a=$a(t,Pa.current);To(t,n),a=gi(null,t,r,e,a,n);var i=vi();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ra(r)?(i=!0,Aa(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Do(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=Pl(null,t,r,!0,i,n)):(t.tag=0,ao&&i&&eo(t),xl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Ru(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===$)return 14}return 2}(r),e=nl(r,e),a){case 0:t=jl(null,t,r,e,n);break e;case 1:t=_l(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,jl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,_l(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(zl(t),null===e)throw Error(o(387));r=t.pendingProps,a=(i=t.memoizedState).element,Io(e,t),Wo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Tl(e,t,r,n,a=ul(Error(o(423)),t));break e}if(r!==a){t=Tl(e,t,r,n,a=ul(Error(o(424)),t));break e}for(ro=ua(t.stateNode.containerInfo.firstChild),no=t,ao=!0,oo=null,n=So(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(mo(),r===a){t=Hl(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Jo(t),null===e&&uo(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==i&&na(r,i)&&(t.flags|=32),Cl(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&uo(t),null;case 13:return Dl(e,t,n);case 4:return qo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,wl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,ja(ko,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===a.children&&!za.current){t=Hl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===i.tag){(u=Mo(-1,n&-n)).tag=2;var c=i.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,null!==(u=i.alternate)&&(u.lanes|=n),zo(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),zo(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}xl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,To(t,n),r=r(a=$o(a)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),Sl(e,t,r,a=nl(r.type,a),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Wl(e,t),t.tag=1,Ra(r)?(e=!0,Aa(t)):e=!1,To(t,n),il(t,r,a),sl(t,r,a,n),Pl(null,t,r,!0,e,n);case 19:return Bl(e,t,n);case 22:return El(e,t,n)}throw Error(o(156,t.tag))};var Qu="function"===typeof reportError?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}function Gu(e){this._internalRoot=e}function qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ju(){}function Zu(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if("function"===typeof a){var l=a;a=function(){var e=Hu(i);l.call(e)}}Wu(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"===typeof r){var o=r;r=function(){var e=Hu(i);o.call(e)}}var i=Bu(t,r,e,0,null,!1,0,"",Ju);return e._reactRootContainer=i,e[ma]=i.current,Br(8===e.nodeType?e.parentNode:e),cu(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Hu(s);l.call(e)}}var s=Fu(e,0,!1,null,0,!1,0,"",Ju);return e._reactRootContainer=s,e[ma]=s.current,Br(8===e.nodeType?e.parentNode:e),cu((function(){Wu(t,s,n,r)})),s}(n,t,e,a,r);return Hu(i)}Gu.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Wu(e,t,null,null)},Gu.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Wu(null,e,null,null)})),t[ma]=null}},Gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&0!==t&&t<Lt[n].priority;n++);Lt.splice(n,0,e),0===n&&Dt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),ru(t,Xe()),0===(6&Ps)&&(Bs=Xe()+500,Ba()))}break;case 13:cu((function(){var t=Oo(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Ku(e,1)}},St=function(e){if(13===e.tag){var t=Oo(e,134217728);if(null!==t)nu(t,e,134217728,eu());Ku(e,134217728)}},kt=function(e){if(13===e.tag){var t=tu(e),n=Oo(e,t);if(null!==n)nu(n,e,t,eu());Ku(e,t)}},Et=function(){return bt},Ct=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},Se=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(o(90));Q(r),J(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=uu,ze=cu;var ec={usingClientEntryPoint:!1,Events:[ba,xa,wa,je,_e,uu]},tc={findFiberByHostInstance:ya,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{at=rc.inject(nc),ot=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qu(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!qu(e))throw Error(o(299));var n=!1,r="",a=Qu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Fu(e,1,!1,null,0,n,0,r,a),e[ma]=t.current,Br(8===e.nodeType?e.parentNode:e),new Yu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Xu(t))throw Error(o(200));return Zu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!qu(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",l=Qu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Bu(t,null,e,1,null!=n?n:null,a,0,i,l),e[ma]=t.current,Br(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Gu(t)},t.render=function(e,t,n){if(!Xu(t))throw Error(o(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xu(e))throw Error(o(40));return!!e._reactRootContainer&&(cu((function(){Zu(null,null,e,!1,(function(){e._reactRootContainer=null,e[ma]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xu(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Zu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},358:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,a=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,l=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function s(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function u(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function c(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},153:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,h(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,a)&&!E.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:k.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function z(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+P(s,0):o,w(i)?(a="",null!=e&&(a=e.replace(_,"$&/")+"/"),z(i,t,a,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+P(l=e[u],u);s+=z(l,t,a,c,i)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=z(l=l.value,t,a,c=o+P(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],a=0;return z(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},L={transition:null},N={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:L,ReactCurrentOwner:k};function O(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=i,t.PureComponent=b,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.act=O,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=h({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!E.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:o,ref:i,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=O,t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return R.current.useTransition()},t.version="18.3.1"},43:(e,t,n)=>{"use strict";e.exports=n(202)},579:(e,t,n)=>{"use strict";e.exports=n(153)},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,m=!1,h=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,x(e),!h)if(null!==r(u))h=!0,L(S);else{var t=r(c);null!==t&&N(w,t.startTime-e)}}function S(e,n){h=!1,g&&(g=!1,y(j),j=-1),m=!0;var o=p;try{for(x(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!z());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&a(u),x(n)}else a(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&N(w,d.startTime-n),s=!1}return s}finally{f=null,p=o,m=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,E=!1,C=null,j=-1,_=5,P=-1;function z(){return!(t.unstable_now()-P<_)}function T(){if(null!==C){var e=t.unstable_now();P=e;var n=!0;try{n=C(!0,e)}finally{n?k():(E=!1,C=null)}}else E=!1}if("function"===typeof b)k=function(){b(T)};else if("undefined"!==typeof MessageChannel){var $=new MessageChannel,R=$.port2;$.port1.onmessage=T,k=function(){R.postMessage(null)}}else k=function(){v(T,0)};function L(e){C=e,E||(E=!0,k())}function N(e,n){j=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,L(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(y(j),j=-1):g=!0,N(w,o-i))):(e.sortIndex=l,n(u,e),h||m||(h=!0,L(S))),e},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853:(e,t,n)=>{"use strict";e.exports=n(234)},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var u=o[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".ed3810f9.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="my-app:";n.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[a];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var i=n.p+n.u(t),l=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,o,i=r[0],l=r[1],s=r[2],u=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkmy_app=self.webpackChunkmy_app||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391),r=(n(358),"popstate");function a(){return d((function(e,t){let{pathname:n,search:r,hash:a}=e.location;return s("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:u(t)}),null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function o(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function i(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function l(e,t){return{usr:e.state,key:e.key,idx:t}}function s(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?c(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function u(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function c(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function d(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:i=document.defaultView,v5Compat:c=!1}=a,d=i.history,f="POP",p=null,m=h();function h(){return(d.state||{idx:null}).idx}function g(){f="POP";let e=h(),t=null==e?null:e-m;m=e,p&&p({action:f,location:y.location,delta:t})}function v(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:u(e);return n=n.replace(/ $/,"%20"),o(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==m&&(m=0,d.replaceState({...d.state,idx:m},""));let y={get action(){return f},get location(){return e(i,d)},listen(e){if(p)throw new Error("A history only accepts one active listener");return i.addEventListener(r,g),p=e,()=>{i.removeEventListener(r,g),p=null}},createHref:e=>t(i,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f="PUSH";let r=s(y.location,e,t);n&&n(r,e),m=h()+1;let a=l(r,m),o=y.createHref(r);try{d.pushState(a,"",o)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;i.location.assign(o)}c&&p&&p({action:f,location:y.location,delta:1})},replace:function(e,t){f="REPLACE";let r=s(y.location,e,t);n&&n(r,e),m=h();let a=l(r,m),o=y.createHref(r);d.replaceState(a,"",o),c&&p&&p({action:f,location:y.location,delta:0})},go:e=>d.go(e)};return y}function f(e,t){return p(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function p(e,t,n,r){let a=_(("string"===typeof t?c(t):t).pathname||"/",n);if(null==a)return null;let o=m(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=j(a);i=E(o[l],e,r)}return i}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=(e,a,i)=>{let l={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};l.relativePath.startsWith("/")&&(o(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let s=R([r,l.relativePath]),u=n.concat(l);e.children&&e.children.length>0&&(o(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),m(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:k(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of h(e.path))a(e,t,n);else a(e,t)})),t}function h(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=h(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}var g=/^:[\w-]+$/,v=3,y=2,b=1,x=10,w=-2,S=e=>"*"===e;function k(e,t){let n=e.split("/"),r=n.length;return n.some(S)&&(r+=w),t&&(r+=y),n.filter((e=>!S(e))).reduce(((e,t)=>e+(g.test(t)?v:""===t?b:x)),r)}function E(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),i.push({params:a,pathname:R([o,c.pathname]),pathnameBase:L(R([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=R([o,c.pathnameBase]))}return i}function C(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];i("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=s[n]||"";l=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const i=s[n];return e[r]=a&&!i?void 0:(i||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:l,pattern:e}}function j(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return i(!1,`The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function _(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function P(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function z(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function T(e){let t=z(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function $(e,t,n){let r,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=c(e):(r={...e},o(!r.pathname||!r.pathname.includes("?"),P("?","pathname","search",r)),o(!r.pathname||!r.pathname.includes("#"),P("#","pathname","hash",r)),o(!r.search||!r.search.includes("#"),P("#","search","hash",r)));let i,l=""===e||""===r.pathname,s=l?"/":r.pathname;if(null==s)i=n;else{let e=t.length-1;if(!a&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}i=e>=0?t[e]:"/"}let u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:a=""}="string"===typeof e?c(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:N(r),hash:O(a)}}(r,i),d=s&&"/"!==s&&s.endsWith("/"),f=(l||"."===s)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}var R=e=>e.join("/").replace(/\/\/+/g,"/"),L=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),N=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",O=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function A(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var D=["POST","PUT","PATCH","DELETE"],I=(new Set(D),["GET",...D]);new Set(I),Symbol("ResetLoaderData");var M=e.createContext(null);M.displayName="DataRouter";var F=e.createContext(null);F.displayName="DataRouterState";var U=e.createContext({isTransitioning:!1});U.displayName="ViewTransition";var B=e.createContext(new Map);B.displayName="Fetchers";var W=e.createContext(null);W.displayName="Await";var H=e.createContext(null);H.displayName="Navigation";var V=e.createContext(null);V.displayName="Location";var K=e.createContext({outlet:null,matches:[],isDataRoute:!1});K.displayName="Route";var Q=e.createContext(null);Q.displayName="RouteError";function Y(){return null!=e.useContext(V)}function G(){return o(Y(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(V).location}var q="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function X(t){e.useContext(H).static||e.useLayoutEffect(t)}function J(){let{isDataRoute:t}=e.useContext(K);return t?function(){let{router:t}=se("useNavigate"),n=ce("useNavigate"),r=e.useRef(!1);X((()=>{r.current=!0}));let a=e.useCallback((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(r.current,q),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...a}))}),[t,n]);return a}():function(){o(Y(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(M),{basename:n,navigator:r}=e.useContext(H),{matches:a}=e.useContext(K),{pathname:l}=G(),s=JSON.stringify(T(a)),u=e.useRef(!1);X((()=>{u.current=!0}));let c=e.useCallback((function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i(u.current,q),!u.current)return;if("number"===typeof e)return void r.go(e);let o=$(e,JSON.parse(s),l,"path"===a.relative);null==t&&"/"!==n&&(o.pathname="/"===o.pathname?n:R([n,o.pathname])),(a.replace?r.replace:r.push)(o,a.state,a)}),[n,r,s,l,t]);return c}()}e.createContext(null);function Z(){let{matches:t}=e.useContext(K),n=t[t.length-1];return n?n.params:{}}function ee(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(K),{pathname:a}=G(),o=JSON.stringify(T(r));return e.useMemo((()=>$(t,JSON.parse(o),a,"path"===n)),[t,o,a,n])}function te(t,n,r,a){o(Y(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=e.useContext(H),{matches:l}=e.useContext(K),s=l[l.length-1],u=s?s.params:{},d=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let p,m=G();if(n){let e="string"===typeof n?c(n):n;o("/"===d||e.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`),p=e}else p=m;let h=p.pathname||"/",g=h;if("/"!==d){let e=d.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(e.length).join("/")}let v=f(t,{pathname:g});let y=ie(v&&v.map((e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:R([d,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:R([d,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,r,a);return n&&y?e.createElement(V.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},y):y}function ne(){let t=de(),n=A(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},i=null;return e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:o},r):null,i)}var re=e.createElement(ne,null),ae=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(K.Provider,{value:this.props.routeContext},e.createElement(Q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function oe(t){let{routeContext:n,match:r,children:a}=t,o=e.useContext(M);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(K.Provider,{value:n},a)}function ie(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let a=t,i=r?.errors;if(null!=i){let e=a.findIndex((e=>e.route.id&&void 0!==i?.[e.route.id]));o(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,e+1))}let l=!1,s=-1;if(r)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:n}=r,o=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||o){l=!0,a=s>=0?a.slice(0,s+1):[a[0]];break}}}return a.reduceRight(((t,o,u)=>{let c,d=!1,f=null,p=null;r&&(c=i&&o.route.id?i[o.route.id]:void 0,f=o.route.errorElement||re,l&&(s<0&&0===u?(pe("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===u&&(d=!0,p=o.route.hydrateFallbackElement||null)));let m=n.concat(a.slice(0,u+1)),h=()=>{let n;return n=c?f:d?p:o.route.Component?e.createElement(o.route.Component,null):o.route.element?o.route.element:t,e.createElement(oe,{match:o,routeContext:{outlet:t,matches:m,isDataRoute:null!=r},children:n})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===u)?e.createElement(ae,{location:r.location,revalidation:r.revalidation,component:f,error:c,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()}),null)}function le(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function se(t){let n=e.useContext(M);return o(n,le(t)),n}function ue(t){let n=e.useContext(F);return o(n,le(t)),n}function ce(t){let n=function(t){let n=e.useContext(K);return o(n,le(t)),n}(t),r=n.matches[n.matches.length-1];return o(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function de(){let t=e.useContext(Q),n=ue("useRouteError"),r=ce("useRouteError");return void 0!==t?t:n.errors?.[r]}var fe={};function pe(e,t,n){t||fe[e]||(fe[e]=!0,i(!1,n))}e.memo((function(e){let{routes:t,future:n,state:r}=e;return te(t,void 0,r,n)}));function me(e){o(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function he(t){let{basename:n="/",children:r=null,location:a,navigationType:l="POP",navigator:s,static:u=!1}=t;o(!Y(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),f=e.useMemo((()=>({basename:d,navigator:s,static:u,future:{}})),[d,s,u]);"string"===typeof a&&(a=c(a));let{pathname:p="/",search:m="",hash:h="",state:g=null,key:v="default"}=a,y=e.useMemo((()=>{let e=_(p,d);return null==e?null:{location:{pathname:e,search:m,hash:h,state:g,key:v},navigationType:l}}),[d,p,m,h,g,v,l]);return i(null!=y,`<Router basename="${d}"> is not able to match the URL "${p}${m}${h}" because it does not start with the basename, so the <Router> won't render anything.`),null==y?null:e.createElement(H.Provider,{value:f},e.createElement(V.Provider,{children:r,value:y}))}function ge(e){let{children:t,location:n}=e;return te(ve(t),n)}e.Component;function ve(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,((t,a)=>{if(!e.isValidElement(t))return;let i=[...n,a];if(t.type===e.Fragment)return void r.push.apply(r,ve(t.props.children,i));o(t.type===me,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),o(!t.props.index||!t.props.children,"An index route cannot have child routes.");let l={id:t.props.id||i.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(l.children=ve(t.props.children,i)),r.push(l)})),r}var ye="get",be="application/x-www-form-urlencoded";function xe(e){return null!=e&&"string"===typeof e.tagName}function we(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new URLSearchParams("string"===typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map((e=>[n,e])):[[n,r]])}),[]))}var Se=null;var ke=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ee(e){return null==e||ke.has(e)?e:(i(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${be}"`),null)}function Ce(e,t){let n,r,a,o,i;if(xe(l=e)&&"form"===l.tagName.toLowerCase()){let i=e.getAttribute("action");r=i?_(i,t):null,n=e.getAttribute("method")||ye,a=Ee(e.getAttribute("enctype"))||be,o=new FormData(e)}else if(function(e){return xe(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return xe(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||i.getAttribute("action");if(r=l?_(l,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||ye,a=Ee(e.getAttribute("formenctype"))||Ee(i.getAttribute("enctype"))||be,o=new FormData(i,e),!function(){if(null===Se)try{new FormData(document.createElement("form"),0),Se=!1}catch(e){Se=!0}return Se}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,r)}}else{if(xe(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ye,r=null,a=be,i=e}var l;return o&&"text/plain"===a&&(i=o,o=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:o,body:i}}function je(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function _e(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Pe(e){return null!=e&&"string"===typeof e.page}function ze(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Te(e,t,n,r,a,o){let i=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter(((e,t)=>i(e,t)||l(e,t))):"data"===o?t.filter(((t,o)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(i(t,o)||l(t,o))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function $e(e){return[...new Set(e)]}function Re(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,a)=>{if(t&&!Pe(a)&&"script"===a.as&&a.href&&r.has(a.href))return e;let o=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(a));return n.has(o)||(n.add(o),e.push({key:o,link:a})),e}),[])}function Le(e){return{__html:e}}Symbol("SingleFetchRedirect");function Ne(e){let t="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===t.pathname?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}e.Component;function Oe(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let a,o=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(A(n))return e.createElement(Ae,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),o);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(Ae,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},a.stack),o)}function Ae(t){let{title:n,renderScripts:r,isOutsideRemixApp:a,children:o}=t,{routeModules:i}=Ue();return i.root?.Layout&&!a?o:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,r?e.createElement(Ye,null):null)))}function De(e){return!e}function Ie(){let t=e.useContext(M);return je(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Me(){let t=e.useContext(F);return je(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Fe=e.createContext(void 0);function Ue(){let t=e.useContext(Fe);return je(t,"You must render this element inside a <HydratedRouter> element"),t}function Be(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function We(e,t,n){if(n&&!Qe)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function He(t){let{page:n,...r}=t,{router:a}=Ie(),o=e.useMemo((()=>f(a.routes,n,a.basename)),[a.routes,n,a.basename]);return o?e.createElement(Ke,{page:n,matches:o,...r}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function Ve(t){let{manifest:n,routeModules:r}=Ue(),[a,o]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await _e(r,n);return e.links?e.links():[]}return[]})));return Re(r.flat(1).filter(ze).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,n,r).then((t=>{e||o(t)})),()=>{e=!0}}),[t,n,r]),a}function Ke(t){let{page:n,matches:r,...a}=t,o=G(),{manifest:i,routeModules:l}=Ue(),{loaderData:s,matches:u}=Me(),c=e.useMemo((()=>Te(n,r,u,i,o,"data")),[n,r,u,i,o]),d=e.useMemo((()=>Te(n,r,u,i,o,"assets")),[n,r,u,i,o]),f=e.useMemo((()=>{if(n===o.pathname+o.search+o.hash)return[];let e=new Set,t=!1;if(r.forEach((n=>{let r=i.routes[n.route.id];r&&r.hasLoader&&(!c.some((e=>e.route.id===n.route.id))&&n.route.id in s&&l[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let a=Ne(n);return t&&e.size>0&&a.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[a.pathname+a.search]}),[s,o,i,c,r,n,l]),p=e.useMemo((()=>function(e,t){return $e(e.map((e=>{let n=t.routes[e.route.id];if(!n)return[];let r=[n.module];return n.imports&&(r=r.concat(n.imports)),r})).flat(1))}(d,i)),[d,i]),m=Ve(d);return e.createElement(e.Fragment,null,f.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...a}))),p.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...a}))),m.map((t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})})))}Fe.displayName="FrameworkContext";var Qe=!1;function Ye(t){let{manifest:n,serverHandoffString:r,isSpaMode:a,renderMeta:o}=Ue(),{router:i,static:l,staticContext:s}=Ie(),{matches:u}=Me(),c=De(a);o&&(o.didRenderScripts=!0);let d=We(u,null,a);e.useEffect((()=>{0}),[]);let p=e.useMemo((()=>{let a=s?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=l?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${c?"":`import ${JSON.stringify(n.url)}`};\n${d.map(((e,t)=>`import * as route${t} from ${JSON.stringify(n.routes[e.route.id].module)};`)).join("\n")}\n  ${c?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let n=new Set(t.state.matches.map((e=>e.route.id))),r=t.state.location.pathname.split("/").filter(Boolean),a=["/"];for(r.pop();r.length>0;)a.push(`/${r.join("/")}`),r.pop();a.forEach((e=>{let r=f(t.routes,e,t.basename);r&&r.forEach((e=>n.add(e.route.id)))}));let o=[...n].reduce(((t,n)=>Object.assign(t,{[n]:e.routes[n]})),{});return{...e,routes:o}}(n,i),null,2)};`:""}\n  window.__reactRouterRouteModules = {${d.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Le(a),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Le(o),type:"module",async:!0}))}),[]),m=d.map((e=>{let t=n.routes[e.route.id];return t?(t.imports||[]).concat([t.module]):[]})).flat(1),h=Qe?[]:n.entry.imports.concat(m);return Qe?null:e.createElement(e.Fragment,null,c?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin}),[...new Set(g)].map((n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin}))),p);var g}function Ge(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var qe="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{qe&&(window.__reactRouterVersion="7.0.1")}catch(ls){}function Xe(t){let{basename:n,children:r,window:o}=t,i=e.useRef();null==i.current&&(i.current=a({window:o,v5Compat:!0}));let l=i.current,[s,u]=e.useState({action:l.action,location:l.location}),c=e.useCallback((t=>{e.startTransition((()=>u(t)))}),[u]);return e.useLayoutEffect((()=>l.listen(c)),[l,c]),e.createElement(he,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:l})}var Je=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ze=e.forwardRef((function(t,n){let r,{onClick:a,discover:l="render",prefetch:s="none",relative:c,reloadDocument:d,replace:f,state:p,target:m,to:h,preventScrollReset:g,viewTransition:v,...y}=t,{basename:b}=e.useContext(H),x="string"===typeof h&&Je.test(h),w=!1;if("string"===typeof h&&x&&(r=h,qe))try{let e=new URL(window.location.href),t=h.startsWith("//")?new URL(e.protocol+h):new URL(h),n=_(t.pathname,b);t.origin===e.origin&&null!=n?h=n+t.search+t.hash:w=!0}catch(ls){i(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let S=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(Y(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=e.useContext(H),{hash:i,pathname:l,search:s}=ee(t,{relative:n}),u=l;return"/"!==r&&(u="/"===l?r:R([r,l])),a.createHref({pathname:u,search:s,hash:i})}(h,{relative:c}),[k,E,C]=function(t,n){let r=e.useContext(Fe),[a,o]=e.useState(!1),[i,l]=e.useState(!1),{onFocus:s,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:f}=n,p=e.useRef(null);e.useEffect((()=>{if("render"===t&&l(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{l(e.isIntersecting)}))}),{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(a){let e=setTimeout((()=>{l(!0)}),100);return()=>{clearTimeout(e)}}}),[a]);let m=()=>{o(!0)},h=()=>{o(!1),l(!1)};return r?"intent"!==t?[i,p,{}]:[i,p,{onFocus:Be(s,m),onBlur:Be(u,h),onMouseEnter:Be(c,m),onMouseLeave:Be(d,h),onTouchStart:Be(f,m)}]:[!1,p,{}]}(s,y),j=function(t){let{target:n,replace:r,state:a,preventScrollReset:o,relative:i,viewTransition:l}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=J(),c=G(),d=ee(t,{relative:i});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:u(c)===u(d);s(t,{replace:n,state:a,preventScrollReset:o,relative:i,viewTransition:l})}}),[c,s,d,r,a,n,t,o,i,l])}(h,{replace:f,state:p,target:m,preventScrollReset:g,relative:c,viewTransition:v});let P=e.createElement("a",{...y,...C,href:r||S,onClick:w||d?a:function(e){a&&a(e),e.defaultPrevented||j(e)},ref:Ge(n,E),target:m,"data-discover":x||"render"!==l?void 0:"true"});return k&&!x?e.createElement(e.Fragment,null,P,e.createElement(He,{page:S})):P}));Ze.displayName="Link";var et=e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:i="",end:l=!1,style:s,to:u,viewTransition:c,children:d,...f}=t,p=ee(u,{relative:f.relative}),m=G(),h=e.useContext(F),{navigator:g,basename:v}=e.useContext(H),y=null!=h&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(U);o(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=rt("useViewTransitionState"),i=ee(t,{relative:n.relative});if(!r.isTransitioning)return!1;let l=_(r.currentLocation.pathname,a)||r.currentLocation.pathname,s=_(r.nextLocation.pathname,a)||r.nextLocation.pathname;return null!=C(i.pathname,s)||null!=C(i.pathname,l)}(p)&&!0===c,b=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,x=m.pathname,w=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;a||(x=x.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&v&&(w=_(w,v)||w);const S="/"!==b&&b.endsWith("/")?b.length-1:b.length;let k,E=x===b||!l&&x.startsWith(b)&&"/"===x.charAt(S),j=null!=w&&(w===b||!l&&w.startsWith(b)&&"/"===w.charAt(b.length)),P={isActive:E,isPending:j,isTransitioning:y},z=E?r:void 0;k="function"===typeof i?i(P):[i,E?"active":null,j?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let T="function"===typeof s?s(P):s;return e.createElement(Ze,{...f,"aria-current":z,className:k,ref:n,style:T,to:u,viewTransition:c},"function"===typeof d?d(P):d)}));et.displayName="NavLink";var tt=e.forwardRef(((t,n)=>{let{discover:r="render",fetcherKey:a,navigate:i,reloadDocument:l,replace:s,state:c,method:d=ye,action:f,onSubmit:p,relative:m,preventScrollReset:h,viewTransition:g,...v}=t,y=lt(),b=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(H),a=e.useContext(K);o(a,"useFormAction must be used inside a RouteContext");let[i]=a.matches.slice(-1),l={...ee(t||".",{relative:n})},s=G();if(null==t){l.search=s.search;let e=new URLSearchParams(l.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();l.search=n?`?${n}`:""}}t&&"."!==t||!i.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(l.pathname="/"===l.pathname?r:R([r,l.pathname]));return u(l)}(f,{relative:m}),x="get"===d.toLowerCase()?"get":"post",w="string"===typeof f&&Je.test(f);return e.createElement("form",{ref:n,method:x,action:b,onSubmit:l?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||d;y(t||e.currentTarget,{fetcherKey:a,method:n,navigate:i,replace:s,state:c,relative:m,preventScrollReset:h,viewTransition:g})},...v,"data-discover":w||"render"!==r?void 0:"true"})}));function nt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rt(t){let n=e.useContext(M);return o(n,nt(t)),n}function at(t){i("undefined"!==typeof URLSearchParams,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let n=e.useRef(we(t)),r=e.useRef(!1),a=G(),o=e.useMemo((()=>function(e,t){let n=we(e);return t&&t.forEach(((e,r)=>{n.has(r)||t.getAll(r).forEach((e=>{n.append(r,e)}))})),n}(a.search,r.current?null:n.current)),[a.search]),l=J(),s=e.useCallback(((e,t)=>{const n=we("function"===typeof e?e(o):e);r.current=!0,l("?"+n,t)}),[l,o]);return[o,s]}tt.displayName="Form";var ot=0,it=()=>`__${String(++ot)}__`;function lt(){let{router:t}=rt("useSubmit"),{basename:n}=e.useContext(H),r=ce("useRouteId");return e.useCallback((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:o,method:i,encType:l,formData:s,body:u}=Ce(e,n);if(!1===a.navigate){let e=a.fetcherKey||it();await t.fetch(e,r,a.action||o,{preventScrollReset:a.preventScrollReset,formData:s,body:u,formMethod:a.method||i,formEncType:a.encType||l,flushSync:a.flushSync})}else await t.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:s,body:u,formMethod:a.method||i,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})}),[t,n,r])}new TextEncoder;var st=function(){return st=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},st.apply(this,arguments)};Object.create;function ut(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var ct=n(324),dt=n.n(ct),ft="-ms-",pt="-moz-",mt="-webkit-",ht="comm",gt="rule",vt="decl",yt="@keyframes",bt=Math.abs,xt=String.fromCharCode,wt=Object.assign;function St(e){return e.trim()}function kt(e,t){return(e=t.exec(e))?e[0]:e}function Et(e,t,n){return e.replace(t,n)}function Ct(e,t,n){return e.indexOf(t,n)}function jt(e,t){return 0|e.charCodeAt(t)}function _t(e,t,n){return e.slice(t,n)}function Pt(e){return e.length}function zt(e){return e.length}function Tt(e,t){return t.push(e),e}function $t(e,t){return e.filter((function(e){return!kt(e,t)}))}var Rt=1,Lt=1,Nt=0,Ot=0,At=0,Dt="";function It(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:Rt,column:Lt,length:i,return:"",siblings:l}}function Mt(e,t){return wt(It("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ft(e){for(;e.root;)e=Mt(e.root,{children:[e]});Tt(e,e.siblings)}function Ut(){return At=Ot>0?jt(Dt,--Ot):0,Lt--,10===At&&(Lt=1,Rt--),At}function Bt(){return At=Ot<Nt?jt(Dt,Ot++):0,Lt++,10===At&&(Lt=1,Rt++),At}function Wt(){return jt(Dt,Ot)}function Ht(){return Ot}function Vt(e,t){return _t(Dt,e,t)}function Kt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Qt(e){return Rt=Lt=1,Nt=Pt(Dt=e),Ot=0,[]}function Yt(e){return Dt="",e}function Gt(e){return St(Vt(Ot-1,Jt(91===e?e+2:40===e?e+1:e)))}function qt(e){for(;(At=Wt())&&At<33;)Bt();return Kt(e)>2||Kt(At)>3?"":" "}function Xt(e,t){for(;--t&&Bt()&&!(At<48||At>102||At>57&&At<65||At>70&&At<97););return Vt(e,Ht()+(t<6&&32==Wt()&&32==Bt()))}function Jt(e){for(;Bt();)switch(At){case e:return Ot;case 34:case 39:34!==e&&39!==e&&Jt(At);break;case 40:41===e&&Jt(e);break;case 92:Bt()}return Ot}function Zt(e,t){for(;Bt()&&e+At!==57&&(e+At!==84||47!==Wt()););return"/*"+Vt(t,Ot-1)+"*"+xt(47===e?e:Bt())}function en(e){for(;!Kt(Wt());)Bt();return Vt(e,Ot)}function tn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function nn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case vt:return e.return=e.return||e.value;case ht:return"";case yt:return e.return=e.value+"{"+tn(e.children,r)+"}";case gt:if(!Pt(e.value=e.props.join(",")))return""}return Pt(n=tn(e.children,r))?e.return=e.value+"{"+n+"}":""}function rn(e,t,n){switch(function(e,t){return 45^jt(e,0)?(((t<<2^jt(e,0))<<2^jt(e,1))<<2^jt(e,2))<<2^jt(e,3):0}(e,t)){case 5103:return mt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return mt+e+e;case 4789:return pt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return mt+e+pt+e+ft+e+e;case 5936:switch(jt(e,t+11)){case 114:return mt+e+ft+Et(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return mt+e+ft+Et(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return mt+e+ft+Et(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return mt+e+ft+e+e;case 6165:return mt+e+ft+"flex-"+e+e;case 5187:return mt+e+Et(e,/(\w+).+(:[^]+)/,mt+"box-$1$2"+ft+"flex-$1$2")+e;case 5443:return mt+e+ft+"flex-item-"+Et(e,/flex-|-self/g,"")+(kt(e,/flex-|baseline/)?"":ft+"grid-row-"+Et(e,/flex-|-self/g,""))+e;case 4675:return mt+e+ft+"flex-line-pack"+Et(e,/align-content|flex-|-self/g,"")+e;case 5548:return mt+e+ft+Et(e,"shrink","negative")+e;case 5292:return mt+e+ft+Et(e,"basis","preferred-size")+e;case 6060:return mt+"box-"+Et(e,"-grow","")+mt+e+ft+Et(e,"grow","positive")+e;case 4554:return mt+Et(e,/([^-])(transform)/g,"$1"+mt+"$2")+e;case 6187:return Et(Et(Et(e,/(zoom-|grab)/,mt+"$1"),/(image-set)/,mt+"$1"),e,"")+e;case 5495:case 3959:return Et(e,/(image-set\([^]*)/,mt+"$1$`$1");case 4968:return Et(Et(e,/(.+:)(flex-)?(.*)/,mt+"box-pack:$3"+ft+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+mt+e+e;case 4200:if(!kt(e,/flex-|baseline/))return ft+"grid-column-align"+_t(e,t)+e;break;case 2592:case 3360:return ft+Et(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,kt(e.props,/grid-\w+-end/)}))?~Ct(e+(n=n[t].value),"span",0)?e:ft+Et(e,"-start","")+e+ft+"grid-row-span:"+(~Ct(n,"span",0)?kt(n,/\d+/):+kt(n,/\d+/)-+kt(e,/\d+/))+";":ft+Et(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return kt(e.props,/grid-\w+-start/)}))?e:ft+Et(Et(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Et(e,/(.+)-inline(.+)/,mt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pt(e)-1-t>6)switch(jt(e,t+1)){case 109:if(45!==jt(e,t+4))break;case 102:return Et(e,/(.+:)(.+)-([^]+)/,"$1"+mt+"$2-$3$1"+pt+(108==jt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ct(e,"stretch",0)?rn(Et(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Et(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,o,i,l){return ft+n+":"+r+l+(a?ft+n+"-span:"+(o?i:+i-+r)+l:"")+e}));case 4949:if(121===jt(e,t+6))return Et(e,":",":"+mt)+e;break;case 6444:switch(jt(e,45===jt(e,14)?18:11)){case 120:return Et(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+mt+(45===jt(e,14)?"inline-":"")+"box$3$1"+mt+"$2$3$1"+ft+"$2box$3")+e;case 100:return Et(e,":",":"+ft)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Et(e,"scroll-","scroll-snap-")+e}return e}function an(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case vt:return void(e.return=rn(e.value,e.length,n));case yt:return tn([Mt(e,{value:Et(e.value,"@","@"+mt)})],r);case gt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(kt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ft(Mt(e,{props:[Et(t,/:(read-\w+)/,":-moz-$1")]})),Ft(Mt(e,{props:[t]})),wt(e,{props:$t(n,r)});break;case"::placeholder":Ft(Mt(e,{props:[Et(t,/:(plac\w+)/,":"+mt+"input-$1")]})),Ft(Mt(e,{props:[Et(t,/:(plac\w+)/,":-moz-$1")]})),Ft(Mt(e,{props:[Et(t,/:(plac\w+)/,ft+"input-$1")]})),Ft(Mt(e,{props:[t]})),wt(e,{props:$t(n,r)})}return""}))}}function on(e){return Yt(ln("",null,null,null,[""],e=Qt(e),0,[0],e))}function ln(e,t,n,r,a,o,i,l,s){for(var u=0,c=0,d=i,f=0,p=0,m=0,h=1,g=1,v=1,y=0,b="",x=a,w=o,S=r,k=b;g;)switch(m=y,y=Bt()){case 40:if(108!=m&&58==jt(k,d-1)){-1!=Ct(k+=Et(Gt(y),"&","&\f"),"&\f",bt(u?l[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=Gt(y);break;case 9:case 10:case 13:case 32:k+=qt(m);break;case 92:k+=Xt(Ht()-1,7);continue;case 47:switch(Wt()){case 42:case 47:Tt(un(Zt(Bt(),Ht()),t,n,s),s);break;default:k+="/"}break;case 123*h:l[u++]=Pt(k)*v;case 125*h:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(k=Et(k,/\f/g,"")),p>0&&Pt(k)-d&&Tt(p>32?cn(k+";",r,n,d-1,s):cn(Et(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(Tt(S=sn(k,t,n,u,c,a,l,b,x=[],w=[],d,o),o),123===y)if(0===c)ln(k,t,S,S,x,o,d,l,w);else switch(99===f&&110===jt(k,3)?100:f){case 100:case 108:case 109:case 115:ln(e,S,S,r&&Tt(sn(e,S,S,0,0,a,l,b,a,x=[],d,w),w),a,w,d,l,r?x:w);break;default:ln(k,S,S,S,[""],w,0,l,w)}}u=c=p=0,h=v=1,b=k="",d=i;break;case 58:d=1+Pt(k),p=m;default:if(h<1)if(123==y)--h;else if(125==y&&0==h++&&125==Ut())continue;switch(k+=xt(y),y*h){case 38:v=c>0?1:(k+="\f",-1);break;case 44:l[u++]=(Pt(k)-1)*v,v=1;break;case 64:45===Wt()&&(k+=Gt(Bt())),f=Wt(),c=d=Pt(b=k+=en(Ht())),y++;break;case 45:45===m&&2==Pt(k)&&(h=0)}}return o}function sn(e,t,n,r,a,o,i,l,s,u,c,d){for(var f=a-1,p=0===a?o:[""],m=zt(p),h=0,g=0,v=0;h<r;++h)for(var y=0,b=_t(e,f+1,f=bt(g=i[h])),x=e;y<m;++y)(x=St(g>0?p[y]+" "+b:Et(b,/&\f/g,p[y])))&&(s[v++]=x);return It(e,t,n,0===a?gt:l,s,u,c,d)}function un(e,t,n,r){return It(e,t,n,ht,xt(At),_t(e,2,-2),0,r)}function cn(e,t,n,r,a){return It(e,t,n,vt,_t(e,0,r),_t(e,r+1,-1),r,a)}var dn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"",REACT_APP_USE_MOCKS:"false"}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"",REACT_APP_USE_MOCKS:"false"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"",REACT_APP_USE_MOCKS:"false"}.SC_ATTR)||"data-styled",pn="active",mn="data-styled-version",hn="6.1.13",gn="/*!sc*/\n",vn="undefined"!=typeof window&&"HTMLElement"in window,yn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"",REACT_APP_USE_MOCKS:"false"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"",REACT_APP_USE_MOCKS:"false"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"",REACT_APP_USE_MOCKS:"false"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"",REACT_APP_USE_MOCKS:"false"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"",REACT_APP_USE_MOCKS:"false"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"",REACT_APP_USE_MOCKS:"false"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"",REACT_APP_USE_MOCKS:"false"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"",REACT_APP_USE_MOCKS:"false"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"",REACT_APP_USE_MOCKS:"false"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"",REACT_APP_USE_MOCKS:"false"}.SC_DISABLE_SPEEDY)),bn=(new Set,Object.freeze([])),xn=Object.freeze({});function wn(e,t,n){return void 0===n&&(n=xn),e.theme!==n.theme&&e.theme||t||n.theme}var Sn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),kn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,En=/(^-|-$)/g;function Cn(e){return e.replace(kn,"-").replace(En,"")}var jn=/(a)(d)/gi,_n=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=_n(t%52)+n;return(_n(t%52)+n).replace(jn,"$1-$2")}var zn,Tn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},$n=function(e){return Tn(5381,e)};function Rn(e){return Pn($n(e)>>>0)}function Ln(e){return e.displayName||e.name||"Component"}function Nn(e){return"string"==typeof e&&!0}var On="function"==typeof Symbol&&Symbol.for,An=On?Symbol.for("react.memo"):60115,Dn=On?Symbol.for("react.forward_ref"):60112,In={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Mn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Un=((zn={})[Dn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zn[An]=Fn,zn);function Bn(e){return("type"in(t=e)&&t.type.$$typeof)===An?Fn:"$$typeof"in e?Un[e.$$typeof]:In;var t}var Wn=Object.defineProperty,Hn=Object.getOwnPropertyNames,Vn=Object.getOwnPropertySymbols,Kn=Object.getOwnPropertyDescriptor,Qn=Object.getPrototypeOf,Yn=Object.prototype;function Gn(e,t,n){if("string"!=typeof t){if(Yn){var r=Qn(t);r&&r!==Yn&&Gn(e,r,n)}var a=Hn(t);Vn&&(a=a.concat(Vn(t)));for(var o=Bn(e),i=Bn(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Mn||n&&n[s]||i&&s in i||o&&s in o)){var u=Kn(t,s);try{Wn(e,s,u)}catch(e){}}}}return e}function qn(e){return"function"==typeof e}function Xn(e){return"object"==typeof e&&"styledComponentId"in e}function Jn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function er(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function tr(e,t,n){if(void 0===n&&(n=!1),!n&&!er(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=tr(e[r],t[r]);else if(er(t))for(var r in t)e[r]=tr(e[r],t[r]);return e}function nr(e,t){Object.defineProperty(e,"toString",{value:t})}function rr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ar=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw rr(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(gn);return t},e}(),or=new Map,ir=new Map,lr=1,sr=function(e){if(or.has(e))return or.get(e);for(;ir.has(lr);)lr++;var t=lr++;return or.set(e,t),ir.set(t,e),t},ur=function(e,t){lr=t+1,or.set(e,t),ir.set(t,e)},cr="style[".concat(fn,"][").concat(mn,'="').concat(hn,'"]'),dr=new RegExp("^".concat(fn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),fr=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},pr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(gn),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(dr);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(ur(c,u),fr(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},mr=function(e){for(var t=document.querySelectorAll(cr),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(fn)!==pn&&(pr(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function hr(){return n.nc}var gr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(fn,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(fn,pn),r.setAttribute(mn,hn);var i=hr();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},vr=function(){function e(e){this.element=gr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw rr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),yr=function(){function e(e){this.element=gr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),br=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),xr=vn,wr={isServer:!vn,useCSSOMInjection:!yn},Sr=function(){function e(e,t,n){void 0===e&&(e=xn),void 0===t&&(t={});var r=this;this.options=st(st({},wr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&vn&&xr&&(xr=!1,mr(this)),nr(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return ir.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(n);if(void 0===o||!o.size||0===i.length)return"continue";var l="".concat(fn,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(gn)},o=0;o<n;o++)a(o);return r}(r)}))}return e.registerId=function(e){return sr(e)},e.prototype.rehydrate=function(){!this.server&&vn&&mr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(st(st({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new br(n):t?new vr(n):new yr(n)}(this.options),new ar(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(sr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(sr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(sr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),kr=/&/g,Er=/^\s*\/\/.*$/gm;function Cr(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Cr(e.children,t)),e}))}function jr(e){var t,n,r,a=void 0===e?xn:e,o=a.options,i=void 0===o?xn:o,l=a.plugins,s=void 0===l?bn:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===gt&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(kr,n).replace(r,u))})),i.prefix&&c.push(an),c.push(nn);var d=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(Er,""),u=on(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(u=Cr(u,i.namespace));var d,f=[];return tn(u,function(e){var t=zt(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||rr(15),Tn(e,t.name)}),5381).toString():"",d}var _r=new Sr,Pr=jr(),zr=e.createContext({shouldForwardProp:void 0,styleSheet:_r,stylis:Pr}),Tr=(zr.Consumer,e.createContext(void 0));function $r(){return(0,e.useContext)(zr)}function Rr(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],o=$r().styleSheet,i=(0,e.useMemo)((function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,o]),l=(0,e.useMemo)((function(){return jr({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){dt()(r,t.stylisPlugins)||a(t.stylisPlugins)}),[t.stylisPlugins]);var s=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:i,stylis:l}}),[t.shouldForwardProp,i,l]);return e.createElement(zr.Provider,{value:s},e.createElement(Tr.Provider,{value:l},t.children))}var Lr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Pr);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,nr(this,(function(){throw rr(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Pr),this.name+e.hash},e}(),Nr=function(e){return e>="A"&&e<="Z"};function Or(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Nr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ar=function(e){return null==e||!1===e||""===e},Dr=function(e){var t,n,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!Ar(o)&&(Array.isArray(o)&&o.isCss||qn(o)?r.push("".concat(Or(a),":"),o,";"):er(o)?r.push.apply(r,ut(ut(["".concat(a," {")],Dr(o),!1),["}"],!1)):r.push("".concat(Or(a),": ").concat((t=a,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in dn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ir(e,t,n,r){return Ar(e)?[]:Xn(e)?[".".concat(e.styledComponentId)]:qn(e)?!qn(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Ir(e(t),t,n,r):e instanceof Lr?n?(e.inject(n,r),[e.getName(r)]):[e]:er(e)?Dr(e):Array.isArray(e)?Array.prototype.concat.apply(bn,e.map((function(e){return Ir(e,t,n,r)}))):[e.toString()];var a}function Mr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(qn(n)&&!Xn(n))return!1}return!0}var Fr=$n(hn),Ur=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Mr(e),this.componentId=t,this.baseHash=Tn(Fr,t),this.baseStyle=n,Sr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Jn(r,this.staticRulesId);else{var a=Zn(Ir(this.rules,e,t,n)),o=Pn(Tn(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=Jn(r,o),this.staticRulesId=o}else{for(var l=Tn(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Zn(Ir(c,e,t,n));l=Tn(l,d+u),s+=d}}if(s){var f=Pn(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Jn(r,f)}}return r},e}(),Br=e.createContext(void 0);Br.Consumer;function Wr(t){var n=e.useContext(Br),r=(0,e.useMemo)((function(){return function(e,t){if(!e)throw rr(14);if(qn(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw rr(8);return t?st(st({},t),e):e}(t.theme,n)}),[t.theme,n]);return t.children?e.createElement(Br.Provider,{value:r},t.children):null}var Hr={};new Set;function Vr(t,n,r){var a=Xn(t),o=t,i=!Nn(t),l=n.attrs,s=void 0===l?bn:l,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Cn(e);Hr[n]=(Hr[n]||0)+1;var r="".concat(n,"-").concat(Rn(hn+n+Hr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,f=void 0===d?function(e){return Nn(e)?"styled.".concat(e):"Styled(".concat(Ln(e),")")}(t):d,p=n.displayName&&n.componentId?"".concat(Cn(n.displayName),"-").concat(n.componentId):n.componentId||c,m=a&&o.attrs?o.attrs.concat(s).filter(Boolean):s,h=n.shouldForwardProp;if(a&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;h=function(e,t){return g(e,t)&&v(e,t)}}else h=g}var y=new Ur(r,p,a?o.componentStyle:void 0);function b(t,n){return function(t,n,r){var a=t.attrs,o=t.componentStyle,i=t.defaultProps,l=t.foldedComponentIds,s=t.styledComponentId,u=t.target,c=e.useContext(Br),d=$r(),f=t.shouldForwardProp||d.shouldForwardProp,p=wn(n,c,i)||xn,m=function(e,t,n){for(var r,a=st(st({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=qn(r=e[o])?r(a):r;for(var l in i)a[l]="className"===l?Jn(a[l],i[l]):"style"===l?st(st({},a[l]),i[l]):i[l]}return t.className&&(a.className=Jn(a.className,t.className)),a}(a,n,p),h=m.as||u,g={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===p||("forwardedAs"===v?g.as=m.forwardedAs:f&&!f(v,h)||(g[v]=m[v]));var y=function(e,t){var n=$r();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,m),b=Jn(l,s);return y&&(b+=" "+y),m.className&&(b+=" "+m.className),g[Nn(h)&&!Sn.has(h)?"class":"className"]=b,g.ref=r,(0,e.createElement)(h,g)}(x,t,n)}b.displayName=f;var x=e.forwardRef(b);return x.attrs=m,x.componentStyle=y,x.displayName=f,x.shouldForwardProp=h,x.foldedComponentIds=a?Jn(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=p,x.target=a?o.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)tr(e,a[r],!0);return e}({},o.defaultProps,e):e}}),nr(x,(function(){return".".concat(x.styledComponentId)})),i&&Gn(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Kr(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Qr=function(e){return Object.assign(e,{isCss:!0})};function Yr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(qn(e)||er(e))return Qr(Ir(Kr(bn,ut([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ir(r):Qr(Ir(Kr(r,t)))}function Gr(e,t,n){if(void 0===n&&(n=xn),!t)throw rr(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,Yr.apply(void 0,ut([r],a,!1)))};return r.attrs=function(r){return Gr(e,t,st(st({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Gr(e,t,st(st({},n),r))},r}var qr=function(e){return Gr(Vr,e)},Xr=qr;Sn.forEach((function(e){Xr[e]=qr(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Mr(e),Sr.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var a=r(Zn(Ir(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Sr.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=hr(),r=Zn([n&&'nonce="'.concat(n,'"'),"".concat(fn,'="true"'),"".concat(mn,'="').concat(hn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw rr(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw rr(2);var r=t.instance.toString();if(!r)return[];var a=((n={})[fn]="",n[mn]=hn,n.dangerouslySetInnerHTML={__html:r},n),o=hr();return o&&(a.nonce=o),[e.createElement("style",st({},a,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Sr({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw rr(2);return e.createElement(Rr,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw rr(3)}})(),"__sc-".concat(fn,"__");const Jr={imagesize:{normal:{width:"1",height:"1"},wide:{width:"2",height:"1"},wider:{width:"3",height:"1"},high:{width:"1",height:"2"},higher:{width:"1",height:"3"},rectangle:{width:"2",height:"2"}}};var Zr=n(579);const ea=Xr.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
`,ta=e=>{let{children:t}=e;return(0,Zr.jsx)(ea,{children:(0,Zr.jsx)(Wr,{theme:Jr,children:(0,Zr.jsx)(Zr.Fragment,{children:t})})})},na={EN:{"nav.home":"Home","nav.tours":"Tours","nav.cooperation":"Cooperation","nav.contact":"Contact","nav.about":"About us","nav.back":"Back","nav.label":"Primary navigation","nav.footerLabel":"Footer navigation","nav.openMenu":"Open navigation menu","nav.closeMenu":"Close navigation menu","brand.tagline":"Travel blog","language.label":"Language","home.heroEyebrow":"Travel stories & guides","home.heroTitle":"Beyond the usual paths.","home.heroDescription":"Discover our journeys, explore new places and find inspiration for your next adventure.","home.exploreJourneys":"Explore our journeys","home.continentsTitle":"Explore by Continent","home.continentsDescription":"Discover stories and adventures from every corner of the world.","home.featuredTitle":"Featured Journeys","home.featuredDescription":"A few journeys worth remembering.","home.featuredLoading":"Loading journeys...","home.featuredError":"Featured journeys could not be loaded. Please try again later.","home.featuredEmpty":"No journeys are available yet.","home.mapTitle":"Explore Our World","home.mapDescription":"Every red dot marks a country we have explored. Choose a destination to discover its stories.","home.viewCountryPosts":"View stories","home.recentPosts":"Recent posts","home.recentPostsError":"Recent posts could not be loaded. Please try again later.","home.scrollRecentPosts":"Scroll to see more posts","home.scrollRecentPostsBack":"Scroll to see previous posts","home.aboutTitle":"The Story Behind Deer On Tour","home.aboutDescription":"We share the places we discover, the journeys we take and the stories that make every destination memorable.","home.aboutImageAlt":"A landscape from one of our journeys","home.aboutLink":"More about us","posts.countryTitle":"Posts from","posts.loading":"Loading posts...","posts.loadError":"Error loading posts:","posts.noCountry":"No country provided.","posts.none":"No posts found for this country.","tours.byContinents":"Our tours by continents:","tours.heroEyebrow":"Find your next journey","tours.heroDescription":"Explore destinations, discover our travel stories and find inspiration for your next adventure.","tours.discoverEyebrow":"Choose your destination","tours.continentsDescription":"Browse our journeys by continent and find stories from the places we have explored.","tours.storyCountOne":"story","tours.storyCountFew":"stories","tours.storyCount":"stories","tours.popularEyebrow":"Travel inspiration","tours.popularTitle":"Popular tours","tours.popularDescription":"Discover memorable journeys and get inspired for your own trip.","tours.days":"days","tours.noPopularTours":"No tours are available yet.","tours.plannerEyebrow":"Your next adventure","tours.plannerTitle":"Ready to plan your next journey?","tours.plannerDescription":"Get in touch with us and let us help you find inspiration for your next trip.","tours.plannerAction":"Get in touch","continent.africa":"Africa","continent.asia":"Asia","continent.europe":"Europe","continent.north america":"North America","continent.south america":"South America","continent.australia":"Australia","continent.oceania":"Oceania","continent.antarctica":"Antarctica","tours.chooseCountry":"Choose posts by country","tours.postsFrom":"Posts from","tours.noContinent":"No continent provided","tours.flag":"Flag of","tours.loading":"Loading tours...","tours.loadError":"Error loading tours:","tours.noCountries":"No countries found for this continent.","tours.noSelectedTours":"No tours found for the selected countries.","tours.noTours":"No tours found for this continent.","post.travelStory":"Travel story","post.by":"by","post.tripDetails":"Trip details","post.duration":"Duration","post.travelDates":"Travel dates","post.location":"Location","post.openPhoto":"Open photo","post.photoOf":"of","post.photoViewer":"Photo viewer","post.closePhoto":"Close photo viewer","post.nextPhoto":"Next photo","post.previousPhoto":"Previous photo","post.readMore":"Read more","post.readingTime":"8 min read","post.onThisPage":"On this page","post.loading":"Loading post...","post.loadError":"Error loading post:","post.notFound":"Post not found","post.noCountry":"No country provided","newsletter.title":"Stay updated - Subscribe!","newsletter.emailPlaceholder":"Your email address","newsletter.submit":"Inform me","page.about":"About us","page.contact":"Contact","page.cooperation":"Cooperation","map.vietnam":"Vietnam","map.vietnamDescription":"Coastal routes, lively cities and mountain landscapes.","map.iceland":"Iceland","map.icelandDescription":"Land of fire and ice."},PL:{"nav.home":"Strona g\u0142\xf3wna","nav.tours":"Wycieczki","nav.cooperation":"Wsp\xf3\u0142praca","nav.contact":"Kontakt","nav.about":"O nas","nav.back":"Wstecz","nav.label":"Nawigacja g\u0142\xf3wna","nav.footerLabel":"Nawigacja w stopce","nav.openMenu":"Otw\xf3rz menu nawigacyjne","nav.closeMenu":"Zamknij menu nawigacyjne","brand.tagline":"Blog podr\xf3\u017cniczy","language.label":"J\u0119zyk","home.heroEyebrow":"Historie i przewodniki podr\xf3\u017cnicze","home.heroTitle":"Poza utartym szlakiem.","home.heroDescription":"Poznaj nasze podr\xf3\u017ce, odkrywaj nowe miejsca i znajd\u017a inspiracj\u0119 na kolejn\u0105 przygod\u0119.","home.exploreJourneys":"Odkryj nasze podr\xf3\u017ce","home.continentsTitle":"Odkryj kontynenty","home.continentsDescription":"Poznaj historie i przygody z ka\u017cdego zak\u0105tka \u015bwiata.","home.featuredTitle":"Wybrane podr\xf3\u017ce","home.featuredDescription":"Kilka podr\xf3\u017cy, kt\xf3re warto zapami\u0119ta\u0107.","home.featuredLoading":"\u0141adowanie podr\xf3\u017cy...","home.featuredError":"Nie uda\u0142o si\u0119 wczyta\u0107 podr\xf3\u017cy. Spr\xf3buj ponownie p\xf3\u017aniej.","home.featuredEmpty":"Brak dost\u0119pnych podr\xf3\u017cy.","home.mapTitle":"Odkryj nasz \u015bwiat","home.mapDescription":"Ka\u017cda czerwona kropka oznacza kraj, kt\xf3ry odwiedzili\u015bmy. Wybierz miejsce i poznaj jego historie.","home.viewCountryPosts":"Zobacz historie","home.recentPosts":"Najnowsze wpisy","home.recentPostsError":"Nie uda\u0142o si\u0119 wczyta\u0107 najnowszych wpis\xf3w. Spr\xf3buj ponownie p\xf3\u017aniej.","home.scrollRecentPosts":"Przewi\u0144, aby zobaczy\u0107 wi\u0119cej wpis\xf3w","home.scrollRecentPostsBack":"Przewi\u0144, aby zobaczy\u0107 wcze\u015bniejsze wpisy","home.aboutTitle":"Historia Deer On Tour","home.aboutDescription":"Dzielimy si\u0119 odkrywanymi miejscami, odbytymi podr\xf3\u017cami i historiami, dzi\u0119ki kt\xf3rym ka\u017cdy cel staje si\u0119 wyj\u0105tkowy.","home.aboutImageAlt":"Krajobraz z jednej z naszych podr\xf3\u017cy","home.aboutLink":"Wi\u0119cej o nas","posts.countryTitle":"Wpisy z kraju:","posts.loading":"\u0141adowanie wpis\xf3w...","posts.loadError":"B\u0142\u0105d \u0142adowania wpis\xf3w:","posts.noCountry":"Nie podano kraju.","posts.none":"Nie znaleziono wpis\xf3w dla tego kraju.","tours.byContinents":"Nasze wycieczki wed\u0142ug kontynent\xf3w:","tours.heroEyebrow":"Znajd\u017a swoj\u0105 kolejn\u0105 podr\xf3\u017c","tours.heroDescription":"Odkrywaj miejsca, poznawaj nasze relacje z podr\xf3\u017cy i znajd\u017a inspiracj\u0119 na kolejn\u0105 przygod\u0119.","tours.discoverEyebrow":"Wybierz kierunek","tours.continentsDescription":"Przegl\u0105daj nasze podr\xf3\u017ce wed\u0142ug kontynent\xf3w i poznawaj historie z odwiedzonych miejsc.","tours.storyCountOne":"historia","tours.storyCountFew":"historie","tours.storyCount":"historii","tours.popularEyebrow":"Inspiracje podr\xf3\u017cnicze","tours.popularTitle":"Popularne podr\xf3\u017ce","tours.popularDescription":"Odkryj wyj\u0105tkowe wyprawy i znajd\u017a inspiracj\u0119 na w\u0142asn\u0105 podr\xf3\u017c.","tours.days":"dni","tours.noPopularTours":"Brak dost\u0119pnych podr\xf3\u017cy.","tours.plannerEyebrow":"Twoja kolejna przygoda","tours.plannerTitle":"Czas zaplanowa\u0107 kolejn\u0105 podr\xf3\u017c?","tours.plannerDescription":"Skontaktuj si\u0119 z nami i znajd\u017a inspiracj\u0119 na swoj\u0105 nast\u0119pn\u0105 wypraw\u0119.","tours.plannerAction":"Napisz do nas","continent.africa":"Afryka","continent.asia":"Azja","continent.europe":"Europa","continent.north america":"Ameryka P\xf3\u0142nocna","continent.south america":"Ameryka Po\u0142udniowa","continent.australia":"Australia","continent.oceania":"Oceania","continent.antarctica":"Antarktyda","tours.chooseCountry":"Wybierz wpisy wed\u0142ug kraju","tours.postsFrom":"Wpisy z kontynentu:","tours.noContinent":"Nie podano kontynentu","tours.flag":"Flaga:","tours.loading":"\u0141adowanie wycieczek...","tours.loadError":"B\u0142\u0105d \u0142adowania wycieczek:","tours.noCountries":"Nie znaleziono kraj\xf3w na tym kontynencie.","tours.noSelectedTours":"Nie znaleziono wycieczek dla wybranych kraj\xf3w.","tours.noTours":"Nie znaleziono wycieczek na tym kontynencie.","post.travelStory":"Relacja z podr\xf3\u017cy","post.by":"autor:","post.tripDetails":"Szczeg\xf3\u0142y podr\xf3\u017cy","post.duration":"Czas trwania","post.travelDates":"Termin podr\xf3\u017cy","post.location":"Lokalizacja","post.openPhoto":"Otw\xf3rz zdj\u0119cie","post.photoOf":"z","post.photoViewer":"Przegl\u0105darka zdj\u0119\u0107","post.closePhoto":"Zamknij przegl\u0105dark\u0119 zdj\u0119\u0107","post.nextPhoto":"Nast\u0119pne zdj\u0119cie","post.previousPhoto":"Poprzednie zdj\u0119cie","post.readMore":"Czytaj dalej","post.readingTime":"8 min czytania","post.onThisPage":"Na tej stronie","post.loading":"\u0141adowanie wpisu...","post.loadError":"B\u0142\u0105d \u0142adowania wpisu:","post.notFound":"Nie znaleziono wpisu","post.noCountry":"Nie podano kraju","newsletter.title":"B\u0105d\u017a na bie\u017c\u0105co - zapisz si\u0119!","newsletter.emailPlaceholder":"Tw\xf3j e-mail...","newsletter.submit":"Zapisz mnie","page.about":"O nas","page.contact":"Kontakt","page.cooperation":"Wsp\xf3\u0142praca","map.vietnam":"Wietnam","map.vietnamDescription":"Nadmorskie trasy, t\u0119tni\u0105ce \u017cyciem miasta i g\xf3rskie krajobrazy.","map.iceland":"Islandia","map.icelandDescription":"Kraina ognia i lodu."}},ra={africa:"continent.africa",asia:"continent.asia",europe:"continent.europe","north america":"continent.north america","south america":"continent.south america",australia:"continent.australia",antarctica:"continent.antarctica"},aa=(0,e.createContext)(null),oa=()=>{try{return"PL"===window.localStorage.getItem("app-language")?"PL":"EN"}catch{return"EN"}},ia=t=>{let{children:n}=t;const[r,a]=(0,e.useState)(oa);(0,e.useEffect)((()=>{document.documentElement.lang=r.toLowerCase()}),[r]);const o={language:r,setLanguage:e=>{a(e);try{window.localStorage.setItem("app-language",e)}catch{}},t:e=>na[r][e]};return(0,Zr.jsx)(aa.Provider,{value:o,children:n})},la=()=>{const t=(0,e.useContext)(aa);if(!t)throw new Error("useI18n must be used within an I18nProvider");return t},sa=Xr.div`
  * {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  text-decoration: none;
`,ua=Xr.div`
  /* border: 2px solid red; */
  /* display: block; */
  width: ${e=>{let{$large:t}=e;return t?"10rem":"7rem"}};
  height: ${e=>{let{$large:t}=e;return t?"15rem":"9rem"}};
  background-image: url('/assets/logoDeer.png');
  background-size: contain;
  background-repeat: no-repeat;
  filter: ${e=>{let{$light:t}=e;return t?"brightness(0) invert(1)":"none"}};
  transition: filter 300ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  /* @media (max-width: 768px) {
    width: 26vw;
  } */
`,ca=Xr.div`
  width: 15vw;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  @media (max-width: 768px) {
    width: 46vw;
    /* border: 2px solid red; */
  }
  @media (max-width: 480px) {
  }
  `,da=Xr.div`
  /* width: 10vw; */
  font-family: 'underground', sans-serif;
  color: ${e=>{let{$light:t}=e;return t?"#fff":"#23251a"}};
  font-size: 1.9rem;
  letter-spacing: 0.1rem;
  transition: color 300ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
  /* border: 2px solid blue; */
  @media (max-width: 768px) {
    font-size: 2.4rem;
    /* border: 2px solid red; */
  }
  `,fa=Xr.div`
  font-family:
  apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
  'Helvetica Neue', sans-serif;
  font-size: 1rem;
  color: ${e=>{let{$light:t}=e;return t?"#fff":"#23251a"}};
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  font-weight: 100;
  transition: color 300ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
  /* transform: scaleX(1.1);
  transform-origin: left; */
`,pa=e=>{let{large:t,light:n=!1,lightText:r=n}=e;const{t:a}=la();return(0,Zr.jsx)(sa,{children:(0,Zr.jsxs)(Ze,{to:"/",children:[(0,Zr.jsx)(ua,{$large:t,$light:n}),(0,Zr.jsxs)(ca,{children:[(0,Zr.jsx)(da,{$light:r,children:"Deer On Tour"}),(0,Zr.jsx)(fa,{$light:r,children:a("brand.tagline")})]})]},"1")})},ma=Xr.header`
  position: fixed;
  inset: ${e=>{let{$isScrolled:t}=e;return t?"0.75rem 1.25rem auto":"0 0 auto"}};
  z-index: 1002;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${e=>{let{$isScrolled:t}=e;return t?"calc(100% - 2.5rem)":"100%"}};
  height: ${e=>{let{$isScrolled:t}=e;return t?"5.5rem":"6.75rem"}};
  border-radius: ${e=>{let{$isScrolled:t}=e;return t?"50px":"0"}};
  padding: 0 clamp(1.25rem, 5vw, 5rem);
  background-color: ${e=>{let{$isHome:t,$isScrolled:n,$mobileMenuOpen:r}=e;return r?"rgba(248, 247, 243, 0.98)":t&&!n?"transparent":n?"rgba(250, 249, 246, 0.58)":"#fff"}};
  color: ${e=>{let{$isHome:t,$isScrolled:n,$mobileMenuOpen:r}=e;return!t||n||r?"#262720":"#fff"}};
  backdrop-filter: ${e=>{let{$isScrolled:t}=e;return t?"blur(18px) saturate(180%)":"none"}};
  -webkit-backdrop-filter: ${e=>{let{$isScrolled:t}=e;return t?"blur(18px) saturate(180%)":"none"}};
  box-shadow: ${e=>{let{$isScrolled:t}=e;return t?"0 8px 28px rgba(35, 37, 26, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.65)":"none"}};
  border-bottom: ${e=>{let{$isScrolled:t}=e;return t?"1px solid rgba(255, 255, 255, 0.35)":"1px solid transparent"}};
  isolation: isolate;
  font-family: 'Montserrat', sans-serif;
  transition:
    inset 300ms ease,
    width 300ms ease,
    height 300ms ease,
    border-radius 300ms ease,
    background-color 300ms ease,
    color 300ms ease,
    box-shadow 300ms ease,
    backdrop-filter 300ms ease,
    -webkit-backdrop-filter 300ms ease;

  &::before {
    position: absolute;
    z-index: 0;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(180deg, rgba(5, 8, 7, 0.78) 0%, rgba(5, 8, 7, 0.36) 68%, rgba(5, 8, 7, 0) 100%);
    content: '';
    opacity: ${e=>{let{$isHome:t,$isScrolled:n,$mobileMenuOpen:r}=e;return!t||n||r?0:1}};
    pointer-events: none;
    transition: opacity 300ms ease;
  }

  @media (max-width: 1024px) {
    inset: ${e=>{let{$isScrolled:t}=e;return t?"0.5rem 0.5rem auto":"0 0 auto"}};
    width: ${e=>{let{$isScrolled:t}=e;return t?"calc(100% - 1rem)":"100%"}};
    height: ${e=>{let{$isScrolled:t}=e;return t?"4.25rem":"5rem"}};
    min-height: 0;
    flex-wrap: nowrap;
    padding: 0 clamp(0.75rem, 3vw, 1.5rem);
  }

  @media (min-width: 1025px) and (max-width: 1100px) {
    padding-inline: 2rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::before {
      transition: none;
    }
  }
`,ha=Xr.div`
  flex: 0 0 ${e=>{let{$isHome:t}=e;return t?"0":"6.75rem"}};
  height: ${e=>{let{$isHome:t}=e;return t?"0":"6.75rem"}};

  @media (max-width: 1024px) {
    flex-basis: ${e=>{let{$isHome:t}=e;return t?"0":"5rem"}};
    height: ${e=>{let{$isHome:t}=e;return t?"0":"5rem"}};
  }
`,ga=Xr.div`
  position: relative;
  z-index: 1003;
  flex: 0 0 auto;

  & > div > a {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    color: inherit;
  }

  & > div > a > div:first-child {
    width: 3.25rem;
    height: 3.5rem;
  }

  & > div > a > div:last-child {
    width: auto;
  }

  @media (max-width: 600px) {
    & > div > a > div:first-child {
      width: 2.7rem;
      height: 3rem;
    }

    & > div > a > div:last-child > div:first-child {
      font-size: 1.05rem;
    }

    & > div > a > div:last-child > div:last-child {
      font-size: 0.48rem;
    }
  }

  @media (max-width: 1024px) {
    ${e=>{let{$post:t}=e;return t&&"\n      position: absolute;\n      left: 50%;\n      transform: translateX(-50%);\n\n      & > div > a > div:first-child {\n        width: 2rem;\n        height: 2.5rem;\n      }\n\n      & > div > a > div:last-child {\n        width: 7.5rem;\n      }\n\n      & > div > a > div:last-child > div:first-child {\n        font-size: 0.82rem;\n      }\n\n      & > div > a > div:last-child > div:last-child {\n        font-size: 0.38rem;\n        letter-spacing: 0.22rem;\n      }\n    "}}
  }
`,va=Xr(Ze)`
  display: none;

  @media (max-width: 1024px) {
    display: inline-flex;
    position: relative;
    z-index: 1003;
    align-items: center;
    gap: 0.35rem;
    min-height: 44px;
    color: inherit;
    font-size: 0.75rem;
    text-decoration: none;

    &::before {
      content: '←';
      font-size: 1.2rem;
    }

    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 3px;
    }
  }
`,ya=Xr.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(2rem, 3vw, 2.75rem);
  position: relative;
  z-index: 1001;

  @media (max-width: 1024px) {
    position: fixed;
    inset: 0;
    z-index: 1001;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    padding: 6rem 1.5rem 3rem;
    overflow-x: hidden;
    overflow-y: auto;
    background: rgba(248, 247, 243, 0.98);
    color: #262720;
    opacity: ${e=>{let{$mobileMenuOpen:t}=e;return t?1:0}};
    visibility: ${e=>{let{$mobileMenuOpen:t}=e;return t?"visible":"hidden"}};
    pointer-events: ${e=>{let{$mobileMenuOpen:t}=e;return t?"auto":"none"}};
    transform: ${e=>{let{$mobileMenuOpen:t}=e;return t?"translateY(0)":"translateY(-0.5rem)"}};
    transition:
      opacity 280ms ease,
      transform 280ms ease,
      visibility 0s linear ${e=>{let{$mobileMenuOpen:t}=e;return t?"0ms":"280ms"}};
  }

  @media (max-width: 600px) {
    gap: 1.5rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,ba=Xr(et)`
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0.35rem 0;
  color: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  &::after {
    position: absolute;
    right: 0;
    bottom: 0.25rem;
    left: 0;
    height: 1px;
    background: currentColor;
    content: '';
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 280ms ease;
  }

  &:hover::after,
  &[aria-current='page']::after {
    transform: scaleX(1);
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 5px;
  }

  @media (max-width: 1024px) {
    min-height: 48px;
    font-size: clamp(1.25rem, 4vw, 1.75rem);
    letter-spacing: 0.1em;
  }

  @media (max-width: 600px) {
    min-height: 48px;
    font-size: clamp(1.2rem, 5vw, 1.6rem);
    letter-spacing: 0.08em;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }
`,xa=Xr.div`
  position: relative;
  margin-left: 0.3rem;

  @media (max-width: 1024px) {
    margin: 0;
  }
`,wa=Xr.button`
  position: relative;
  z-index: 1003;
  display: none;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: inline-flex;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`,Sa=Xr.span`
  position: relative;
  display: block;
  width: 21px;
  height: 1px;
  background: ${e=>{let{$isOpen:t}=e;return t?"transparent":"currentColor"}};
  transition: background-color 250ms ease;

  &::before,
  &::after {
    position: absolute;
    left: 0;
    width: 21px;
    height: 1px;
    background: currentColor;
    content: '';
    transition: transform 250ms ease;
  }

  &::before {
    transform: ${e=>{let{$isOpen:t}=e;return t?"translateY(0) rotate(45deg)":"translateY(-6px)"}};
  }

  &::after {
    transform: ${e=>{let{$isOpen:t}=e;return t?"translateY(0) rotate(-45deg)":"translateY(6px)"}};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::before,
    &::after {
      transition: none;
    }
  }
`,ka=Xr.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 44px;
  min-height: 44px;
  padding: 0.4rem 0.55rem;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  cursor: pointer;

  &::after {
    width: 0.38rem;
    height: 0.38rem;
    border-right: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
    content: '';
    transform: rotate(45deg) translateY(-0.1rem);
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`,Ea=Xr.div`
  position: absolute;
  top: calc(100% + 0.35rem);
  right: 0;
  z-index: 1004;
  display: ${e=>{let{$isOpen:t}=e;return t?"grid":"none"}};
  min-width: 5rem;
  padding: 0.35rem;
  border: 1px solid rgba(38, 39, 32, 0.08);
  background: #f8f7f3;
  box-shadow: 0 8px 24px rgba(35, 37, 26, 0.12);
  color: #262720;

  @media (max-width: 1024px) {
    right: 50%;
    transform: translateX(50%);
  }
`,Ca=Xr.button`
  min-height: 44px;
  padding: 0.65rem 1rem;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-align: center;
  cursor: pointer;

  &[aria-selected='true'],
  &:hover {
    background: rgba(38, 39, 32, 0.07);
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: -2px;
  }
`,ja=[{label:"nav.home",path:"/",end:!0},{label:"nav.tours",path:"/tours"},{label:"nav.cooperation",path:"/cooperation",end:!0},{label:"nav.contact",path:"/contact",end:!0},{label:"nav.about",path:"/about-us",end:!0}],_a=()=>{const{language:t,setLanguage:n,t:r}=la(),[a,o]=(0,e.useState)(!1),i=(0,e.useRef)(null),l=(0,e.useRef)(null);(0,e.useEffect)((()=>{if(!a)return;const e=e=>{var t;e.target instanceof Node&&(null===(t=i.current)||void 0===t||!t.contains(e.target))&&o(!1)},t=e=>{var t;"Escape"===e.key&&(o(!1),null===(t=l.current)||void 0===t||t.focus())};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",t)}}),[a]);return(0,Zr.jsxs)(xa,{ref:i,children:[(0,Zr.jsx)(ka,{ref:l,type:"button","aria-label":r("language.label"),"aria-expanded":a,"aria-controls":"language-options",onClick:()=>o((e=>!e)),children:t}),(0,Zr.jsx)(Ea,{id:"language-options",role:"group","aria-label":r("language.label"),"aria-hidden":!a,$isOpen:a,children:["EN","PL"].map((e=>(0,Zr.jsx)(Ca,{type:"button","aria-pressed":t===e,tabIndex:a?0:-1,onClick:()=>(n(e),void o(!1)),children:e},e)))})]})},Pa=()=>{const{t:t}=la(),n=G(),[r,a]=(0,e.useState)(!1),[o,i]=(0,e.useState)((()=>window.scrollY>80)),l=(0,e.useRef)(null),s="/"===n.pathname,u=n.pathname.startsWith("/tours/details/"),c=o;return(0,e.useEffect)((()=>{const e=()=>i(window.scrollY>80);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)}),[]),(0,e.useEffect)((()=>{var e;if(!r)return;const t=document.body.style.overflow;document.body.style.overflow="hidden",null===(e=document.querySelector("#primary-navigation a"))||void 0===e||e.focus();const n=e=>{if("Escape"===e.key){var t;const e=document.getElementById("language-options");if("false"===(null===e||void 0===e?void 0:e.getAttribute("aria-hidden")))return;return a(!1),void(null===(t=l.current)||void 0===t||t.focus())}if("Tab"===e.key){const t=document.getElementById("primary-navigation"),n=null===t||void 0===t?void 0:t.querySelectorAll('a[href], button:not([disabled]):not([tabindex="-1"])'),r=null===n||void 0===n?void 0:n[0],a=null===n||void 0===n?void 0:n[n.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),null===a||void 0===a||a.focus()):e.shiftKey||document.activeElement!==a||(e.preventDefault(),null===r||void 0===r||r.focus())}};return document.addEventListener("keydown",n),()=>{document.body.style.overflow=t,document.removeEventListener("keydown",n)}}),[r]),(0,e.useEffect)((()=>{a(!1)}),[n.pathname]),(0,Zr.jsxs)(Zr.Fragment,{children:[(0,Zr.jsxs)(ma,{$isHome:s,$isScrolled:c,$mobileMenuOpen:r,children:[u&&(0,Zr.jsx)(va,{to:"/tours",children:t("nav.back")}),(0,Zr.jsx)(ga,{$post:u,children:(0,Zr.jsx)(pa,{large:!1,light:!1,lightText:s&&!c&&!r})}),(0,Zr.jsxs)(ya,{id:"primary-navigation","aria-label":t("nav.label"),$mobileMenuOpen:r,children:[ja.map((e=>(0,Zr.jsx)(ba,{to:e.path,end:e.end,onClick:()=>a(!1),children:t(e.label)},e.path))),(0,Zr.jsx)(_a,{})]}),(0,Zr.jsx)(wa,{ref:l,type:"button","aria-label":t(r?"nav.closeMenu":"nav.openMenu"),"aria-expanded":r,"aria-controls":"primary-navigation",onClick:()=>a((e=>!e)),children:(0,Zr.jsx)(Sa,{$isOpen:r,"aria-hidden":"true"})})]}),(0,Zr.jsx)(ha,{$isHome:s,"aria-hidden":"true"})]})},za=Xr.button`
  max-width: 10rem;
  display: inline-block;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.5);
  color: #000;
  color: #4e4d47;

  font-weight: 500;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', Roboto, Arial, sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1024px) {
    padding: 4px 12px;
    max-width: 30vw;
    white-space: nowrap;
    font-size: 0.7rem;
  }
`,Ta=()=>{const{t:e}=la();return(0,Zr.jsx)(za,{children:e("newsletter.submit")})},$a=Xr.input`
  padding: 12px 20px;
  width: 100%;
  max-width: 360px;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', Roboto, Arial, sans-serif;
  
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  color: #000;
  
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  
  outline: none;
  transition: all 0.2s ease-in-out;
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  
  &:focus {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.6);
  }
  
  @media (max-width: 1024px) {
    padding: 8px 16px;
    max-width: 50vw;
    font-size: 0.7rem;
  }
`,Ra=()=>{const{t:e}=la();return(0,Zr.jsx)($a,{placeholder:e("newsletter.emailPlaceholder")})},La=Xr.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-self: center; */
  & > span {
    color: #d4d1ba;
    padding: 1rem 0;
  }

  @media (max-width: 1024px) {
    /* width: 100%; */
    /* max-width: 50vw; */
    & > span {
      font-size: 0.8rem;
      padding-top: 1rem;
      padding-bottom: 0.3rem;
    }
  }
`,Na=Xr.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 20vw;

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: row;
    gap: 0.4rem;
    /* width: 50vw; */
  }
`,Oa=e=>{let{title:t,date:n}=e;const{t:r}=la();return(0,Zr.jsxs)(La,{children:[(0,Zr.jsx)("span",{children:r("newsletter.title")}),(0,Zr.jsxs)(Na,{children:[(0,Zr.jsx)(Ra,{}),(0,Zr.jsx)(Ta,{})]})]})},Aa=Xr.footer`
  padding: clamp(3.5rem, 6vw, 5.25rem) clamp(1.25rem, 5.5vw, 5rem) 3.5rem;
  border-top: 1px solid rgba(38, 39, 32, 0.1);
  background: #f1f0eb;
  color: #33342d;

  @media (max-width: 600px) {
    padding: 1.5rem 1.25rem 1.25rem;
  }
`,Da=Xr.div`
  display: grid;
  width: min(100%, 1440px);
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr) minmax(18rem, 1.15fr);
  align-items: start;
  column-gap: clamp(2rem, 5vw, 5rem);
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
    row-gap: 1.25rem;

    & > :nth-child(1) {
      grid-column: 1;
      grid-row: 1;
    }

    & > :nth-child(2) {
      grid-column: 1;
      grid-row: 2;
    }

    & > :nth-child(3) {
      grid-column: 2;
      grid-row: 1 / span 2;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 0.5rem;

    & > :nth-child(n) {
      grid-column: 1;
      grid-row: auto;
    }

    & > :nth-child(1) {
      grid-row: 1;
    }

    & > :nth-child(2) {
      grid-row: 2;
    }

    & > :nth-child(3) {
      grid-row: 3;
    }
  }
`,Ia=Xr.div`
  min-width: 0;

  & > div > a {
    justify-content: flex-start;
    gap: 0.25rem;
  }

  & > div > a > div:first-child {
    width: 3.2rem;
    height: 4rem;
    flex-shrink: 0;
  }

  & > div > a > div:last-child {
    width: auto;
    min-width: 0;
    align-items: flex-start;
  }

  & > div > a > div:last-child > div:first-child {
    font-size: clamp(1.05rem, 1.5vw, 1.4rem);
    letter-spacing: 0.04rem;
    white-space: nowrap;
  }

  & > div > a > div:last-child > div:last-child {
    font-size: 0.55rem;
    letter-spacing: 0.2rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;

    & > div > a {
      justify-content: center;
    }

    & > div > a > div:first-child {
      width: 2.45rem;
      height: 3rem;
    }

    & > div > a > div:last-child > div:first-child {
      font-size: 1rem;
    }

    & > div > a > div:last-child > div:last-child {
      font-size: 0.45rem;
      letter-spacing: 0.17rem;
    }
  }
`,Ma=Xr.nav`
  display: grid;
  justify-items: start;
  align-content: start;

  a {
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    color: #5b5b54;
    font-size: 0.86rem;
    text-decoration: none;
    transition: color 180ms ease;
  }

  a:hover {
    color: #9c3d32;
  }

  a:focus-visible {
    outline: 2px solid #9c3d32;
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    a {
      transition: none;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.15rem 0.7rem;

    a {
      min-height: 32px;
      font-size: 0.76rem;
    }
  }
`,Fa=Xr.div`
  width: 100%;
  max-width: 27rem;
  justify-self: end;

  & > div {
    width: 100%;
  }

  & span {
    color: #484941;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.67rem;
    font-weight: 600;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  form {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
  }

  form > input {
    min-width: 0;
    max-width: none;
    width: 100%;
    min-height: 44px;
    flex: 1 1 100%;
    padding: 0.7rem 3.25rem 0.7rem 0.9rem;
    border: 1px solid #d5d3ca;
    border-radius: 999px;
    background: transparent;
    box-shadow: none;
    color: #33342d;
    font-size: 0.8rem;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  form > input:focus {
    border-color: #77776f;
    background: #f7f6f1;
    box-shadow: 0 0 0 2px rgba(119, 119, 111, 0.12);
  }

  form > button {
    position: absolute;
    top: 50%;
    right: 0.35rem;
    display: flex;
    justify-content: center;
    /* scale: 1.2; */
    width: 2rem;
    height: 2rem;
    place-items: center;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: transparent;
    box-shadow: none;
    color: #42433d;
    font-size: 0;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    cursor: pointer;
    transform: translateY(-50%);
  }

  form > button::after {
    content: '→';
    font-size: 1.15rem;
    line-height: 1;
  }

  form > button:hover {
    background: rgba(38, 39, 32, 0.06);
    box-shadow: none;
    color: #9c3d32;
  }

  form > button:focus-visible {
    outline: 2px solid #9c3d32;
    outline-offset: 1px;
  }

  @media (max-width: 1024px) {
    justify-self: stretch;

    form > input {
      max-width: none;
    }

  }

  @media (max-width: 600px) {
    max-width: none;
    text-align: center;

    & > div > span {
      display: block;
      padding: 0.35rem 0 0.5rem;
    }

    form > input {
      min-height: 40px;
      padding: 0.6rem 3rem 0.6rem 0.8rem;
      font-size: 0.78rem;
    }

    form > button {
      right: 0.25rem;
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`,Ua=[{label:"nav.home",path:"/",end:!0},{label:"nav.tours",path:"/tours"},{label:"nav.cooperation",path:"/cooperation",end:!0},{label:"nav.contact",path:"/contact",end:!0},{label:"nav.about",path:"/about-us",end:!0}],Ba=()=>{const{t:e}=la();return(0,Zr.jsx)(Aa,{children:(0,Zr.jsxs)(Da,{children:[(0,Zr.jsx)(Ia,{children:(0,Zr.jsx)(pa,{large:!1})}),(0,Zr.jsx)(Ma,{"aria-label":e("nav.footerLabel"),children:Ua.map((t=>(0,Zr.jsx)(Ze,{to:t.path,children:e(t.label)},t.path)))}),(0,Zr.jsx)(Fa,{children:(0,Zr.jsx)(Oa,{title:"",date:""})})]})})},Wa=Xr.div`
  /* margin-top: 10vh; */
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 10vh);

  @media (max-width: 768px) {
    /* margin-top: 10vh; */
    min-height: 100vh;
  }
`,Ha=e=>{let{children:t}=e;return(0,Zr.jsx)(Wa,{children:(0,Zr.jsxs)(ta,{children:[(0,Zr.jsxs)("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[(0,Zr.jsx)(Pa,{}),t]}),(0,Zr.jsx)(Ba,{})]})})},Va=()=>{const{t:e}=la();return(0,Zr.jsx)(Ha,{children:e("page.about")})},Ka=Xr(Ze)`
  display: flex;
  min-height: ${e=>{let{$variant:t}=e;return"tours"===t?"10.5rem":"11rem"}};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${e=>{let{$variant:t}=e;return"tours"===t?"0.45rem":"0.65rem"}};
  padding: ${e=>{let{$variant:t}=e;return"tours"===t?"0.8rem 0.35rem":"1rem 0.5rem"}};
  border: 1px solid ${e=>{let{$active:t,$variant:n}=e;return t&&"tours"===n?"rgba(77, 77, 68, 0.12)":"transparent"}};
  background: ${e=>{let{$active:t,$variant:n}=e;return t&&"tours"===n?"rgba(255, 255, 255, 0.38)":"transparent"}};
  color: ${e=>{let{$active:t}=e;return t?"#272821":"#30312b"}};
  font-family: 'Montserrat', sans-serif;
  font-size: ${e=>{let{$variant:t}=e;return"tours"===t?"0.66rem":"0.72rem"}};
  font-weight: 500;
  letter-spacing: ${e=>{let{$variant:t}=e;return"tours"===t?"0.1em":"0.12em"}};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 180ms ease, transform 180ms ease, background-color 180ms ease, border-color 180ms ease;

  &:hover {
    color: #a33b2f;
    transform: ${e=>{let{$variant:t}=e;return"tours"===t?"none":"translateY(-2px)"}};
    background: ${e=>{let{$variant:t}=e;return"tours"===t?"rgba(255, 255, 255, 0.38)":"transparent"}};
    border-color: ${e=>{let{$variant:t}=e;return"tours"===t?"rgba(77, 77, 68, 0.12)":"transparent"}};
  }

  &:focus-visible {
    outline: 2px solid #a33b2f;
    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    min-height: ${e=>{let{$variant:t}=e;return"tours"===t?"6.25rem":"9.5rem"}};
    gap: ${e=>{let{$variant:t}=e;return"tours"===t?"0.25rem":"0.65rem"}};
    padding: ${e=>{let{$variant:t}=e;return"tours"===t?"0.55rem 0.25rem":"1rem 0.5rem"}};
    border-color: ${e=>{let{$variant:t}=e;return"tours"===t?"rgba(77, 77, 68, 0.08)":"transparent"}};
    font-size: ${e=>{let{$variant:t}=e;return"tours"===t?"0.52rem":"0.63rem"}};
    letter-spacing: ${e=>{let{$variant:t}=e;return"tours"===t?"0.08em":"0.12em"}};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Qa=Xr.img`
  width: ${e=>{let{$variant:t}=e;return"tours"===t?"min(100%, 7.5rem)":"min(100%, 8rem)"}};
  height: ${e=>{let{$variant:t}=e;return"tours"===t?"6.25rem":"7rem"}};
  object-fit: contain;

  @media (max-width: 600px) {
    width: ${e=>{let{$variant:t}=e;return"tours"===t?"min(100%, 5rem)":"min(100%, 8rem)"}};
    height: ${e=>{let{$variant:t}=e;return"tours"===t?"3.5rem":"6rem"}};
  }
`,Ya=Xr.span`
  color: #82827b;
  font-size: 0.58rem;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
`,Ga=e=>{let{continent:t,label:n,imageSrc:r,count:a,variant:o="default"}=e;const{pathname:i}=G(),{t:l,language:s}=la(),u=i.startsWith("/tours/continent/")?decodeURIComponent(i.split("/").pop()||"").toLowerCase():"",c=t.toLowerCase(),d=u===c;return(0,Zr.jsxs)(Ka,{to:`/tours/continent/${encodeURIComponent(c)}`,$active:d,$variant:o,"aria-current":d?"page":void 0,children:[(0,Zr.jsx)(Qa,{src:r,alt:"",loading:"lazy",$variant:o}),(0,Zr.jsx)("span",{children:n||t}),void 0!==a&&(0,Zr.jsxs)(Ya,{children:[a," ",l(1===a?"tours.storyCountOne":"PL"===s&&a%10>=2&&a%10<=4&&(a%100<12||a%100>14)?"tours.storyCountFew":"tours.storyCount")]})]})},qa=Xr.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: ${e=>{let{$variant:t}=e;return"tours"===t?"0.75rem":"1.5rem"}};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: ${e=>{let{$variant:t}=e;return"tours"===t?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))"}};
    gap: ${e=>{let{$variant:t}=e;return"tours"===t?"0":"0.75rem"}};
  }

  @media (max-width: 370px) {
    ${e=>{let{$variant:t}=e;return"tours"===t&&"grid-template-columns: repeat(2, minmax(0, 1fr));"}}
  }
`,Xa=e=>{const t=e.toLowerCase();return"north america"===t?"/assets/continents/north_america-nb-Photoroom.png":"south america"===t?"/assets/continents/south_america-nb-Photoroom.png":`/assets/continents/${t}-nb-Photoroom.png`},Ja=e=>{let{continents:t,counts:n,variant:r="default"}=e;const{t:a}=la();return(0,Zr.jsx)(Zr.Fragment,{children:(0,Zr.jsx)(qa,{$variant:r,children:t.map((e=>{var t;return(0,Zr.jsx)("div",{children:(0,Zr.jsx)(Ga,{continent:e,label:"australia"===e.toLowerCase()&&"tours"===r?a("continent.oceania"):ra[e.toLowerCase()]?a(ra[e.toLowerCase()]):e,imageSrc:Xa(e),count:n?null!==(t=n[e.toLowerCase()])&&void 0!==t?t:0:void 0,variant:r})},e)}))})})},Za=(new Date("2025-01-10"),new Date("2025-01-20"),new Date("2025-01-01"),new Date("2025-01-01"),new Date("2025-03-05"),new Date("2025-03-18"),new Date("2025-02-01"),new Date("2025-02-01"),"".replace(/\/$/,"")),eo=(e,t)=>`${e}${e.includes("?")?"&":"?"}lang=${t}`,to=(e,t)=>{var n,r,a,o,i,l,s,u,c,d,f,p,m,h,g,v;const y=e.translations,b=Array.isArray(y)?y[0]:null!==(n=null===y||void 0===y?void 0:y.EN)&&void 0!==n?n:null===y||void 0===y?void 0:y.PL,x=Array.isArray(y)?y.find((e=>e.language===t)):null===y||void 0===y?void 0:y[t],w=null!==x&&void 0!==x?x:b;return{...e,...b,...w,title:null!==(r=null!==(a=null!==(o=null===w||void 0===w?void 0:w.title)&&void 0!==o?o:null===b||void 0===b?void 0:b.title)&&void 0!==a?a:e.title)&&void 0!==r?r:"",subtitle:null!==(i=null!==(l=null!==(s=null===w||void 0===w?void 0:w.subtitle)&&void 0!==s?s:null===b||void 0===b?void 0:b.subtitle)&&void 0!==l?l:e.subtitle)&&void 0!==i?i:"",textLead:null!==(u=null!==(c=null!==(d=null===w||void 0===w?void 0:w.textLead)&&void 0!==d?d:null===b||void 0===b?void 0:b.textLead)&&void 0!==c?c:e.textLead)&&void 0!==u?u:"",textParagraphs:null!==(f=null!==(p=null!==(m=null===w||void 0===w?void 0:w.textParagraphs)&&void 0!==m?m:null===b||void 0===b?void 0:b.textParagraphs)&&void 0!==p?p:e.textParagraphs)&&void 0!==f?f:[],countryLabel:null!==(h=null!==(g=null!==(v=null===w||void 0===w?void 0:w.countryLabel)&&void 0!==v?v:null===b||void 0===b?void 0:b.countryLabel)&&void 0!==g?g:e.countryLabel)&&void 0!==h?h:e.country,language:t}},no=async(e,t)=>{try{const t=await fetch(`${Za}${e}`,{method:"get",headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);if(!(t.headers.get("content-type")||"").includes("application/json"))throw new Error("Non-JSON response");return await t.json()}catch(n){throw n}},ro=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"EN";const t=await no(eo("/blog/tours",e));return Array.isArray(t.posts)&&t.posts.length?t.posts.map((t=>to(t,e))):[]},ao=async function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EN";const r=eo(`/blog/tours/details/${e.toLowerCase()}`,n),a=await no(r),o=Object.prototype.hasOwnProperty.call(a,"post")?null!==(t=a.post)&&void 0!==t?t:null:a;return null!==o&&void 0!==o&&o.country?to(o,n):null},oo=Xr.section`
  width: min(calc(100% - clamp(1.25rem, 5.5vw, 5rem) * 2), 1440px);
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 4rem) 0 clamp(3.5rem, 8vw, 7rem);
`,io=Xr.div`
  margin-bottom: 2rem;

  h2 {
    margin: 0;
    font-family: 'Alumni Sans Pinstripe', Georgia, serif;
    font-size: clamp(2.2rem, 4vw, 3.25rem);
    font-weight: 400;
    line-height: 1;
  }

  p {
    margin: 0.8rem 0 0;
    color: #77776f;
    font-size: 0.95rem;
  }
`,lo=Xr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr));
  gap: clamp(1rem, 2.3vw, 2rem);
`,so=Xr(Ze)`
  position: relative;
  display: block;
  min-height: clamp(18rem, 32vw, 29rem);
  overflow: hidden;
  background: #d3d1c8;
  color: #fff;
  text-decoration: none;

  &::after {
    position: absolute;
    inset: 30% 0 0;
    background: linear-gradient(0deg, rgba(12, 16, 13, 0.78), transparent);
    content: '';
    transition: opacity 200ms ease;
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    object-fit: cover;
    transition: transform 450ms ease;
  }

  &:hover img {
    transform: scale(1.035);
  }

  &:focus-visible {
    outline: 3px solid #a33b2f;
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      transition: none;
    }
  }
`,uo=Xr.div`
  position: absolute;
  z-index: 1;
  right: 1.5rem;
  bottom: 1.4rem;
  left: 1.5rem;

  span {
    display: block;
    margin-bottom: 0.45rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0;
    font-family: 'Alumni Sans Pinstripe', Georgia, serif;
    font-size: clamp(1.9rem, 3.1vw, 2.7rem);
    font-weight: 400;
    line-height: 0.95;
  }

  p {
    margin: 0.5rem 2rem 0 0;
    font-size: 0.85rem;
  }

  &::after {
    position: absolute;
    right: 0;
    bottom: 0.1rem;
    content: '→';
    font-size: 1.25rem;
  }
`,co=Xr.p`
  margin: 0;
  color: #77776f;
`,fo=()=>{const{language:t,t:n}=la(),[r,a]=(0,e.useState)([]),[o,i]=(0,e.useState)(!1),[l,s]=(0,e.useState)(!0);(0,e.useEffect)((()=>{let e=!0;return i(!1),s(!0),ro(t).then((t=>{e&&(a(t),s(!1))})).catch((t=>{console.error("Error fetching featured journeys:",t),e&&(i(!0),s(!1))})),()=>{e=!1}}),[t]);const u=[...r].sort(((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime())).slice(0,3);return(0,Zr.jsxs)(oo,{"aria-labelledby":"featured-journeys-title",children:[(0,Zr.jsxs)(io,{children:[(0,Zr.jsx)("h2",{id:"featured-journeys-title",children:n("home.featuredTitle")}),(0,Zr.jsx)("p",{children:n("home.featuredDescription")})]}),o?(0,Zr.jsx)(co,{role:"alert",children:n("home.featuredError")}):l?(0,Zr.jsx)(co,{children:n("home.featuredLoading")}):u.length>0?(0,Zr.jsx)(lo,{children:u.map((e=>{var t,n,r;const a=(null===(t=e.postGallery)||void 0===t||null===(n=t[0])||void 0===n||null===(r=n[0])||void 0===r?void 0:r.src)||e.imageUrl;return(0,Zr.jsxs)(so,{to:`/tours/details/${encodeURIComponent(e.country.toLowerCase())}?postId=${encodeURIComponent(e.id)}`,children:[(0,Zr.jsx)("img",{src:a,alt:"",loading:"lazy"}),(0,Zr.jsxs)(uo,{children:[(0,Zr.jsx)("span",{children:e.countryLabel||e.country}),(0,Zr.jsx)("h3",{children:e.title}),e.subtitle&&(0,Zr.jsx)("p",{children:e.subtitle})]})]},e.id)}))}):(0,Zr.jsx)(co,{children:n("home.featuredEmpty")})]})},po=Xr.div`
  & > img {
    object-fit: cover;
    width: 100%;
    height: 20rem;
  }
`,mo=e=>{let{imgSrc:t,alt:n="",fallbackSrc:r}=e;const a=t&&t.length>0&&t[0].length>0?t[0][0]:{src:""};return(0,Zr.jsx)(po,{children:(0,Zr.jsx)("img",{src:a.src,alt:n,onError:e=>{r&&e.currentTarget.getAttribute("src")!==r&&(e.currentTarget.src=r)}})})},ho=Xr.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-self: flex-start;
  font-size: 0.65rem;
  font-family: 'Darker Grotesque', sans-serif;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 600;
  
  span {
    padding: 10px 10px;
  }
`,go=e=>{let{author:t,date:n}=e;return(0,Zr.jsxs)(ho,{children:[(0,Zr.jsx)("span",{children:t}),(0,Zr.jsx)("span",{children:n})]})},vo=()=>(0,Zr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd",viewBox:"0 0 512 243.58",fill:"#555",children:(0,Zr.jsx)("path",{fillRule:"nonzero",d:"M373.57 0 512 120.75 371.53 243.58l-20.92-23.91 94.93-83L0 137.09v-31.75l445.55-.41-92.89-81.02z"})}),yo=Xr.div`
  position: absolute;
  bottom: 0.1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  z-index: 5;

  transition: transform 150ms ease;
  transform: ${e=>e.$mouseEnter?"translateX(5px)":"translateX(0)"};

  & > * {
    width: 30px;
    height: 30px;
  }
`,bo=e=>{let{mouseEnter:t}=e;return(0,Zr.jsx)(yo,{$mouseEnter:t,children:(0,Zr.jsx)(vo,{})})},xo=Xr.div`
  margin: 0;
  color: #55564f;
  font-size: 0.9rem;
  text-transform: capitalize;
  align-self: flex-start;
  padding: 0;
  font-weight: 500;
  font-family: "Alumni Sans Pinstripe", sans-serif;
`,wo=e=>{let{title:t}=e;return(0,Zr.jsx)(xo,{as:"p",children:t})},So=Xr.div`
  margin: 0;
  font-size: 1.65rem;
  text-transform: capitalize;
  align-self: flex-start;
  padding: 0.1rem 0;
  font-weight: 500;
  font-family: "Alumni Sans Pinstripe", sans-serif;
`,ko=e=>{let{title:t}=e;return(0,Zr.jsx)(So,{as:"h3",children:t})},Eo=Xr(Ze)`
  position: relative;
  display: flex;
  width: clamp(260px, 30vw, 380px);
  min-height: 31rem;
  flex: 0 0 auto;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  color: #292a24;
  text-decoration: none;
  transition: box-shadow 180ms ease, transform 180ms ease;

  &:hover {
    box-shadow: 0 12px 30px rgba(35, 37, 26, 0.13);
    transform: translateY(-2px);
  }

  &:hover > div:last-child {
    transform: translateX(5px);
  }

  &:focus-visible {
    outline: 2px solid #a33b2f;
    outline-offset: 3px;
  }

  & > div:first-child img {
    width: 100%;
    height: clamp(13rem, 19vw, 17rem);
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: min(80vw, 340px);
    min-height: 29rem;

    & > div:first-child img {
      height: 15rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  ${e=>{let{$variant:t}=e;return"grid"===t&&"\n    width: 100%;\n    min-height: 0;\n    flex: initial;\n    box-shadow: 0 2px 12px rgba(35, 37, 26, 0.06);\n\n    & > div:first-child img {\n      height: 13.5rem;\n    }\n\n    @media (max-width: 600px) {\n      width: 100%;\n      min-height: 0;\n\n      & > div:first-child img {\n        height: 12.5rem;\n      }\n    }\n  "}}
`,Co=Xr.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.65rem 1rem 2.5rem;

  & > div:first-child {
    margin: 0 0 0.35rem;
  }
`,jo=Xr.p`
  display: -webkit-box;
  overflow: hidden;
  margin: 0.4rem 0 0;
  color: #65665f;
  font-size: 0.88rem;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`,_o=e=>{var t;let{post:n,variant:r="default"}=e;const{language:a}=la(),o=`/tours/details/${encodeURIComponent(n.country.toLowerCase())}?postId=${encodeURIComponent(n.id)}`;return(0,Zr.jsxs)(Eo,{to:o,$variant:r,children:[(0,Zr.jsx)(mo,{imgSrc:null!==(t=n.postGallery)&&void 0!==t&&t.length?n.postGallery:[[{src:n.imageUrl}]],alt:n.title,fallbackSrc:"/assets/6761b2f4d2ca643ca99c2d90/header.jpg"}),(0,Zr.jsxs)(Co,{children:[(0,Zr.jsx)(go,{author:n.author,date:new Date(n.createdAt).toLocaleDateString("PL"===a?"pl-PL":"en-GB")}),(0,Zr.jsx)(ko,{title:n.title}),n.subtitle&&(0,Zr.jsx)(wo,{title:n.subtitle}),n.textLead&&(0,Zr.jsx)(jo,{children:n.textLead})]}),(0,Zr.jsx)(bo,{mouseEnter:!1})]})},Po=Xr.section`
  width: min(calc(100% - clamp(1.25rem, 5.5vw, 5rem) * 2), 1440px);
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 4rem) 0 clamp(3.5rem, 8vw, 7rem);
`,zo=Xr.div`
  margin-bottom: 0.5rem;

  h2 {
    margin: 0;
    font-family: 'Alumni Sans Pinstripe', Georgia, serif;
    font-size: clamp(2.2rem, 4vw, 3.25rem);
    font-weight: 400;
    line-height: 1;
  }
`,To=Xr.div`
  position: relative;
`,$o=Xr.div`
  display: flex;
  align-items: stretch;
  gap: clamp(1rem, 2vw, 1.75rem);
  overflow-x: auto;
  padding: 1.25rem 0 1.75rem;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    scroll-snap-align: start;
  }

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
`,Ro=Xr.button`
  position: absolute;
  top: -3.4rem;
  ${e=>{let{$previous:t}=e;return t?"right: 3.25rem;":"right: 0;"}}
  z-index: 1;
  display: grid;
  width: 2.4rem;
  height: 2.4rem;
  place-items: center;
  padding: 0.55rem;
  border: 1px solid #d5d4ce;
  border-radius: 50%;
  background: transparent;
  color: #33342d;
  cursor: pointer;
  transition: background-color 180ms ease, opacity 180ms ease;

  svg {
    width: 100%;
    height: 100%;
    ${e=>{let{$previous:t}=e;return t&&"transform: rotate(180deg);"}}
  }

  &:hover:not(:disabled) {
    background: #e7e5df;
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
  }

  &:focus-visible {
    outline: 2px solid #a33b2f;
    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    top: -3.15rem;
    width: 2.15rem;
    height: 2.15rem;
  }
`,Lo=Xr.p`
  color: #77776f;
`,No=()=>{const{language:t,t:n}=la(),[r,a]=(0,e.useState)([]),[o,i]=(0,e.useState)(!1),[l,s]=(0,e.useState)(!1),[u,c]=(0,e.useState)(!1),d=(0,e.useRef)(null);(0,e.useEffect)((()=>{let e=!0;return ro(t).then((t=>{e&&(a(t),c(!1))})).catch((t=>{console.error("Error fetching recent posts:",t),e&&c(!0)})),()=>{e=!1}}),[t]);const f=()=>{const e=d.current;e&&(s(e.scrollLeft>1),i(e.scrollLeft+e.clientWidth<e.scrollWidth-1))};(0,e.useEffect)((()=>(f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f))),[r]);const p=e=>{const t=d.current;if(t){const n=.8*t.clientWidth;t.scrollBy({left:"next"===e?n:-n,behavior:"smooth"})}},m=[...r].sort(((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()));return(0,Zr.jsxs)(Po,{"aria-labelledby":"recent-posts-title",children:[(0,Zr.jsx)(zo,{children:(0,Zr.jsx)("h2",{id:"recent-posts-title",children:n("home.recentPosts")})}),u?(0,Zr.jsx)(Lo,{role:"alert",children:n("home.recentPostsError")}):(0,Zr.jsxs)(To,{children:[(0,Zr.jsx)($o,{ref:d,onScroll:f,"aria-label":n("home.recentPosts"),children:m.map((e=>(0,Zr.jsx)(_o,{post:e},e.id)))}),(0,Zr.jsx)(Ro,{type:"button",$previous:!0,"aria-label":n("home.scrollRecentPostsBack"),disabled:!l,onClick:()=>p("previous"),children:(0,Zr.jsx)(vo,{})}),(0,Zr.jsx)(Ro,{type:"button",$previous:!1,"aria-label":n("home.scrollRecentPosts"),disabled:!o,onClick:()=>p("next"),children:(0,Zr.jsx)(vo,{})})]})]})},Oo=Xr.div`
  position: absolute;
  top: ${e=>{let{$y:t}=e;return t}};
  left: ${e=>{let{$x:t}=e;return t}};
  transform: translate(-50%, -50%);
`,Ao=Xr.button`
  position: relative;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;

  &::before {
    width: 11px;
    height: 11px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #d72f26;
    box-shadow: 0 0 0 4px rgba(215, 47, 38, 0.18);
    content: '';
    transition: box-shadow 180ms ease, transform 180ms ease;
  }

  &:hover::before,
  &[aria-expanded='true']::before {
    box-shadow: 0 0 0 7px rgba(215, 47, 38, 0.2);
    transform: scale(1.12);
  }

  &:focus-visible {
    outline: 2px solid #a33b2f;
    outline-offset: 0;
  }
`,Do=Xr.div`
  position: absolute;
  z-index: 3;
  bottom: calc(100% + 0.35rem);
  ${e=>{let{$alignRight:t}=e;return t?"right: 0;":"left: 50%;"}}
  width: min(15rem, 72vw);
  padding: 0.85rem 1rem;
  border: 1px solid rgba(38, 39, 32, 0.08);
  background: rgba(250, 249, 246, 0.98);
  box-shadow: 0 8px 24px rgba(35, 37, 26, 0.14);
  color: #282923;
  opacity: ${e=>{let{$visible:t}=e;return t?1:0}};
  pointer-events: ${e=>{let{$visible:t}=e;return t?"auto":"none"}};
  transform: ${e=>{let{$alignRight:t,$visible:n}=e;return`${t?"translateX(0)":"translateX(-50%)"} translateY(${n?"0":"0.35rem"})`}};
  transition: opacity 180ms ease, transform 180ms ease, visibility 180ms ease;
  visibility: ${e=>{let{$visible:t}=e;return t?"visible":"hidden"}};

  h3 {
    margin: 0;
    font-family: 'Alumni Sans Pinstripe', Georgia, serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1;
  }

  p {
    margin: 0.45rem 0 0.6rem;
    color: #696a62;
    font-size: 0.78rem;
    line-height: 1.4;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Io=Xr(Ze)`
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  gap: 0.55rem;
  color: #8e332b;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #54201b;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
  }
`,Mo=t=>{let{countryCode:n,countryName:r,country:a,x:o,y:i,description:l}=t;const{t:s}=la(),u=J(),[c,d]=(0,e.useState)(!1),f=`/posts?country=${encodeURIComponent(r)}`;return(0,Zr.jsxs)(Oo,{$x:o,$y:i,"data-country":n,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onFocus:()=>d(!0),onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||d(!1)},children:[(0,Zr.jsx)(Ao,{type:"button","aria-label":a,"aria-expanded":c,"aria-controls":`map-country-${n}`,title:a,onClick:()=>{"function"===typeof window.matchMedia&&window.matchMedia("(hover: hover) and (pointer: fine)").matches?u(f):d((e=>!e))}}),(0,Zr.jsxs)(Do,{id:`map-country-${n}`,$visible:c,$alignRight:Number.parseFloat(o)>60,children:[(0,Zr.jsx)("h3",{children:a}),(0,Zr.jsx)("p",{children:l}),(0,Zr.jsxs)(Io,{to:f,children:[s("home.viewCountryPosts")," ",(0,Zr.jsx)("span",{"aria-hidden":"true",children:"\u2192"})]})]})]})},Fo=Xr.div`
  position: relative;
  width: 100%;
  aspect-ratio: 570 / 290;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,Uo=Xr.div`
  position: absolute;
  inset: 0;
`,Bo=e=>{let{children:t}=e;return(0,Zr.jsxs)(Fo,{children:[(0,Zr.jsx)("img",{src:"/assets/Dotted World Map.svg",alt:"",role:"presentation"}),(0,Zr.jsx)(Uo,{children:t})]})},Wo=Xr.section`
  padding: clamp(3.5rem, 8vw, 7rem) 0;
  background: #eeede8;
`,Ho=Xr.div`
  width: min(calc(100% - clamp(1.25rem, 5.5vw, 5rem) * 2), 1440px);
  margin: 0 auto;
`,Vo=Xr.div`
  h2 {
    margin: 0;
    font-family: 'Alumni Sans Pinstripe', Georgia, serif;
    font-size: clamp(2.2rem, 4vw, 3.25rem);
    font-weight: 400;
    line-height: 1;
  }

  p {
    max-width: 39rem;
    margin: 0.8rem 0 0;
    color: #77776f;
    font-size: 0.95rem;
    line-height: 1.55;
  }
`,Ko=Xr.div`
  width: min(100%, 1120px);
  margin: clamp(1rem, 3vw, 2rem) auto 0;
`,Qo=[{countryCode:"vietnam",countryName:"Vietnam",countryKey:"map.vietnam",x:"77.9%",y:"52.7%",descriptionKey:"map.vietnamDescription"},{countryCode:"iceland",countryName:"Iceland",countryKey:"map.iceland",x:"43.83%",y:"20.6%",descriptionKey:"map.icelandDescription"}],Yo=()=>{const{t:e}=la();return(0,Zr.jsx)(Wo,{"aria-labelledby":"world-map-title",children:(0,Zr.jsxs)(Ho,{children:[(0,Zr.jsxs)(Vo,{children:[(0,Zr.jsx)("h2",{id:"world-map-title",children:e("home.mapTitle")}),(0,Zr.jsx)("p",{children:e("home.mapDescription")})]}),(0,Zr.jsx)(Ko,{children:(0,Zr.jsx)(Bo,{children:Qo.map((t=>(0,Zr.jsx)(Mo,{countryCode:t.countryCode,countryName:t.countryName,country:e(t.countryKey),x:t.x,y:t.y,description:e(t.descriptionKey)},t.countryCode)))})})]})})},Go=Xr.main`
  --page-gutter: clamp(1.25rem, 5.5vw, 5rem);
  --content-width: 1440px;
  background: #f5f4f0;
  color: #282923;
`,qo=Xr.section`
  position: relative;
  display: flex;
  min-height: 680px;
  height: 82vh;
  max-height: 980px;
  align-items: flex-end;
  overflow: hidden;
  padding: clamp(7rem, 15vh, 11rem) var(--page-gutter) clamp(4rem, 9vh, 7rem);
  background-image:
    linear-gradient(90deg, rgba(10, 15, 11, 0.62) 0%, rgba(10, 15, 11, 0.26) 52%, rgba(10, 15, 11, 0.02) 100%),
    linear-gradient(0deg, rgba(10, 15, 11, 0.35), transparent 55%),
    url('/assets/homepage/IMG_26062.jpg');
  background-position: center;
  background-size: cover;
  color: #fff;

  @media (max-width: 768px) {
    height: min(78svh, 760px);
    min-height: 540px;
    padding-bottom: 4rem;
    background-position: 57% center;
  }

  @media (max-width: 430px) {
    min-height: 500px;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
  }
`,Xo=Xr.div`
  width: min(100%, 720px);

  @media (min-width: 1441px) {
    margin-left: max(0px, calc((100vw - 1440px) / 2));
  }
`,Jo=Xr.p`
  margin: 0 0 1.1rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`,Zo=Xr.h1`
  max-width: 12ch;
  margin: 0;
  font-family: 'Alumni Sans Pinstripe', Georgia, serif;
  font-size: clamp(3.75rem, 8vw, 7.5rem);
  font-weight: 400;
  line-height: 0.88;
  text-wrap: balance;

  @media (max-width: 600px) {
    font-size: clamp(3.5rem, 15vw, 5rem);
  }
`,ei=Xr.p`
  max-width: 34rem;
  margin: 1.5rem 0 1.75rem;
  font-size: clamp(1rem, 1.35vw, 1.2rem);
  line-height: 1.55;
  text-wrap: pretty;
`,ti=Xr(Ze)`
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  gap: 1.5rem;
  padding: 0.8rem 1.15rem;
  background: #f7f6f1;
  color: #262720;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 180ms ease, transform 180ms ease;

  &::after {
    content: '→';
    font-size: 1rem;
  }

  &:hover {
    background: #fff;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,ni=Xr.section`
  width: min(calc(100% - var(--page-gutter) * 2), var(--content-width));
  margin: 0 auto;
  padding: clamp(3.5rem, 8vw, 7rem) 0;
`,ri=Xr.div`
  margin-bottom: 2.25rem;
`,ai=Xr.h2`
  margin: 0;
  font-family: 'Alumni Sans Pinstripe', Georgia, serif;
  font-size: clamp(2.2rem, 4vw, 3.25rem);
  font-weight: 400;
  line-height: 1;
`,oi=Xr.p`
  max-width: 38rem;
  margin: 0.8rem 0 0;
  color: #77776f;
  font-size: 0.95rem;
  line-height: 1.55;
`,ii=Xr.div`
  & > div {
    margin: 0;
    padding: 0;
  }
`,li=Xr.section`
  display: grid;
  width: min(calc(100% - var(--page-gutter) * 2), var(--content-width));
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);
  align-items: center;
  gap: clamp(2rem, 7vw, 7rem);
  margin: 0 auto;
  padding: clamp(3rem, 7vw, 6rem) 0 clamp(5rem, 9vw, 8rem);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
    padding-bottom: 4rem;
  }
`,si=Xr.img`
  width: 100%;
  aspect-ratio: 1.45;
  object-fit: cover;
`,ui=Xr.div`
  max-width: 32rem;

  h2 {
    margin: 0;
    font-family: 'Alumni Sans Pinstripe', Georgia, serif;
    font-size: clamp(2.3rem, 4vw, 3.5rem);
    font-weight: 400;
    line-height: 1;
  }

  p {
    margin: 1rem 0 1.5rem;
    color: #686961;
    line-height: 1.7;
  }
`,ci=Xr(Ze)`
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  gap: 0.75rem;
  color: #282923;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-decoration: none;
  text-transform: uppercase;

  &::after {
    content: '→';
    font-size: 1rem;
  }

  &:hover {
    color: #a33b2f;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }
`,di=()=>{const{t:e}=la();return(0,Zr.jsx)(Ha,{children:(0,Zr.jsxs)(Go,{children:[(0,Zr.jsx)(qo,{"aria-labelledby":"homepage-title",children:(0,Zr.jsxs)(Xo,{children:[(0,Zr.jsx)(Jo,{children:e("home.heroEyebrow")}),(0,Zr.jsx)(Zo,{id:"homepage-title",children:e("home.heroTitle")}),(0,Zr.jsx)(ei,{children:e("home.heroDescription")}),(0,Zr.jsx)(ti,{to:"/tours",children:e("home.exploreJourneys")})]})}),(0,Zr.jsxs)(ni,{"aria-labelledby":"continents-title",children:[(0,Zr.jsxs)(ri,{children:[(0,Zr.jsx)(ai,{id:"continents-title",children:e("home.continentsTitle")}),(0,Zr.jsx)(oi,{children:e("home.continentsDescription")})]}),(0,Zr.jsx)(ii,{children:(0,Zr.jsx)(Ja,{continents:["North America","South America","Europe","Africa","Asia","Australia"]})})]}),(0,Zr.jsx)(fo,{}),(0,Zr.jsx)(Yo,{}),(0,Zr.jsx)(No,{}),(0,Zr.jsxs)(li,{"aria-labelledby":"about-title",children:[(0,Zr.jsx)(si,{src:"/assets/homepage/IMG_28302.jpg",alt:e("home.aboutImageAlt"),loading:"lazy"}),(0,Zr.jsxs)(ui,{children:[(0,Zr.jsx)("h2",{id:"about-title",children:e("home.aboutTitle")}),(0,Zr.jsx)("p",{children:e("home.aboutDescription")}),(0,Zr.jsx)(ci,{to:"/about-us",children:e("home.aboutLink")})]})]})]})})},fi=()=>{const{t:e}=la();return(0,Zr.jsx)(Ha,{children:e("page.cooperation")})},pi=()=>{const{t:e}=la();return(0,Zr.jsx)(Ha,{children:e("page.contact")})},mi=Xr.div`
  color: #4a5051;
  font-size: 0.96rem;
  line-height: 1.7;
  padding: 0;
  margin: 0 0 1.1rem;
  ${e=>e.hidden&&Yr`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 6;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      white-space: normal;
      line-height: 1.5;
    `}
`,hi=e=>{let{text:t,hidden:n}=e;return(0,Zr.jsx)(mi,{hidden:n,children:t})};var gi=n(950);const vi=n.p+"static/media/arrow.0cb455b2820f74c82b13f22b4284a0ef.svg",yi=Xr.button`
  width: 3rem;
  height: 3rem;
  padding-left: 0.3rem;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${e=>{let{$next:t}=e;return t?"":"1rem"}};
  right: ${e=>{let{$next:t}=e;return t?"1rem":""}};
  transform: ${e=>{let{$next:t}=e;return t?"translateX(0)":"rotate(180deg) translateX(0)"}};
  background-color: rgba(170, 170, 170, 0.2);
  border-radius: 5px;
  transition: transform 0.1s ease;
  z-index: 995;
  cursor: pointer;
  padding: 0;
  border: 0;
  color: #fff;
  font: inherit;

  img {
    scale: 0.6;
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    transform: ${e=>{let{$next:t}=e;return t?"translateX(0.1rem)":"rotate(180deg) translateX(0.1rem)"}};
    background-color: rgba(170, 170, 170, 0.25);
  }
`,bi=e=>{let{next:t,label:n,stateChange:r}=e;return(0,Zr.jsx)(yi,{type:"button",$next:t,"aria-label":n,onClick:r,children:(0,Zr.jsx)("img",{src:vi,alt:""})})};const xi=n.p+"static/media/close.15bebc75476cd9ec5fcb4322fac5fcae.svg",wi=Xr.button`
  display: flex;
  width: 3rem;
  height: 3rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  scale: 0.9;
  padding: 0.7rem;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: transparent;
  transition: background-color 0.1s ease-in;
  background-color: rgba(204, 52, 52, 0.6);
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(204, 52, 52, 0.9);
    /* transform: scale(1.04); */
  }
`,Si=e=>{let{label:t,setGalleryCarousel:n}=e;return(0,Zr.jsx)(wi,{type:"button","aria-label":t,"data-lightbox-close":!0,onClick:n,children:(0,Zr.jsx)("img",{src:xi,alt:""})})},ki=Xr.img`
  display: block;
  width: auto;
  height: auto;
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  z-index: 999;
  touch-action: pan-y;
`,Ei=e=>{let{src:t,alt:n,onTouchStart:r,onTouchEnd:a}=e;return(0,Zr.jsx)(ki,{src:t,alt:n,onTouchStart:r,onTouchEnd:a})},Ci=Xr.div`
  width: 100vw;
  height: 100vh;
  background: #00000059;
  color: white;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(85px);
  align-items: center;
  touch-action: pan-y;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(151, 151, 151, 0.205);
    opacity: 90%;
    z-index: -1;
    border-radius: 8px;
  }
`,ji=Xr.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${e=>{let{src:t}=e;return t}});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 997;
  color: white;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`,_i=t=>{let{startPicIndex:n,images:r,setGalleryCarousel:a}=t;const{t:o}=la(),[i,l]=(0,e.useState)(n),s=(0,e.useRef)(null),u=(0,e.useRef)(null),[c,d]=(0,e.useState)(!1),[f,p]=(0,e.useState)(!1),m=e=>{l((t=>Math.max(0,Math.min(r.length-1,t+(e?1:-1)))))},h=e=>{e.target===e.currentTarget&&a()},g=(0,e.useCallback)((e=>{if("ArrowRight"!==e.key||c)if("ArrowLeft"!==e.key||f){if("Escape"===e.key)a();else if("Tab"===e.key){var t;const n=Array.from((null===(t=u.current)||void 0===t?void 0:t.querySelectorAll("button:not([disabled])"))||[]).filter((e=>e.getClientRects().length>0)),r=null===n||void 0===n?void 0:n[0],a=null===n||void 0===n?void 0:n[n.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),null===a||void 0===a||a.focus()):e.shiftKey||document.activeElement!==a||(e.preventDefault(),null===r||void 0===r||r.focus())}}else l(i-1);else l(i+1)}),[i,f,c,a]);(0,e.useEffect)((()=>{var e,t;const n=document.body.style.overflow,r=document.activeElement instanceof HTMLElement?document.activeElement:null;return document.body.style.overflow="hidden",null===(e=u.current)||void 0===e||null===(t=e.querySelector("[data-lightbox-close]"))||void 0===t||t.focus(),()=>{document.body.style.overflow=n,null===r||void 0===r||r.focus()}}),[]),(0,e.useEffect)((()=>(0===i?p(!0):i===r.length-1?d(!0):i!==r.length-1&&0!==i&&(p(!1),d(!1)),window.addEventListener("keydown",g),()=>{window.removeEventListener("keydown",g)})),[i,n,r.length,g]);return(0,gi.createPortal)((0,Zr.jsx)(ji,{ref:u,src:r[i].src,role:"dialog","aria-modal":"true","aria-label":o("post.photoViewer"),tabIndex:-1,onClick:h,children:(0,Zr.jsxs)(Ci,{onClick:h,children:[(0,Zr.jsx)(Zr.Fragment,{children:((e,t)=>e?(0,Zr.jsx)(bi,{next:!0,label:o("post.nextPhoto"),stateChange:()=>m(!0)}):t?(0,Zr.jsx)(bi,{next:!1,label:o("post.previousPhoto"),stateChange:()=>m(!1)}):(0,Zr.jsxs)(Zr.Fragment,{children:[(0,Zr.jsx)(bi,{next:!0,label:o("post.nextPhoto"),stateChange:()=>m(!0)}),(0,Zr.jsx)(bi,{next:!1,label:o("post.previousPhoto"),stateChange:()=>m(!1)})]}))(f,c)}),(0,Zr.jsx)(Si,{label:o("post.closePhoto"),setGalleryCarousel:a}),(0,Zr.jsx)(Ei,{src:r[i].src,alt:`${o("post.openPhoto")} ${i+1} ${o("post.photoOf")} ${r.length}`,onTouchStart:e=>{s.current=e.touches[0].clientX},onTouchEnd:e=>{if(null===s.current)return;const t=e.changedTouches[0].clientX-s.current;s.current=null,Math.abs(t)>=50&&m(t<0)}})]})}),document.body)},Pi=Xr.button`
  display: block;
  padding: 0;
  border: 0;
  background-image: url(${e=>{let{src:t}=e;return(e=>{if(!e||!e.trim())return"";const t=e.trim();return t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")||t.startsWith("//")?t:`${t.startsWith("/")?t:`/${t}`}`})(t)}});
  background-size: cover;
  background-position: center;
  min-height: 180px;
  width: 100%;
  border-radius: 4px;
  cursor: zoom-in;

  &:focus-visible {
    outline: 2px solid #a33b2f;
    outline-offset: 3px;
  }

  &:hover {
    filter: brightness(0.96);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,zi=t=>{let{src:n,images:r,startPicIndex:a}=t;const[o,i]=(0,e.useState)(!1),{t:l}=la();return(0,Zr.jsxs)(Zr.Fragment,{children:[(0,Zr.jsx)(Pi,{type:"button",src:n,"aria-label":`${l("post.openPhoto")} ${a+1} ${l("post.photoOf")} ${r.length}`,onClick:()=>{i(!0)}}),o&&(0,Zr.jsx)(_i,{startPicIndex:a,images:r,setGalleryCarousel:()=>{i(!1)}})]})},Ti=Xr.div`
  width: 100%;
  height: ${e=>{let{$imagesCount:t,$layout:n}=e;return"split"===n?"22rem":1===t?"clamp(13rem, 28vw, 22rem)":2===t?"clamp(12rem, 22vw, 17rem)":3===t?"clamp(11rem, 18vw, 14rem)":"clamp(16rem, 28vw, 22rem)"}};
  display: grid;
  grid-template-columns: ${e=>{let{$imagesCount:t}=e;return 1===t?"minmax(0, 1fr)":2===t?"repeat(2, minmax(0, 1fr))":3===t?"1.15fr 0.85fr 1.1fr":4===t?"repeat(2, minmax(0, 1fr))":"repeat(3, minmax(0, 1fr))"}};
  grid-template-rows: ${e=>{let{$imagesCount:t}=e;return t>=4?"repeat(2, minmax(0, 1fr))":"minmax(0, 1fr)"}};
  gap: clamp(0.5rem, 1.2vw, 1rem);
  cursor: pointer;

  & > * {
    min-width: 0;
    min-height: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media (max-width: 768px) {
    height: ${e=>{let{$imagesCount:t,$layout:n}=e;return"split"===n?"18rem":1===t?"clamp(12rem, 56vw, 17rem)":2===t?"clamp(11rem, 48vw, 14rem)":"clamp(12rem, 58vw, 18rem)"}};

    grid-template-columns: ${e=>{let{$imagesCount:t}=e;return 1===t?"minmax(0, 1fr)":"repeat(2, minmax(0, 1fr))"}};

    ${e=>{let{$imagesCount:t}=e;return 3===t&&"& > :last-child { grid-column: span 2; }"}}
  }
`,$i=Xr.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${e=>{let{$layout:t}=e;return"split"===t?"0":"0.5rem 0 1.5rem"}};
  width: 100%;
  margin-left: 0;
  transform: none;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    transform: none;
  }
`,Ri=e=>{let{imagesArr:t,imagesToDisplay:n,layout:r}=e;if(!n.length)return null;const a=null!==r&&void 0!==r?r:"wide";return(0,Zr.jsx)(Zr.Fragment,{children:(0,Zr.jsx)($i,{$layout:a,children:(0,Zr.jsx)(Ti,{$imagesCount:n.length,$layout:a,children:n.map(((e,r)=>{const a=t.flat().indexOf(n[r]);return(0,Zr.jsx)(zi,{images:t,startPicIndex:a,src:e.src},`${e.src}-${r}`)}))})})})},Li=Xr.aside`
  width: 100%;
  background: #fff;
  border: 1px solid rgba(38, 38, 32, 0.1);
  padding: 1.1rem 1rem;
  align-self: start;
`,Ni=Xr.details`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin: 0 0 1.5rem;
    border-top: 1px solid rgba(38, 39, 32, 0.13);
    border-bottom: 1px solid rgba(38, 39, 32, 0.13);

    &[open] > summary::after {
      transform: rotate(225deg);
    }
  }
`,Oi=Xr.summary`
  display: flex;
  min-height: 3.25rem;
  align-items: center;
  justify-content: space-between;
  color: #333a3b;
  cursor: pointer;
  font-size: 0.92rem;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    width: 0.5rem;
    height: 0.5rem;
    border-right: 1.5px solid currentColor;
    border-bottom: 1.5px solid currentColor;
    content: '';
    transform: rotate(45deg) translateY(-0.15rem);
    transition: transform 160ms ease;
  }

  &:focus-visible {
    outline: 2px solid #a33b2f;
    outline-offset: 3px;
  }
`,Ai=Xr.p`
  margin: 0 0 1rem;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(28, 28, 28, 0.62);
  font-weight: 700;
`,Di=Xr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-left: 1px solid rgba(34, 34, 34, 0.15);
`,Ii=Xr(Di)`
  margin: 0 0 0.8rem;
`,Mi=Xr.li`
  position: relative;
  margin: 0;
  padding-right: 0.5rem;
`,Fi=Yr`
  color: #1b1b1b;
  font-weight: 700;

  &::before {
    opacity: 1;
    transform: scaleY(1);
  }
`,Ui=Xr.button`
  all: unset;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1.5rem minmax(0, 1fr);
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  padding: 0.45rem 0.5rem 0.45rem 0.8rem;
  color: rgba(28, 28, 28, 0.7);
  transition: color 0.2s ease, transform 0.2s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -1px;
    top: 0.25rem;
    bottom: 0.25rem;
    width: 2px;
    background: #1b1b1b;
    opacity: 0;
    transform: scaleY(0.4);
    transform-origin: center;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  &:hover,
  &:focus-visible {
    color: #1b1b1b;
  }

  &:focus-visible {
    outline: 2px solid #a33b2f;
    outline-offset: 1px;
  }

  ${e=>e.$active&&Fi}
`,Bi=Xr.span`
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: inherit;
`,Wi=Xr.span`
  display: block;
  font-size: 0.8rem;
  line-height: 1.35;
  color: inherit;
`,Hi=e=>{let{items:t,activeId:n,onSelect:r,variant:a="sidebar"}=e;const{t:o}=la(),i=e=>{if(r)return void r(e);const t=document.getElementById(e);if(t){const e=110,n=t.getBoundingClientRect().top+window.scrollY-e;window.scrollTo({top:n,behavior:"smooth"})}};return 0===t.length?null:"inline"===a?(0,Zr.jsxs)(Ni,{children:[(0,Zr.jsx)(Oi,{children:o("post.onThisPage")}),(0,Zr.jsx)(Ii,{children:t.map(((e,t)=>(0,Zr.jsx)(Mi,{children:(0,Zr.jsxs)(Ui,{type:"button",$active:n===e.id,onClick:()=>i(e.id),children:[(0,Zr.jsx)(Bi,{children:String(t+1).padStart(2,"0")}),(0,Zr.jsx)(Wi,{children:e.title})]})},e.id)))})]}):(0,Zr.jsxs)(Li,{children:[(0,Zr.jsx)(Ai,{children:o("post.onThisPage")}),(0,Zr.jsx)(Di,{children:t.map(((e,t)=>(0,Zr.jsx)(Mi,{children:(0,Zr.jsxs)(Ui,{type:"button",$active:n===e.id,onClick:()=>i(e.id),children:[(0,Zr.jsx)(Bi,{children:String(t+1).padStart(2,"0")}),(0,Zr.jsx)(Wi,{children:e.title})]})},e.id)))})]})},Vi=Xr.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #f8f6f1;
  min-height: 100vh;
`,Ki=Xr.header`
  position: relative;
  width: min(calc(100% - 3rem), 1440px);
  min-height: clamp(24rem, 42vw, 38rem);
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  margin: 0 auto;
  padding: 2rem clamp(1rem, 3vw, 3rem) 3rem;
  color: #f5f0ea;

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    min-height: 0;
    height: auto;
    flex-direction: column;
    align-items: stretch;
    padding: clamp(11rem, 48vw, 14rem) 1.25rem 1rem;
    color: #252a2b;
  }
`,Qi=Xr.div`
  position: absolute;
  inset: -3% -1% -1%;
  background-image:
    linear-gradient(180deg, rgba(15, 18, 20, 0.08) 0%, rgba(15, 18, 20, 0.55) 100%),
    url(${e=>e.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: translate3d(0, ${e=>56*e.$scrollProgress}px, 0)
    scale(${e=>1.08+.04*e.$scrollProgress});
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    will-change: auto;
  }

  @media (max-width: 768px) {
    inset: 0 0 auto;
    height: clamp(11rem, 48vw, 14rem);
    background-image: url(${e=>e.$backgroundImage});
    transform: none;
  }
`,Yi=Xr.div`
  position: relative;
  z-index: 1;
  width: min(100%, 1280px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  transform: translate3d(0, ${e=>18*e.$scrollProgress}px, 0);
  opacity: ${e=>1-.38*e.$scrollProgress};
  transition: opacity 0.15s ease-out;

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    gap: 0.35rem;
    transform: none;
    opacity: 1;
  }
`,Gi=Xr.p`
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
  opacity: 0.9;

  @media (max-width: 768px) {
    display: none;
  }
`,qi=Xr.p`
  display: none;
  margin: 0;
  color: #5b6060;
  font-size: 0.75rem;

  span {
    color: #343a3b;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`,Xi=Xr.h1`
  margin: 0;
  max-width: 780px;
  font-size: clamp(3rem, 5.2vw, 5.5rem);
  line-height: 0.94;
  letter-spacing: -0.025em;
  font-family: Georgia, serif;
  font-weight: 400;

  @media (max-width: 768px) {
    color: #252a2b;
    font-size: clamp(1.9rem, 8vw, 2.35rem);
    line-height: 1.1;
  }
`,Ji=Xr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  color: rgba(245, 240, 234, 0.9);

  @media (max-width: 768px) {
    display: none;
  }
`,Zi=Xr.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    color: #4c504f;
    font-size: 0.63rem;
    letter-spacing: 0.11em;
  }
`,el=Xr.p`
  display: none;
  margin: 0.35rem 0 0.75rem;
  color: #495052;
  font-size: 1rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    display: block;
  }
`,tl=Xr.div`
  width: min(calc(100% - 3rem), 1220px);
  margin: 0 auto;
  padding: 0 0 4rem;

  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 2rem;
  }
`,nl=Xr.section`
  padding: 0 0 1.5rem;
  width: 100%;
`,rl=Xr.p`
  margin: 0;
  color: #4a5051;
  font-size: 1.08rem;
  line-height: 1.65;

  @media (min-width: 769px) {
    max-width: 42rem;
    font-size: 1.18rem;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    padding-bottom: 1.25rem;
    font-size: 0.96rem;
    line-height: 1.6;
  }
`,al=Xr.div`
  display: grid;
  grid-template-columns: minmax(220px, 280px) minmax(0, 740px);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;
  justify-content: center;
  padding-top: 2rem;

  & > div:first-child {
    align-self: stretch;
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(190px, 240px) minmax(0, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-top: 0.75rem;

    & > div:first-child {
      display: none;
    }
  }
`,ol=Xr.div`
  width: 100%;
  min-width: 0;

  & > p {
    padding: 0;
  }

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,il=Xr.aside`
  display: grid;
  gap: 1.25rem;
  align-content: start;
  position: sticky;
  top: 8rem;
  max-height: calc(100vh - 9rem);
  overflow-y: auto;

  @media (max-width: 768px) {
    display: none;
  }
`,ll=Xr.section`
  padding: 1.1rem 1.2rem;
  border: 1px solid rgba(38, 39, 32, 0.1);
  background: rgba(255, 255, 255, 0.48);
`,sl=Xr.h2`
  margin: 0 0 0.9rem;
  color: #333630;
  font-family: Georgia, serif;
  font-size: 1.05rem;
  font-weight: 400;
`,ul=Xr.dl`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
  margin: 0;

  div {
    display: grid;
    gap: 0.2rem;
  }

  dt {
    color: #777a72;
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  dd {
    margin: 0;
    color: #343730;
    font-size: 0.82rem;
    line-height: 1.4;
  }
`,cl=Xr.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: clamp(1rem, 3vw, 3rem);
  margin: 2rem 0 3rem;

  & > :first-child {
    order: ${e=>{let{$reverse:t}=e;return t?2:1}};
  }

  & > :last-child {
    order: ${e=>{let{$reverse:t}=e;return t?1:2}};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;

    & > :first-child,
    & > :last-child {
      order: initial;
    }
  }
`,dl=Xr.blockquote`
  width: min(100%, 920px);
  margin: 4rem auto;
  padding: 0 0 0 1.5rem;
  border-left: 2px solid rgba(25, 27, 29, 0.28);
  color: #262723;
  font-family: 'Darker Grotesque', sans-serif;
  font-size: clamp(2rem, 3.2vw, 3.5rem);
  font-weight: 600;
  line-height: 1.05;

  cite {
    display: block;
    margin-top: 1.2rem;
    font-family: inherit;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 500;
  }
`,fl=Xr.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 1rem;
  width: min(100%, 800px);
  margin: 3rem auto 4.5rem;
  color: rgba(25, 27, 29, 0.58);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &::after {
    content: '';
    height: 1px;
    background: rgba(25, 27, 29, 0.18);
  }
`,pl=Xr.section`
  width: 100%;
  scroll-margin-top: 8rem;
  margin-bottom: 2.5rem;
`,ml=Xr.header`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: baseline;
  gap: 0.55rem;
  margin-bottom: 0.7rem;
`,hl=Xr.span`
  color: #85877f;
  font-family: Georgia, serif;
  font-size: 1rem;
`,gl=Xr.h2`
  margin: 0;
  color: #292e30;
  font-family: Georgia, serif;
  font-size: clamp(1.25rem, 2vw, 1.65rem);
  font-weight: 400;
  line-height: 1.25;
`,vl=Xr.div`
  width: 100%;
`,yl=t=>{var n,r,a,o,i,l,s,u,c,d,f;let{post:p}=t;const{country:m}=Z(),{language:h,t:g}=la(),[v,y]=(0,e.useState)(p||null),[b,x]=(0,e.useState)(!p),[w,S]=(0,e.useState)(null),[k,E]=(0,e.useState)(""),[C,j]=(0,e.useState)(0),_=(0,e.useRef)(null),P=(0,e.useMemo)((()=>{var e;return(null!==(e=null===v||void 0===v?void 0:v.postGallery)&&void 0!==e?e:[]).map((e=>e.flat().filter(Boolean).map((e=>"string"===typeof e?{src:e}:e)))).filter((e=>e.length>0))}),[v]),z=(0,e.useMemo)((()=>P.flat()),[P]),T=(null===v||void 0===v||null===(n=v.hero)||void 0===n?void 0:n.backgroundImage)||(null===v||void 0===v?void 0:v.imageUrl)||(null===(r=z[0])||void 0===r?void 0:r.src)||"";if((0,e.useEffect)((()=>{if(p)return y(p),x(!1),void S(null);if(!m)return S(g("post.noCountry")),void x(!1);(async()=>{try{x(!0),S(null);const e=await ao(m||"",h);y(e)}catch(e){const t=e instanceof Error?e.message:"Failed to load post";console.error("Error fetching post:",t),S(t),y(null)}finally{x(!1)}})()}),[m,p,h,g]),(0,e.useEffect)((()=>{const e=()=>{if(!_.current)return;const e=_.current.getBoundingClientRect().top,t=_.current.offsetHeight,n=Math.min(Math.max(-e/Math.max(.9*t,1),0),1);j(n)};return e(),window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}}),[]),(0,e.useEffect)((()=>{if(!v||0===v.textParagraphs.length)return;const e=v.textParagraphs.map(((e,t)=>document.getElementById(`paragraph-${t}`))).filter((e=>Boolean(e)));if(0===e.length)return;const t=new IntersectionObserver((e=>{const t=e.filter((e=>e.isIntersecting)).sort(((e,t)=>t.intersectionRatio-e.intersectionRatio))[0];t&&E(t.target.id)}),{rootMargin:"-25% 0px -45% 0px",threshold:[.2,.4,.6]});return e.forEach((e=>t.observe(e))),()=>t.disconnect()}),[v]),w)return(0,Zr.jsx)(vl,{children:(0,Zr.jsxs)("div",{style:{color:"red",textAlign:"center"},children:[g("post.loadError")," ",w]})});if(b)return(0,Zr.jsx)(vl,{children:(0,Zr.jsx)("div",{style:{textAlign:"center"},children:g("post.loading")})});if(!v)return(0,Zr.jsx)(vl,{children:(0,Zr.jsx)("div",{style:{textAlign:"center"},children:g("post.notFound")})});const $=v.textParagraphs.map(((e,t)=>({id:`paragraph-${t}`,title:e.paragraphLead}))),R=e=>{E(e);const t=document.getElementById(e);if(!t)return;const n=t.getBoundingClientRect().top+window.scrollY-110;window.scrollTo({top:n,behavior:"smooth"})},L=Array.from({length:v.textParagraphs.length},(()=>[]));P.forEach(((e,t)=>{if(L.length>0){const n=Math.min(L.length-1,Math.floor(t*L.length/P.length));L[n].push(e)}}));const N=ra[v.continent.toLowerCase()],O=N?g(N):v.continent,A=new Date(v.createdAt).toLocaleDateString("PL"===h?"pl-PL":"en-GB",{day:"2-digit",month:"short",year:"numeric"}),D=Math.max(1,Math.floor((new Date(v.tourEnd).getTime()-new Date(v.tourStart).getTime())/864e5)+1),I=Number.isFinite(new Date(v.tourStart).getTime())&&Number.isFinite(new Date(v.tourEnd).getTime()),M=Boolean(null===(a=v.metadata)||void 0===a?void 0:a.some((e=>/duration/i.test(e.label)))),F=Boolean(null===(o=v.metadata)||void 0===o?void 0:o.some((e=>/location/i.test(e.label)))),U=Boolean(null===(i=v.metadata)||void 0===i?void 0:i.some((e=>/travel dates|date range/i.test(e.label))));return(0,Zr.jsxs)(Vi,{children:[(0,Zr.jsxs)(Ki,{ref:_,children:[(0,Zr.jsx)(Qi,{$backgroundImage:T,$scrollProgress:C}),(0,Zr.jsxs)(Yi,{$scrollProgress:C,children:[(0,Zr.jsxs)(Gi,{children:[O.toUpperCase()," \xb7 ",(v.countryLabel||v.country).toUpperCase()]}),(0,Zr.jsxs)(Zi,{children:[(0,Zr.jsx)("span",{children:O.toUpperCase()}),(0,Zr.jsx)("span",{children:"\xb7"}),(0,Zr.jsx)("span",{children:A}),(0,Zr.jsx)("span",{children:"\xb7"}),(0,Zr.jsx)("span",{children:null!==(l=null===(s=v.hero)||void 0===s?void 0:s.readingTime)&&void 0!==l?l:g("post.readingTime")})]}),(0,Zr.jsx)(Xi,{children:v.title}),v.subtitle&&(0,Zr.jsx)(el,{children:v.subtitle}),(0,Zr.jsxs)(Ji,{children:[(0,Zr.jsx)("span",{children:null!==(u=null===(c=v.hero)||void 0===c?void 0:c.readingTime)&&void 0!==u?u:g("post.readingTime")}),(0,Zr.jsx)("span",{children:A}),(0,Zr.jsxs)("span",{children:[g("post.by")," ",v.author]})]}),(0,Zr.jsxs)(qi,{children:[g("post.by")," ",(0,Zr.jsx)("span",{children:v.author})]})]})]}),(0,Zr.jsx)(tl,{children:(0,Zr.jsxs)(al,{children:[(0,Zr.jsxs)(il,{children:[(0,Zr.jsx)(Hi,{items:$,activeId:k,onSelect:R}),((null===(d=v.metadata)||void 0===d?void 0:d.length)||I)&&(0,Zr.jsxs)(ll,{children:[(0,Zr.jsx)(sl,{children:g("post.tripDetails")}),(0,Zr.jsxs)(ul,{children:[I&&!M&&(0,Zr.jsxs)("div",{children:[(0,Zr.jsx)("dt",{children:g("post.duration")}),(0,Zr.jsxs)("dd",{children:[D," ",g("tours.days")]})]}),I&&!U&&(0,Zr.jsxs)("div",{children:[(0,Zr.jsx)("dt",{children:g("post.travelDates")}),(0,Zr.jsxs)("dd",{children:[new Date(v.tourStart).toLocaleDateString("PL"===h?"pl-PL":"en-GB")," \u2013 ",new Date(v.tourEnd).toLocaleDateString("PL"===h?"pl-PL":"en-GB")]})]}),!F&&(0,Zr.jsxs)("div",{children:[(0,Zr.jsx)("dt",{children:g("post.location")}),(0,Zr.jsx)("dd",{children:v.countryLabel||v.country})]}),null===(f=v.metadata)||void 0===f?void 0:f.map((e=>(0,Zr.jsxs)("div",{children:[(0,Zr.jsx)("dt",{children:e.label}),(0,Zr.jsx)("dd",{children:e.value})]},e.label)))]})]})]}),(0,Zr.jsxs)(ol,{children:[(0,Zr.jsx)(nl,{id:"overview",children:(0,Zr.jsx)(rl,{children:v.textLead})}),(0,Zr.jsx)(Hi,{items:$,activeId:k,onSelect:R,variant:"inline"}),v.textParagraphs.map(((t,n)=>{var r,a,o,i;const l=null!==(r=null===(a=$[n])||void 0===a?void 0:a.id)&&void 0!==r?r:`paragraph-${n}`,s=null!==(o=L[n])&&void 0!==o?o:[],u=Math.max(t.paragraphText.length,1),c=Array.from({length:u},(()=>[]));s.forEach(((e,t)=>{const n=Math.min(u-1,Math.floor(t*u/s.length));c[n].push(e)}));const d=(null===(i=v.pullQuotes)||void 0===i?void 0:i[Math.floor(n/2)])||(e=>{var t;const n=null===(t=e.match(/[^.!?]+[.!?]/))||void 0===t?void 0:t[0].trim();return n&&n.length>=100?n:null})(t.paragraphText.join(" "));return(0,Zr.jsxs)(e.Fragment,{children:[(0,Zr.jsxs)(pl,{id:l,children:[(0,Zr.jsxs)(ml,{children:[(0,Zr.jsx)(hl,{children:String(n+1).padStart(2,"0")}),(0,Zr.jsx)(gl,{children:t.paragraphLead})]}),t.paragraphText.map(((t,r)=>{var a;const o=null!==(a=c[r])&&void 0!==a?a:[],i=t.length<420?o.find((e=>1===e.length)):void 0,s=i?o.filter((e=>e!==i)):o;return(0,Zr.jsxs)(e.Fragment,{children:[i?(0,Zr.jsxs)(cl,{$reverse:(n+r)%2===1,children:[(0,Zr.jsx)(Ri,{imagesToDisplay:i,imagesArr:z,layout:"split"}),(0,Zr.jsx)(hi,{text:t,hidden:!1})]}):(0,Zr.jsx)(hi,{text:t,hidden:!1}),s.map(((e,t)=>(0,Zr.jsx)(Ri,{imagesToDisplay:e,imagesArr:z},`${l}-${r}-gallery-${t}`)))]},`${l}-${r}`)})),0===t.paragraphText.length&&s.map(((e,t)=>(0,Zr.jsx)(Ri,{imagesToDisplay:e,imagesArr:z},`${l}-gallery-${t}`)))]}),n%2===1&&d&&(0,Zr.jsxs)(dl,{children:[d,(0,Zr.jsx)("cite",{children:v.author})]}),n<v.textParagraphs.length-1&&(0,Zr.jsxs)(fl,{children:[(0,Zr.jsx)("span",{children:String(n+2).padStart(2,"0")}),(0,Zr.jsx)("span",{children:v.textParagraphs[n+1].paragraphLead})]})]},l)}))]})]})})]})},bl=Xr.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,xl=e=>{let{post:t}=e;return(0,Zr.jsx)(Zr.Fragment,{children:t&&(0,Zr.jsxs)(bl,{children:[(0,Zr.jsx)(yl,{post:t}),(0,Zr.jsx)(Zr.Fragment,{})]})})},wl=Xr.p`
  width: min(calc(100% - 2.5rem), 50rem);
  margin: 8rem auto 4rem;
  color: #55564f;
  text-align: center;
`,Sl=()=>{const[t,n]=(0,e.useState)(null),[r,a]=(0,e.useState)(!0),[o,i]=(0,e.useState)(!1),{language:l,t:s}=la(),{country:u=""}=Z(),[c]=at(),d=c.get("postId");return(0,e.useEffect)((()=>{let e=!0;n(null),a(!0),i(!1);return(async()=>{try{const t=d?(await ro(l)).find((e=>e.id===d&&e.country.toLowerCase()===u.toLowerCase()))||null:await ao(u,l);e&&n(t)}catch(t){console.error(`Error fetching post for ${u}:`,t),e&&(n(null),i(!0))}finally{e&&a(!1)}})(),()=>{e=!1}}),[u,l,d]),(0,Zr.jsx)(Ha,{children:r?(0,Zr.jsx)(wl,{children:s("post.loading")}):o?(0,Zr.jsx)(wl,{role:"alert",children:s("post.loadError")}):t?(0,Zr.jsx)(xl,{post:t}):(0,Zr.jsx)(wl,{children:s("post.notFound")})})},kl="/assets/6761b2f4d2ca643ca99c2d90/header.jpg",El=["North America","South America","Europe","Africa","Asia","Australia"],Cl=Xr.main`
  flex: 1;
  background: #f5f3ed;
  color: #33342d;
`,jl=Xr.section`
  position: relative;
  display: flex;
  min-height: 25rem;
  align-items: flex-end;
  padding: 3rem max(7vw, calc((100vw - 1200px) / 2));
  background-image: linear-gradient(90deg, rgba(20, 25, 22, 0.56), rgba(20, 25, 22, 0.05)),
    linear-gradient(0deg, rgba(20, 25, 22, 0.3), transparent 70%), url('${kl}');
  background-position: center 54%;
  background-size: cover;
  color: white;

  @media (max-width: 700px) {
    min-height: 14rem;
    padding: 1.5rem 1.25rem 1.8rem;
    background-position: center;
  }
`,_l=Xr.div`
  max-width: 41rem;

  & > span {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  & > h1 {
    margin: 0.35rem 0 0;
    font-family: 'Alumni Sans Pinstripe', sans-serif;
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 500;
    line-height: 0.95;
  }

  & > p {
    max-width: 32rem;
    margin: 0.8rem 0 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: 700px) {
    & > span {
      font-size: 0.58rem;
    }

    & > h1 {
      font-size: 3rem;
    }

    & > p {
      max-width: 23rem;
      margin-top: 0.45rem;
      font-size: 0.78rem;
      line-height: 1.45;
    }
  }
`,Pl=Xr.section`
  width: min(100% - 3rem, 1200px);
  margin: 0 auto;
  padding: 4.25rem 0;

  @media (max-width: 700px) {
    width: calc(100% - 2rem);
    padding: 2.5rem 0;
  }
`,zl=Xr.div`
  margin-bottom: 1.5rem;

  & > span {
    color: #a33b2f;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  & > h2 {
    margin: 0.3rem 0 0;
    font-family: 'Alumni Sans Pinstripe', sans-serif;
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 500;
    line-height: 1;
  }

  & > p {
    max-width: 36rem;
    margin: 0.55rem 0 0;
    color: #6f7069;
    font-size: 0.9rem;
    line-height: 1.6;
  }
`,Tl=Xr(Pl)`
  padding-top: 0.5rem;
`,$l=Xr.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }
`,Rl=Xr(Ze)`
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  color: inherit;
  text-decoration: none;
  transition: box-shadow 180ms ease, transform 180ms ease;

  &:hover {
    box-shadow: 0 12px 30px rgba(35, 37, 26, 0.12);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #a33b2f;
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Ll=Xr.img`
  width: 100%;
  height: 13.5rem;
  object-fit: cover;

  @media (max-width: 600px) {
    height: 12.5rem;
  }
`,Nl=Xr.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1rem 1.1rem 1.2rem;

  & > span {
    color: #8c7564;
    font-size: 0.63rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  & > h3 {
    margin: 0.45rem 0 0;
    font-family: 'Alumni Sans Pinstripe', sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.05;
  }

  & > p {
    display: -webkit-box;
    overflow: hidden;
    margin: 0.45rem 0 0;
    color: #6f7069;
    font-size: 0.82rem;
    line-height: 1.5;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`,Ol=Xr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.9rem;
  margin-top: 0.85rem;
  color: #777870;
  font-size: 0.68rem;
`,Al=Xr.p`
  grid-column: 1 / -1;
  margin: 1rem 0;
  color: #6f7069;
  text-align: center;
`,Dl=Xr(Al)`
  color: #9c342a;
`,Il=Xr.section`
  display: grid;
  min-height: 17rem;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  overflow: hidden;
  background: #e8e4d8;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,Ml=Xr.div`
  padding: 3rem max(2rem, calc((100vw - 1100px) / 2));

  & > span {
    color: #a33b2f;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  & > h2 {
    max-width: 32rem;
    margin: 0.5rem 0 0;
    font-family: 'Alumni Sans Pinstripe', sans-serif;
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 500;
    line-height: 1.05;
  }

  & > p {
    max-width: 33rem;
    margin: 0.7rem 0 1.2rem;
    color: #65665f;
    font-size: 0.88rem;
    line-height: 1.6;
  }

  @media (max-width: 700px) {
    padding: 2rem 1.25rem;
  }
`,Fl=Xr(Ze)`
  display: inline-flex;
  min-height: 2.8rem;
  align-items: center;
  justify-content: center;
  padding: 0 1.3rem;
  background: #a33b2f;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background: #853127;
  }

  &:focus-visible {
    outline: 2px solid #33342d;
    outline-offset: 3px;
  }
`,Ul=Xr.div`
  min-height: 17rem;
  align-self: stretch;
  background: url('${kl}') center 58% / cover no-repeat;

  @media (max-width: 700px) {
    min-height: 10rem;
    grid-row: 1;
  }
`,Bl=()=>{const{language:t,t:n}=la(),[r,a]=(0,e.useState)([]),[o,i]=(0,e.useState)(!0),[l,s]=(0,e.useState)(null);(0,e.useEffect)((()=>{let e=!0;return(async()=>{i(!0),s(null);try{const n=await ro(t);e&&a(n)}catch(n){const t=n instanceof Error?n.message:"Failed to load tours";console.error("Error fetching tours:",t),e&&(a([]),s(t))}finally{e&&i(!1)}})(),()=>{e=!1}}),[t]);const u=(0,e.useMemo)((()=>r.reduce(((e,t)=>{const n=t.continent.toLowerCase();return e[n]=(e[n]||0)+1,e}),{})),[r]),c=u.antarctica?[...El,"Antarctica"]:El,d=(0,e.useMemo)((()=>[...r].slice(0,6)),[r]);return(0,Zr.jsx)(Ha,{children:(0,Zr.jsxs)(Cl,{children:[(0,Zr.jsx)(jl,{children:(0,Zr.jsxs)(_l,{children:[(0,Zr.jsx)("span",{children:n("tours.heroEyebrow")}),(0,Zr.jsx)("h1",{children:n("nav.tours")}),(0,Zr.jsx)("p",{children:n("tours.heroDescription")})]})}),(0,Zr.jsxs)(Pl,{children:[(0,Zr.jsxs)(zl,{children:[(0,Zr.jsx)("span",{children:n("tours.discoverEyebrow")}),(0,Zr.jsx)("h2",{children:n("tours.byContinents")}),(0,Zr.jsx)("p",{children:n("tours.continentsDescription")})]}),(0,Zr.jsx)(Ja,{continents:c,counts:u,variant:"tours"})]}),(0,Zr.jsxs)(Tl,{id:"popular-tours",children:[(0,Zr.jsxs)(zl,{children:[(0,Zr.jsx)("span",{children:n("tours.popularEyebrow")}),(0,Zr.jsx)("h2",{children:n("tours.popularTitle")}),(0,Zr.jsx)("p",{children:n("tours.popularDescription")})]}),(0,Zr.jsx)($l,{children:o?(0,Zr.jsx)(Al,{children:n("tours.loading")}):l?(0,Zr.jsxs)(Dl,{children:[n("tours.loadError")," ",l]}):d.length?d.map((e=>{const t=(e=>{const t=new Date(e.tourStart).getTime(),n=new Date(e.tourEnd).getTime();return!Number.isFinite(t)||!Number.isFinite(n)||n<t?null:Math.floor((n-t)/864e5)+1})(e);return(0,Zr.jsxs)(Rl,{to:`/tours/details/${encodeURIComponent(e.country.toLowerCase())}?postId=${encodeURIComponent(e.id)}`,children:[(0,Zr.jsx)(Ll,{src:e.imageUrl||kl,alt:e.title,loading:"lazy",onError:e=>{e.currentTarget.getAttribute("src")!==kl&&(e.currentTarget.src=kl)}}),(0,Zr.jsxs)(Nl,{children:[(0,Zr.jsx)("span",{children:e.countryLabel||e.country}),(0,Zr.jsx)("h3",{children:e.title}),e.subtitle&&(0,Zr.jsx)("p",{children:e.subtitle}),(0,Zr.jsxs)(Ol,{children:[t&&(0,Zr.jsxs)("span",{children:[t," ",n("tours.days")]}),(0,Zr.jsx)("span",{children:e.continent})]})]})]},e.id)})):(0,Zr.jsx)(Al,{children:n("tours.noPopularTours")})})]}),(0,Zr.jsxs)(Il,{children:[(0,Zr.jsxs)(Ml,{children:[(0,Zr.jsx)("span",{children:n("tours.plannerEyebrow")}),(0,Zr.jsx)("h2",{children:n("tours.plannerTitle")}),(0,Zr.jsx)("p",{children:n("tours.plannerDescription")}),(0,Zr.jsx)(Fl,{to:"/contact",children:n("tours.plannerAction")})]}),(0,Zr.jsx)(Ul,{role:"img","aria-label":n("home.aboutImageAlt")})]})]})})},Wl=["North America","South America","Europe","Africa","Asia","Australia"],Hl=Xr.main`
  flex: 1;
  background: #f5f3ed;
  color: #33342d;
`,Vl=Xr.section`
  width: min(100% - 3rem, 1200px);
  margin: 0 auto;
  padding: 3rem 0;

  @media (max-width: 700px) {
    width: calc(100% - 2rem);
    padding: 2rem 0;
  }
`,Kl=Xr.div`
  margin-bottom: 1.5rem;

  & > span {
    color: #a33b2f;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  & > h1,
  & > h2 {
    margin: 0.35rem 0 0;
    font-family: 'Alumni Sans Pinstripe', sans-serif;
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 500;
    line-height: 1;
  }

  & > p {
    max-width: 36rem;
    margin: 0.55rem 0 0;
    color: #6f7069;
    font-size: 0.9rem;
    line-height: 1.6;
  }
`,Ql=Xr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 1rem 0 0;
`,Yl=Xr.button`
  min-height: 2.5rem;
  padding: 0.55rem 1rem;
  border: 1px solid ${e=>{let{$active:t}=e;return t?"#a33b2f":"#d8d5ca"}};
  border-radius: 999px;
  background: ${e=>{let{$active:t}=e;return t?"#a33b2f":"transparent"}};
  color: ${e=>{let{$active:t}=e;return t?"#fff":"#45463f"}};
  cursor: pointer;
  font: inherit;
  font-size: 0.78rem;
  transition: background-color 160ms ease, color 160ms ease, border-color 160ms ease;

  &:hover {
    border-color: #a33b2f;
  }

  &:focus-visible {
    outline: 2px solid #33342d;
    outline-offset: 3px;
  }
`,Gl=Xr.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }
`,ql=Xr.p`
  grid-column: 1 / -1;
  margin: 1rem 0;
  color: #6f7069;
  text-align: center;
`,Xl=Xr(ql)`
  color: #9c342a;
`,Jl=()=>{const[t,n]=(0,e.useState)([]),[r,a]=(0,e.useState)([]),[o,i]=(0,e.useState)(!0),[l,s]=(0,e.useState)(null),{continent:u}=Z(),{language:c,t:d}=la(),f=u?u.toLowerCase():"",p=u?d(ra[f]||"tours.postsFrom"):"";(0,e.useEffect)((()=>{let e=!0;return(async()=>{i(!0),s(null),n([]),a([]);try{const t=await ro(c);e&&n(t)}catch(t){const r=t instanceof Error?t.message:"Failed to load tours";console.error("Error fetching tours:",r),e&&(n([]),s(r))}finally{e&&i(!1)}})(),()=>{e=!1}}),[c]),(0,e.useEffect)((()=>{a([])}),[f]);const m=(0,e.useMemo)((()=>t.filter((e=>e.continent.toLowerCase()===f))),[t,f]),h=(0,e.useMemo)((()=>{const e=new Map;return m.forEach((t=>{const n=t.country.toLowerCase();e.has(n)||e.set(n,t.countryLabel||t.country)})),Array.from(e.entries())}),[m]),g=0===r.length?m:m.filter((e=>r.includes(e.country.toLowerCase()))),v=(0,e.useMemo)((()=>[...g].sort(((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()))),[g]),y=(0,e.useMemo)((()=>t.reduce(((e,t)=>{const n=t.continent.toLowerCase();return e[n]=(e[n]||0)+1,e}),{})),[t]),b=y.antarctica?[...Wl,"Antarctica"]:Wl;return(0,Zr.jsx)(Ha,{children:(0,Zr.jsxs)(Hl,{children:[(0,Zr.jsxs)(Vl,{children:[(0,Zr.jsxs)(Kl,{children:[(0,Zr.jsx)("span",{children:d("tours.discoverEyebrow")}),(0,Zr.jsxs)("h1",{children:[d("tours.postsFrom")," ",p]}),(0,Zr.jsx)("p",{children:d("tours.continentsDescription")})]}),(0,Zr.jsx)(Ja,{continents:b,counts:y,variant:"tours"})]}),(0,Zr.jsxs)(Vl,{children:[(0,Zr.jsxs)(Kl,{children:[(0,Zr.jsx)("span",{children:d("tours.discoverEyebrow")}),(0,Zr.jsx)("h2",{children:d("tours.chooseCountry")})]}),!o&&!l&&(0,Zr.jsx)(Ql,{children:h.length?h.map((e=>{let[t,n]=e;const o=r.includes(t);return(0,Zr.jsx)(Yl,{type:"button",$active:o,"aria-pressed":o,onClick:()=>{return e=t,void a((t=>t.includes(e)?t.filter((t=>t!==e)):[...t,e]));var e},children:n},t)})):(0,Zr.jsx)(ql,{children:d("tours.noCountries")})})]}),(0,Zr.jsxs)(Vl,{children:[(0,Zr.jsxs)(Kl,{children:[(0,Zr.jsx)("span",{children:d("tours.popularEyebrow")}),(0,Zr.jsxs)("h2",{children:[d("tours.postsFrom")," ",p]})]}),(0,Zr.jsx)(Gl,{children:o?(0,Zr.jsx)(ql,{children:d("tours.loading")}):l?(0,Zr.jsxs)(Xl,{children:[d("tours.loadError")," ",l]}):v.length?v.map((e=>(0,Zr.jsx)(_o,{post:e,variant:"grid"},e.id))):(0,Zr.jsx)(ql,{children:r.length?d("tours.noSelectedTours"):d("tours.noTours")})})]})]})})},Zl=Xr.div`
  padding-left: 1.5rem;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 600;
  font-family: 'Alumni Sans Pinstripe', sans-serif;

  @media (max-width: 768px) {
    padding-left: 1rem;
    font-size: 1.6rem;
  }
`,es=e=>{let{content:t}=e;return(0,Zr.jsx)(Zl,{children:t})},ts=Xr.main`
  width: 100%;
  padding: 3rem 5rem 3rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem 2rem;
  }
`,ns=Xr.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 2rem;
  padding: 2rem 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 1rem 0;
  }
`,rs=Xr.p`
  padding: 1rem 1.5rem;
`,as=()=>{var t;const[n]=at(),r=(null===(t=n.get("country"))||void 0===t?void 0:t.trim())||"",{language:a,t:o}=la(),[i,l]=(0,e.useState)([]),[s,u]=(0,e.useState)(!1),[c,d]=(0,e.useState)(null);return(0,e.useEffect)((()=>{let e=!0;return(async()=>{if(l([]),d(null),r){u(!0);try{const t=await async function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EN";const r=new URLSearchParams({country:e}),a=await fetch(`${Za}/api/v1/posts?${r.toString()}`,{method:"get",headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`HTTP ${a.status}`);if(!(a.headers.get("content-type")||"").includes("application/json"))throw new Error("Non-JSON response");const o=await a.json();return(Array.isArray(o)?o:null!==(t=o.posts)&&void 0!==t?t:[]).map((e=>to(e,n)))}(r,a);e&&l(t)}catch(t){const n=t instanceof Error?t.message:"Unknown error";console.error(`Error fetching posts for ${r}:`,n),e&&d(n)}finally{e&&u(!1)}}else u(!1)})(),()=>{e=!1}}),[r,a]),(0,Zr.jsx)(Ha,{children:(0,Zr.jsxs)(ts,{children:[(0,Zr.jsx)(es,{content:`${o("posts.countryTitle")} ${r}`}),s?(0,Zr.jsx)(rs,{children:o("posts.loading")}):c?(0,Zr.jsxs)(rs,{role:"alert",children:[o("posts.loadError")," ",c]}):r?0===i.length?(0,Zr.jsx)(rs,{children:o("posts.none")}):(0,Zr.jsx)(ns,{children:i.map((e=>(0,Zr.jsx)(_o,{post:e},e.id)))}):(0,Zr.jsx)(rs,{children:o("posts.noCountry")})]})})},os=()=>(0,Zr.jsx)(ia,{children:(0,Zr.jsx)("div",{className:"App",children:(0,Zr.jsx)(Xe,{basename:"/",children:(0,Zr.jsxs)(ge,{children:[(0,Zr.jsx)(me,{path:"/",element:(0,Zr.jsx)(di,{})}),(0,Zr.jsx)(me,{path:"/tours",element:(0,Zr.jsx)(Bl,{})}),(0,Zr.jsx)(me,{path:"/tours/continent/:continent",element:(0,Zr.jsx)(Jl,{})}),(0,Zr.jsx)(me,{path:"/tours/details/:country",element:(0,Zr.jsx)(Sl,{})}),(0,Zr.jsx)(me,{path:"/posts",element:(0,Zr.jsx)(as,{})}),(0,Zr.jsx)(me,{path:"/cooperation",element:(0,Zr.jsx)(fi,{})}),(0,Zr.jsx)(me,{path:"/contact",element:(0,Zr.jsx)(pi,{})}),(0,Zr.jsx)(me,{path:"/about-us",element:(0,Zr.jsx)(Va,{})})]})})})}),is=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:o,getTTFB:i}=t;n(e),r(e),a(e),o(e),i(e)}))};t.createRoot(document.getElementById("root")).render((0,Zr.jsx)(e.StrictMode,{children:(0,Zr.jsx)(os,{})})),is()})()})();
//# sourceMappingURL=main.67eb4657.js.map