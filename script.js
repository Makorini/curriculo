// Certifica que o script só roda depois do DOM carregar
window.addEventListener("DOMContentLoaded", () => {

  // ===== Saudação inicial =====
  const btn = document.getElementById("btn");
  const nomeInput = document.getElementById("nome");
  const saudacao = document.getElementById("saudacao");

  btn.addEventListener("click", (event) => {
    event.preventDefault(); // previne envio do formulário teste
    const nome = nomeInput.value.trim();
    if (nome) {
      saudacao.innerText = `Olá, ${nome}! Bem-vindo(a) ao meu Currículo Web!`;
    } else {
      alert("Por favor, digite seu nome!");
    }
  });

  // ===== Canvas =====
  const canvas = document.getElementById("grafico");
  const ctx = canvas.getContext("2d");

  // Desenha um círculo
  ctx.beginPath();
  ctx.arc(100, 100, 70, 0, 2 * Math.PI);
  ctx.fillStyle = "#000000ff";
  ctx.fill();
  ctx.stroke();

  // Cria um objeto de imagem
  const img = new Image();
  img.src = "media/imagem.jpg"; // caminho correto da imagem

  // Quando a imagem carregar, desenha dentro do círculo
  img.onload = function() {
    ctx.save();
    ctx.beginPath();
    ctx.arc(100, 100, 70, 0, 2 * Math.PI);
    ctx.clip();
    ctx.drawImage(img, 30, 30, 140, 140);
    ctx.restore();
  };

});
