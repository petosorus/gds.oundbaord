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
    }
];

contenu.forEach((sound) => {
    const elem = document.createElement("sample-element-slots");
    elem.setAttribute("sound", sound.chemin);
    const titre = document.createElement('h1');
    titre.setAttribute("slot", "title");
    titre.innerHTML = sound.titre;
    
    elem.appendChild(titre);
    contenuElement.appendChild(elem)
});
