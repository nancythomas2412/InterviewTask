// Select the video and the play/pause button
const video = document.getElementById("video");
const playPauseButton = document.getElementById("play-pause");
const overlay = document.querySelector(".video-overlay");
const centreText = document.querySelector(".text-overlay");

// Add click event listener to the button
playPauseButton.addEventListener("click", () => {
  if (video.paused) {
    video.play(); // Play the video
    playPauseButton.innerHTML = "&#10074;&#10074;"; // Change button text
    overlay.style.opacity = "0";
    centreText.style.visibility = "hidden";
    playPauseButton.style.opacity = "0.2";
  } else {
    video.pause(); // Pause the video
    playPauseButton.innerHTML = "&#9654;"; // Change button text
    overlay.style.opacity = "0.7";
    centreText.style.visibility = "visible";
    playPauseButton.style.opacity = "1";

  }
});