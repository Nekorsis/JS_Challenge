
const list = document.querySelectorAll('input');

function changeValue () {
  console.log(this.value);
  let suffix = '';
  this.name === 'blur' || this.name === 'spacing' ? suffix = 'px' : suffix = '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

list.forEach((element, index, array) => {list[index].addEventListener('change', changeValue )})
// list.forEach((element, index, array) => {list[index].addEventListener('mouseover', changeValue )})
