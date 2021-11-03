const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJuping = false;
let position = 0;

function handlekeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJuping) {
    jump();
    }
  }
}

function jump() {

  isJuping = true;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);
  
      // descendo
      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJuping = false;
        } else {
          position -= 20;
          dino.style.bottom = position + 'px';
        }
      }, 20);
    } else {
    // subindo
    position += 20;
    dino.style.bottom = position + 'px';
  }
  }, 20);
}

function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;

  cactus.classList.add('cactus');
  cactus.style.left = 1000 + 'px';
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {
    if (cactusPosition < -60) {
      // Saiu da tela
      clearInterval(leftInterval);
      background.removeChild(cactus); //remove o elemento filho
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      // Game over
      clearInterval(leftInterval);
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }
  }, 20);

  setTimeout(createCactus, randomTime);// execute uma função depois de um determinado tempo
}

createCactus();
document.addEventListener('keyup', handlekeyUp);