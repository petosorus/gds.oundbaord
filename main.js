'use strict';

const poidsRecherche = {
    titre: 10,
    script: 1,
    protagonistes: 5
}

const contenuElement = document.getElementById('contenu');

var contenu = [{"titre":"avions","protagonistes":["roméo","carlier","theod"],"script":"euuuuuh","chemin":"samples/avions/avions.mp3"},{"titre":"balavoine métal","protagonistes":["roméo"],"script":"Est-ce qu'on se refait un petit balavoine métal ?","chemin":"samples/balavoine_metal/balavoine_metal.mp3"},{"titre":"bouchon de cul","protagonistes":["kiki"],"script":"Malgré que ça se passait bien, au bout de quelques jours il avaient un bouchon de cul","chemin":"samples/bouchon_de_cul/bouchon_de_cul.mp3"},{"titre":"bouchon de cul","protagonistes":["steve"],"script":"C'est votre bouchon de cul qu'on voit ici","chemin":"samples/bouchon_de_cul _2/bouchon_de_cul.mp3"},{"titre":"boum_boum","protagonistes":["plop","carlier"],"script":"Mets celle qui fait boum boum","chemin":"samples/boum_boum/boum_boum.mp3"},{"titre":"mano negra","protagonistes":["kiki"],"script":"coin","chemin":"samples/canards_negra/canards_negra.mp3"},{"titre":"casserole","protagonistes":["coco","kiki"],"script":"Casserole du fond avance, casserole du fond au fond à fond","chemin":"samples/casserole/casserole.mp3"},{"titre":"conduit","protagonistes":["carlier","kiki","plop","ava"],"script":"Eh est-ce que tu veux qu'on te ramène ? C'est moi qui conduit. Je prends une bière cul sec et après je te ramène","chemin":"samples/conduit/conduit.mp3"},{"titre":"décès","protagonistes":["theod"],"script":"oooooooooooh","chemin":"samples/deces_de_theo/deces_de_theo.mp3"},{"titre":"deux mètres de large","protagonistes":["yoyo","steve"],"script":"Alors, elles faisaient pas deux mètre de large","chemin":"samples/deux_metre_de_large/deux_metres_de_large.mp3"},{"titre":"djembé","protagonistes":["kiki","ava"],"script":"La chose dans la nuit c'est d'aller acheter un djembé. Depuis le temps qu'on en parle. C'est le moment où jamais","chemin":"samples/djembé/djembé.mp3"},{"titre":"enculé_axel","protagonistes":["alexis","axel"],"script":"Cet enculé d'axel m'a attaqué","chemin":"samples/enculé_axel/enculé_axel.mp3"},{"titre":"éoliennes","protagonistes":["carlier"],"script":"Les éoliennes ça gâche le paysage ! Je préfère les grosses tours. Avec plein de fumée.","chemin":"samples/eoliennes/eoliennes.mp3"},{"titre":"freddy mercury","protagonistes":["carlier"],"script":"Freddy mercury !","chemin":"samples/freddy_mercury/freddy_mercury.mp3"},{"titre":"gloire à sitis","protagonistes":["plop"],"script":"Psst, je sais qui vous êtes. Gloire à sitis","chemin":"samples/gloire_a_citis/gloire_a_citis.mp3"},{"titre":"grève","protagonistes":["roy"],"script":"Je travaille moi tous les jours, ça m'énerve de voir des gens comme ça qui bloquent. Je peux plus aller travailler, je peux plus nourrir mes enfants. En plus les salaires baissent et la vie augmente","chemin":"samples/grève/grève.mp3"},{"titre":"halo","protagonistes":["cortana","alexis","kiki"],"script":"Halo c'est fini. Non ce n'est que le début. La GDS c'est fini.","chemin":"samples/halo/halo.mp3"},{"titre":"harnais","protagonistes":["steve"],"script":"C'est notre seul animal à ne pas porter un harnais complet descendant jusqu'à la base de ses chevilles","chemin":"samples/harnais/harnais.mp3"},{"titre":"huit cent mètres de large","protagonistes":["yoyo","carlier","le vent"],"script":"Moi je dis que c'est possible. Sur ma planète, je sautais des fossés qui faisaient huit cent mètres de large. Là il ne fait pas deux mètre de large","chemin":"samples/huit_cent_metre_de_large/huit_cent_metre_de_large.mp3"},{"titre":"interdit","protagonistes":["plop"],"script":"Oh, c'est interdit !","chemin":"samples/interdit/interdit.mp3"},{"titre":"tennis","protagonistes":["ava","coco"],"script":"Pourrais-je avoir une petit interview s'il-vous-plaît ? Vos ressentis s'il-vous-plaît sur ce match ? Le soleil tape dur mais il ne faut pas oublier que je suis un tennisman à la retraite","chemin":"samples/interview/interview.mp3"},{"titre":"kalenji","protagonistes":["carlier","kiki"],"script":"J'ai bêtement mis mes kalenji de ville alors que j'aurais clairement dû mettre mes kalenji de chantier. C'est quoi la différence entre les deux ? Bah y'en a une pour le chantier et une pour la ville","chemin":"samples/kalenji/kalenji.mp3"},{"titre":"kro sirop","protagonistes":["theod","gold","porc"],"script":"c'est l'histoire de la vie ! tu bois une kro sirop","chemin":"samples/kro_sirop/kro_sirop.mp3"},{"titre":"mephisto","protagonistes":["steve","alexis"],"script":"si alexis droppe mephisto en chaîne à la lan, c'est parce qu'il veut peau de vipère pour son agrandissement de pénis. Parce qu'il veut un grand serpent et donc il droppe mephisto en chaîne parce que peau de vipère. A ce qu'il paraît mephisto droppe peau de vipère. C'est bien ça alexis ? Exactement","chemin":"samples/mephisto/mephisto.mp3"},{"titre":"la panne","protagonistes":["steve"],"script":"bon alors euh, où est la panne","chemin":"samples/ou_est_la_panne/ou_est_la_panne.mp3"},{"titre":"patrimoine français","protagonistes":["kiki"],"script":"Le patrimoine français !","chemin":"samples/patrimoine_francais/patrimoine_francais.mp3"},{"titre":"premier sujet","protagonistes":["kiki"],"script":"C'est pas le premier sujet","chemin":"samples/premier_sujet/premier_sujet.mp3"},{"titre":"quinze jours","protagonistes":["steve"],"script":"Alors dans ce cas là on revient dans quinze jours avec les outils qu'il faut","chemin":"samples/quinze_jours/quinze_jours.mp3"},{"titre":"reportage","protagonistes":["kiki"],"script":"MACRON DEMISSION","chemin":"samples/reportage/reportage.mp3"},{"titre":"rhum","protagonistes":["kiki"],"script":"coui coui coui coui... poum","chemin":"samples/rhum/rhum.mp3"},{"titre":"salon","protagonistes":["steve"],"script":"si vous faites encore une fois marrer mes clients je vous vire de mon salon","chemin":"samples/salon/salon.mp3"},{"titre":"si_métrique","protagonistes":["carlier","kiki"],"script":"ça veut dire quoi symétrique c'est pas si métrique que ça parce que des fois tu comptes en miles","chemin":"samples/si_métrique/si_métrique.mp3"},{"titre":"super saoulé","protagonistes":["roy"],"script":"je suis super saoulé","chemin":"samples/super saoulé/super saoulé.mp3"},{"titre":"tadagi","protagonistes":["kevin","kiki","steve"],"script":"tadagiiii tadagiiii tadagiiiiiiiii","chemin":"samples/tadagis_2/tadagis_2.mp3"},{"titre":"tadagi","protagonistes":["kiki","steve"],"script":"tadagi ? tadagi ! tadagiiiiiiiii","chemin":"samples/tadagi_1/tadagi_1.mp3"},{"titre":"woloff","protagonistes":["theod"],"script":"Chez les woloffs","chemin":"samples/theo_reggae/theo_reggae.mp3"},{"titre":"tirant d'eau","protagonistes":["carlier"],"script":"C'est à cause du tirant d'eau","chemin":"samples/tirant_d_eau/tirant_d_eau.mp3"},{"titre":"turbine","protagonistes":["alexis"],"script":"vous pouvez pas refaire le devis pour la turbine","chemin":"samples/turbine/turbine.mp3"}]

var contenuFiltrey = []

function recherche(valeur) {
    valeur = valeur.toLowerCase();
    valeur = valeur.trim();
    
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