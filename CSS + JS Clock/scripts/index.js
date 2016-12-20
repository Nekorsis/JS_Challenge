const hourHand = document.getElementsByClassName('hour-hand');
const minuteHand = document.getElementsByClassName('minute-hand');
const secondHand = document.getElementsByClassName('second-hand');

const setCloks = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  hourHand[0].style.transform = `rotate(${(60 * hours + minutes) /4}deg)`;
  minuteHand[0].style.transform = `rotate(${6 * minutes}deg)`;
  secondHand[0].style.transform = `rotate(${6 * seconds}deg)`;
}
setCloks(); // initial call
setInterval(setCloks, 1000);
