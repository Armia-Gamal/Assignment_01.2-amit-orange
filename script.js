var Chickens = document.querySelector(".chickenContener");

for (let i = 0; i < 64; i++) {
  Chickens.innerHTML += `
        <img src="./Chicken.png" width='90px' >
    `;
}

var Rocket = document.querySelector(".rocket");
let position = { bottom: 0 ,left:0 };

window.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "ArrowDown":
      if (position.bottom > 0) {
        position.bottom -= 15;
      }
      break;
    case "ArrowUp":
      position.bottom += 10;
      break;
    case "ArrowLeft":
      if (position.left > 0) {
        position.left -= 10;
      }
      break;
    case "ArrowRight":
      position.left += 10;
      break;
    case "Space":
      fireBullet();
      break;
  }
  Rocket.style.bottom = position.bottom + "px";
  Rocket.style.left = position.left + "px";
});

function fireBullet() {
  var bullet = document.createElement("img");
  bullet.setAttribute("src", "./Bullet.png");
  bullet.classList.add("bullet");
  Rocket.append(bullet);

  var positionBullet = 0;

  var bulletIntervel = setInterval(function () {
    positionBullet += 20;
    bullet.style.bottom = positionBullet + "px";
    if (positionBullet > 800) {
      Rocket.removeChild(bullet);
      clearInterval(bulletIntervel);
    }
  }, 10);
}