const resetClass = (button, manualKeyCode) => {
  setTimeout(() => {button[0].className = `drum_button drum_button_code_${manualKeyCode}`}, 100)
};

const addOnClicks = () => {
  const elementList = document.querySelectorAll('.drum_button');
  elementList.forEach((element, index, array) => {elementList[index].addEventListener('click', playSound)})
}

const handleAudio = (audio) => {
  audio[0].currentTime = 0;
  audio[0].play();
}

const playSound = (e) => {
  if (e.type === "click") {
    const mouseClickedButton = document.getElementsByClassName(e.target.className);
    const mouseClickedAudio = document.getElementsByClassName(`audio_code_${e.target.className.slice(-2)}`);

    mouseClickedButton.length > 0 ? handleAudio(mouseClickedAudio) : null

    mouseClickedButton.length > 0 ? mouseClickedButton[0].classList.add('playing') : null

    mouseClickedButton.length > 0 ? resetClass(mouseClickedButton, e.target.className.slice(29, 31)) : null
  }
  const button = document.getElementsByClassName(`drum_button_code_${e.keyCode}`);
  const audio = document.getElementsByClassName(`audio_code_${e.keyCode}`);

  button.length > 0 ? handleAudio(audio) : null

  button.length > 0 ? button[0].classList.add('playing') : null
  button.length > 0 ? resetClass(button, e.keyCode) : null
}

addOnClicks();
window.addEventListener('keydown', playSound);
