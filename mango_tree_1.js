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
    var maxproduce = Math.floor(Math.random()*5);
    for(var i = 0; i < maxproduce; i++ ){
    var mangoes = new Mango()
    this._Fruits.push(mangoes)
  }
}




  // Get some fruits
  harvest() {
    this._Harvested = this._Fruits.length;
    return this._Harvested;
}

quality() {
    let good = 0;
      let bad = 0;

      for(let i = 0; i < this._Fruits.length; i++) {
        if(this._Fruits[i]._HealthyStatus === true) {
          good++;
        } else {
          bad++;
        }
      }
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

 /*randomProduce(){
  var random = Math.Floor(Math.random()*5)
  return random;
  }
}*/
let newMangoTree = new MangoTree

console.log(`The tree is alive! :smile:`)

do {
  newMangoTree.grow()
  newMangoTree.produceMangoes()
  newMangoTree.harvest()
  console.log(`[Year ${newMangoTree._Age} Report] Height = ${newMangoTree._Height} m |
  Fruits harvested = ${newMangoTree._Harvested} ${newMangoTree.quality()}`)
}
while (newMangoTree._HealthyStatus !== false)

console.log(`The tree has met its end. :sad:`)

module.exports = {
  MangoTree,
  Mango
}
