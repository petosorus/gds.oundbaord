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
            "thomas",
            "roy de poy"
        ],
        "script": "test 3",
        "chemin": "samples/fart/fart.mp3"
    }
];

var contenuFiltrey = []

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

afficherListe(contenu);

document.getElementById('recherche').addEventListener('input', (evenement) => {
    const recherche = evenement.target.value;
    contenuFiltrey = contenu.filter(element => {
        return element.script.includes(recherche) || element.titre.includes(recherche);
    });

    afficherListe(contenuFiltrey);
});
