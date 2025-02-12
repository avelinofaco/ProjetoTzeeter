
const postText = document.getElementById("post-text");
    const charCounter = document.getElementById("char-counter");
    const postButton = document.querySelector(".post-button");
    const maxChars = 140;

    postText.addEventListener("input", () => {
        let textLength = postText.value.length;
        let remaining = maxChars - textLength;
        
        if (textLength === 0) {
            charCounter.style.display = "none";
        } else {
            charCounter.style.display = "inline";
            charCounter.textContent = remaining;
        }

        if (remaining < 40 && remaining >= 0) {
            charCounter.style.color = "rgb(255, 200, 0)";
        } else if (remaining < 0) {
            charCounter.style.color = "rgb(255, 0, 0)";
        } else {
            charCounter.style.color = "#000";
        }

        postButton.disabled = remaining < 0;
    });
    
document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");
    const tweetModal = document.getElementById("tweetModal");

    // Abrir modal ao clicar no botão Tweet
    openModalBtn.addEventListener("click", () => {
        tweetModal.showModal();
    });

    // Fechar modal ao clicar no botão Cancelar
    closeModalBtn.addEventListener("click", () => {
        tweetModal.close();
    });
});