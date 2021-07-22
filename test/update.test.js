import { jest } from "@jest/globals";
import { updateTodo, displayTasks, tempTasks } from "../_mock_/updateTodo";
jest.mock('../_mock_/updateTodo');

displayTasks();
test('it update tasks with new date', () => {
  updateTodo();
  expect(tempTasks.length).toBe(0);
});