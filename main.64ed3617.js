parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";function e(e){return r(e)||a(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return s(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function r(e){if(Array.isArray(e))return s(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}var o=document.querySelector("table"),l=document.querySelector("thead tr"),c=l.querySelectorAll("th"),i=document.querySelector("tbody"),u=e(i.querySelectorAll("tr")),d=document.createElement("form"),p=document.createElement("button");d.classList.add("new-employee-form"),d.method="post",d.action="#",document.body.append(d);for(var m=function(e){var t=document.createElement("label"),n=c[e].innerText.toLowerCase();if(d.append(t),"Office"===c[e].innerText){var a=document.createElement("select");t.append("".concat(c[e].innerText,":"),a),a.dataset.qa=c[e].innerText.toLowerCase(),a.value=c[e].innerText.toLowerCase();var r=[];return u.forEach(function(t){r.includes(t.cells[e].innerHTML)||r.push(t.cells[e].innerHTML)}),r.forEach(function(e){var t=document.createElement("option");t.value=e,t.textContent=e,a.append(t)}),1}var s=document.createElement("input");s.name=n,s.dataset.qa=n,s.value=s.textContent,t.append("".concat(c[e].innerText,":"),s),"name"!==s.name&&"position"!==s.name||(s.type="text"),"age"!==s.name&&"salary"!==s.name||(s.type="number")},f=0;f<c.length;f++)m(f);p.innerText="Save to table",p.type="submit",d.append(p),p.addEventListener("click",function(e){if(e.preventDefault(),d.elements.name.value.trim().length>=4&&d.elements.position.value.trim().length>=4&&parseInt(d.elements.age.value)>=18&&parseInt(d.elements.age.value)<=90){for(var t=i.insertRow(),n=0;n<i.rows[0].cells.length;n++)t.insertCell(),"salary"!==d.elements[n].name?t.cells[n].textContent=d.elements[n].value:t.cells[n].textContent="$".concat(Number(d.elements[n].value).toLocaleString("en-US"));L("Title of Success message","Notification should contain title and description.","success")}else L("Error!","Notification should contain title and description.","error")});var v,L=function(e,t,n){var a=document.createElement("div"),r=document.createElement("h2"),s=document.createElement("p");a.dataset.qa="notification",a.classList.add("notification"),a.classList.add("".concat(n)),r.classList.add("title"),r.textContent=e,s.innerHTML=t,document.body.append(a),a.append(r),a.append(s),setTimeout(function(){a.style.display="none"},2e3)};function y(e,t){for(var n=0;n<e.length;n++)n!==t&&e[n].classList.contains("asc")&&e[n].classList.toggle("asc")}function g(e){var t=e.split(",").join("").split("");return t.shift(),parseInt(t.join(""))}l.addEventListener("click",function(t){var n=t.target,a=n.cellIndex;if(0===a||1===a||2===a)if(y(l.cells,a),n.classList.contains("asc")){var r,s=u.sort(function(e,t){return t.cells[a].innerHTML.toLowerCase().localeCompare(e.cells[a].innerHTML.toLowerCase())});n.classList.toggle("asc"),(r=o.tBodies[0]).append.apply(r,e(s))}else{var c,i=u.sort(function(e,t){return e.cells[a].innerHTML.toLowerCase().localeCompare(t.cells[a].innerHTML.toLowerCase())});n.classList.toggle("asc"),(c=o.tBodies[0]).append.apply(c,e(i))}if(3===a)if(y(l.cells,a),n.classList.contains("asc")){var d,p=u.sort(function(e,t){return t.cells[a].innerHTML-e.cells[a].innerHTML});(d=o.tBodies[0]).append.apply(d,e(p)),n.classList.toggle("asc")}else{var m,f=u.sort(function(e,t){return e.cells[3].innerHTML-t.cells[3].innerHTML});(m=o.tBodies[0]).append.apply(m,e(f)),n.classList.toggle("asc")}if(4===a)if(y(l.cells,a),n.classList.contains("asc")){var v,L=u.sort(function(e,t){return g(t.cells[a].innerHTML)-g(e.cells[a].innerHTML)});n.classList.toggle("asc"),(v=o.tBodies[0]).append.apply(v,e(L))}else{var T,h=u.sort(function(e,t){return g(e.cells[a].innerHTML)-g(t.cells[a].innerHTML)});n.classList.toggle("asc"),(T=o.tBodies[0]).append.apply(T,e(h))}}),i.addEventListener("click",function(e){e.preventDefault();var t=e.target.closest("tr");i.contains(t)&&t&&(v&&v.classList.remove("active"),(v=t).classList.add("active"))});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.64ed3617.js.map