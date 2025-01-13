document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const modalOverlay = document.createElement("div");
    const modalContent = document.createElement("div");
    const closeButton = document.createElement("button");

    // Setup modal structure
    modalOverlay.classList.add("modal-overlay");
    modalContent.classList.add("modal-content");
    closeButton.classList.add("modal-close");
    closeButton.innerHTML = "&times;";

    // Append modal elements to the body
    modalOverlay.appendChild(modalContent);
    modalContent.appendChild(closeButton);
    document.body.appendChild(modalOverlay);

    // Open modal with card details
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const title = card.querySelector("h3").textContent;
            const description = card.querySelector("p").textContent;
            const extraInfo = card.dataset.more || "";

            // Populate modal with card content
            modalContent.innerHTML = `<button class="modal-close">&times;</button>
                                       <h2>${title}</h2>
                                       <p>${description}</p>
                                       <p>${extraInfo}</p>`;
            modalOverlay.classList.add("show");

            // Add event listener to close button in modal
            modalContent.querySelector(".modal-close").addEventListener("click", () => {
                modalOverlay.classList.remove("show");
            });
        });
    });

    // Close modal when clicking on the overlay
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove("show");
        }
    });
});
