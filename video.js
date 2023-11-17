var video = document.querySelector("#player1");

// Initialize the video element, turn off autoplay and turn off looping.
window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video.autoplay = false;
	if (!video.autoplay) {
		console.log("Auto Play is set to false")
		video.load();
	}
	video.loop = false;
	if (!video.loop) {
		console.log("Looping is set to false")
	}

	updateVolume(video.volume);
});

var volumeSlider = document.getElementById("slider");
document.querySelector("#volume").innerHTML = volumeSlider.value;
var lastVolume = 100;
// play button to play video and update volumn inforamtion
document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();

	volumeSlider.value = lastVolume;
	video.volume = prev_volume;
	document.querySelector("#volume").innerHTML = volumeSlider.value;
});

//pause button
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video")
	video.pause();
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate = 0.9 * video.playbackRate;
	console.log(video.playbackRate);
});

// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate = 1 / 0.9 * video.playbackRate;
	console.log(video.playbackRate);
});

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function () {
	video.currentTime += 10;
	console.log(video.currentTime);
});
video.addEventListener('ended', function(){
	video.currentTime = 0;
});


var volumeDisplay = document.getElementById("volume");
var muted = false;

// Function to update volume and display
function updateVolume(newVolume) {
    video.volume = newVolume;
    volumeSlider.value = newVolume * 100;
    volumeDisplay.textContent = (newVolume * 100) + "%";
}

// Event listener for the volume slider
volumeSlider.addEventListener("input", function () {
    var volume = volumeSlider.value / 100;
    if (muted) {
        video.muted = false;
        muted = false;
    }
    lastVolume = volume; // Update lastVolume to the new volume
    updateVolume(volume);
});

// Event listener for the mute button
document.getElementById("mute").addEventListener("click", function () {
    if (!muted) {
        video.muted = true;
        muted = true;
    } else {
        video.muted = false;
        muted = false;
        updateVolume(lastVolume);
    }
});

// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
});

//Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
});
