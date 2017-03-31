"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0;
    this.maxAge = getRandomNumber(5) + 18;
    this.height = 0;
    this.fruitCap = getRandomNumber(10) + 5;
    this.fruits = [];
    this.harvested = "";
    this.healthy = true;
  }

  // Get current states here
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
    return this.health;
  }

  // Grow the tree
  grow() {
    this.age += 1;
    this.fruits = [];
    this.fruitCap = getRandomNumber(10) + 5;
    let newHeight = 0.0;
    if (this.age < this.maxAge - 5) {
      newHeight = this.height + ((getRandomNumber(3)+1)/10);
    } else {
      newHeight = this.height + ((getRandomNumber(2))/10);
    }
    this.height = Math.round(newHeight*10)/10;
    if (this.age === this.maxAge) {
      this.healthy = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    for (let i = 0; i < this.fruitCap; i++) {
      let mango = new Mango();
      this.fruits.push(mango);
    }

  }

  // Get some fruits
  harvest() {
    let goodCount = 0;
    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].quality === "good") {
        goodCount += 1;
      }
    }
    let badCount = this.fruits.length - goodCount;
    this.harvested = `${this.fruitCap} (${goodCount} good, ${badCount} bad)`;
  }

}

class Mango {
  // Produce a mango
  constructor() {
    let possibleQuality = ["good", "bad"];
    this.quality = possibleQuality[getRandomNumber(possibleQuality.length)];
  }
}

function getRandomNumber(limit) {
  return Math.round(Math.floor(Math.random()*limit));
}

// test the code
var tree = new MangoTree();
console.log(`The tree is alive! :smile:`);

do {
  tree.grow();
  tree.produceMangoes();
  tree.harvest();

  console.log(`[Year ${tree.age} Report] Height = ${tree.height} m | Fruits harvested = ${tree.harvested}`);
} while (tree.healthy !== false);

console.log(`The tree has met its end. :sad:`)


module.exports = {
  MangoTree,
  Mango
}
