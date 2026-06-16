import './../css/main.css';

const media = document.querySelectorAll('img, iframe');
const root = document.querySelector('#root');
const loadingScreen = document.querySelector('#loading-screen');
let loaded = 0;

media.forEach(el => {
  el.addEventListener('load', () => {
    loaded++;
    updateProgress(loaded / media.length);
  });
  if (el.complete) { // already loaded
    loaded++;
    updateProgress(loaded / media.length);
  }
});

function updateProgress(fraction) {
  const percent = Math.floor(fraction * 360);
  document.querySelector('#load-icon').style.setProperty('--loadAngle', percent + 'deg');
}

function showLoadingScreen() {
  root.style.opacity = '0.4';
  loadingScreen.style.opacity = '';
}

const loadingTimeout = setTimeout(showLoadingScreen, 100);

window.addEventListener('load', () => {
  clearTimeout(loadingTimeout);
  loadingScreen.style.display = 'none';
  root.classList.remove('loading');
  root.style = '';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
    else {
      entry.target.classList.remove('animate');
    }
  });
}, {
  root: null,
  rootMargin: '0px 0px -200px 0px',
  threshold: 0 });

document.querySelectorAll('.observe').forEach(k => {
  observer.observe(k);
});