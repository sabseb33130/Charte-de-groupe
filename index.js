let etudiant = ['Alexandre','Stéphane','Arnaud','Sandrine','Laure','Delphine','Johann','Pierre','Jean-Christophe','Jessie','Jean-François','Terry','Sébastien','Sukunthy','Kévin','Jean-Sébastien'];
let etudiant1 = etudiant[Math.floor(Math.random() * etudiant.length)];


setTimeout(()=>{
    console.log(etudiant1);
},3000)