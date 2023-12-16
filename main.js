const characters = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Anakin Skywalker",
      height: "188",
      mass: "84",
      eye_color: "blue",
      gender: "male",
    },
  ];
  
  // Get an array of all names
  const namesArr = characters.map(names => ({
  name:names.name}));
  console.log(namesArr);

  // Get an array of all heights
  const heightsArr = characters.map(heights => ({
  height: heights.height}));
  console.log(heightsArr)

  // Get an array of objects with just name and height properties
  const namdeAndHeightsArr = characters.map(character => ({
  name: character.name,
  height: character.height
  }));
  console.log(namdeAndHeightsArr)

  // Get an array of all first names
  const firstNamesArr = characters.map(firstName => ({
  name: firstName.name.split(' ')[0]}));
  console.log(firstNamesArr);

  // Get the total mass of all characters
  const allPersonMass = characters.map(character => parseInt(character.mass)).reduce((tot, cur) => tot + cur, 0);
  console.log(allPersonMass);

  // Get the total height of all characters
  const allPersonheight = characters.map(character => parseInt(character.height)).reduce((tot, cur) => tot + cur, 0);
  console.log(allPersonheight);

  // Get the total number of characters in all the character names
  const nameLength = characters.reduce((tot, cur) => tot + cur.name.length, 0);
  console.log(nameLength);

  // Get the total number of characters by eye color (hint. a map of eye color to count)
  const eyeColorLength = characters.reduce((tot, cur) => tot + cur.eye_color.length, 0);
  console.log(eyeColorLength);

  // Get characters with mass greater than 100
  const greaterThan100 = characters.filter(character => parseInt(character.mass) > 100);
  console.log(greaterThan100);

  // Get characters with height less than 200
  const heightLess200 = characters.filter(character => parseInt(character.height) < 200);
  console.log(heightLess200);

  // Get all male characters
  const male = characters.filter(character => character.gender === "male");
  console.log(male);

  // Get all female characters
  const female = characters.filter(character => character.gender === "female");
  console.log(female);

  // Sort by name
  const sortName = characters.slice().sort((a, b) => a.name.localeCompare(b.name));
  console.log(sortName);

  // Sort by mass
  const sortMass = characters.slice().sort((a, b) => parseInt(a.mass) - parseInt(b.mass));
  console.log(sortMass);

  // Sort by height
  const sortHeight = characters.slice().sort((a, b) => parseInt(a.height) - parseInt(b.height));
  console.log(sortHeight);

  // Sort by gender
  const sortGender = characters.slice().sort((a, b) => a.gender.localeCompare(b.gender));
  console.log(sortGender);

  // Does every character have blue eyes?
  const haveBluEye = characters.every(character => character.eye_color === "blue");
  console.log(haveBluEye);

  // Does every character have mass more than 40?
  const moreThan40 = characters.every(character => parseInt(character.mass) > 40);
  console.log(moreThan40);

  // Is every character shorter than 200?
  const shorterThan200 = characters.every(character => parseInt(character.height) < 200);
  console.log(shorterThan200);

  // Is every character male?
  const everyIsMale = characters.every(character => character.gender === "male");
  console.log(everyIsMale);

  // Is there at least one male character?
  const oneMale = characters.some(character => character.gender === "male");
  console.log(oneMale);

  // Is there at least one character with blue eyes?
  const blueEye = characters.some(character => character.eye_color === "blue");
  console.log(blueEye);

  // Is there at least one character taller than 200?
  const tallerThan200 = characters.some(character => parseInt(character.height) > 200);
  console.log( tallerThan200);

  // Is there at least one character that has mass less than 50?
  const lessThan50 = characters.some(character => parseInt(character.mass) < 50);
  console.log(lessThan50);