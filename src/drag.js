const dragAfterElement = (element, y) => {
  const draggableElements = [...element.querySelectorAll('.list-item')];
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
  }, {offset: Number.NEGATIVE_INFINITY}).element;
}

const dragDrop = () => {
  const ul = document.querySelector('.list-data');

  const dragList = document.querySelectorAll('.list-item');
  dragList.forEach((lists) => {
    lists.addEventListener('dragstart', () => {
      lists.classList.add('draggable-start');
    })

    lists.addEventListener('dragend', () => {
      lists.classList.remove('draggable-start');
    })

  });

  ul.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragAfterElement(ul, e.clientY)
    const dragItem = document.querySelector('.list-item');
    ul.appendChild(dragItem);
  });
};
 
// function dragStart(e) {
//   this.style.opacity = '0.4';
//   dragSrcEl = this;
//   e.dataTransfer.effectAllowed = 'move';
//   e.dataTransfer.setData('text/html', this.innerHTML);
// };
 
// function dragEnter(e) {
//   this.classList.add('over');
// }
 
// function dragLeave(e) {
//   e.stopPropagation();
//   this.classList.remove('over');
// }
 
// function dragOver(e) {
//   e.preventDefault();
//   e.dataTransfer.dropEffect = 'move';
//   return false;
// }
 
// function dragDrop(e) {
//   if (dragSrcEl != this) {
//     dragSrcEl.innerHTML = this.innerHTML;
//     this.innerHTML = e.dataTransfer.getData('text/html');
//   }
//   return false;
// }
 
// function dragEnd(e) {
//   var listItens = document.querySelectorAll('.draggable');
//   [].forEach.call(listItens, function(item) {
//     item.classList.remove('over');
//   });
//   this.style.opacity = '1';
// }
 
// function addEventsDragAndDrop(el) {
//   el.addEventListener('dragstart', dragStart, false);
//   el.addEventListener('dragenter', dragEnter, false);
//   el.addEventListener('dragover', dragOver, false);
//   el.addEventListener('dragleave', dragLeave, false);
//   el.addEventListener('drop', dragDrop, false);
//   el.addEventListener('dragend', dragEnd, false);
// }
 
// var listItens = document.querySelectorAll('.draggable');
// [].forEach.call(listItens, function(item) {
//   addEventsDragAndDrop(item);
// });
 
// function addNewItem() {
//   var newItem = document.querySelector('.input').value;
//   if (newItem != '') {
//     document.querySelector('.input').value = '';
//     var li = document.createElement('li');
//     var attr = document.createAttribute('draggable');
//     var ul = document.querySelector('ul');
//     li.className = 'draggable';
//     attr.value = 'true';
//     li.setAttributeNode(attr);
//     li.appendChild(document.createTextNode(newItem));
//     ul.appendChild(li);
//     addEventsDragAndDrop(li);
//   }
// }
 
// btn.addEventListener('click', addNewItem);

export default dragDrop;