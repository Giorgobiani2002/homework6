let age = Number(prompt("შეიყვანეთ თქვენი ასაკი"));

let type = prompt("შეიყვანეთ ფილმის ტიპი (Regular or 3D");

let time = prompt("შეიყვანეთ დღის რეჟიმი (Morning or Evening");

let disscount = prompt("გაქვთ თუ არა ფასდაკლება (Yes or No)");

let basePrice = 0;

if (disscount === "Yes") {
  basePrice = basePrice - 5;
} else if (disscount === "No") {
  alert("Tqven ar gaqvt fasdaklebis barati");
}

if (age < 10) {
  basePrice = basePrice + 5;
} else if (age >= 10 && age <= 65) {
  basePrice = basePrice + 15;
} else if (age > 65) {
  basePrice = basePrice + 10;
}

if (type === "3D") {
  basePrice = basePrice + 5;
}

if (time === "evening") {
  basePrice = basePrice + 5;
}

alert("Your ticket price is" + basePrice);
