import{bg as C,i as x,bh as M}from"./index-BGBiAn3r.js";var N=/\s/;function B(e){for(var n=e.length;n--&&N.test(e.charAt(n)););return n}var R=/^\s+/;function $(e){return e&&e.slice(0,B(e)+1).replace(R,"")}var E=NaN,F=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,j=/^0o[0-7]+$/i,D=parseInt;function S(e){if(typeof e=="number")return e;if(C(e))return E;if(x(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=x(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=$(e);var t=_.test(e);return t||j.test(e)?D(e.slice(2),t?2:8):F.test(e)?E:+e}var v=function(){return M.Date.now()},H="Expected a function",P=Math.max,U=Math.min;function q(e,n,t){var s,c,l,u,i,f,d=0,I=!1,o=!1,T=!0;if(typeof e!="function")throw new TypeError(H);n=S(n)||0,x(t)&&(I=!!t.leading,o="maxWait"in t,l=o?P(S(t.maxWait)||0,n):l,T="trailing"in t?!!t.trailing:T);function b(r){var a=s,m=c;return s=c=void 0,d=r,u=e.apply(m,a),u}function W(r){return d=r,i=setTimeout(g,n),I?b(r):u}function L(r){var a=r-f,m=r-d,y=n-a;return o?U(y,l-m):y}function k(r){var a=r-f,m=r-d;return f===void 0||a>=n||a<0||o&&m>=l}function g(){var r=v();if(k(r))return p(r);i=setTimeout(g,L(r))}function p(r){return i=void 0,T&&s?b(r):(s=c=void 0,u)}function O(){i!==void 0&&clearTimeout(i),d=0,s=f=c=i=void 0}function A(){return i===void 0?u:p(v())}function h(){var r=v(),a=k(r);if(s=arguments,c=this,f=r,a){if(i===void 0)return W(f);if(o)return clearTimeout(i),i=setTimeout(g,n),b(f)}return i===void 0&&(i=setTimeout(g,n)),u}return h.cancel=O,h.flush=A,h}const z=e=>{let n="";switch(e){case 1:n="初级";break;case 2:n="中级";break;case 3:n="高级";break;default:n=""}return n};export{q as d,z as i,S as t};
