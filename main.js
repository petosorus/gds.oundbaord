'use strict';

const poidsRecherche = {
    titre: 10,
    script: 1,
    protagonistes: 5
}

const contenuElement = document.getElementById('contenu');

var contenu = [
    {
        "titre": "prout",
        "protagonistes": [
            "thomas",
            "roy de poy"
        ],
        "script": "prout",
        "chemin": "samples/fart/fart.mp3"
    }, {
        "titre": "test 2",
        "protagonistes": [
            "thomas",
            "roy de poy"
        ],
        "script": "prout",
        "chemin": "samples/fart/fart.mp3"
    }, {
        "titre": "test 3",
        "protagonistes": [
            "personne",
            "roy de poy"
        ],
        "script": "test 3 poy",
        "chemin": "samples/fart/fart.mp3"
    }, {
        "titre": "Coin coin",
        "protagonistes": [
            "canard"
        ],
        "script": "coin coin coin coin coin",
        "chemin": "samples/coin_coin/coin_coin.mp3"
    }
];

var contenuFiltrey = []

function recherche(valeur) {
    contenuFiltrey = [];

    contenu.forEach(element => {
        let score = 0;
        if (element.titre.includes(valeur)) {
            score += poidsRecherche.titre;
        }
        if (element.script.includes(valeur)) {
            score += poidsRecherche.script;
        }
        
        const protagonistesFiltreys = element.protagonistes.filter(personnage => personnage.includes(valeur));
        if (protagonistesFiltreys.length > 0) {
            score += poidsRecherche.protagonistes;
        }

        if (score > 0) {
            contenuFiltrey.push({
                ...element,
                score
            });
        }
    });

    contenuFiltrey.sort((a, b) => b.score - a.score);
}

function afficherListe(liste) {
    contenuElement.innerHTML = "";

    liste.forEach((sound) => {
        const elem = document.createElement("sample-element-slots");
        elem.setAttribute("sound", sound.chemin);
        const titre = document.createElement('h1');
        titre.setAttribute("slot", "title");
        titre.innerHTML = sound.titre;
        
        elem.appendChild(titre);
        contenuElement.appendChild(elem)
    });
}

function installation() {
    afficherListe(contenu);

    document.getElementById('recherche').addEventListener('input', (evenement) => {
        const valeur = evenement.target.value;
        recherche(valeur);

        afficherListe(contenuFiltrey);
    });
}

installation();