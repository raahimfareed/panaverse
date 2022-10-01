#!/usr/bin/env node

const make_album = (artist, title, tracks) => {
  return { artist: artist, title: title, ...(tracks && { tracks: tracks }) };
};

console.log(make_album("Papa Roach", "Ready to Rumble"));
console.log(make_album("Cascada", "Everytime We Touch", 14));
console.log(make_album("Backstreet Boys", "Millennium"));
