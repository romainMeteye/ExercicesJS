console.log("\n ##### Exercice 5 #####\n")
var car = {
    "type" : "clio ",
    "brand" : "Renault ",
    "date" : 2006,
    "color" : "orange ",
    "passengers" : ["Mike ","Claire ","Anna ","Louis "]
};
console.log(car);
console.log(
    "Une "
    + car["brand"]
    + car["type"]
    + "de couleur "
    + car["color"]
    + ", modèle "
    + car["date"]
    + " à été apperçue avec à son bord 4 passagers."
    );
console.log(car["passengers"][0]);
console.log(
    "4 individus ont été aperçus à son bord : "
    + car["passengers"]
    + "."
    );