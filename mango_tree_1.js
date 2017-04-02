"use strict"

class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this._Age = 0;
    this._Height = 0;
    this._Fruits = [];
    this._Harvested = "";
    this._HealthyStatus = "";
    this._Max = 15;
  }

  getAge() {
    return this._Age;
  }
  getHeight() {
    return this._Height;
  }
  getFruits() {
    return this._Fruits;
  }
  getHealtyStatus() {
    return this._HealthyStatus;
  }
  getHarvested(){
    return this._Harvested;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._Age += 1;

    let HeightGrow = Math.floor(Math.random()*4);
    if(this._Age <= this._Max) {
      this._Height += HeightGrow;
    }

    if(this._Age === this._Max) {
      this._HealthyStatus = false;
    }

}

  // Produce some mangoes
  produceMangoes() {
    var mangoes = new Mango()
    this._Fruits.push(Math.floor(Math.random()*15))
//    console.log(this._Fruits)
}




  // Get some fruits
  harvest() {
    for (let i = 0; i < this._Fruits.length; i++){
    this._Harvested = this._Fruits[i];
  }
  return this._Harvested;
}

quality() {
      let good = Math.floor(Math.random()*this._Harvested);
      let bad = this._Harvested - good;
      let harvested = `(${good} good, ${bad} bad)`;
      return harvested;
  }
}




class Mango {
  // Produce a mango
  constructor() {
    this._HealthyStatus = this.getRandomNumber();
  }

  getRandomNumber(){
    let randomer = Math.floor(Math.random() * 2);
      if(randomer === 0) {
        return true;
      } else {
        return false;
      }
    }
  }

let newMangoTree = new MangoTree

console.log(`The tree is alive! :smile:`)

do {
  newMangoTree.grow()
  newMangoTree.produceMangoes()
  newMangoTree.harvest()
  console.log(`[Year ${newMangoTree._Age} Report] Height = ${newMangoTree._Height}  |
  Fruits harvested = ${newMangoTree._Harvested} ${newMangoTree.quality()}`)
}
while (newMangoTree._HealthyStatus !== false)

console.log(`The tree has met its end. :sad:`)

module.exports = {
  MangoTree,
  Mango
}
