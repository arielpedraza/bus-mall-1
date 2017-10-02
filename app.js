'use strict';

var imgArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

console.log(imgArray);

function RandomProduct(idName) {
  this.idName = idName;
  var productIndex = Math.floor(Math.random() * imgArray.length);
  var imgEl = document.getElementById(this.idName);
  imgEl.addEventListener('click', RandomProduct);
  imgEl.src = "img/" + imgArray[productIndex];
}


new RandomProduct('random-products1');
new RandomProduct('random-products2');
new RandomProduct('random-products3');

// RandomProduct('random-products1');
