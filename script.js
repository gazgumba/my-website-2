const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// YES button celebration
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:linear-gradient(135deg,#ff758c,#ff7eb3);
      color:white;
      text-align:center;
      font-family:Arial;
    ">
      <h1 style="font-size:40px;">YAYYYY!!! 🎉💘</h1>
      <img src="https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif" width="200">
      <p style="font-size:22px;">Devi said YES 😍</p>
      <p>You just made my whole day ❤️</p>
    </div>
  `;
});
