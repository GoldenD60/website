import './../css/music.css';
import './../css/card.css';

document.querySelectorAll('.card').forEach(c => {
    const audio = c.getElementsByTagName('audio')[0];
    c.addEventListener('mouseenter', () => {
        audio.playbackRate = 1;
        audio.play();
    });
    c.addEventListener('mouseleave', () => {
        audio.playbackRate = 0;
        audio.currentTime = 0;
    });
})