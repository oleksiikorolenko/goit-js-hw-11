import{a as d,S as h,i as a}from"./assets/vendor-C9vNCoLC.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",g="50342866-da1b32c712fb25d761b3cb22e";function y(o){const i={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(p,{params:i}).then(r=>r.data).catch(r=>{throw console.error("Error fetching images:",r),r})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),L=new h(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const i=o.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:m})=>`
    <li class="gallery-item">
      <a href="${n}">
        <img src="${r}" alt="${e}" />
      </a>
      <div>
        <ul class="info">
        <li class="info-item"><h4>Likes:</h4><p>${t}</p></li>
        <li class="info-item"><h4>Views:</h4><p>${s}</p></li>
        <li class="info-item"><h4>Comments:</h4><p>${f}</p></li>
        <li class="info-item"><h4>Downloads:</h4><p>${m}</p></li>
</ul>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",i),L.refresh()}function v(){l.innerHTML=""}function w(){c.classList.add("is-visible")}function S(){c.classList.remove("is-visible")}const u=document.querySelector(".form"),P=u.elements["search-text"];u.addEventListener("submit",o=>{o.preventDefault();const i=P.value.trim();i||a.warning({message:"Please enter a search term."}),v(),w(),y(i).then(r=>{if(r.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3});return}b(r.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again later."})}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
