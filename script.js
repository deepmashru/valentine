const loading = document.getElementById("loading");
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const yesScreen = document.getElementById("yesScreen");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const loadingText = document.getElementById("loadingText");

// Fake loading
let percent = 0;
const loader = setInterval(() => {
  percent += Math.floor(Math.random() * 8);
  if (percent >= 100) {
    percent = 100;
    loadingText.innerText = "Done 💖";
    clearInterval(loader);

    setTimeout(() => {
      loading.classList.add("hidden");
      intro.classList.remove("hidden");

      setTimeout(() => {
        intro.classList.add("hidden");
        main.classList.remove("hidden");
      }, 4000);

    }, 800);
  } else {
    loadingText.innerText = `Preparing magic… ${percent}%`;
  }
}, 300);

// YES button
yesBtn.addEventListener("click", () => {
  main.classList.add("hidden");
  yesScreen.classList.remove("hidden");
});

// NO button escape (mobile + PC)
noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseenter", moveButton);

function moveButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
