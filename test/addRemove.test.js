import { addTask, clearTodo, editTask, removeTask } from "../src/addRemove.js";

describe('it adds, remove and edit tasks', () => {
  const todo = [];
  const objectEle = {
    description: 'drink water',
    completed: false,
    index: 0,
  }

  test('adds a task to the array of objects', () => {
    expect(addTask(todo)).toBe();
  });

  test('removes a task for the array', () => {
    todo.push(objectEle);
    clearTodo(todo);
    expect(todo.length).toBe(2);
  })

  test('edit tasks', () => {
    
  })
});