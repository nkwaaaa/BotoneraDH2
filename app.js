const audios = [];
let currentAudio = null;
// let advice = new Audio("./src/audio/kahoot.ogg");
const letters = "abcdefghijklmnñopqrstuvwxyz";

for (let i = 0; i < letters.length; i++) {
    audios[letters[i]] = new Audio("./src/audio/" + letters[i] + ".ogg");
}

function pageLoaded() {
    document.getElementById("loading").style.display = "none";
}

function playSound(letter) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = audios[letter];
    audios[letter].play();
}

/* -------------------------------- rompiendo ------------------------------- */
// function alternar() {
//     var miElemento = document.getElementById("test");
//     if (miElemento.style.color == "black") {
//         miElemento.style.color = "white";
//     } else {
//         miElemento.style.color == "white";
//     }
// }
// window.onload = function () {
//     document.getElementById("test").onclick = alternar;
// };

// function playAdvice() {
//     advice.pause();
//     advice.currentTime = 0;
//     advice.play();
// }

window.addEventListener("load", pageLoaded);
