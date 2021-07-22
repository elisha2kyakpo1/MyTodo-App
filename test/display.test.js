import { expect } from "@jest/globals";
import { displayTasks, tempTasks } from "../_mock_/updateTodo";

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
  })
});