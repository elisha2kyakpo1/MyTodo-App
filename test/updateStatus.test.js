import { addTask } from "../src/addRemove";
import { updateTodo } from "../src/updateStatus";

describe("Test update", () => {
  test("add li to the ul", () => {
    const task = {
      completed: true,
      description: "drink water",
      index: 1,
      id: 1,
    };

    const before = tempTasks.length;

    addTask(task);

    const after = tempTasks.length;

    expect(before).toBe(after - 1);
  });
});
