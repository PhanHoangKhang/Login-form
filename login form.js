const hamburger = document.getElementById('hamburger');
const navBar = document.getElementById('navBar');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('show');
});