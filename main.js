"use strict";

document.addEventListener("DOMContentLoaded", function() {
    
    const container = document.querySelector("#container");
    const btn = document.querySelector("button");

    let rows = 16, columns = 16;

    setGrid(rows, columns);
    setEventListener();

    btn.addEventListener("click", () => {
        const gridSize = window.prompt("Enter a number up to 100:", rows);

        if (gridSize === null || gridSize === "") {
            return;
        } else if (gridSize > 100) {
            alert("Number cannot be bigger than 100.");
        } else if (gridSize < 0) {
            alert("Number cannot be smaller than 0.");
        } else {
            container.innerHTML = "";
            rows = gridSize, columns = gridSize;
            setGrid(rows, columns);
            setEventListener();
        }
    })

    // Loop to create grid items and append them to the container div
    function setGrid(rows, columns) {
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
    }
    
    function setEventListener() {
        let elementsArray = document.querySelectorAll(".grid-item");

        elementsArray.forEach(function(elem) {
        elem.addEventListener("mouseover", () => {
            elem.style.backgroundColor = "blue";
        });

        /* optional hover effect - does not leave trail
        elem.addEventListener("mouseout", () => {
            elem.style.backgroundColor = "";
        }); */
        });
    }
    
});