
const littlePromises = [
    "I promise to keep choosing you, even on ordinary days.",
    "I promise to listen, even when finding the right words is difficult.",
    "I promise to respect your feelings, your space, and your dreams.",
    "I promise to keep learning how to love you better.",
    "I promise to appreciate every little moment we get to share.",
    "And most importantly, I promise to never take your presence for granted."
];

function renderPromises() {
    const container = document.getElementById("promise-container");

    if (!container) return;

    container.innerHTML = littlePromises.map((promise, index) => `
        <div class="promise-item">
            <span class="promise-number">0${index + 1}</span>
            <p>${promise}</p>
        </div>
    `).join("");
}

document.addEventListener("DOMContentLoaded", renderPromises);

// THINGS I ADORE ABOUT YOU

const adoreThings = [
    {
        title: "Your smile.",
        description: "Even the simplest smile of yours can make my day feel a little brighter."
    },
    {
        title: "Your little habits.",
        description: "Even the things you probably don't notice about yourself are things I find adorable."
    },
    {
        title: "The way you talk.",
        description: "I could listen to your stories, random thoughts, and little complaints for hours."
    },
    {
        title: "Your silly side.",
        description: "I love the version of you that laughs, jokes, and acts completely silly around me."
    },
    {
        title: "Your honesty.",
        description: "I adore how you let me see the parts of you that you don't always show to everyone."
    },
    {
        title: "Your existence.",
        description: "I don't need a special reason to adore you. Sometimes, simply being you is enough."
    },
    {
        title: "The way you make me feel.",
        description: "You make ordinary moments feel like something worth remembering."
    },
    {
        title: "Every side of you.",
        description: "The happy, quiet, tired, excited, and imperfect sides. I want to appreciate all of them."
    },
    {
        title: "Your little tears.",
        description: "I know you can be a little sensitive sometimes, and I want you to know that you don't always have to hide your feelings from me."
    },
    {
        title: "Your random cravings.",
        description: "One moment you're doing fine, the next moment you suddenly want something. And somehow, that's just another little thing about you that I adore."
    }
];

function renderAdoreThings() {
    const container = document.getElementById("adore-container");

    if (!container) return;

    container.innerHTML = adoreThings.map((item, index) => `
        <article class="adore-card">
            <span class="adore-number">
                0${index + 1}
            </span>

            <h3>${item.title}</h3>

            <p>${item.description}</p>
        </article>
    `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    renderAdoreThings();
});
