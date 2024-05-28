'use strict';

const poidsRecherche = {
    titre: 10,
    script: 1,
    protagonistes: 5
}

const contenuElement = document.getElementById('contenu');

var contenu = [{"titre":"avions","protagonistes":["roméo","carlier","theod"],"script":"euuuuuh","chemin":"samples/avions/avions.mp3"},{"titre":"balavoine métal","protagonistes":["roméo"],"script":"Est-ce qu'on se refait un petit balavoine métal ?","chemin":"samples/balavoine_metal/balavoine_metal.mp3"},{"titre":"bouchon de cul","protagonistes":["kiki"],"script":"Malgré que ça se passait bien, au bout de quelques jours il avaient un bouchon de cul","chemin":"samples/bouchon_de_cul/bouchon_de_cul.mp3"},{"titre":"boum_boum","protagonistes":["plop","carlier"],"script":"Mets celle qui fait boum boum","chemin":"samples/boum_boum/boum_boum.mp3"},{"titre":"mano negra","protagonistes":["kiki"],"script":"coin","chemin":"samples/canards_negra/canards_negra.mp3"},{"titre":"décès","protagonistes":["theod"],"script":"oooooooooooh","chemin":"samples/deces_de_theo/deces_de_theo.mp3"},{"titre":"éoliennes","protagonistes":["carlier"],"script":"Les éoliennes ça gâche le paysage ! Je préfère les grosses tours. Avec plein de fumée.","chemin":"samples/eoliennes/eoliennes.mp3"},{"titre":"freddy mercury","protagonistes":["carlier"],"script":"Freddy mercury !","chemin":"samples/freddy_mercury/freddy_mercury.mp3"},{"titre":"gloire à sitis","protagonistes":["plop"],"script":"Psst, je sais qui vous êtes. Gloire à sitis","chemin":"samples/gloire_a_citis/gloire_a_citis.mp3"},{"titre":"huit cent mètres de large","protagonistes":["yoyo","carlier","le vent"],"script":"Moi je dis que c'est possible. Sur ma planète, je sautais des fossés qui faisaient huit cent mètres de large. Là il ne fait pas deux mètre de large","chemin":"samples/huit_cent_metre_de_large/huit_cent_metre_de_large.mp3"},{"titre":"tennis","protagonistes":["ava","coco"],"script":"Pourrais-je avoir une petit interview s'il-vous-plaît ? Vos ressentis s'il-vous-plaît sur ce match ? Le soleil tape dur mais il ne faut pas oublier que je suis un tennisman à la retraite","chemin":"samples/interview/interview.mp3"},{"titre":"la panne","protagonistes":["steve"],"script":"bon alors euh, où est la panne","chemin":"samples/ou_est_la_panne/ou_est_la_panne.mp3"},{"titre":"patrimoine français","protagonistes":["kiki"],"script":"Le patrimoine français !","chemin":"samples/patrimoine_francais/patrimoine_francais.mp3"},{"titre":"premier sujet","protagonistes":["kiki"],"script":"C'est pas le premier sujet","chemin":"samples/premier_sujet/premier_sujet.mp3"},{"titre":"quinze jours","protagonistes":["steve"],"script":"Alors dans ce cas là on revient dans quinze jours avec les outils qu'il faut","chemin":"samples/quinze_jours/quinze_jours.mp3"},{"titre":"tadagi","protagonistes":["kevin","kiki","steve"],"script":"tadagiiii tadagiiii tadagiiiiiiiii","chemin":"samples/tadagis_2/tadagis_2.mp3"},{"titre":"tadagi","protagonistes":["kiki","steve"],"script":"tadagi ? tadagi ! tadagiiiiiiiii","chemin":"samples/tadagi_1/tadagi_1.mp3"},{"titre":"woloff","protagonistes":["theod"],"script":"Chez les woloffs","chemin":"samples/theo_reggae/theo_reggae.mp3"},{"titre":"tirant d'eau","protagonistes":["carlier"],"script":"C'est à cause du tirant d'eau","chemin":"samples/tirant_d_eau/tirant_d_eau.mp3"}]

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

    liste.forEach((son) => {
        const elem = document.createElement("s-oundbaord");
        elem.setAttribute("cheminduson", son.chemin);
        const titre = document.createElement('h1');
        titre.setAttribute("slot", "titre");
        titre.innerHTML = son.titre;
        
        elem.appendChild(titre);
        contenuElement.appendChild(elem);
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