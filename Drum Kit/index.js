for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        var trigger = this.innerHTML;
        ButtonEvent(trigger);
        buttonAnimation(trigger);

    });
}

    document.addEventListener("keydown", (event) => {
        ButtonEvent(event.key);
        buttonAnimation(event.key);
    });

function ButtonEvent(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        default:
            alert('press the relevent key to continue...');
            break;
    }
}

function buttonAnimation(currentkey) {
      var animate = document.querySelector('.' + currentkey )
    animate.classList.add('pressed');
    setTimeout(function() {
        animate.classList.remove('pressed');
    }, 100);
}