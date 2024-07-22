export function playVideoOnScroll() {
  const videos = document.querySelectorAll('video.bg-video');

  if (!videos) {
    return;
  }

  videos.forEach((video) => {
    const start = video.dataset.start || 'top bottom';
    const pauseOutside = video.dataset.pauseOutside === 'true';
    const rewind = video.dataset.rewind === 'true';
    const loop = video.dataset.loop === 'true';

    console.log('video set: ', start, pauseOutside, rewind, loop);

    if (loop) {
      video.loop = true;
    }
    
    let settings = {
      trigger: video,
      start: start,
      onEnter: () => {
        console.log('play video');
        video.play();
      }
    };

    if (pauseOutside) {
      settings.onLeave = () => { pauseOrRewind(video, rewind) };
      settings.onLeaveBack = () => { pauseOrRewind(video, rewind) };
      settings.onEnterBack = () => { console.log("play video"); video.play() };
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