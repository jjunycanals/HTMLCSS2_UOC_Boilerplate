var nav = document.getElementById('nav');
var logo = document.getElementById('logo');
var currentPage = getCurrentPageName();

nav.innerHTML = `
<li ${currentPage === 'index.html' ? 'class="active"' : ''}><a href="index.html">HOME</a></li>
`;

// Per obtenir la URL de la pagian que ens trobem i poder treballar amb l'element .active al NAV
function getCurrentPageName() {
    var pathArray = window.location.pathname.split('/');
    return pathArray[pathArray.length - 1];
}

logo.innerHTML = `
<a href="index.html" class="log">
  <img src="./assets/images/nylogo.jpg" title="Logo New York" alt="Logo of New York city">
</a>
<h1 class="title-header"><a href="index.html">New York City Pass</a></h1>
`;
