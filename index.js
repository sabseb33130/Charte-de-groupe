let etudiant = ['Alexandre','Stéphane','Arnaud','Sandrine','Laure','Delphine','Johann','Pierre','Jean-Christophe','Jessie','Jean-François','Terry','Sébastien','Sukunthy','Kévin','Jean-Sébastien'];


function student1(){
    let etudiant1 = etudiant[Math.floor(Math.random() * etudiant.length)];
    console.log(etudiant1);
}

function student() { 
    let etudiant1 = etudiant[Math.floor(Math.random() * etudiant.length)];
    document.getElementById("remplace").addEventListener("click",student1);
    document.getElementById("remplace").innerHTML = etudiant1;
    console.log();
}
setInterval(() => {
    stop.student
    return;
}, 3000);    
