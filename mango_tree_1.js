"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age=0;
    this._height=0;
    this._max=20;
    this._fruit=0;
    this._healthy=true;
    this._harvested=0;
    this._good = 0;
    this._bad = 0;
  }

  getAge() {
    return this._age;
  }
  getHeight() {
    return this._height;
  }
  getFruits() {
    return this._fruit;
  }
  getHealtyStatus() {
    if(this._healthy){
      return "The tree is alive!";
    } else {
      return "The tree has meet its end!";
    }
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1;
    if(this._age <= 10){
      this._height += Math.floor(Math.random()*5)+1;
    }
    if(this._age === 20){
      this._healthy=false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if(this._age <= 20 && this._fruit <= this._max){
      this._fruit += Math.floor(Math.random()*this._max)+1;
      this._good = Math.floor(Math.random()*this._fruit)+1;
      this._bad = (this._fruit-this._good);
      return this._fruit;
    }
  }

  // Get some fruits
  harvest() {
    this._harvested=this._fruit;
    this._fruit=0;
    return this._harvested;
  }

}

class Mango {
  // Produce a mango
  constructor() {

  }
}

function getRandomNumber() {
}

var tree = new MangoTree()
console.log(`The tree is alive! :smile:`)
do{
  tree.grow()
  tree.produceMangoes()
  tree.harvest()
  console.log(`[Year ${tree._age} Report] Height = ${tree._height} m | Fruits harvested = ${tree._harvested} (${tree._good} good, ${tree._bad} bad)`)
} while (tree._healthy != false)

console.log(`The tree has met its end. :sad:`)

module.exports = {
  MangoTree,
  Mango
}
