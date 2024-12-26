let progresss = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

song.onloadedmetadata = function() {
    progresss.max = song.duration;
    progresss.value = song.currentTime;

}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if (song.play()) {
    setInterval(() => {
        progresss.value = song.currentTime;
    }, 500)
}

progresss.onchange = function() {
    song.play();
    song.currentTime = progresss.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}