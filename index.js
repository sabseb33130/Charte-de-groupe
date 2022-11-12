let etudiant = ['Alexandre','Stéphane','Arnaud','Sandrine','Laure','Delphine','Johann','Pierre','Jean-Christophe','Jessie','Jean-François','Terry','Sébastien','Sukunthy','Kévin','Jean-Sébastien'];
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
} , 3000);


