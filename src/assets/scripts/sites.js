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
                        <span class="button">${element.categoria}</span>
                        <div class="sites-img">
                        <img style="width: 300px"
                            loading="lazy"
                            src="./images/${element.detall.multimedia}"
                            alt="${element.titol}"
                            sizes ="(max-width: 400px) ../images/${element.detall.sizemultimedia[0]} 400vw,
                                    (max-width: 600px) ../images/${element.detall.sizemultimedia[1]} 600vw,
                                    (max-width: 800px) ../images/${element.detall.sizemultimedia[0]} 800vw
                                    "
                            srcset ="
                                ../images/${element.detall.sizemultimedia[0]} 400w,
                                ../images/${element.detall.sizemultimedia[1]} 600w,
                                ../images/${element.detall.sizemultimedia[0]} 800w
                                "
                        >
                        </div>
                    </div>
                    <div class="sites-body">
                        <span>${element.data}</span>
                        <h2>${element.titol}</h2>
                        <a href="detail.html?id=${i}" id="${i}" class="sites-link">Read more</a>

                    </div>
                </article>
            `;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {printSites();});
