function openSurprise() {

    const intro = document.getElementById("intro");
    const main = document.getElementById("main");

    intro.classList.add("hide");

    setTimeout(() => {
        intro.style.display = "none";
        main.classList.add("show");

        createBalloons();
        createConfetti();
    }, 900);
}

function celebrate() {

    createBalloons();
    createConfetti();
    createConfetti();

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

function createBalloons() {

    const container = document.getElementById("balloons");

    const emojis = ["🎈", "🎈", "🎈", "🎈", "🎈", "🎈"];

    emojis.forEach((emoji, index) => {

        const balloon = document.createElement("div");

        balloon.className = "balloon";
        balloon.innerHTML = emoji;

        balloon.style.left = Math.random() * 90 + "vw";
        balloon.style.animationDuration =
            (8 + Math.random() * 8) + "s";

        balloon.style.animationDelay =
            (index * .5) + "s";

        container.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 18000);
    });
}

function createConfetti() {

    const container = document.getElementById("confetti");

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("div");

        piece.className = "confettiPiece";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.background =
            `hsl(${Math.random() * 360}, 100%, 70%)`;

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        piece.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 7000);
    }
}
