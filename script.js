const button = document.querySelector("#enterBtn");

if (button) {
    button.addEventListener("click", () => {
        window.location.href = "beginning.html";
    });
}

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("floating-heart");
    heart.innerHTML = "♡";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 35 + 30 + "px";

    heart.style.animationDuration =
        Math.random() * 7 + 6 + "s";

    document.querySelector(".hearts-container")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 14000);
}

setInterval(createHeart, 1000);