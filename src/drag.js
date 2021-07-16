const dragAfterElement = (element, y) => {
  const draggableElements = [...element.querySelectorAll('.list-item:not(.draggable-start)')];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return {
        offset: offset, element: child
      }
    } else {
      return closest;
    }
  }, {offset: Number.POSITIVE_INFINITY}).element;
}

const dragDrop = () => {
  const ul = document.querySelector('.list-data');

  const dragList = document.querySelectorAll('.list-item');
  dragList.forEach((lists) => {
    lists.addEventListener('dragstart', () => {
      lists.classList.add('draggable-start');
    })

    lists.addEventListener('dragend', () => {
      setTimeout(() => lists.classList.remove('draggable-start'), 0);
    });
  });



  ul.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragAfterElement(ul, e.clientY)
    const dragItem = document.querySelector('.list-item');
    ul.appendChild(dragItem);
  });
};

export default dragDrop;