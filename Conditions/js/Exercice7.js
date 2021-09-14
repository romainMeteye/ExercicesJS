console.log("\n##### Exercice 7 #####\n");
var meal = {
    "foodType" : "meat",
    "cookedAt" : 80,
    "temperature" : 60
};
if(meal["temperature"] === meal["cookedAt"]) {
    meal["status"] = "Cooked"
}
else if(meal["temperature"] < meal["cookedAt"]) {
    meal["status"] = "Uncooked"
}
else {
    meal["status"] = "Overcooked"
};
console.log(meal["status"]);
