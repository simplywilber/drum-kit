


for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
function handleClick(){
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML); 
    buttonAnimation(buttonInnerHTML);
}};

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3") ;
            tom1.play();
            break;

            case "a":
                let tom2 = new Audio("sounds/tom-2.mp3") ;
                tom2.play();
                break;

                case "s":
                    let tom3 = new Audio("sounds/tom-3.mp3") ;
                    tom3.play();
                    break;

                    case "d":
                        let audio = new Audio("sounds/tom-1.mp3") ;
                        audio.play();
                        break;

                        case "j":
                            let snare = new Audio("sounds/snare.mp3") ;
                            snare.play();
                            break;

                            case "k":
                                let crash = new Audio("sounds/crash.mp3") ;
                                crash.play();
                                break;

                                case "l":
                                    let kickBass = new Audio("sounds/kick-bass.mp3") ;
                                    kickBass.play();
                                    break;
        default: console.log() ;
        
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
} 

