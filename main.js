(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{x:()=>O});var t=document.querySelector(".page"),n=t.querySelector(".popup_option_info"),o=t.querySelector(".popup_option_add"),r=t.querySelector(".popup_option_card"),c=t.querySelector(".cards"),a=t.querySelector('[name="add"]'),i=a.querySelector('[name="place"]'),l=a.querySelector('[name="link"]'),s=t.querySelector(".info__name"),u=t.querySelector(".info__description"),d=t.querySelector('[name="edit"]'),f=d.querySelector('[name="firstname"]'),m=d.querySelector('[name="description"]'),_=t.querySelector(".info__button"),v=t.querySelector(".profile__button-add"),p=t.querySelector(".popup_option_delete-card"),h=t.querySelector(".popup_option_avatar"),y=t.querySelector('[name="delete"]'),S=t.querySelector('[name="avatar"]'),q=t.querySelector(".profile__button-avatar"),b=S.querySelector('[name="link-avatar"]'),E=t.querySelector(".profile__avatar"),g=document.querySelectorAll(".popup");function L(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",C)}function C(e){"Escape"===e.key&&L(document.querySelector(".popup_opened"))}var k=function(e){e.classList.add("popup_opened"),document.addEventListener("keydown",C)},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить";e.textContent=t?"Сохранение...":n},A={baseUrl:"https://nomoreparties.co/v1/plus-cohort-3",headers:{authorization:"a26fb37f-3598-49d5-8eb1-77505c512d04","Content-Type":"application/json"}};function T(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function U(e){var n=t.querySelector("#card-template").content.querySelector(".cards__item").cloneNode(!0);n.querySelector(".element__image").src=e.link,n.querySelector(".element__image").alt=e.name,n.querySelector(".element__caption-title").textContent=e.name,n.querySelector(".element__likes").textContent=e.likes.length;var o=n.querySelector(".element__icon");e.likes.forEach((function(e){e._id===O&&o.classList.add("element__icon_active")})),function(e,t){e.addEventListener("click",(function(e){var n=e.target,o=n.closest(".cards__item").querySelector(".element__likes"),r=t._id;n.classList.contains("element__icon_active")?function(e){return fetch("".concat(A.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:A.headers}).then(T)}(r).then((function(e){o.textContent=e.likes.length,n.classList.remove("element__icon_active")})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(A.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:A.headers}).then(T)}(r).then((function(e){o.textContent=e.likes.length,n.classList.add("element__icon_active")})).catch((function(e){console.log(e)}))}))}(o,e);var r=n.querySelector(".element__button-delete");O===e.owner._id&&(r.classList.add("element__button-delete_active"),N(r,e));var c=n.querySelector(".element__button-card");return j(c),n}var P,D,O,j=function(e){e.addEventListener("click",(function(){k(r);var t=e.querySelector(".element__image").getAttribute("src"),n=e.nextElementSibling.firstElementChild,o=r.querySelector(".card__image"),c=r.querySelector(".card__caption");o.setAttribute("src",t),o.setAttribute("alt",n.textContent),c.textContent=n.textContent}))},w=function(e){e.preventDefault();var t=D.closest(".cards__item");(function(e){return fetch("".concat(A.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:A.headers}).then(T)})(P).then((function(){t.remove(),L(p)})).catch((function(e){console.log(e)}))},N=function(e,t){e.addEventListener("click",(function(e){D=e.target,k(p),P=t._id,y.addEventListener("submit",w)}))},J=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.disabled=!1:t.disabled=!0};_.addEventListener("click",(function(){k(n),f.value=s.textContent,m.value=u.textContent})),v.addEventListener("click",(function(){k(o)})),q.addEventListener("click",(function(){k(h)})),g.forEach((function(e){e.addEventListener("click",(function(t){!function(e,t){var n=t.target.classList.contains("popup__close-icon"),o=t.target.classList.contains(e.classList[1]);(n||o)&&L(e)}(e,t)}))})),d.addEventListener("submit",(function(e){e.preventDefault();var t,o,r=e.target.querySelector(".form-edit__button-save");x(r,!0),(t=f.value,o=m.value,fetch("".concat(A.baseUrl,"/users/me"),{method:"PATCH",headers:A.headers,body:JSON.stringify({name:t,about:o})}).then(T)).then((function(e){console.log(e),s.textContent=e.name,u.textContent=e.about,L(n)})).catch((function(e){console.log(e)})).finally((function(){setTimeout(x,400,r,!1)}))})),a.addEventListener("submit",(function(e){e.preventDefault();var t,n,r=e.target.querySelector(".form-edit__button-save");x(r,!0),(t=i.value,n=l.value,fetch("".concat(A.baseUrl,"/cards"),{method:"POST",headers:A.headers,body:JSON.stringify({name:t,link:n})}).then(T)).then((function(t){c.prepend(U(t)),L(o),e.target.reset(),r.disabled=!0})).catch((function(e){console.log(e)})).finally((function(){setTimeout(x,400,r,!1,"Создать")}))})),S.addEventListener("submit",(function(e){e.preventDefault();var t,n=e.target.querySelector(".form-edit__button-save");x(n,!0),(t=b.value,fetch("".concat(A.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:A.headers,body:JSON.stringify({avatar:t})}).then(T)).then((function(e){E.src=e.avatar,L(h)})).catch((function(e){console.log(e)})).finally((function(){setTimeout(x,400,n,!1)}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);J(n,o),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var o=e.querySelector("#".concat(t.name,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.inputErrorClass),o.textContent=""}(e,t,n):function(e,t,n,o){var r=e.querySelector("#".concat(t.name,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.inputErrorClass)}(e,t,t.validationMessage,n)}(e,r,t),J(n,o)}))}))}(t,e)}))}({formSelector:".form-edit",inputSelector:".form-edit__item",submitButtonSelector:".form-edit__button-save",inputErrorClass:"form-edit__item_error"}),Promise.all([fetch("".concat(A.baseUrl,"/users/me"),{headers:A.headers}).then(T),fetch("".concat(A.baseUrl,"/cards"),{headers:A.headers}).then(T)]).then((function(e){var t=e[0],n=e[1];O=t._id,s.textContent=t.name,u.textContent=t.about,E.src=t.avatar,n.forEach((function(e){var t=U(e);c.append(t)}))})).catch((function(e){console.log(e)}))})();