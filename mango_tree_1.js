"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._maxAge = 15
    this._healthy = true
    this._height = 0
    this._harvest = ''
    // this._quality = this.harvest()
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._age++
    if (this._age == this._maxAge){
      this._healthy = false
    } else {
      this._height += getRandomNumber(1,5)
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let good = 0;
    let bad = 0
    let mango = new Mango(1, 10)
    let data = mango.quality
    for (let i=0; i<data; i++){
      if(getRandomNumber(0,6) > 3){
        good++
      } else {
        bad++
      }
    }
    this._harvest = `${data} (${good} good, ${bad} bad)`
  }

  // Get some fruits
  harvest() {
    // var good = 0;
    // var bad = 0;
    // let data = getRandomNumber(0,4)
    // for(let i=0; i<this._harvest; i++){
    //   if(getRandomNumber(0,1) == 0){
    //     bad++
    //   } else {
    //     good++
    //   }
    // }


    // return `${this._harvest}`
  }

}

class Mango {
  // Produce a mango
  constructor(min, max) {
    this.quality = this.random(min, max)
  }
  random(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }
}

function getRandomNumber(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

var tree = new MangoTree()
console.log(`The tree is alive! :smile:`);

do{
  tree.grow()
  tree.produceMangoes()
  console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvest}`);
} while (tree._healthy != false)

console.log(`The tree has met its end. :sad:`);

module.exports = {
  MangoTree,
  Mango
}
