const contenuElement = document.getElementById('contenu');

var contenu = [
    {
        "titre": "fart",
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
    elem.innerHTML = `<h1 slot="title">${sound.titre}</h1>`
    contenuElement.appendChild(elem)
})