"use strict";

document.addEventListener("DOMContentLoaded", function() {
    
    const container = document.querySelector("#container");
    const btn = document.querySelector("button");

    let size = 16 // = width == height

    setGrid(size);
    setEventListener();

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
            setGrid(size);
            setEventListener();
        }
    })

    function setGrid(size) { // Create grid items and add to container div
        for (let i = 0; i < (size ** 2); i++) {
                const gridItem = document.createElement("div");
                gridItem.classList.add("grid-item");
                gridItem.style.width = (960 / (size)) + "px"
                container.appendChild(gridItem);
            }
    }
    
    function setEventListener() {
        let elementsArray = document.querySelectorAll(".grid-item");

        elementsArray.forEach(function(elem) {
            elem.addEventListener("mouseover", () => {
                elem.style.backgroundColor = randomRGB();
            });
        });
    }

    function randColorNum() {
        return Math.floor(Math.random() * 256);
    }
    
    function randomRGB() {
        return `rgb(${randColorNum()},${randColorNum()},${randColorNum()})`;
    }

});