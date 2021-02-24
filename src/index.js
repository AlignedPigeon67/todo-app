'use strict';

import Project from './Project';
import TodoItem from './TodoItem';
import * as dh from './DomHandler';

const populateTodos = proj => {
  dh.clearTodos();
  proj?.todoItems.forEach(todo => dh.displayTodoItems(todo, currentProject));
};

const populateProjects = (projects, curProj) => {
  dh.clearProjects();
  projects.forEach((proj, i) => dh.displayProjects(proj, i, curProj));
};

const setCurrentProject = proj => {
  currentProject = proj;
  populateTodos(proj);
};

const submitTodoInputForm = e => {
  const newTodo = new TodoItem(
    e.title.value,
    e.description.value,
    e.dueDate.value,
    e.priority.value
  );

  currentProject.addToList(newTodo);
};

const paintingProject = new Project('Paint kitchen', '21/3/21');
const takeNap = new Project('Take a nap', '07/8/21');

const buyPaint = new TodoItem(
  'Go buy paint',
  'Nip to the shops for some paint you twat!',
  '20/3/21',
  false
);

const lieDown = new TodoItem('Lie down', 'Find bed', '07/7/21', true);

paintingProject.addToList(buyPaint);
takeNap.addToList(lieDown);

const projectArray = [];

projectArray.push(paintingProject);
projectArray.push(takeNap);

let currentProject = projectArray[0];

populateProjects(projectArray, currentProject);
populateTodos(currentProject);

document.addEventListener(
  'click',
  event => {
    const element = event.target;
    if (element.matches('.project-card')) {
      setCurrentProject(projectArray[event.target.getAttribute('data-index')]);
      populateProjects(projectArray, currentProject);
    } else if (element.closest('.project-card')) {
      setCurrentProject(
        projectArray[event.target.parentElement.getAttribute('data-index')]
      );
      populateProjects(projectArray, currentProject);
    }

    if (element.matches('.add-item-button')) {
      dh.showModal();
    }

    if (element.matches('.overlay') || element.matches('#cancel')) {
      dh.closeModal();
    }

    if (element.matches('#submit')) {
      event.preventDefault();
      submitTodoInputForm(element);
    }
  },
  false
);
