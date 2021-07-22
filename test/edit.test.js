const editTask = (divId, tasks) => {
  const list = document.getElementsByClassName("drag-div");
  Array.from(list).forEach((li) => {
    if (li.id === divId) {
      li.style.backgroundColor = "#fff59c78";
      const img = li.getElementsByTagName("img")[0];
      img.src = "TrashImg";
      img.style.cursor = "pointer";
      img.addEventListener("click", () => {
        removeTask(divId, tasks);
      });
    } else {
      li.style.backgroundColor = "white";
      const img = li.getElementsByTagName("img")[0];
      img.src = "MoreImg";
      img.style.cursor = "all-scroll";
    }
  });
};

test("edit the todoList", () => {
  const divId = 0;
  const li.id = 0;



});
