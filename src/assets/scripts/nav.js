var nav = document.getElementById('nav');
var logo = document.getElementById('logo');
var currentPage = getCurrentPageName();

nav.innerHTML = `
<li ${(currentPage === '' || currentPage === 'index.html') ? 'class="active"' : ''}><a href="index.html">HOME</a></li>
<li ${currentPage === '#sites-list' ? 'class="active"' : ''}><a href="#sites-list">Sites</a></li>
`;

// Per obtenir la URL de la pagian que ens trobem i poder treballar amb l'element .active al NAV
function getCurrentPageName() {
    var pathArray = window.location.pathname.split('/');
    var hash = window.location.hash;
    if (!hash) {
      return hash;
    } else {
      return pathArray[pathArray.length - 1];
    }

}

logo.innerHTML = `
  <h1 class="title-header"><a href="">New York City Pass</a></h1>
`;
