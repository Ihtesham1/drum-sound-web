var numOfDrumButton = document.querySelectorAll(".drum").length

for (var i = 0; i < numOfDrumButton ; i ++){

    
document.querySelectorAll("button")[i].addEventListener("click", clickWorking)

function clickWorking(){
    var alpha = this.innerHTML

    if(alpha == 'w'){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }
    else if(alpha == 'a'){
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    }
    else if(alpha == 's'){
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    }
    else if(alpha == 'd'){
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }
    else if(alpha == 'j'){
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    }
    else if(alpha == 'k'){
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    }
    else if(alpha == 'l'){
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    }


    

    //alert("I got clicked")
}

}


