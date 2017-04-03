"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._harvested = '';
    this._healthy = true;
    this._maxGrowAge = 15;
    this._maxAgeTree = 20;
  }

  getAge() {
    return this._age;
  }
  getHeight() {
    return this._height;
  }
  getFruits() {
    return this._fruits;
  }
  getHealtyStatus() {
    return this._healthy;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age = this._age+1;;
    if(this.getAge() >= this._maxAgeTree){
      this._healthy = false;
    }

    if (this.getAge() <= this._maxGrowAge){
      this._height = this._height + getRandomNumber(50);
    }
  }

  // Produce some mangoes
  produceMangoes() {
      var totalFruits = getRandomNumber(20);
      for(let i=0;i<totalFruits;i++){
        var mango = new Mango();
        this._fruits.push(mango);
      }
    this.harvest();
  }

  // Get some fruits
  harvest() {
    var good = 0, bad = 0;
    for(let i=0;i<this._fruits.length;i++){
      if(this._fruits[i]._quality == 'good'){
        good++;
      }else{
        bad++;
      }
    }
    this._harvested = this._fruits.length+"("+good+" good, "+bad+" bad)";
    this._fruits = [];
  }

}

class Mango {
  // Produce a mango
  constructor() {
    var qualityMango = ['bad','good'];
    this._quality = qualityMango[getRandomNumber(2)];

  }
}

function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

let tree = new MangoTree();
console.log(`The tree is alive! :smile:`);
do {
  tree.grow();
  tree.produceMangoes();
  console.log(`[Year ${tree._age} Report] Height = ${tree._height} cm | Fruits harvested = ${tree._harvested} `);
} while (tree._healthy != false)

console.log(`The tree has met its end. :sad:`);
module.exports = {
  MangoTree,
  Mango
}
