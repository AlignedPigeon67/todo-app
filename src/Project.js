export default class Project {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
    this.todoItems = [];
  }

  addToList(todoItem) {
    this.todoItems.push(todoItem);
  }
}
