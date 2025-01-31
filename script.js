document.addEventListener("DOMContentLoaded", function() {
    const target = new Date("February 1, 2025 19:20").getTime();
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = target - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("days").children[0].innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").children[0].innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").children[0].innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").children[0].innerText = seconds < 10 ? "0" + seconds : seconds;
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.text-center').style.display = "none";
            document.getElementById("selesai").style.display = "block";
        }
    }
    document.getElementById("okButton").addEventListener("click", function() {
        document.getElementById("selesai").style.display = "none";
    });
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
document.addEventListener('click', function(event) {
    if (event.target.closest('.text-center')) {
        var audio = document.getElementById('audio');
        if (audio.paused) {
            audio.play().catch(function(error) {
                console.log('Error playing audio:', error);
            }); 
        }
    }
});
document.addEventListener('click', function(event) {
    if (event.target.closest('#selesai')) {
        var audio = document.getElementById('aud1o');
        if (audio.paused) {
            audio.play().catch(function(error) {
                console.log('Error playing audio:', error);
            });
        }
    }
});
