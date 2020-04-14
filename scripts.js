var home = document.getElementById('home');
var about = document.getElementById('about');
var contact = document.getElementById('contact');

function showHome() {
    home.style.display = 'block';
    about.style.display = 'none';
    contact.style.display = 'none';
}
function showAbout() {
    about.style.display = 'block';
    home.style.display = 'none';
    contact.style.display = 'none';
}
function showContact() {
    contact.style.display = 'block';
    home.style.display = 'none';
    about.style.display = 'none';
}
if (home.style.display = 'block') {
    navBtn[1].classList.add("active");
}
console.log(navBtn[1])