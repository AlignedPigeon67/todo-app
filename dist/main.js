(()=>{"use strict";class t{constructor(t,e){this.title=t,this.dueDate=e,this.todoItems=[]}addToList(t){this.todoItems.push(t)}}class e{constructor(t,e,s,a){this.title=t,this.description=e,this.dueDate=s,this.highPriority=a}}const s=document.querySelector(".main-container"),a=document.querySelector(".project-sidebar"),d=document.querySelector(".list-area"),n=document.querySelector(".modal"),o=document.querySelector(".overlay"),i=t=>{d.textContent="",t?.todoItems.forEach((t=>(t=>{const e=`\n    <div class="todo-item-card">\n      <p>${t.title}</p>\n      <p>${t.dueDate}</p>\n    </div>\n  `;d.insertAdjacentHTML("beforeend",e)})(t)))},c=(t,e)=>{a.textContent="",t.forEach(((t,s)=>((t,e,s)=>{const d=`\n    <div class="project-card" data-index="${e}" data-is-active="${t===s}">\n      <p class="project-name">${t.title}</p>\n      <p class="project-date">${t.dueDate}</p>\n    </div>\n  `;a.insertAdjacentHTML("beforeend",d)})(t,s,e)))},r=t=>{L=t,i(t)},l=new t("Paint kitchen","21/3/21"),u=new t("Take a nap","07/8/21"),h=new e("Go buy paint","Nip to the shops for some paint you twat!","20/3/21",!1),p=new e("Lie down","Find bed","07/7/21",!0);l.addToList(h),u.addToList(p);const m=[];m.push(l),m.push(u);let L=m[0];c(m,L),i(L),document.addEventListener("click",(t=>{const e=t.target;e.matches(".project-card")?(r(m[t.target.getAttribute("data-index")]),c(m,L)):e.closest(".project-card")&&(r(m[t.target.parentElement.getAttribute("data-index")]),c(m,L)),e.matches(".add-item-button")&&(n.classList.remove("hidden"),o.classList.remove("hidden"),s.classList.add("blur")),e.matches(".overlay")&&(n.classList.add("hidden"),o.classList.add("hidden"),s.classList.remove("blur"))}),!1)})();