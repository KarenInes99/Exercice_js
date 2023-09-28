// exercice 1
function comparaison(n1,n2) {
    if (n1==n2) {
        return true;
    }
    else{
        return false;
    }
}
console.log (comparaison(2,2));


// exercice 2
function firstElement(tab) {
    return tab[0];
}
console.log(firstElement([12,5,6]));


// exercice 3
function lastElement(tab) {
    return tab[tab.length-1];
}
console.log(lastElement([5,4,9,3]));

// exercice 4
function maxElement(tab) {
    let max = tab[0];
    for (let i = 0; i < tab.length; i++) {
        
        if (max < tab[i]) {
            max=tab[i];
        }
        
    }
    return max;
}
console.log(maxElement([4,6,8,0,12]));



// exercice 5
let tab = [
    { name: "John", age: 21, budget:23000 },
    { name: "Steve", age: 32, budget:40000 },
    { name: "Martin", age: 16, budget:2700 }
  ];

function getBudgets(tab) {
    let somme=0;
    for (let i = 0; i < tab.length; i++) {
            somme= somme + tab[i].budget;
            }
    return somme;
}
console.log(getBudgets(tab));