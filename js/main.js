const openButton = document.getElementById("openButton");

const opening = document.getElementById("opening");

const mainContent = document.getElementById("main-content");


openButton.addEventListener("click", function () {

    opening.style.transition = "opacity 1s ease";

    opening.style.opacity = "0";

    setTimeout(function () {

        opening.style.display = "none";

        mainContent.classList.remove("hidden");

        mainContent.style.animation = "fadeIn 1.2s ease";

        window.scrollTo(0, 0);

    }, 1000);

});

const timelineEvents = [
    {
        date: "26 August 2026",
        title: "The day I first met you."
    },
    {
        date: "16 September 2026",
        title: "When we started getting closer."
    },
    {
        date: "10 October 2026",
        title: "The day I finally got your heart."
    },
    {
        date: "10 November 2026",
        title: "Our first month together."
    }
];

function renderTimeline() {
    const timeline = document.getElementById("timeline");

    if (!timeline) return;

    timeline.innerHTML = timelineEvents.map(event => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <p class="timeline-date">${event.date}</p>
                <h3>${event.title}</h3>
            </div>
        </div>
    `).join("");
}

document.addEventListener("DOMContentLoaded", renderTimeline);
