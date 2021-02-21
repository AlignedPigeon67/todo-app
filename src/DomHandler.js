'use strict';

const projectSidebar = document.querySelector('.project-sidebar');
const listArea = document.querySelector('.list-area');

const addNewProject = project => {
  const projectCard = `
    <div class="project-card">
      <p class="project-name">${project.title}</p>
      <p class="project-date">${project.dueDate}</p>
    </div>
  `;
  projectSidebar.insertAdjacentHTML('beforeend', projectCard);
};

export { addNewProject };
