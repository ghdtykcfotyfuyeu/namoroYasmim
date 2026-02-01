/* PARTICULAS */
const particles = document.getElementById("particles");
for (let i = 0; i < 25; i++) {
  const p = document.createElement("span");
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDelay = Math.random() * 10 + "s";
  p.style.animationDuration = 8 + Math.random() * 8 + "s";
  particles.appendChild(p);
}

/* TELEGRAM */
const BOT_TOKEN = "8195483182:AAG_I3r1C9D_EcQ5-lU8XcnrHLJDtZeeVa0";
const CHAT_ID = "5096847391";

/* Controle para botão único */
let pedidoEnviado = false;

function enviarPedido() {
  if (pedidoEnviado) return; // impede múltiplos cliques
  pedidoEnviado = true;

  if (navigator.vibrate) navigator.vibrate([80, 40, 80]);

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: "💍 Ela clicou no botão do pedido de namoro ❤️✨"
    })
  }).then(() => {
    const btn = document.getElementById("pedido");
    btn.disabled = true;                  // desativa botão
    btn.innerText = "Pedido feito 💖";    // muda texto
    document.getElementById("status").innerText = "Agora é com você ❤️";
  }).catch(() => {
    pedidoEnviado = false;
    alert("Erro ao enviar. Tente novamente!");
  });
}

/* MOSTRAR BOTÃO NO FINAL DO VÍDEO */
document.getElementById("video").addEventListener("ended", () => {
  const btn = document.getElementById("pedido");
  btn.classList.add("show");
});

/* SERVICE WORKER */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
