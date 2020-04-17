var home = document.getElementById('home');
var about = document.getElementById('about');
var contact = document.getElementById('contact');
var logo = document.getElementById('logo');

function showHome() {
    home.style.display = 'block';
    about.style.display = 'none';
    contact.style.display = 'none';
    logo.style.visibility = 'hidden';
}
function showAbout() {
    about.style.display = 'block';
    home.style.display = 'none';
    contact.style.display = 'none';
    logo.style.visibility = 'visible';

}
function showContact() {
    contact.style.display = 'block';
    home.style.display = 'none';
    about.style.display = 'none';
    logo.style.visibility = 'visible';
}