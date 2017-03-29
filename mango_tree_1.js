"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0;
    this.height = getRandomNumber();
    this.fruits = [];
    this.harvested = "";
    this.healthy = true;

    this.max_age = 20;
    this.max_height = 250;
    this.max_fruits = getRandomNumber() * 4;

    this.countGood = 0;
    this.countBad = 0;
  }

  getAge() {
    return this.age;
  }
  getHeight() {
    return this.height;
  }
  getFruits() {
    return this.fruits;
  }
  getHealtyStatus() {
    return this.healthy;
  }


  // Get current states here

  // Grow the tree
  grow() {
    if(this.getHealtyStatus() == true) {

      if (this.age < this.max_age) {
        this.age++;
      }

      if(this.age >= this.max_age) {
        // already reached max_age, tree is dead
        this.healthy = false;
      }

      this.height += getRandomNumber() * 5;
      if (this.height > this.max_height) {
        this.height = this.max_height;
      }
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let random = getRandomNumber();
    let totalProduced = random > this.max_fruits ? this.max_fruits : random;

    for (let i = 0 ; i < totalProduced ; i++) {
      let mango = new Mango();
      // count the mango qualities
      mango.quality == "good" ? this.countGood++ : this.countBad++;
      // store the produced mangoes in fruits array
      this.fruits.push(mango);
    }
  }

  // Get some fruits
  harvest() {
    this.harvested = `${this.fruits.length} (${this.countGood} good, ${this.countBad} bad)`;

    // after harvest, empty the fruits array, and reset count
    this.fruits = [];
    this.countBad = 0;
    this.countGood = 0;
  }
}

class Mango {
  // Produce a mango
  constructor() {
    // mango quality is generated randomly
    this.quality = (getRandomNumber()%2 == 0) ? "good" : "bad";
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}


var tree = new MangoTree();
console.log(`The tree is alive! :smile:`);

do {
  tree.grow();
  tree.produceMangoes();
  tree.harvest();
  console.log(`[Year ${tree.age} Report] Height = ${tree.height} cm | Fruits harvested = ${tree.harvested}`)
} while (tree.healthy != false)

console.log('The tree has met its end. :sad:');


module.exports = {
  MangoTree,
  Mango
}
