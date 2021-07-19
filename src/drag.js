let toLiIndex = null;

const allowDrop = (e) => {
  e.preventDefault();
  toLiIndex = e.currentTarget.id;
};

const drag = (e) => {
  e.dataTransfer.setData('text', e.currentTarget.id);
};

const drop = (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text');
  const oldDiv = document.getElementById(data);
  const oldLi = document.getElementById(oldDiv.data);
  const newLi = document.getElementById(toLiIndex);
  const newDiv = newLi.getElementsByTagName('div')[0];
  const oldDivData = oldDiv.data;
  const newDivData = newDiv.data;
  oldDiv.data = newDivData;
  newDiv.data = oldDivData;
  oldLi.appendChild(newDiv);
  oldLi.removeChild(oldDiv);
  newLi.appendChild(oldDiv);

  window.update();
};

export { allowDrop, drag, drop };