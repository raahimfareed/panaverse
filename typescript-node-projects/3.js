#!/usr/bin/env node

const name = "rAaHiM fArEeD";
console.log("UPPERCASE:", name.toUpperCase());
console.log("LOWERCASE:", name.toLowerCase());

const nameArr = name.split(" ");

console.log(
  "Title Case:",
  nameArr
    .map((word) => word[0].toUpperCase() + word.substr(1).toLowerCase())
    .join(" ")
);
