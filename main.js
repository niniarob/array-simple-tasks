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
  // Get characters with height less than 200
  // Get all male characters
  // Get all female characters
  // Sort by name
  // Sort by mass
  // Sort by height
  // Sort by gender
  // Does every character have blue eyes?
  // Does every character have mass more than 40?
  // Is every character shorter than 200?
  // Is every character male?
  // Is there at least one male character?
  // Is there at least one character with blue eyes?
  // Is there at least one character taller than 200?
  // Is there at least one character that has mass less than 50?