const moveRing = function (event) {
    const ring = event.target;
    const tower = document.querySelector("#tower2");
    const copy = ring.cloneNode(true);
    tower.appendChild(copy);
}

let towerSelector = document.querySelector("#towerSelection")
towerSelector.addEventListener('click', function(event) {
   
    }

})



let purple = document.querySelector("#ring4")
purple.addEventListener('click', function(event) {
    const purpleRing = event.target;
    const towerTwo = document.querySelector("#tower2");
    const ringCopy = purpleRing.cloneNode(true);
    towerTwo.appendChild(ringCopy);
    
})

let blue = document.querySelector("#ring3")
blue.addEventListener('click', function(event) {
    const blueRing = event.target;
    const towerTwo = document.querySelector("#tower2");
    const ringCopy = blueRing.cloneNode(true);
    towerTwo.appendChild(ringCopy);
    
})

let green = document.querySelector("#ring2")
green.addEventListener('click', function(event) {
    const greenRing = event.target;
    const towerTwo = document.querySelector("#tower2");
    const ringCopy = greenRing.cloneNode(true);
    towerTwo.appendChild(ringCopy);
    
})

let red = document.querySelector("#ring1")
red.addEventListener('click', function(event) {
    const redRing = event.target;
    const towerTwo = document.querySelector("#tower2");
    const ringCopy = redRing.cloneNode(true);
    towerTwo.appendChild(ringCopy);
    
})