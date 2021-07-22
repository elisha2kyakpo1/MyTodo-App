import { jest } from '@jest/globals';
import { addTask } from '../src/addRemove';
import { tempTasks } from '../_mock_/updateTodo';
import {
  displayTasks,
  removeTask,
  tasks } from '../_mock_/updateTodo';
jest.mock('../_mock_/updateTodo');

displayTasks();
describe('Testing the update functionality', () => {
  test('add 1 li element to the ul', () => {

    const task = { id: 4, index: 4, description: 'Do stuff', completed: true };
    const newArr = [];
    const lenB = tempTasks.length;
    tempTasks.push(task);
    addTask(newArr);
    setTimeout(() => {
      const lenA = tempTasks.length;

      expect(lenA).toBe(lenB + 1);
    }, 500);
  });

  test('remove the li element from the ul', () => {
    const lenB = tempTasks.length;
    removeTask('div', tasks);
    setTimeout(() => {
      const lenA = tempTasks.length;
      expect(lenB - 1).toBe(lenA);
    }, 500);
  });
});
