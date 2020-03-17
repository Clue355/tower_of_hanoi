
const selectRing = function (event) {
    const selectedTower = event.currentTarget
    let selectedDisk = selectedTower.lastElementChild
    let disk = document.querySelector('.disk')
    let holding = document.querySelector(".hand")
    holding.appendChild(selectedDisk)
    if (holding.contains(selectedDisk) === false) {
        
    } else {
        selectedTower.appendChild(selectedDisk)
    }
}

const tower1 = document.querySelector("#tower1")
const tower2 = document.querySelector("#tower2")
const tower3 = document.querySelector("#tower3")

tower1.addEventListener('click', selectRing)
tower2.addEventListener('click', selectRing)
tower3.addEventListener('click', selectRing)
