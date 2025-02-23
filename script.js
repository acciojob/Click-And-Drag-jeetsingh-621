document.addEventListener("DOMContentLoaded", () => {
    const itemsContainer = document.querySelector(".items");
    let isDragging = false;
    let startX;
    let scrollLeft;

    itemsContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        itemsContainer.classList.add("active");
        startX = e.pageX - itemsContainer.offsetLeft;
        scrollLeft = itemsContainer.scrollLeft;
    });

    itemsContainer.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        e.preventDefault();
        const x = e.pageX - itemsContainer.offsetLeft;
        const move = (x - startX) * 2; // Increases scroll sensitivity

        itemsContainer.scrollLeft = scrollLeft - move;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        itemsContainer.classList.remove("active");
    });

    itemsContainer.addEventListener("mouseleave", () => {
        isDragging = false;
        itemsContainer.classList.remove("active");
    });
});
