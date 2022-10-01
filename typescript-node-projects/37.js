#!/usr/bin/env node

const make_shirt = (size = "Large", message) => {
  if (size.toLowerCase() === "large" || size.toLowerCase() === "medium") {
    message = "I love JavaScript";
  }

  console.log(
    `The shirt has a size ${size} and the message "${message}" will be printed on it.`
  );
};

make_shirt("Large", "127.0.0.1");
make_shirt("XL", "127.0.0.1");
