let currentPage = 0;
const pages = document.querySelectorAll('.page');
const music = document.getElementById('backgroundMusic');

// Show the first page
pages[currentPage].classList.add('active');

// Play background music initially
music.play();

// Function to show the next page with fade-out/fade-in effect
function showNextPage() {
    if (currentPage < pages.length - 1) {
        // Fade out the current page
        pages[currentPage].classList.remove('active');
        setTimeout(() => {
            pages[currentPage].style.display = 'none'; // Hide previous page
            currentPage++;
            pages[currentPage].style.display = 'block'; // Show next page
            setTimeout(() => {
                pages[currentPage].classList.add('active'); // Fade-in the next page
            }, 50);
        }, 1000); // Fade-out time (same as CSS transition duration)
    }
}

// Event listener for the next button
document.querySelectorAll('.next-button').forEach(button => {
    button.addEventListener('click', showNextPage);
});

// Music toggle control
const musicSwitch = document.getElementById('musicSwitch');
const musicIcon = document.getElementById('musicIcon');
musicSwitch.addEventListener('change', function () {
    if (musicSwitch.checked) {
        music.play();
        musicIcon.classList.remove('music-off');
        musicIcon.classList.add('music-on');
    } else {
        music.pause();
        musicIcon.classList.remove('music-on');
        musicIcon.classList.add('music-off');
    }
});

// Event listener for the Back button
document.getElementById('backBtn').addEventListener('click', function () {
    location.reload(); // Reload the page to go back to the first page
});
