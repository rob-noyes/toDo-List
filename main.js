(()=>{"use strict";function e(e){const t=document.createElement("section");return t.setAttribute("id",e),t}!function(){const t=document.querySelector("#content"),n=function(e){const t=document.createElement("header");return t.setAttribute("id","header"),t}();t.appendChild(n);const c=function(e,t){const n=document.createElement("div");n.setAttribute("id","headerElement");const c=document.createElement("i");c.setAttribute("class","fa fa-home"),n.appendChild(c);const d=document.createElement("h1");return d.textContent="ToDo List",n.appendChild(d),n}();n.appendChild(c);const d=e("contentArea");t.appendChild(d);const o=e("sideBar");d.appendChild(o);const i=e("tasks");d.appendChild(i)}()()})();