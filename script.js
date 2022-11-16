document.getElementById('daybutton').onclick = dayView
document.getElementById('nightbutton').onclick = nightView



function dayView() {
 document.querySelector('main').style.backgroundImage = "url('https://i.ibb.co/yYb1KjT/day.png')"
 this.classList.toggle('moveRight')
 this.classList.toggle('motion')
  }

function nightView() {
  document.querySelector('main').style.backgroundImage = "url('https://i.ibb.co/ry271m0/night.png')"
  this.classList.toggle('moveRght')
  this.classList.toggle('motion')
 }
