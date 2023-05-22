var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//detection button
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


//detect key press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("MY SOUNDS/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("MY SOUNDS/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("MY SOUNDS/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("MY SOUNDS/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("MY SOUNDS/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("MY SOUNDS/crash.mp3");
            crash.play();
            break;

        case "l":
            var kickbass = new Audio("MY SOUNDS/kick-bass.mp3");
            kickbass.play();
            break;

        default:
            break;
    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
}

