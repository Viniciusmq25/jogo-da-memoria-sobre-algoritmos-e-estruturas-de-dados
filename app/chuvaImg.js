const waterfall = document.querySelector('.waterfall');
const images = [
    '../img/1.png',
    '../img/2.png',
    '../img/3.png',
    '../img/4.png',
    '../img/5.png',
    '../img/6.png',
    '../img/7.png',
    '../img/8.png',
    '../img/9.png',
    '../img/10.png',
];

function createImageElement(src) {
  const img = document.createElement('img');
  img.src = src;
  img.style.left = `${Math.random() * 100}vw`;
  img.style.animationDuration = `${Math.random() + 10}s`; // entre 5s e 10s
  img.style.animationDelay = `${Math.random() * 10}s`;
  return img;
}

function startWaterfall() {
  images.forEach(src => {
      const img = createImageElement(src);
      waterfall.appendChild(img);

      img.addEventListener('animationend', () => {
          img.remove();
          const newImg = createImageElement(src);
          waterfall.appendChild(newImg);
      });
  });
}

startWaterfall();