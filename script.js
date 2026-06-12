const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const year = document.querySelector('#year');
const videoTrigger = document.querySelector('.video-trigger');
const videoModal = document.querySelector('.video-modal');
const videoClose = document.querySelector('.video-close');
const modalVideo = document.querySelector('.video-modal video');

year.textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 18);
});

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

function openVideo() {
  videoModal.classList.add('active');
  videoModal.setAttribute('aria-hidden', 'false');
  modalVideo.currentTime = 0;
  modalVideo.play().catch(() => {});
}

function closeVideo() {
  videoModal.classList.remove('active');
  videoModal.setAttribute('aria-hidden', 'true');
  modalVideo.pause();
}

videoTrigger.addEventListener('click', openVideo);
videoClose.addEventListener('click', closeVideo);
videoModal.addEventListener('click', (event) => {
  if (event.target === videoModal) closeVideo();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && videoModal.classList.contains('active')) {
    closeVideo();
  }
});
