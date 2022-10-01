#!/usr/bin/env node

const make_sandwich = (...stuff) => {
  console.log("Your sandwich contains the following!");
  for (ingredient of stuff) {
    console.log(ingredient);
  }
  console.log();
};

make_sandwich("Cheese", "Ketchup", "Fish");
make_sandwich("Chicken", "Mustard");
make_sandwich("Beef", "Ketchup", "Cheese", "Mayo", "Mustard", "Lettuce");
