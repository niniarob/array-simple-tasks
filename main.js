// const characters = [
//     {
//       name: "Luke Skywalker",
//       height: "172",
//       mass: "77",
//       eye_color: "blue",
//       gender: "male",
//     },
//     {
//       name: "Darth Vader",
//       height: "202",
//       mass: "136",
//       eye_color: "yellow",
//       gender: "male",
//     },
//     {
//       name: "Leia Organa",
//       height: "150",
//       mass: "49",
//       eye_color: "brown",
//       gender: "female",
//     },
//     {
//       name: "Anakin Skywalker",
//       height: "188",
//       mass: "84",
//       eye_color: "blue",
//       gender: "male",
//     },
//   ];

//   // Get an array of all names
//   const namesArr = characters.map(names => ({
//   name:names.name}));
//   console.log(namesArr);

//   // Get an array of all heights
//   const heightsArr = characters.map(heights => ({
//   height: heights.height}));
//   console.log(heightsArr)

//   // Get an array of objects with just name and height properties
//   const namdeAndHeightsArr = characters.map(character => ({
//   name: character.name,
//   height: character.height
//   }));
//   console.log(namdeAndHeightsArr)

//   // Get an array of all first names
//   const firstNamesArr = characters.map(firstName => ({
//   name: firstName.name.split(' ')[0]}));
//   console.log(firstNamesArr);

//   // Get the total mass of all characters
//   const allPersonMass = characters.map(character => parseInt(character.mass)).reduce((tot, cur) => tot + cur, 0);
//   console.log(allPersonMass);

//   // Get the total height of all characters
//   const allPersonheight = characters.map(character => parseInt(character.height)).reduce((tot, cur) => tot + cur, 0);
//   console.log(allPersonheight);

//   // Get the total number of characters in all the character names
//   const nameLength = characters.reduce((tot, cur) => tot + cur.name.length, 0);
//   console.log(nameLength);

//   // Get the total number of characters by eye color (hint. a map of eye color to count)
//   const eyeColorLength = characters.reduce((tot, cur) => tot + cur.eye_color.length, 0);
//   console.log(eyeColorLength);

//   // Get characters with mass greater than 100
//   const greaterThan100 = characters.filter(character => parseInt(character.mass) > 100);
//   console.log(greaterThan100);

//   // Get characters with height less than 200
//   const heightLess200 = characters.filter(character => parseInt(character.height) < 200);
//   console.log(heightLess200);

//   // Get all male characters
//   const male = characters.filter(character => character.gender === "male");
//   console.log(male);

//   // Get all female characters
//   const female = characters.filter(character => character.gender === "female");
//   console.log(female);

//   // Sort by name
//   const sortName = characters.slice().sort((a, b) => a.name.localeCompare(b.name));
//   console.log(sortName);

//   // Sort by mass
//   const sortMass = characters.slice().sort((a, b) => parseInt(a.mass) - parseInt(b.mass));
//   console.log(sortMass);

//   // Sort by height
//   const sortHeight = characters.slice().sort((a, b) => parseInt(a.height) - parseInt(b.height));
//   console.log(sortHeight);

//   // Sort by gender
//   const sortGender = characters.slice().sort((a, b) => a.gender.localeCompare(b.gender));
//   console.log(sortGender);

//   // Does every character have blue eyes?
//   const haveBluEye = characters.every(character => character.eye_color === "blue");
//   console.log(haveBluEye);

//   // Does every character have mass more than 40?
//   const moreThan40 = characters.every(character => parseInt(character.mass) > 40);
//   console.log(moreThan40);

//   // Is every character shorter than 200?
//   const shorterThan200 = characters.every(character => parseInt(character.height) < 200);
//   console.log(shorterThan200);

//   // Is every character male?
//   const everyIsMale = characters.every(character => character.gender === "male");
//   console.log(everyIsMale);

//   // Is there at least one male character?
//   const oneMale = characters.some(character => character.gender === "male");
//   console.log(oneMale);

//   // Is there at least one character with blue eyes?
//   const blueEye = characters.some(character => character.eye_color === "blue");
//   console.log(blueEye);

//   // Is there at least one character taller than 200?
//   const tallerThan200 = characters.some(character => parseInt(character.height) > 200);
//   console.log( tallerThan200);

