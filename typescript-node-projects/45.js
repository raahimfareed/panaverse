#!/usr/bin/env node

const make_car = (manufacturer, model, ...args) => {
  let car = { manufacturer, model };
  for (key in args[0]) {
    car[key] = args[0][key];
  }
  return car;
};

console.log(
  make_car("Honda", "City", { color: "Gun Metal Gray", suspension: "Upgraded" })
);
console.log(make_car("Honda", "Civic"));
