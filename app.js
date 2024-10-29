let age = prompt("Enter your age: ");
let type = prompt("Enter movie type (regular or 3D):");
let time = prompt("Enter time of day (matinee or evening):");
let discount = prompt("Enter discount (yes/no):");
let price = 0;

if (age < 10) {
  price = 5;
} else if (age >= 10 && age <= 65) {
  price = 15;
} else if (age > 65) {
  price = 10;
}

if (type === "3D") {
  price += 5;
}
if (time === "evening") {
  price += 5;
}

switch (discount) {
  case "yes":
    price *= 0.75;
    console.log("Discount: 25%");
    break;
  case "no":
    console.log("No discount");
    break;
  default:
    console.log("Not valid");
    break;
}

console.log("Your price is: " + price);
