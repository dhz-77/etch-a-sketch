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
            let count = 0;

            elem.addEventListener("mouseover", () => {
                
                count++;
                console.log(count);

                if (count > 10) {
                    return;
                }

                if (count === 1) {
                    elem.style.opacity = 0.1;
                    elem.style.backgroundColor = randomRGB();
                }
                else if (count === 2) {
                    elem.style.opacity = 0.2;
                }
                else if (count === 3) {
                    elem.style.opacity = 0.3;
                }
                else if (count === 4) {
                    elem.style.opacity = 0.4;
                }
                else if (count === 5) {
                    elem.style.opacity = 0.5;
                }
                else if (count === 6) {
                    elem.style.opacity = 0.6;
                }
                else if (count === 7) {
                    elem.style.opacity = 0.7;
                }
                else if (count === 8) {
                    elem.style.opacity = 0.8;
                }
                else if (count === 9) {
                    elem.style.opacity = 0.9;
                }
                else if (count === 10) {
                    elem.style.opacity = 1;
                }

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