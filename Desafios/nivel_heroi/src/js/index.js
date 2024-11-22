// let nome = "superHero";
// let xp = Number(document.getElementById("xp").ariaValueNow);
// let xp = 1000;

const btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name");
  const nome = name.value;
  console.log(nome);
  // document.getElementById("heroi").innerHTML = `${nome}`;

  const nivel = document.querySelector("#xp_nivel");
  const xp = Number(nivel.value);
  console.log(xp);
  // document.getElementById("xp").innerHTML = `${xp}`;

  if (xp <= 1000) {
    classificacao = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    classificacao = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    classificacao = "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    classificacao = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    classificacao = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    classificacao = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    classificacao = "Imortal";
  } else {
    classificacao = "Radiante";
  }

  document.getElementById(
    "nivel"
  ).innerHTML = `O Herói de nome ${nome} tem XP ${xp} e está no nível ${classificacao}!!!!`;
});
