(()=>{"use strict";class t{constructor(t,e){this.title=t,this.dueDate=e,this.todoItems=[]}addToList(t){this.todoItems.push(t)}}class e{constructor(t,e,s,o){this.title=t,this.description=e,this.dueDate=s,this.priority=o}}const s=document.querySelector(".project-sidebar"),o=(document.querySelector(".list-area"),[]),i=new t("Paint kitchen","21/3/21"),n=new t("Take a nap","07/8/21"),a=new e("Go buy paint","Nip to the shops for some paint you twat!","20/3/21",1),c=new e("Lie down","Find bed","07/7/21",3);i.addToList(a),n.addToList(c),o.push(i),o.push(n),o.forEach((t=>(t=>{const e=`\n    <div class="project-card">\n      <p class="project-name">${t.title}</p>\n      <p class="project-date">${t.dueDate}</p>\n    </div>\n  `;s.insertAdjacentHTML("beforeend",e)})(t)))})();