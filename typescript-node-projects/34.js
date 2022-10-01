#!/usr/bin/env node

const pizzas = ["Fajita", "Pepperoni", "Cheese"];

for (pizza of pizzas) {
  console.log(pizza);
}

for (pizza of pizzas) {
  console.log(`I like ${pizza} flavored pizza.`);
}

console.log(
  `I really like pizzas.\nI don't like Hawaiian Pizza but I'm fine with every other flavour\nMy Favorite Kinds of pizzas are ${pizzas.join(
    ", "
  )}.\nI really love pizza`
);
