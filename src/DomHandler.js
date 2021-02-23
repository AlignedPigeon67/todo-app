'use strict';

const main = document.querySelector('.main-container');
const projectSidebar = document.querySelector('.project-sidebar');
const listArea = document.querySelector('.list-area');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const displayProjects = (project, index, curProj) => {
  const projectCardHTML = `
    <div class="project-card" data-index="${index}" data-is-active="${
    project === curProj ? true : false
  }">
      <p class="project-name">${project.title}</p>
      <p class="project-date">${project.dueDate}</p>
    </div>
  `;
  projectSidebar.insertAdjacentHTML('beforeend', projectCardHTML);
};

const displayTodoItems = todo => {
  const todoCardHTML = `
    <div class="todo-item-card">
      <p>${todo.title}</p>
      <p>${todo.dueDate}</p>
    </div>
  `;
  listArea.insertAdjacentHTML('beforeend', todoCardHTML);
};

const clearProjects = () => (projectSidebar.textContent = '');

const clearTodos = () => (listArea.textContent = '');

const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  main.classList.add('blur');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  main.classList.remove('blur');
};

export {
  displayProjects,
  displayTodoItems,
  clearTodos,
  clearProjects,
  showModal,
  closeModal,
};
