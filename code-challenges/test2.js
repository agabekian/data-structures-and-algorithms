const raisedToTheThird = arr => arr.map(el => Math.pow(el, 3));


console.log(raisedToTheThird([1, 2, 3]))


const test = ['a', 4, 6];

const evenOdd = arr => {
  let word = "";
  return arr.map(el => typeof el === 'number'
    ? (el % 2 === 0 ? word = "even" : word = "odd")
    : word = "N/A");
}

console.log(evenOdd([1, 2, 3, "hi"]));

const hr =
  {
    'Grace Hopper': '222-303-5938',
    'Ada Lovelace': '222-349-9842',
    'Alan Turing': '222-853-5933'
  }


const updateNumbers = obj => {
  let res = [];
  for (const [key, value] of Object.entries(obj)) {
    console.log(key)
    res.push(key + ": " + value);
  }
  return res;
};

console.log(updateNumbers(hr));
const got = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Robert',
    spouse: 'Cersei',
    house: 'Baratheon',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const hasChildrenValues = (arr, character) => {
  console.log("houses")
  for (let house of arr) {
    if (house.name == character) {
      return house.children !== 'undefined'
    }
  }
  return false;
}

console.log(hasChildrenValues(got, "Sansa"));
