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

    function setGrid(rows, columns) { // Create grid items and add to container div
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const gridItem = document.createElement("div");
                gridItem.classList.add("grid-item");
                gridItem.style.width = (960 / (rows)) + "px"
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
        });
    }

});