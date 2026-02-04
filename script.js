const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const main = document.getElementById("main");
const yesScreen = document.getElementById("yesScreen");

yesBtn.addEventListener("click", () => {
  main.classList.add("hidden");
  yesScreen.classList.remove("hidden");
});

// Make NO button run away 😈
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
