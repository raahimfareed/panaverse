#!/usr/bin/env node

const describe_city = (city, country = "Pakistan") => {
  console.log(`${city} is a city of ${country}`);
};

describe_city("Karachi");
describe_city("Tokyo", "Japan");
describe_city("Moscow", "Russia");
