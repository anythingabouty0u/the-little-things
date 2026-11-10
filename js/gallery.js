
const galleryPhotos = [
    {
        src: "images/photo1.jpeg",
        alt: "our first memory"
    },
    {
        src: "images/photo2.jpeg",
        alt: "a little moment together"
    },
    {
        src: "images/photo3.jpeg",
        alt: "one of my favorite memories"
    },
    {
        src: "images/photo4.jpeg",
        alt: "another beautiful moment"
    },
    {
        src: "images/photo5.jpeg",
        alt: "another little memory"
    },
    {
        src: "images/photo6.jpeg",
        alt: "a moment worth keeping"
    }
];

function renderGallery() {
    const galleryContainer = document.getElementById("gallery-container");

    if (!galleryContainer) return;

    galleryContainer.innerHTML = "";

    galleryPhotos.forEach((photo, index) => {
        const item = document.createElement("div");
        item.className = "gallery-item";

        const img = document.createElement("img");
        img.src = photo.src;
        img.alt = photo.alt;
        img.loading = "lazy";

        item.appendChild(img);
        galleryContainer.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", renderGallery);
