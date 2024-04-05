import sites from './data.js';
var datosjson = sites;

function printSites() {
    const content = document.getElementById('grid-sites');
    var i = 0;
    if (content){
        datosjson.forEach(element => {
            i += 1;
            content.innerHTML += `
                <article class="sites">
                    <div class="sites-header">
                        <div class="sit"><span class="but">${element.discount} %</span></div>
                        <div class="sites-img">
                          <img src="./images/${element.detall.multimedia}" alt="${element.titol}">
                        </div>
                    </div>
                    <div class="sites-body">
                        <span>${element.data}</span>
                        <h2>${element.titol}</h2>
                        <a href="detail.html?id=${i}" id="${i}" class="sites-link">View more</a>
                    </div>
                </article>
            `;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {printSites();});
