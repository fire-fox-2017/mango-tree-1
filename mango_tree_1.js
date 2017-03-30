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
      this._fruit += Math.floor(Math.random()*this._max)+5;
      return this._fruit;
    }
  }

  // Get some fruits
  harvest() {
    var good = 0;
    var bad = 0;
    var mango = new Mango();
    for(let i=0; i<this._fruit; i++){
      mango.qualitize();
      if(mango._quality==="good"){
        good += 1;
      } else {
        bad += 1;
      }
    }
    this._harvested = `${this._fruit} (${good} good, ${bad} bad)`;
    this._fruit=0;
    return this._harvested;
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this._quality = "";
  }
  qualitize() {
    if (Math.random()>0.6) {
      this._quality = "good"
    } else {
      this._quality = "bad"
    }
  }
}

function getRandomNumber() {
}
var mango = new Mango()
var tree = new MangoTree()
console.log(`The tree is alive! :smile:`)
do{
  tree.grow()
  tree.produceMangoes()
  tree.harvest()
  console.log(`[Year ${tree._age} Report] Height = ${tree._height} m | Fruits harvested = ${tree._harvested} `)
} while (tree._healthy != false)

console.log(`The tree has met its end. :sad:`)

module.exports = {
  MangoTree,
  Mango
}
