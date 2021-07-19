import { addTask, clearTodo, editTask } from "../src/addRemove.js";

Describe('it adds, remove and edit tasks', () => {

  const objectEle = {
    description: 'drink tea',
    completed: false,
    index: todo.length,
  }

  it('adds a task to the array of objects', () => {
    const todo = [];
    const task = addTask(objectEle);
    expect(task).toBeTruthy();
  });
});