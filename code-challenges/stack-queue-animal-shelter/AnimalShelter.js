const SpeciesENUM = {
    CAT: "canine",
    DOG: "feline"
}

class AnimalShelter {

    constructor() {
        this.dogQueue = [];
        this.catQueue = [];
    }

    enqueue(animal) {
        if (animal.species === SpeciesENUM.CAT) {
            this.catQueue.push(animal);
        } else if (animal.species === SpeciesENUM.DOG) {
            this.dogQueue.push(animal);
        } else {
            console.log('not recognized:', animal.species);
        }
    }
    dequeue(pref) {
        if (pref === 'dog') {
            return this.dogQueue.shift() || null;
        } else if (pref === 'cat') {
            return this.catQueue.shift() || null;
        } else {
            console.log('pref must be either "dog" or "cat".');
            return null;
        }
    }
}

class Animal {
    static Species = SpeciesENUM;
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
}

let testo = new AnimalShelter();
testo.enqueue(new Animal("Dymka", SpeciesENUM.CAT));
testo.enqueue(new Animal("Judie", SpeciesENUM.DOG));
testo.enqueue(new Animal("Monster Cat", SpeciesENUM.CAT));

console.log(testo);
console.log(testo.dequeue('cat'));
