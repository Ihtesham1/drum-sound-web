var numOfDrumButton = document.querySelectorAll(".drum").length

for (var i = 0; i < numOfDrumButton ; i ++){

    
document.querySelectorAll("button")[i].addEventListener("click", clickWorking)

function clickWorking(){
    alert("I got clicked")
}

}


