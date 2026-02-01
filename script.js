const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Smooth NO button teleport
noBtn.style.transition = "all 0.3s ease";

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// YES button click
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      width:100vw;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      text-align:center;
      background: url('https://images.unsplash.com/photo-1614282460388-fd81e3f6b373?auto=format&fit=crop&w=800&q=80') no-repeat center center/cover;
      color:white;
      font-family:Poppins, Arial;
    ">
      <h1 style="font-size:14vw;">YAYYYY!!! 💖🎉</h1>
      <h2 style="font-size:7vw;">Devi, you’re my Valentine 😍</h2>
      <img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" width="60%">
    </div>
  `;
});

// Floating emojis/hearts
const emojis = ["💖","❤️","😍","💘","💝","💕"];
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 300);
