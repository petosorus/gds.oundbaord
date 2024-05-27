const testFolder = 'samples';
const fs = require('fs');

const contenu = [];

fs.readdirSync(testFolder).forEach(folder => {
    const chemin = `${testFolder}/${folder}`;
    let cheminJson = '';
    let cheminSon = '';

    fs.readdirSync(chemin).forEach(file => {        
        if (file.endsWith('.json')) {
            cheminJson = `${chemin}/${file}`;
        } else {
            cheminSon = `${chemin}/${file}`;
        }
    });

    const truc = JSON.parse(fs.readFileSync(cheminJson));
    truc.chemin = cheminSon;

    contenu.push(truc);
});

fs.writeFileSync('contenu.json', JSON.stringify(contenu));