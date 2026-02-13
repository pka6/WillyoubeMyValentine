/*const messages = [
  "Are you sure?",
  "Really, sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.2}px`;
}
*/

const noBtn = document.querySelector(".no-button");

noBtn.addEventListener("mouseover", () => {
  const btnRect = noBtn.getBoundingClientRect();

  // Viewport size
  const maxX = window.innerWidth - btnRect.width - 20;
  const maxY = window.innerHeight - btnRect.height - 20;

  // Random position
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";     // important
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});



function handleYesClick() {
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    window.location.href = "yes_page.html";
  }, 1500);
}


document.addEventListener("mousemove", e => {
  const heart = document.createElement("div");
  heart.innerHTML = "💗";
  heart.style.position = "fixed";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  heart.style.pointerEvents = "none";
  heart.style.animation = "fade 1s forwards";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
});

 