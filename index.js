var intervalId;
var speed = 100; // Default scrolling speed (milliseconds)
var isScrolling = false;

function autoScroll() {
    var textarea = document.getElementById('scrollingTextarea');
    textarea.scrollTop += 1; // Increment the scrollTop property
}

function toggleScrolling() {
    if (!isScrolling) {
        intervalId = setInterval(autoScroll, speed); // Start auto-scrolling
        document.getElementById('scrollButton').textContent = "Stop Scrolling";
    } else {
        clearInterval(intervalId); // Stop auto-scrolling
        document.getElementById('scrollButton').textContent = "Start Scrolling";
    }
    isScrolling = !isScrolling;
}

function changeSpeed(newSpeed) {
    speed = newSpeed; // Update the speed variable
    if (isScrolling) {
        clearInterval(intervalId); // Stop auto-scrolling if it's currently scrolling
        intervalId = setInterval(autoScroll, speed); // Restart auto-scrolling with the new speed
    }
}
