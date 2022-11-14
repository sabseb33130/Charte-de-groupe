/* Création du Array*/
const ETUDIANT = [
    'Alexandre',
    'Stéphane',
    'Arnaud',
    'Sandrine',
    'Laure',
    'Delphine',
    'Johann',
    'Pierre',
    'Jean-Christophe',
    'Jessie',
    'Jean-François',
    'Terry',
    'Sébastien',
    'Sukunthy',
    'Kévin',
    'Jean-Sébastien'];

    /*fonction affichage  3 secondes des prenoms*/
    function areStudent() {
        /*const etudiant1 permet de choisir aleatoirement le prenom*/
        const ETUDIANT1 = ETUDIANT[Math.floor(Math.random() * ETUDIANT.length)];

        /*const button permet de lier le lieux ou doit apparaitre les modifications*/
        const BUTTON = document.getElementById("remplace");

        /* const text permet le retour du texte d origine dans le boutton*/
        const TEXT = BUTTON.innerHTML;
        BUTTON.innerHTML = ETUDIANT1
        
        /*setInterval nous permez de renvoyer la const text dans le boutton*/
        setInterval(function() {         
            BUTTON.innerHTML = TEXT;
        },3000);
        
    }
