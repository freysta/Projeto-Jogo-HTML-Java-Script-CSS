const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const body = document.querySelector("body");

const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const gameOver = () => {
  pipe.style.animation = "none";
  pipe.style.left = "120px";
  mario.style.animation = "none";
  mario.style.bottom = "100px";
  mario.src = "./images/game-over.png";
  mario.style.width = "65px";
  mario.style.marginLeft = "50px";

  const restart = document.createElement("img");
  restart.src = "./images/restart.png";
  restart.classList.add("restart");
  restart.alt = "Pressione R para reiniciar o jogo";
  body.appendChild(restart);

  setTimeout(() => {
    restart.style.opacity = "1";
  }, 1000);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    clearInterval(loop);
    gameOver();
  } else if (pipePosition < -20) {
    score++;
    const scoreElement = document.querySelector(".score");
    scoreElement.textContent = score;
  }
}, 10);

document.addEventListener("keydown", jump);

document.addEventListener("keydown", function (event) {
  if (event.key === "r" || event.key === "R") {
    const restart = document.querySelector(".restart");
    restart.remove();
    location.reload();
  }
});
