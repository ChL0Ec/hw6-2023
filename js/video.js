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
});

//play button
document.querySelector("#play").addEventListener("click", function() {
    video.play();
	console.log("Play Video");

	video.volume = prev_volume;
});

//pause button
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video")
	video.pause();

	slider.addEventListener('input', function() {
		video.volume = slider.value / 100;
	});
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

// Event listener for the mute button
document.addEventListener("DOMContentLoaded", function() {
	var mute = document.getElementById("mute");

	mute.addEventListener("click", function () {
		toggleMute();
	  });
	  function toggleMute() {
		if (video.muted) {
		  video.muted = false;
		  mute.innerHTML = "Mute";
		} else {
		  video.muted = true;
		  mute.innerHTML = "Unmute";
		}
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

var slider = document.getElementById('slider');
var volumeSpan = document.getElementById('volume');

function updateVolume() {
     var volumeValue = slider.value;
    volumeSpan.textContent = volumeValue +"%";
}


slider.addEventListener('input', updateVolume);
updateVolume();

slider.addEventListener('input', function() {
	video.volume = slider.value / 100;
});
