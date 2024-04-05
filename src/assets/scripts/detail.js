import sites from './data.js';
var datosjson = sites;

function printDetail() {
    const content = document.getElementById('sites-detail');
    var i = 0;
    datosjson.forEach(element => {
        i += 1;
        // obtenir l'id de la sites de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (i == id) {
            // Poder obtenir un llistat i mostrar-ho al detall una llista
            var llistat= '';
            element.detall.llistat.forEach(e=> { llistat += `<li>${e}</li>`;});

            content.innerHTML += `
                <header>
                    <h1 class="title-category">${element.titol}</h1>
                    <p class="subtitle">${element.lloc}</p>
                    <time class="data" datetime="${element.data}">${element.data}</time>
                </header>
                <div class="detail-sup">
                    <section class="detail">
                        <div class="detail-photo">
                            <figure>
                                <picture>
                                    <source media="(max-width: 600px)" srcset="./images/${element.detall.sizemultimedia[0]}" />
                                    <source media="(max-width: 900px)" srcset="./images/${element.detall.sizemultimedia[1]}" />
                                    <img class="detail-img" loading="lazy" src="./images/${element.detall.sizemultimedia[2]}" alt="${element.data}" title="${element.titol}">
                                </picture>
                                <figcaption>${element.lloc}</figcaption>
                            </figure>
                        </div>
                        <div class="detail-text">
                            <p>${element.detall.text}</p>
                        </div>
                    </section>
                </div>
                `;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
  printDetail();
});
