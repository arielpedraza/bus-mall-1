'use strict';

var imgArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

console.log(imgArray);

function randImg(name, filepath) {
  this.name = name;
  this.filepath = filepath;
}

function randomProduct() {
  var productIndex = Math.floor(Math.random() * imgArray.length);
  var imgEl = document.getElementById('random-products');
  imgEl.addEventListener('click', randomProduct);
  imgEl.src = "img/" + imgArray[productIndex];
}


randomProduct();
randomProduct();
randomProduct();
