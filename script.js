const startButton = document.getElementById("start-button");
const continueButton = document.getElementById("continue-button");

const welcomeScreen = document.getElementById("welcome-screen");
const messageScreen = document.getElementById("message-screen");
const questionScreen = document.getElementById("question-screen");
const celebrationScreen = document.getElementById("celebration-screen");

const answerButtons = document.querySelectorAll(".answer-button");
const answerReaction = document.getElementById("answer-reaction");


startButton.addEventListener("click", function () {

    welcomeScreen.classList.remove("active");
    messageScreen.classList.add("active");

});


continueButton.addEventListener("click", function () {

    messageScreen.classList.remove("active");
    questionScreen.classList.add("active");

});


answerButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const answer = button.dataset.answer;

        if (answer === "yes") {
            answerReaction.textContent = "correct answer bby 😌💗";
        }

        if (answer === "super") {
            answerReaction.textContent =
                "okayyyy somebody likes me 🙄💗";
        }

        if (answer === "of-course") {
            answerReaction.textContent =
                "Hell yea 😭💗";
        }

        questionScreen.classList.remove("active");
        celebrationScreen.classList.add("active");

        createCelebration();

    });

});


function createCelebration() {

    const particles = ["💗", "⭐", "💕", "✨", "💖"];

    for (let i = 0; i < 35; i++) {

        const particle = document.createElement("span");

        particle.classList.add("celebration-particle");

        particle.textContent =
            particles[Math.floor(Math.random() * particles.length)];

        particle.style.left = "50%";
        particle.style.top = "50%";

        const moveX =
            (Math.random() - 0.5) * window.innerWidth * 0.9;

        const moveY =
            (Math.random() - 0.5) * window.innerHeight * 0.9;

        particle.style.setProperty(
            "--move-x",
            `${moveX}px`
        );

        particle.style.setProperty(
            "--move-y",
            `${moveY}px`
        );

        document.body.appendChild(particle);

        setTimeout(function () {
            particle.remove();
        }, 1800);

    }

}