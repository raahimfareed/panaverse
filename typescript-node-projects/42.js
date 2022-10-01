#!/usr/bin/env node

const show_magicians = (magicians) => {
  for (mag of magicians) {
    console.log(mag);
  }
};

let magicians = ["Harry Houdini", "Chris Angel", "David Blaine"];

const make_great = () => {
  magicians = magicians.map((mag) => "The Great " + mag);
};

make_great();
show_magicians(magicians);
