import { jest } from "@jest/globals";
import { addTask } from "../src/addRemove";
import { tempTasks } from "../_mock_/updateTodo";
import { displayTasks } from "../_mock_/updateTodo";
jest.mock("../_mock_/updateTodo");

displayTasks();
const task = { id: 4, index: 4, description: "Do stuff", completed: true };
describe("Testing the update functionality", () => {
  test("add 1 li element to the ul", () => {
    const newArr = [];
    const lenB = tempTasks.length;
    tempTasks.push(task);
    addTask(newArr);
    setTimeout(() => {
      const lenA = tempTasks.length;
      expect(lenA).toBe(lenB + 1);
    }, 500);
  });

  test("remove the li element from the ul", () => {
    tempTasks.push(task);
    const lenB = tempTasks.length;
    tempTasks.pop(task);

    const lenA = tempTasks.length;

    expect(lenA).not.toBe(lenB);
  });
});
