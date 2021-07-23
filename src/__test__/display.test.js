import { expect } from '@jest/globals';
import { tempTasks, displayTasks } from '../__mocks__/updateStatus';

jest.mock('../updateStatus');

test('displays the todos', () => {
  const obj = {
    description: 'my data',
    completed: true,
    index: 0,
  };
  tempTasks.push(obj);
  tempTasks.forEach((ele) => {
    displayTasks();
    expect(ele.description).toBe('my data');
  });
});