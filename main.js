// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Typing Effect
const text = ["Data Research Analyst", "Power BI & SQL Expert", "SAP Analytics Specialist"];
let index = 0, char = 0;
const typingEl = document.querySelector(".typing");

function typeEffect() {
  if (char < text[index].length) {
    typingEl.textContent += text[index].charAt(char);
    char++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (char > 0) {
    typingEl.textContent = text[index].substring(0, char - 1);
    char--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 500);
  }
}
typeEffect();

// Counters
const counters = document.querySelectorAll(".counter");
const speed = 100;

counters.forEach(counter => {
  const update = () => {
    const target = +counter.dataset.target;
    const count = +counter.innerText;
    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update, 40);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

// Scroll Top
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Theme Toggle
document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("light");
};