//   // Is there at least one character that has mass less than 50?
//   const lessThan50 = characters.some(character => parseInt(character.mass) < 50);
//   console.log(lessThan50);

// 1. შევქმნათ ფრომისი. იმის შანსი რომ ფრომისი ან დარეზოლვდება ან დარეჯექთდება უნდა იყოს 50/50.
//    ანუ ზოგიერთ გამოძახებაზე უნდა დარეჯექთდეს.

// 2. დავწეროთ ფუნქცია რომელიც წამოიღებს მონაცემებს https://jsonplaceholder.typicode.com/users დან
//    და დაბრუნებს ამ მონაცემებს

// 3. დავწეროთ ფუნქცია რომელიც ეცდება წამოიღოს მონაცემები
// https://jsonplaceholde.typicode.com (ლინკი სპეციალურად რასწორია) დან.
// წარუმატებელი რექუესთის შემთხვევაში ხელახლა ცადოს წამოღება 5_ჯერ

// 4. დავწეროთ ფუნქცია რომელიც ეცდება წმოიღოს მონაცემები https://dummyjson.com/users დან და https://jsonplaceholder.typicode.com/users დან.
//    ფუნქციამ უნდა დაგვიბრუნოს ის ლისთი რომელის ცატვირთვაც უფრო მალე მოხდება.

/* დავალება 
https://api.escuelajs.co/api/v1/products/ _დან წამოვიღოთ პროდუქტები, გამოვიტანოთ ფეიჯზე ცხრილის სახით.
ცხრილში უნდა იყოს შემდეგი ველები: id, title, price, category, createdAt.
გვერდზე უნდა გვქონდეს ფილტრის ინფუთიც (დღეს როგორც გავაკეთეთ, გაფილტრვა თუ გინდათ იყოს ღილაკის კლიკზე), გაფილტრვა მოხდეს title პარამეტრით. და განახლებული ლისტი უნდა მივიღოთ api_დან;
ცხრილში თითოეული სვეტის ჰედერზე კლიკით უნდა შევძლით წამოსული მონაცემების დალაგება ზრდადობით ან კლებადობით. ყველა სვეტზე თუ ვერ იზავთ 1_ზე მაინც აუცილებლად გააკეთეთ.
*/

const apiUrl = "https://api.escuelajs.co/api/v1/products/";
let productList = [];
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    productList = data;
    displayData(productList);
  } catch (error) {
    console.error(error);
  }
}
function displayData(data) {
  const tableBody = document.getElementById("product-body");
  tableBody.innerHTML = "";

  data.forEach((product) => {
    const row = tableBody.insertRow();

    const idCell = row.insertCell(0);
    idCell.textContent = product.id;

    const titleCell = row.insertCell(1);
    titleCell.textContent = product.title;

    const priceCell = row.insertCell(2);
    priceCell.textContent = product.price;

    const categoryCell = row.insertCell(3);
    categoryCell.textContent = product.category;

    const createdAtCell = row.insertCell(4);
    createdAtCell.textContent = product.creationAt;
  });
}
function applyFilter() {
  const filterInput = document.getElementById("filter");
  const filterValue = filterInput.value.toLowerCase();
  const filteredList = productList.filter((product) =>
    product.title.toLowerCase().includes(filterValue)
  );
  displayData(filteredList);
}
fetchData();

/*
1. დავწეროთ ფუნქცია რომელიც მოგვცემს Object.entries() მსგავს შედეგს.
input {a:1, b:2}
output [['a', 1], ['b',2]]

2. დავწეროთ ფუნქცია რომელიც არგუმენტად მიიღებს ობიექტს.
   ფუნქციამ უნდა დააბრუნოს ყველა ფორფერთი სტრინგების მასივად
input {a: 1, b:2}
output ['a','b']
არ გამოვიყენოთ Object.keys() ფუნქცია.

3. დავწეროთ ფუნქცია რომელიც არგუმენტად მიიღებს ობიექტს.
   ფუნქციამ უნდა დააბრუნოს ყველა ფროფერთის მნიშვნელობა მასივად
input {a: 1, b:2}
output [1,2]
არ გამოვიყენოთ Object.values() ფუნქცია.

*/

// დაწერეთ ფუნქცია რომელიც დალოგავს მაუსის კოორდინატებს მხოლოდ მაუსის გაჩერების შემდეგ.
