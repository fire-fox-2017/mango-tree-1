"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0;
    this.height = 0;
    this.fruits = [];
    this.harvested = '';
    this.healthy = true;
    this.MAX_GROW_AGE = 10;
    this.MIN_BEAR_FRUIT_AGE = 3;
    this.MAX_AGE = 20;
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
    // Incrementing Age
    this.age++;
    if (this.getAge() >= this.MAX_AGE) {
      this.healthy = false;
    }

    // Growing higher
    if (this.getAge() <= this.MAX_GROW_AGE) {
      this.height += getRandomNumber(100, 1);
    }
  }

  // Produce some mangoes
  produceMangoes() {
    // Checking if the tree can bear fruit
    if (this.getAge() > this.MIN_BEAR_FRUIT_AGE) {
      let totalFruits = getRandomNumber(20, 0);
      for (let i = 0; i < totalFruits; i++) {
        let mango = new Mango();
        this.fruits.push(mango);
      }
    }

    // Calling harvest()
    this.harvest();
  }

  // Get some fruits
  harvest() {
    let goodHarvest = 0, badHarvest = 0;
    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].quality == "good") {
        goodHarvest++;
      } else {
        badHarvest++;
      }
    }
    this.harvested = `${this.fruits.length} (${goodHarvest} good, ${badHarvest} bad)`;
    this.fruits = [];
  }

}

class Mango {
  // Produce a mango
  constructor() {
    let qualityOptions = ["bad", "good"]
    this.quality = qualityOptions[getRandomNumber(1, 0)];
  }
}

function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tree = new MangoTree();
console.log(`The tree is alive! :smile:`);
do {
  tree.grow();
  tree.produceMangoes();
  console.log(`[Year ${tree.age} Report] Height = ${tree.height} cm | Fruits harvested = ${tree.harvested} `);
} while (tree.healthy != false)

console.log(`The tree has met its end. :sad:`);

module.exports = {
  MangoTree,
  Mango
}
