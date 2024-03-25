(()=>{"use strict";var e={};function t(){var e,t,n,o,l,d;document.body.style.height="95vh",document.getElementById("logo").style.width="250px",(e=document.getElementById("header")).style.flex="0",e.style.display="flex",e.style.justifyContent="space-between",e.style.alignItems="center",e.style.width="70vw",e.style.marginBottom="auto",e.style.marginRight="auto",e.style.marginLeft="auto",e.style.borderBottom="2px solid black",e.style.minHeight="fit-content",t=document.getElementById("features"),n=document.getElementById("support"),o=document.getElementById("home"),l=document.getElementById("login"),d=document.getElementById("nav"),t.style.background="none",n.style.background="none",o.style.background="none",l.style.background="none",t.style.border="none",n.style.border="none",o.style.border="none",t.style.fontSize="28px",n.style.fontSize="28px",o.style.fontSize="28px",l.style.color="orange",l.style.borderColor="orange",l.style.padding="10px",l.style.textShadow="-2px -2px 1px black",l.style.textShadow="2px 2px 1px black",l.style.borderRadius="50%",l.style.fontSize="30px",l.style.border="5px solid orange",l.style.boxShadow="2px 2px 1px black",d.style.width="40%",d.style.display="flex",d.style.justifyContent="space-around",function(){var e=document.getElementById("content"),t=document.createElement("div");t.textContent="All your tasks",t.style.fontSize="60px",t.style.marginTop="5%";var n=document.createElement("div");n.textContent="Organized. Simply.",n.style.fontSize="40px";var o=document.createElement("button");o.textContent="Sign up",o.style.fontSize="36px",o.style.borderRadius="50%",o.style.padding="20px",o.style.backgroundColor="orange",o.style.border="5px solid black",o.style.marginBottom="auto",o.style.marginTop="25px",o.id="signup";var l=document.createElement("img");l.src="./images/sticknotes.jpg",l.style.width="100%",l.style.marginTop="0%",l.id="stickies",e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center",e.style.justifyContent="center",e.style.marginBottom="auto",document.body.style.display="flex",document.body.style.flexDirection="column",document.body.style.alignItems="center",document.body.style.justifyContent="center",e.appendChild(t),e.appendChild(n),e.appendChild(o),document.body.appendChild(l)}()}function n(){var e=document.getElementById("content"),t=e.querySelectorAll("div"),n=e.querySelectorAll("button"),o=document.getElementById("stickies");o&&o.remove(),t.length>0&&t.forEach((function(e){e.remove()})),n.length>""&&n.forEach((function(e){e.remove()}))}function o(e){document.getElementById("header");var t=document.getElementById("login"),n=document.getElementById("features"),o=document.getElementById("support");document.getElementById("home"),t.style.fontSize="34px",t.style.border="none",t.style.boxShadow="none",t.textContent=e+": Sign out",n.textContent="Add Project",o.textContent="Add Task"}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var l=o.length-1;l>-1&&(!t||!/^http(s?):/.test(t));)t=o[l--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.p,e.p;var l,d,i,a,r=document.getElementById("features"),c=document.getElementById("support"),s=document.getElementById("home"),m=document.getElementById("login"),u=!1;function p(){document.getElementById("signup").addEventListener("click",(function(){n(),function(){var e=document.createElement("div");e.classList.add("signup-container");var t=document.createElement("form");t.classList.add("signup-form"),t.style.fontSize="35px",t.style.display="grid",t.style.gap="10px",t.style.justifyContent="center",t.style.alignContent="center",t.style.border="2px solid green",t.style.padding="4px";var n=document.createElement("label");n.textContent="Name:";var o=document.createElement("input");o.type="text",o.placeholder="Enter your name",o.required=!0,o.style.fontSize="30px",o.id="name";var l=document.createElement("label");l.textContent="Email:";var d=document.createElement("input");d.type="email",d.placeholder="Enter your email",d.required=!0,d.style.fontSize="30px",d.id="email";var i=document.createElement("label");i.textContent="Username:";var a=document.createElement("input");a.type="text",a.placeholder="Create a username",a.required=!0,a.style.fontSize="30px",a.id="alias";var r=document.createElement("label");r.textContent="Password:";var c=document.createElement("input");c.type="password",c.placeholder="Create a password",c.required=!0,c.style.fontSize="30px",c.id="password";var s=document.createElement("button");s.id="submitButton",s.textContent="Sign Up",s.style.fontSize="30px",s.style.width="fit-content";var m=document.getElementById("content");t.appendChild(n),t.appendChild(o),t.appendChild(l),t.appendChild(d),t.appendChild(i),t.appendChild(a),t.appendChild(r),t.appendChild(c),t.appendChild(s),e.appendChild(t),e.appendChild(s),m.appendChild(e)}(),document.getElementById("submitButton").addEventListener("click",(function(e){l=document.getElementById("name").value,d=document.getElementById("email").value,i=document.getElementById("alias").value,a=document.getElementById("password").value,""!=l&&""!==d&&""!==i&&""!==a&&(u=!0,n(),o(i))}))}))}s.addEventListener("click",(function(){0==u&&(n(),t(),p())})),r.addEventListener("click",(function(){0==u&&(n(),function(){var e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("ul");["Task Creation","Task Management","Categories or Tags","Priority Sorting","Reminders and Notifications","Collaboration","Customization","Data Syncing","Export and Import","Accessibility"].forEach((function(e){var t=document.createElement("li");t.textContent=e,t.style.fontSize="32px",n.appendChild(t)})),t.appendChild(n),e.appendChild(t);var o=document.createElement("img");o.src="./images/sticknotes.jpg",o.style.width="100%",o.style.marginTop="0%",o.id="stickies",document.body.appendChild(o)}())})),c.addEventListener("click",(function(){0==u&&(n(),function(){var e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("ul");["555-555-5555","SimplySupport@SimplyOrganized.com"].forEach((function(e){var t=document.createElement("li");t.textContent=e,t.style.fontSize="32px",n.appendChild(t)})),t.appendChild(n),e.appendChild(t);var o=document.createElement("img");o.src="./images/sticknotes.jpg",o.style.width="100%",o.style.marginTop="0%",o.id="stickies",document.body.appendChild(o)}())})),m.addEventListener("click",(function(){0==u?(n(),u=!0,o("Xenostar")):window.confirm("Are you sure you want to logout?")&&(u=!1,location.reload())})),n(),t(),p()})();