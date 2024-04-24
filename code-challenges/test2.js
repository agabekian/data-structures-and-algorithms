const raisedToTheThird = arr => arr.map(el => Math.pow(el,3));


console.log(raisedToTheThird([1,2,3]))


const test = ['a', 4, 6];

const evenOdd = arr => {
  let word = "";
  return arr.map(el => typeof el === 'number'
    ? (el % 2 === 0 ? word = "even" : word = "odd")
    : word = "N/A");
}

console.log(evenOdd([1,2,3, "hi"]));
