const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Smooth teleporting NO button
noBtn.style.transition = "all 0.3s ease";

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 80);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// YES button click = GIF + message
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
      background:linear-gradient(135deg,#ff9a9e,#fbc2eb,#fad0c4);
      color:white;
      font-family:Poppins, Arial;
    ">
      <h1 style="font-size:14vw;">YAYYYY!!! 💖🎉</h1>
      <h2 style="font-size:7vw;">Devi, you’re my Valentine 😍</h2>
      <img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" width="60%">
    </div>
  `;
});

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 300);
