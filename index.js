const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!audio) return;
  audio.play();
  audio.currentTime = 0;
  key.classList.add('playing')
  console.log(key);
};

window.addEventListener("keydown", playSound);

