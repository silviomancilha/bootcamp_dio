const emojis = [
  "🇧🇷",
  "🇧🇷",
  "🇦🇷",
  "🇦🇷",
  "🇨🇦",
  "🇨🇦",
  "🇨🇴",
  "🇨🇴",
  "🇨🇱",
  "🇨🇱",
  "🇮🇹",
  "🇮🇹",
  "🇬🇧",
  "🇬🇧",
  "🇺🇸",
  "🇺🇸"
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handClick;
  document.querySelector(".game").appendChild(box);
}

function handClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    let msg = document.createElement("div");
    msg.innerHTML = "Parabéns,<br>você venceu!";
    document.querySelector(".msg").appendChild(msg);
  }
}
