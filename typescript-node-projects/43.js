#!/usr/bin/env node

const show_magicians = (magicians) => {
  for (mag of magicians) {
    console.log(mag);
  }
};

const make_great = (magicians) => magicians.map((mag) => "The Great " + mag);

const magicians = ["Harry Houdini", "Chris Angel", "David Blaine"];

const the_great = make_great(magicians);
show_magicians(magicians);
show_magicians(the_great);
