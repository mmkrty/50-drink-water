const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");


smallCups.forEach( (cup, idx) => {
    cup.addEventListener("click", () => fillCup(idx));
})


function fillCup(idx) {
    //checking if the clicked cup is already full, if yes, unfill cup
    if(smallCups[idx].classList.contains("full")&& !smallCups[idx].nextElementSibling.classList.contains("full")){
        idx--;
    }

    // filling cups all the way to the clicked cup, or unfill cups all the way to the clicked cup
    smallCups.forEach((cup,idx2) =>{
        if(idx2<=idx){
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
    })
}