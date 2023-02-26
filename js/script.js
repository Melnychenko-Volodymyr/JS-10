let img = document.querySelector('.picture');

const pos = (ev) => { 
  img.style.cssText = `top: ${(ev.pageY-50)}px; left: ${(ev.pageX-50)}px`;
}

addEventListener('mousemove', pos);