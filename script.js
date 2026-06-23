document.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(button.dataset.copy);

            const original = button.textContent;

            button.textContent = "완료❕";
            button.classList.add("copied");

            setTimeout(() => {
                button.textContent = original;
                button.classList.remove("copied");
            }, 1200);
        } catch (error) {
            alert("복사에 실패했습니다.");
        }
    });
});