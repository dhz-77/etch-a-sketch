"use strict";

document.addEventListener("DOMContentLoaded", function() {
    
    const container = document.querySelector("#container");
    const btn = document.querySelector("button");

    let size = 16 // = width == height

    drawGrid(size);

    btn.addEventListener("click", () => {
        const gridSize = window.prompt("Enter a number up to 100:", size);

        if (gridSize === null || gridSize === "") {
            return;
        } else if (gridSize > 100) {
            alert("Number cannot be bigger than 100.");
        } else if (gridSize < 0) {
            alert("Number cannot be smaller than 0.");
        } else {
            container.innerHTML = "";
            size = gridSize;
            drawGrid(size);
        }
    })

    function drawGrid(size) { // Create grid items and add to container div
        for (let i = 0; i < (size ** 2); i++) {
                const gridItem = document.createElement("div");
                gridItem.classList.add("grid-item");
                gridItem.style.width = (700 / (size)) + "px"
                container.appendChild(gridItem);
            }
        setEventListener();
    }
    
    function setEventListener() {
        let elementsArray = document.querySelectorAll(".grid-item");
        
        elementsArray.forEach(function(elem) {
            let opc = 0;
            elem.addEventListener("mouseover", () => {
                elem.style.backgroundColor = `rgb(${randColorNum()},${randColorNum()},${randColorNum()},${opc += 0.1})`;
            });
        });

        function randColorNum() {
            return Math.floor(Math.random() * 256);
        }
    }

});