console.log("\n##### Exercice 6 #####\n");
var student = {
    "Name" : "John Doe",
    "Grade" : 14
};
if(student["Grade"] < 10) {
    console.log("Recalé");
}
else if(student["Grade"] < 12) {
    console.log("Passable");
}
else if(student["Grade"] < 14) {
    console.log("Moyen");
}
else if(student["Grade"] < 16) {
    console.log("Bien");
}
else {
    console.log("Très bien")
}