// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');

  const options = {
    threshold: 0.1,  // trigger when 10% of element is visible
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // stop watching once visible
      }
    });
  }, options);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

const music = document.getElementById('background-music');
const playBtn = document.getElementById('play-music-btn');
music.volume = 0.00005;
music.addEventListener('play', () => console.log('Music started playing'));
music.addEventListener('error', e => console.error('Audio error:', e));

playBtn.addEventListener('click', () => {
  console.log('Button clicked');
  if (music.paused) {
    music.play();
    playBtn.textContent = '⏸️ Pause Music';  // Show pause icon/text when playing
  } else {
    music.pause();
    playBtn.textContent = '▶️ Play Music';   // Show play icon/text when paused
  }
});
