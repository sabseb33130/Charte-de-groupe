/*let etudiant = ['Alexandre','Stéphane','Arnaud','Sandrine','Laure','Delphine','Johann','Pierre','Jean-Christophe','Jessie','Jean-François','Terry','Sébastien','Sukunthy','Kévin','Jean-Sébastien'];
let etudiant1 = etudiant[Math.floor(Math.random() * etudiant.length)];
let remplace =  document.getElementById("remplace").addEventListener("click",student1);
function student1(){
    etudiant1;
    console.log(1);
}

let variation = setInterval(function student() { 
    let etudiant1 = etudiant[Math.floor(Math.random() * etudiant.length)];
    remplace ;
    document.getElementById("remplace").innerHTML = etudiant1;
    console.log(2);
} , 3000);*/

/*1- le click. fait dans le boutton.
2- la liste ligne 23
3- l'aleatoire ligne 43
4- delai de 3s.
5- affichage du random apprenant.*/


const etudiant = [
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

    
    function student() {

        const etudiant1 = etudiant[Math.floor(Math.random() * etudiant.length)];
        const button  = document.getElementById("remplace");
        const text = button.innerHTML;
        button.innerHTML = etudiant1
        
        
        setInterval(function() {         
            button.innerHTML = text;
        },3000);
        
    }
