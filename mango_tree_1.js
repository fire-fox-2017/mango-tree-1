"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._maxAge = getRandomNumber(7)
    this._height = 0
    this._tempFruit = [];
    this._maxFruit = 10
    this._healthy = true
    this._harvested = ''
    this._tempG = 0
    this._tempB = 0
  }

  //Release 0

  getAge() {
    return this._age
  }

  getHeight() {
    return this._height
  }

  getFruits() {
    return this._maxFruit+' '+this.countFruit+' '+this.pickFruit
  }

  getHealtyStatus() {
    return this._good+' '+this._bad;
  }

  //Release 1
  // Get current states here

  // Grow the tree
  grow() {
    if (this._age <= this._maxAge) {
      this._age += 1;
      if (this._age < this._maxAge - 2) {
        this._height += getRandomNumber(7);
      }
      if (this._age >= this._maxAge) {
        this._healthy = false
      }
    } else {
      this._healthy = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    for (let i = 0; i < getRandomNumber(this._maxFruit); i++) {
      let mango = new Mango()
      this._tempFruit.push(mango)
    }
  }

  // Get some fruits
  harvest() {
    for (let i = 0; i < this._tempFruit.length; i++) {
      if (this._tempFruit[i].quality === 'good') {
        this._tempG += 1
      } else {
        this._tempB += 1
      }
      this._harvested = `${this._tempG + this._tempB} (${this._tempG} good, ${this._tempB} bad)`
    }
    this._tempFruit = [];
    this._tempG = 0
    this._tempB = 0
  }
}

class Mango {
  // Produce a mango
  constructor() {
    let type = ['good', 'bad'];
    let randType = Math.floor((Math.random() * type.length)+0);
    this.quality = type[randType];
  }
}

function getRandomNumber(num) {
  return Math.floor(Math.random() * num) + 1;
}

let tree = new MangoTree();
console.log(`The tree is alive! :smile"`);

do {
  tree.grow()
  tree.produceMangoes()
  tree.harvest()
  console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`);
} while (tree._healthy != false);
console.log(`The tree is alive! :sad"`);

module.exports = {
  MangoTree,
  Mango
}
