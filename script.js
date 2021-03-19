const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");


updateCup();

smallCups.forEach( (cup, idx) => {
    cup.addEventListener("click", () => fillCup(idx));
})


function fillCup(idx) {
    //checking if the clicked cup already full and is the last filled one, if yes, unfill clicked cup
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

    updateCup();
}

function updateCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const allCups = smallCups.length

    if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${fullCups/allCups*330}px`;
    }

    if (fullCups === allCups ) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    } else {
        remained.style.visibility = "visible";
        liters.innerText = `${2-(250*fullCups/1000)}L`
    }
}