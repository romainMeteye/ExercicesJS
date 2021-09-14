console.log("\n##### Exercice 5 #####\n");
var store = ["Walmart","Colorado","South-Park",483,];

if (store[0] === "Walmart" && store[2] === "South-Park") {
  console.log("The Walmart in South-Park has " + store[3] + " employes")
}
else if(store[0] === "Walmart" || store[1] === "Colorado") {
  console.log("Hum this is an other Walmart from Colorado")
}
else if(store[0] === "Walmar") {
  console.log("Too bad this is just a Walmart");
}
else {
  console.log("I do not know what this is")};