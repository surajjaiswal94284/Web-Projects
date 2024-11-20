let progress = document.getElementById("progress");
let play = document.getElementById("play");
let audio = document.querySelector("audio");
let forward = document.querySelector(".fa-forward");
let backward = document.querySelector(".fa-backward");

audio.onloadedmetadata = function() {
    // Set the maximum value of the progress bar to the duration of the audio
    progress.max = audio.duration;
    // Initialize the progress bar value to the current time of the audio, which starts at 0
    progress.value = audio.currentTime;
};

audio.ontimeupdate = function() {
    // Update the progress bar value to match the current time of the audio
    progress.value = audio.currentTime;
};

progress.oninput = function() {
    // Set the current time of the audio to the value of the progress bar
    audio.play();
    audio.currentTime = progress.value;
    play.classList.remove("fa-play");// Ensure the play button displays as pause
    play.classList.add("fa-pause");
};
audio.onended=function(){
    audio.currentTime = 0; 
    audio.play(); 
    play.classList.remove("fa-play"); 
    play.classList.add("fa-pause");
}


play.addEventListener("click", () => {
    if (play.classList.contains("fa-pause")) {
        audio.pause();
        play.classList.add("fa-play");
        play.classList.remove("fa-pause");
    } else {
        audio.play();
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
    }
});

forward.addEventListener("click", () => {
    audio.currentTime += 10;
    audio.play();
    play.classList.remove("fa-play"); 
    play.classList.add("fa-pause");
});

backward.addEventListener("click", () => {
    audio.currentTime -= 10;
    audio.play();
    play.classList.remove("fa-play"); 
    play.classList.add("fa-pause");
});