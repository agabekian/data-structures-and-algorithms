const SpeciesENUM = {
    CAT: "canine",
    DOG: "feline"
}

class Animal {
    static Species = SpeciesENUM;
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
}

class Shelter {
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

module.exports = {
    Shelter,
    Animal
}
