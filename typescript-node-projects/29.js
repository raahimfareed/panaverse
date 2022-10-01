#!/usr/bin/env node

const fruits = ["Strawberry", "Kiwi", "Banana"];

if (fruits.includes("Strawberry")) {
  console.log(
    "I found out that you like strawberries? I - the program - also like e-strawberries :D"
  );
}

if (fruits.includes("Orange")) {
  console.log("We have a citrus lover here!");
}

if (fruits.includes("Lemon")) {
  console.log("Sour or sweet");
}

if (fruits.includes("Kiwi")) {
  console.log("Kiwi is native to China!");
}

if (fruits.includes("Banana")) {
  console.log("I don't like bananas :( But I respect your opinions");
}
