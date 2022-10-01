#!/usr/bin/env node

const show_magicians = (magicians) => {
  for (mag of magicians) {
    console.log(mag);
  }
};

const magicians = ["Harry Houdini", "Chris Angel", "David Blaine"];

show_magicians(magicians);
