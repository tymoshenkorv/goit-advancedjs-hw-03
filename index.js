import{a as c,S as n,i as d}from"./assets/vendor-CucEYOFD.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const u=t=>{const a="https://pixabay.com/api/",l="56787016-99e31dc5b616b930e3b2ced26",r=new URLSearchParams({key:l,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return c.get(a,{params:r}).then(e=>{if(e.status!==200)throw new Error(`Request failed with status ${e.status}`);return console.log("response from pixabay-api.js:",e),console.log("response.data from pixabay-api.js:",e.data),e.data})},o={searchForm:document.querySelector(".js-search-form"),galleryList:document.querySelector(".js-gallery"),preloader:document.querySelector(".js-loader")},m=new n(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),y=t=>`
    <li class="gallery-card">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="gallery-stats">
          <div class="gallery-stat">
            <div class="gallery-stat-title">Likes</div>
            <div class="gallery-stat-value">${t.likes}</div>
          </div>
          <div class="gallery-stat">
            <div class="gallery-stat-title">Views</div>
            <div class="gallery-stat-value">${t.views}</div>
          </div>
          <div class="gallery-stat">
            <div class="gallery-stat-title">Comments</div>
            <div class="gallery-stat-value">${t.comments}</div>
          </div>
          <div class="gallery-stat">
            <div class="gallery-stat-title">Downloads</div>
            <div class="gallery-stat-value">${t.downloads}</div>
          </div>
        </div>
    </li>
 `;function f(t){const a=t.map(l=>y(l)).join("");o.galleryList.innerHTML=a,m.refresh()}function g(){o.galleryList.innerHTML=""}function h(){o.preloader.classList.add("is-active")}function v(){o.preloader.classList.remove("is-active")}const p=t=>{t.preventDefault();const{target:a}=t;console.log("searchFormEl.elements:",a.elements);const l=a.elements["search-text"].value.trim();if(!l){alert("Поле для введення не має бути порожнім!");return}g(),h(),u(l).then(r=>{r.total===0&&d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),console.log("data.total from main.js:",r.total),console.log("data from main.js:",r),console.log("data.hits from main.js:",r.hits),f(r.hits)}).catch(r=>{console.error(r)}).finally(()=>{v()})};o.searchForm.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
