

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
