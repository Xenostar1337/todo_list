(()=>{"use strict";var e={72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],l=0;l<e.length;l++){var d=e[l],c=o.base?d[0]+o.base:d[0],s=a[c]||0,u="".concat(c," ").concat(s);a[c]=s+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var y=r(m,o);o.byIndex=l,t.splice(l,0,{identifier:u,updater:y,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=n(a[i]);t[l].references--}for(var d=o(e,r),c=0;c<a.length;c++){var s=n(a[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=d}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{n.p,n.p;var e=n(72),t=n.n(e),o=n(825),r=n.n(o),a=n(659),i=n.n(a),l=n(56),d=n.n(l),c=n(540),s=n.n(c),u=n(113),p=n.n(u);const m=n.p+"styles.css";var y={};function f(){var e,t,n,o,r,a;document.getElementById("logo").style.width="250px",(e=document.getElementById("header")).style.flex="0",e.style.display="flex",e.style.justifyContent="space-between",e.style.alignItems="center",e.style.width="70vw",e.style.marginBottom="auto",e.style.marginRight="auto",e.style.marginLeft="auto",e.style.borderBottom="2px solid black",e.style.minHeight="fit-content",t=document.getElementById("features"),n=document.getElementById("support"),o=document.getElementById("home"),r=document.getElementById("login"),a=document.getElementById("nav"),t.style.background="none",n.style.background="none",o.style.background="none",r.style.background="none",t.style.border="none",n.style.border="none",o.style.border="none",t.style.fontSize="28px",n.style.fontSize="28px",o.style.fontSize="28px",r.style.color="orange",r.style.borderColor="orange",r.style.padding="10px",r.style.textShadow="-2px -2px 1px black",r.style.textShadow="2px 2px 1px black",r.style.borderRadius="50%",r.style.fontSize="30px",r.style.border="5px solid orange",r.style.boxShadow="2px 2px 1px black",a.style.width="40%",a.style.display="flex",a.style.justifyContent="space-around",function(){var e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("div");t.style.alignSelf="center",t.style.justifySelf="center",t.style.display="grid",t.style.justifyContent="center",t.style.width="400px",n.textContent="All your tasks",n.style.fontSize="60px",n.style.marginTop="5%",n.style.marginLeft="auto",n.style.marginRight="auto",n.style.justifySelf="center";var o=document.createElement("div");o.textContent="Organized. Simply.",o.style.fontSize="40px",o.style.marginLeft="auto",o.style.marginRight="auto",o.style.justifySelf="center";var r=document.createElement("button");r.textContent="Sign up",r.id="signup";var a=document.createElement("img");a.src="./images/sticknotes.jpg",a.style.width="100%",a.style.marginTop="0%",a.id="stickies",document.body.style.display="flex",document.body.style.flexDirection="column",document.body.style.alignItems="center",document.body.style.justifyContent="center",e.appendChild(t),t.appendChild(n),t.appendChild(o),t.appendChild(r),document.body.appendChild(a)}()}function g(){var e=document.getElementById("content"),t=e.querySelectorAll("div"),n=e.querySelectorAll("button"),o=document.getElementById("stickies");o&&o.remove(),t.length>0&&t.forEach((function(e){e.remove()})),n.length>""&&n.forEach((function(e){e.remove()}))}function v(e){document.getElementById("header");var t=document.getElementById("login"),n=document.getElementById("features"),o=document.getElementById("support"),r=document.getElementById("home");t.style.fontSize="34px",t.style.border="none",t.style.boxShadow="none",t.textContent=e+": Sign out",r.textContent="Add Project",n.style.display="none",o.style.display="none"}function h(e,t,n,o){return{name:e,email:t,alias:n,password:o}}function E(e){var t=document.getElementById("content");t.innerHTML="";for(var n=0;n<e.length;n++){var o=e[n],r=document.createElement("div");r.id="project"+n,r.classList.add("project");var a=document.createElement("input");a.type="text",a.value=o.name,a.classList.add("projectName"),r.appendChild(a);for(var i=0;i<o.tasks.length;i++){var l=o.tasks[i].description[0];console.log(o.name),console.log(o.tasks[i].description[1]);var d=document.createElement("div");d.classList.add("task-container");var c=document.createElement("input");c.type="checkbox",c.classList.add("task-checkbox"),1==o.tasks[i].description[1]&&(c.checked="true");var s=document.createElement("input");s.type="text",s.value=l,s.classList.add("task-input"),d.appendChild(c),d.appendChild(s),r.appendChild(d)}var u=document.createElement("div");u.style.display="flex",u.style.justifyContent="space-between",r.appendChild(u);for(var p=["Add Task","Priority low","Save","Del"],m=0;m<p.length;m++){var y=document.createElement("button");y.textContent=p[m],y.id="p"+n+(m+1),y.classList.add("project-button"),u.appendChild(y)}t.appendChild(r)}}function x(e,t,n){return{name:e,priority:t,tasks:n.map((function(e){return{description:e,checked:!1}}))}}y.styleTagTransform=p(),y.setAttributes=d(),y.insert=i().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=s(),t()(m,y);var b,C,S,w,k=document.getElementById("features"),I=document.getElementById("support"),B=document.getElementById("home"),j=document.getElementById("login"),T=!1,L=[],z=1;function A(){document.getElementById("signup").addEventListener("click",(function(){g(),function(){var e=document.createElement("div");e.classList.add("signup-container");var t=document.createElement("form");t.classList.add("signup-form"),t.style.fontSize="35px",t.style.display="grid",t.style.gap="10px",t.style.justifyContent="center",t.style.alignContent="center",t.style.border="2px solid green",t.style.padding="4px",t.style.marginTop="20px";var n=document.createElement("label");n.textContent="Name:";var o=document.createElement("input");o.type="text",o.placeholder="Enter your name",o.required=!0,o.style.fontSize="30px",o.id="name";var r=document.createElement("label");r.textContent="Email:";var a=document.createElement("input");a.type="email",a.placeholder="Enter your email",a.required=!0,a.style.fontSize="30px",a.id="email";var i=document.createElement("label");i.textContent="Username:";var l=document.createElement("input");l.type="text",l.placeholder="Create a username",l.required=!0,l.style.fontSize="30px",l.id="alias";var d=document.createElement("label");d.textContent="Password:";var c=document.createElement("input");c.type="password",c.placeholder="Create a password",c.required=!0,c.style.fontSize="30px",c.id="password";var s=document.createElement("button");s.id="submitButton",s.textContent="Sign Up",s.style.fontSize="30px",s.style.width="fit-content";var u=document.getElementById("content");t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(i),t.appendChild(l),t.appendChild(d),t.appendChild(c),t.appendChild(s),e.appendChild(t),e.appendChild(s),u.appendChild(e)}(),document.getElementById("submitButton").addEventListener("click",(function(e){if(b=document.getElementById("name").value,C=document.getElementById("email").value,S=document.getElementById("alias").value,w=document.getElementById("password").value,""!=b&&""!==C&&""!==S&&""!==w){T=!0,g();h(b,C,S,w);L.push(x("Project "+z,"low",[["Task",!1]])),z++,v(S),E(L),P()}}))}))}function P(){document.getElementById("content").querySelectorAll("div").forEach((function(e){!function(e){e.querySelectorAll("button").forEach((function(e){e.addEventListener("click",(function(){console.log("Button id that was pressed:",e.id)}))}))}(e)}))}B.addEventListener("click",(function(){0==T?(g(),f(),A()):(console.log("clicked"),L.push(x("Project "+z,"low",[["Task",!1]])),z++,E(L),P())})),k.addEventListener("click",(function(){0==T&&(g(),function(){var e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("ul");["Task Creation","Task Management","Categories or Tags","Priority Sorting","Reminders and Notifications","Collaboration","Customization","Data Syncing","Export and Import","Accessibility"].forEach((function(e){var t=document.createElement("li");t.textContent=e,t.style.fontSize="32px",n.appendChild(t)})),t.appendChild(n),e.appendChild(t);var o=document.createElement("img");o.src="./images/sticknotes.jpg",o.style.width="100%",o.style.marginTop="0%",o.id="stickies",document.body.appendChild(o)}())})),I.addEventListener("click",(function(){0==T&&(g(),function(){var e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("ul");["555-555-5555","SimplySupport@SimplyOrganized.com"].forEach((function(e){var t=document.createElement("li");t.textContent=e,t.style.fontSize="32px",n.appendChild(t)})),t.appendChild(n),e.appendChild(t);var o=document.createElement("img");o.src="./images/sticknotes.jpg",o.style.width="100%",o.style.marginTop="0%",o.id="stickies",document.body.appendChild(o)}())})),j.addEventListener("click",(function(){0==T?(g(),T=!0,h("adam","j@j.com","Gerome","1234"),L.push(x("Project "+z,"low",[["Task",!0]])),z++,v("Gerome"),E(L),P()):window.confirm("Are you sure you want to logout?")&&(T=!1,location.reload())})),g(),f(),A()})()})();