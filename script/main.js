// Показ желания
document.getElementById('wishButton').addEventListener('click', function () {
  document.getElementById('wish').classList.remove('hidden');
});

// Конфетти-анимация
const confettiContainer = document.getElementById('confetti-container');

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
  confettiContainer.appendChild(confetti);

  setTimeout(() => confetti.remove(), 5000);
}

setInterval(createConfetti, 200);

// Добавим немного стилей через JS
const style = document.createElement('style');
style.innerHTML = `
.confetti {
  position: fixed;
  top: -10px;
  width: 10px;
  height: 10px;
  background: hsl(${Math.random() * 360}, 100%, 70%);
  opacity: 0.8;
  border-radius: 50%;
  animation: fall linear forwards;
  z-index: 999;
}
@keyframes fall {
  to {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
