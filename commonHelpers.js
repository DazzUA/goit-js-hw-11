import{S as c,i as n}from"./assets/vendor-46aac873.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const u=new c(".gallery a",{captionsData:"alt",captionDelay:250}),l={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul"),loader:document.querySelector("span")},p="42130536-1e1e39559f40e48484e4e27d6",d="https://pixabay.com/api/";l.form.addEventListener("submit",m);function m(s){s.preventDefault(),l.loader.classList.add("loader"),l.list.innerHTML="";const e=s.currentTarget,a=e.elements.image.value;f(a).then(o=>{l.loader.classList.remove("loader"),l.list.innerHTML=g(o),u.refresh(),o.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}).catch(o=>n.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})).finally(()=>{e.reset()})}function f(s){const e=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${d}?${e}`).then(a=>{if(a.ok)return a.json();throw new Error(a.statusText)})}function g(s){return s.hits.map(e=>`<li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}"
            ><img class="gallery-img" src="${e.webformatURL}" data-sourse="${e.largeImageURL}" alt="${e.tags}"
          /></a>
          <div class="description-wrapper">
            <div class="value-wrapper">
              <p class="label"><b>Likes</b></p>
              <p class="value">${e.likes}</p>
            </div>
            <div class="value-wrapper">
              <p class="label"><b>Views</b></p>
              <p class="value">${e.views}</p>
            </div>
            <div class="value-wrapper">
              <p class="label"><b>Comments</b></p>
              <p class="value">${e.comments}</p>
            </div>
            <div class="value-wrapper">
              <p class="label"><b>Downloads</b></p>
              <p class="value">${e.downloads}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
