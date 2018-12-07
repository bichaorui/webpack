
import './main.scss';

console.log('run!')

function component() {
  let canvas = document.createElement('canvas');
  function getSize() {
    const body = document.querySelector('body');
    canvas.height = body.offsetHeight;
    canvas.width = body.offsetWidth;
  }
  window.onresize = () => {
    getSize();
  };
  getSize();
  return canvas
}


document.body.appendChild(component());

