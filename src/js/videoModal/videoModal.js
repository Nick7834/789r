const playVideo = document.querySelector('.about__play span');
const modalVideo = document.querySelector('.about__modal-video video');

playVideo.addEventListener('click', () => {
  modalVideo.parentNode.classList.add('activeVideoModal');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.about__modal-video video') && !event.target.matches('.about__play span')) {
    modalVideo.parentNode.classList.remove('activeVideoModal');
    modalVideo.pause();
  }
});

document.addEventListener('keydown', (e) => {
  if(e.key ==='Escape') {
    modalVideo.parentNode.classList.remove('activeVideoModal');
    modalVideo.pause();
  }
})
