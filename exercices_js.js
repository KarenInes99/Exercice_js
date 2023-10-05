// // exercice 1
// function comparaison(n1,n2) {
//     if (n1==n2) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log (comparaison(2,2));


// // exercice 2
// function firstElement(tab) {
//     return tab[0];
// }
// console.log(firstElement([12,5,6]));


// // exercice 3
// function lastElement(tab) {
//     return tab[tab.length-1];
// }
// console.log(lastElement([5,4,9,3]));

// // exercice 4
// function maxElement(tab) {
//     let max = tab[0];
//     for (let i = 0; i < tab.length; i++) {
        
//         if (max < tab[i]) {
//             max=tab[i];
//         }
        
//     }
//     return max;
// }
// console.log(maxElement([4,6,8,0,12]));



// // exercice 5
// let tab = [
//     { name: "John", age: 21, budget:23000 },
//     { name: "Steve", age: 32, budget:40000 },
//     { name: "Martin", age: 16, budget:2700 }
//   ];

// function getBudgets(tab) {
//     let somme=0;
//     for (let i = 0; i < tab.length; i++) {
//             somme= somme + tab[i].budget;
//             }
//     return somme;
// }
// console.log(getBudgets(tab));

// exercice 6
// function nbOccurrence(tab) {
//     const obj = {}
// for (let i = 0; i < tab.length; i++) {
//   obj[tab[i]] =1;
//     }
//     for (let i = 0; i < tab.length; i++) {

//       for (let j = i+1; j < tab.length; j++) {
//         if (tab[i] == tab[j]) {
//             obj[tab[i]] = obj[tab[i]] +1
//         }
//     }
        
//     }
// for (let key in obj) {
//   console.log("l'element" + key + "se repete" + obj[key] + "fois")  
// }
// }

//exercice 7

function compterVoyelles(chaine) {
  chaine = chaine.toLowerCase();
  let nombreDeVoyelles = 0;

  for (let i = 0; i < chaine.length; i++) {
    const caractere = chaine[i];
    
    if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u' || caractere === 'y') {
      nombreDeVoyelles++;
    }
  }
  return nombreDeVoyelles;
}

// Exemple d'utilisation :
const chaine = "Bonjour, ceci est un exemple.";
const nombreDeVoyelles = compterVoyelles(chaine);
console.log(`Le nombre de voyelles dans la chaîne "${chaine}" est : ${nombreDeVoyelles}`);

