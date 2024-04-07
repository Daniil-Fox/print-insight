const videoContainer = document.querySelectorAll('[data-video-container]')

videoContainer.forEach(el => {
  const play = el.querySelector('[data-video-play]')
  const video = el.querySelector('[data-video-content]')

  play.addEventListener('click', e => {
    video.setAttribute('controls', '')
    video.play()
    play.remove()
  })
})
