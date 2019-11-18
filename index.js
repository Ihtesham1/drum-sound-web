var numOfDrumButton = document.querySelectorAll(".drum").length

for (var i = 0; i < numOfDrumButton ; i ++){


document.querySelectorAll("button")[i].addEventListener("click", function() {

    var cil = this.innerHTML
    makeSound(cil)
    makeAnimation(cil)

})

document.addEventListener("keypress", function(event) {
    var keypad = event.key
    makeSound(keypad)
    makeAnimation(keypad)
})

function makeSound(sound){
    if(sound == 'w'){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }
    else if(sound == 'a'){
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    }
    else if(sound == 's'){
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    }
    else if(sound == 'd'){
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }
    else if(sound == 'j'){
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    }
    else if(sound == 'k'){
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    }
    else if(sound == 'l'){
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    }
}

function makeAnimation(recentEvent){
   var activebutton = document.querySelector("."+recentEvent)
   activebutton.classList.add("pressed")

   setTimeout(function(){
       activebutton.classList.remove("pressed")
   }, 100)

}

}


