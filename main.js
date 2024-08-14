document.addEventListener("DOMContentLoaded", function() {
    
    const container = document.querySelector("#container");

    // Create a 16x16 grid
    const rows = 16;
    const columns = 16;

    // Loop to create grid items and append them to the container div
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");

            // Set the position of each grid item
            gridItem.style.left = j * 100 + "px";
            gridItem.style.top = i * 100 + "px";

            container.appendChild(gridItem);
        }
    }
});