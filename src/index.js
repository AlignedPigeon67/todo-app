'use strict';

import Project from './Project';
import TodoItem from './TodoItem';
import { addNewProject } from './DomHandler';

const projectArray = [];

const paintingProject = new Project('Paint kitchen', '21/3/21');
const takeNap = new Project('Take a nap', '07/8/21');

const buyPaint = new TodoItem(
  'Go buy paint',
  'Nip to the shops for some paint you twat!',
  '20/3/21',
  1
);

const lieDown = new TodoItem('Lie down', 'Find bed', '07/7/21', 3);

paintingProject.addToList(buyPaint);
takeNap.addToList(lieDown);

projectArray.push(paintingProject);
projectArray.push(takeNap);

projectArray.forEach(proj => addNewProject(proj));
