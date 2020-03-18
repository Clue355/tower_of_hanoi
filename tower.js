
const selectTower = function (event) {
    const selectedTower = event.currentTarget
    console.log(selectedTower)
    // let hand = document.querySelector('.hand')
    // let held = document.querySelector(".holding")
    // let holding = document.querySelector(".hand")
    let selectedDisk = selectedTower.lastElementChild
    let currentHand = holding.lastElementChild
         if (clickBehavior === "pick"){
         selectedDisk
         holding.appendChild(selectedDisk)
         clickBehavior = "drop";
         console.log(clickBehavior)
          } else if (clickBehavior === "drop") {
            //   if (holding.lastElementChild.dataset.size < selectedTower.lastElementChild.dataset.size){//works
            // if (selectedTower.childNodes.length === 1 ){//works
            // if (selectedTower.ChildNodes.length === 1 || holding.lastElementChild.dataset.size < selectedTower.lastElementChild.dataset.size ){
                if (selectedTower.childNodes.length === 1 || selectedTower.childNodes.length === 5){

               selectedTower.appendChild(holding.lastElementChild)
               clickBehavior = "pick"
            //    if (tower3.childElementCount >= 4) {
            //     alert("You Win!")
            //     return; 
            //     }
             } else if (holding.lastElementChild.dataset.size < selectedTower.lastElementChild.dataset.size){
                selectedTower.appendChild(holding.lastElementChild)
                clickBehavior = "pick"
                if (tower3.childElementCount >=4){
                    alert("You Win!!!")
                    
                }
             } else clickBehavior = "pick"
    } 
}

// const selectTower = function(event) {
//     selectedTower = event.currentTarget;
//     let holding = document.querySelector(".hand")
//     if (clickBehavior === "pick") {    
//     selectedDisk = selectedTower.firstElementChild;
//     clickBehavior = "drop";
//     } else if (clickBehavior === "drop") {
//         selectedTower = event.currentTarget;
//         if ( selectedDisk.dataset.size < selectedTower.firstElementChild.dataset.size || selectedTower.childNodes === 0) {
//         holding.append(selectedDisk);
//         clickBehavior = "pick";
//             if (tower3.childNodes.length === 4) {
//                 alert("You Win!")
//                 return;
//             }        
//         } else {
//             clickBehavior = "pick";
//         }
//     }
// }    


let holding = document.querySelector(".hand")
let held = document.querySelector(".holding")


let clickBehavior= "pick" //c

const tower1 = document.querySelector("#tower1")
const tower2 = document.querySelector("#tower2")
const tower3 = document.querySelector("#tower3")

tower1.addEventListener('click', selectTower)//c
tower2.addEventListener('click', selectTower)
tower3.addEventListener('click', selectTower)
