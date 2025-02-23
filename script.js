// Your code here.
document.addEventListener("DOMContentLoaded", () => {
    const itemsContainer = document.querySelector(".items");
    let isDown = false;
    let startX;
    let scrollLeft;

    itemsContainer.addEventListener("mousedown", (e) => {
        isDown = true;
        itemsContainer.classList.add("active");
        startX = e.pageX - itemsContainer.offsetLeft;
        scrollLeft = itemsContainer.scrollLeft;
    });

    itemsContainer.addEventListener("mouseleave", () => {
        isDown = false;
        itemsContainer.classList.remove("active");
    });

    itemsContainer.addEventListener("mouseup", () => {
        isDown = false;
        itemsContainer.classList.remove("active");
    });

    itemsContainer.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - itemsContainer.offsetLeft;
        const walk = (x - startX) * 2; // Multiply for faster scrolling
        itemsContainer.scrollLeft = scrollLeft - walk;
    });
});

