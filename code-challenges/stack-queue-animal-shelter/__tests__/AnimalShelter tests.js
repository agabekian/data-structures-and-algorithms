const Animal = require('../Shelter').Animal;
const Shelter = require('../Shelter.js');


describe('AnimalShelter', () => {
    let shelter;

    beforeEach(() => {
        shelter = new Shelter();
    });

    test('enqueue adds a dog to the dog queue', () => {
        const dog = new Animal('Buddy', Animal.Species.DOG);
        shelter.enqueue(dog);
        expect(shelter.dogQueue.length).toBe(1);
        expect(shelter.catQueue.length).toBe(0);
        expect(shelter.dogQueue[0]).toEqual(dog);
    });

    test('enqueue adds a cat to the cat queue', () => {
        const cat = new Animal('Whiskers', Animal.Species.CAT);
        shelter.enqueue(cat);
        expect(shelter.catQueue.length).toBe(1);
        expect(shelter.dogQueue.length).toBe(0);
        expect(shelter.catQueue[0]).toEqual(cat);
    });

    test('enqueue adds an animal to the correct queue based on species', () => {
        const dog = new Animal('Buddy', Animal.Species.DOG);
        const cat = new Animal('Whiskers', Animal.Species.CAT);
        shelter.enqueue(dog);
        shelter.enqueue(cat);
        expect(shelter.dogQueue.length).toBe(1);
        expect(shelter.catQueue.length).toBe(1);
        expect(shelter.dogQueue[0]).toEqual(dog);
        expect(shelter.catQueue[0]).toEqual(cat);
    });

    test('enqueue handles invalid species', () => {
        const invalidAnimal = new Animal('Unknown', 3); // Species 3 is invalid
        shelter.enqueue(invalidAnimal);
        expect(shelter.dogQueue.length).toBe(0);
        expect(shelter.catQueue.length).toBe(0);
    });

    test('dequeue returns the first dog in the dog queue', () => {
        const dog1 = new Animal('Buddy', Animal.Species.DOG);
        const dog2 = new Animal('Max', Animal.Species.DOG);
        shelter.enqueue(dog1);
        shelter.enqueue(dog2);
        expect(shelter.dequeue('dog')).toEqual(dog1);
        expect(shelter.dogQueue.length).toBe(1);
    });

    test('dequeue returns the first cat in the cat queue', () => {
        const cat1 = new Animal('Whiskers', Animal.Species.CAT);
        const cat2 = new Animal('Fluffy', Animal.Species.CAT);
        shelter.enqueue(cat1);
        shelter.enqueue(cat2);
        expect(shelter.dequeue('cat')).toEqual(cat1);
        expect(shelter.catQueue.length).toBe(1);
    });

    test('dequeue handles invalid preference', () => {
        const cat = new Animal('Whiskers', Animal.Species.CAT);
        shelter.enqueue(cat);
        expect(shelter.dequeue('rabbit')).toBeNull(); // Invalid preference
    });
});
