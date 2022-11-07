// variables

var a; // declaring Variable

var b = 'b'; // declaring / assigning
b = 'bb'; // re-assigning 
var a = 'aa' // re-declaring 

// Global Scope

var fruit = 'Apple'; // global
console.log(fruit);
function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    let country = 'Colombia';
    console.log(country);
}

countries();
console.log(country);