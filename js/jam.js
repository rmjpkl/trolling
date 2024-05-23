function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds(); // Add seconds

    // Add leading zeros for hours, minutes, and seconds
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds; // Add leading zero for seconds

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

// Run the function when the page loads
updateClock();
