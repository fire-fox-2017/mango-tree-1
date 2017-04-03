"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor(maximumAge, maximumGrowPeriod, maximumFruitPerYear) {
    this._fruitBasket = [];
    this._maxFruitPerYear = maximumFruitPerYear;  //50
    this._age = 0;
    this._maxAge = maximumAge;
    this._height = 0;
    this._maxGrowPeriod = maximumGrowPeriod;
    this._healthy = true;
    this._goodMangoes = 0;
    this._badMangoes = 0;
    this._harvested = '';
    this._totalBuah = 0;
  }

  getAge() {
    return this._age;
  }

  getHeight() {
    return this._height;
  }

  getFruits() {
    return this._harvested;
  }

  getHealtyStatus() {
  // Get current states here
    if(this._healthy!==true){
      return `Im \' so sorry, the tree has met its end :( \n Year ${this.getAge()} Report: Height=${this.getHeight()} centimeters`;
    }
    return `The tree is alive :) \n Year ${this.getAge()} Report: Height=${this.getHeight()} centimeters`;
  }


  grow() {
    let maxAnualTreeGrow = 100; // in centimeters
    if (this._age <= this._maxAge) {
      if (this._age < this._maxGrowPeriod) {
        this._height += getRandomNumber(maxAnualTreeGrow);
        this._age += 1;
      } else if (this._age === this._maxAge-1) {
        this._healthy = false;
        this._age += 1;
      } else {
          this._age += 1;
      }
    } else {
      this._healthy = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let random = getRandomNumber(this._maxFruitPerYear);
    for (let i = 0; i < random; i++) {
      let mango = new Mango()
      this._fruitBasket.push(mango);
    }
  }

  // Get some fruits
  harvest() {
    for (let i = 0; i < this._fruitBasket.length; i++) {
      if (this._fruitBasket[i]._quality === 'good') {
        this._goodMangoes += 1;
        this._totalBuah += 1;
      } else {
        this._badMangoes += 1;
        this._totalBuah +=1;
      }
    }
    this._harvested = `${this._goodMangoes + this._badMangoes} (${this._goodMangoes} good, ${this._badMangoes} bad, total ${this._totalBuah})`;
    this._fruitBasket = [];
    this._goodMangoes = 0;
    this._badMangoes = 0;
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this._qualityChoices = ['good','bad'];
    this._quality = this._qualityChoices[getRandomNumber(2)-1];
  }
}

function getRandomNumber(max) {
  return Math.floor(Math.random()*max+1);
}

var tree = new MangoTree(10,8,50);

while (tree._healthy !== false){
  tree.grow();
  tree.produceMangoes();
  tree.harvest();
  console.log(`[Year ${tree.getAge()} Report] Height = ${tree.getHeight()} | Fruits harvested = ${tree.getFruits()}`);
}

module.exports = {
  MangoTree,
  Mango
}
