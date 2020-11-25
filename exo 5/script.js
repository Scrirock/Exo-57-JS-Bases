let nbr1 = +prompt("entrez un nombre a virgule");
let nbr2 = +prompt("encore");

if(nbr1 === parseInt(nbr1) && nbr2 === parseInt(nbr2)){
    alert("recommence")
}
else {
    let result = parseInt(nbr1) * nbr2;
    alert(result);
}
