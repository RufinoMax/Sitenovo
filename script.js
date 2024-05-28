const modoToggle = document.getElementById('modo-toggle');
const body = document.body;

modoToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});