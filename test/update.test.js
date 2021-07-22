import { jest } from "@jest/globals";
import { addTask, removeTask } from "@jest/globals";
import { updateTodo, displayTasks, tempTasks } from "../_mock_/updateTodo";
jest.mock("../_mock_/updateTodo");

import { addTask, removeTask } from "./addRemove";
import { displayTasks, tasks } from "../src/index";

jest.mock("./addRemove");

displayTasks();

describe("Test task manager ->", () => {
  test("add 1 li element to the ul", () => {
    const input = global.document.getElementById("description");
    input.value = "Do stuff";
    const task = { id: 4, index: 4, description: "Do stuff", completed: true };

    const listBefore = global.document.getElementsByTagName("li");
    const lenB = listBefore.length;
    addTask(tasks);
    setTimeout(500, () => {
      const listAfter = global.document.getElementsByTagName("li");
      const lenA = listAfter.length;

      expect(lenA).toBe(lenB + 1);
    });
  });

  test("remove the li element from the ul", () => {
    const listBefore = global.document.getElementsByTagName("li");
    const lenB = listBefore.length;
    removeTask("div2", tasks);
    setTimeout(500, () => {
      const listAfter = global.document.getElementsByTagName("li");
      const lenA = listAfter.length;
      expect(lenB - 1).toBe(lenA);
    });
  });
});
