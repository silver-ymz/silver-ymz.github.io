document.addEventListener("DOMContentLoaded",()=>{var{indexName:e,appID:t,apiKey:a,hits:s}=CONFIG.algolia;const i=instantsearch({indexName:e,searchClient:algoliasearch(t,a),searchFunction:e=>{document.querySelector(".search-input").value&&e.search()}}),n=("object"==typeof pjax&&i.on("render",()=>{pjax.refresh(document.querySelector(".algolia-hits"))}),i.addWidgets([instantsearch.widgets.configure({hitsPerPage:s.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:CONFIG.i18n.placeholder,showReset:!1,showSubmit:!1,showLoadingIndicator:!1,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:".algolia-stats",templates:{text:e=>{return`<span>${CONFIG.i18n.hits_time.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS)}</span>
            <img src="${CONFIG.images}/logo-algolia-nebula-blue-full-d593709631bf6acec3c76b6eb2b4b560.svg" alt="Algolia">`}},cssClasses:{text:"search-stats"}}),instantsearch.widgets.hits({container:".algolia-hits",escapeHTML:!1,templates:{item:e=>{var{title:t,excerpt:a,excerptStrip:s,contentStripTruncate:i}=e._highlightResult;let n=`<a href="${e.permalink}" class="search-result-title">${t.value}</a>`;t=a||s||i;if(t&&t.value){const r=document.createElement("div");r.innerHTML=t.value,n+=`<a href="${e.permalink}"><p class="search-result">${r.textContent.substr(0,100)}...</p></a>`}return n},empty:e=>`<div class="algolia-hits-empty">
              ${CONFIG.i18n.empty.replace(/\$\{query}/,e.query)}
            </div>`},cssClasses:{list:"search-result-list"}}),instantsearch.widgets.pagination({container:".algolia-pagination",scrollTo:!1,showFirst:!1,showLast:!1,templates:{first:'<i class="fa fa-angle-double-left"></i>',last:'<i class="fa fa-angle-double-right"></i>',previous:'<i class="fa fa-angle-left"></i>',next:'<i class="fa fa-angle-right"></i>'},cssClasses:{list:["pagination","algolia-pagination"],item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]),i.start(),document.querySelectorAll(".popup-trigger").forEach(e=>{e.addEventListener("click",()=>{document.body.classList.add("search-active"),setTimeout(()=>document.querySelector(".search-input").focus(),500)})}),()=>{document.body.classList.remove("search-active")});document.querySelector(".search-pop-overlay").addEventListener("click",e=>{e.target===document.querySelector(".search-pop-overlay")&&n()}),document.querySelector(".popup-btn-close").addEventListener("click",n),document.addEventListener("pjax:success",n),window.addEventListener("keyup",e=>{"Escape"===e.key&&n()})});