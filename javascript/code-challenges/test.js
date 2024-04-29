

const obj2 = {width: 100, height: 200}

const {height, localHeight = height - 50} = obj2

console.log(localHeight)


const stuff = {
  tv: 'huge',
  radio: 'old',
  toys: 57,
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
}

let {cars} = stuff;

console.log(cars.concat("Ford"))

let nums = [1,2,3,4,5,6];
console.log(nums.splice(2,2))

const howMuchPencil = (str) => {
  let result = [];
  let i = 0;
  while (i <= str.length) { //no exception - I think Java would flip null etc
    console.log(str[i])
    result.push(str.slice(i, str.length));
    i++;
  }

  return result;
};

console.log(howMuchPencil("Welcome"))
