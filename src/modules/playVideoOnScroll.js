export default function playVideoOnScroll() {
  const videos = document.querySelectorAll('video[scroll-play]');

  if (!videos) {
    return;
  }

  videos.forEach((video) => {
    const start = video.dataset.start || 'top bottom';
    const pauseOutside = video.dataset.pauseOutside || false;
    const rewind = video.dataset.rewind || false;
    let settings = {
      trigger: video,
      start: start,
      onEnter: () => {
        video.play();
      }
    };

    if (pauseOutside) {
      settings.onLeave = () => { pauseOrRewind(video, rewind) };
      settings.onLeaveBack = () => { pauseOrRewind(video, rewind) };
      settings.onEnterBack = () => { video.play() };
    }

    ScrollTrigger.create(settings);
  });
}

function pauseOrRewind(video, rewind) {
  video.pause();
  if (rewind) {
    video.currentTime = 0;
  }
}