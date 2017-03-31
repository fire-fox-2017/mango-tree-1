"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0;
    this.height = 0;
    this.fruits = []; //kumpulan buah yang diproduksi
    this.harvested = ""; //jumlah buah yang sudah dipetik
    this.healthy = true;
    this.maxAge = 20;
    this.maxHeight = 30;
    this.maxFruit = 10;
    this.goodMango = 0;
    this.badMango = 0;
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
    if(this.age < this.maxAge){
      this.age++;
    }
    if(this.age >= this.maxAge){
      this.healthy = false;
    }

    this.height += getRandomNumber(3,1);

    if(this.height > this.maxHeight){
      this.height = this.maxHeight;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let angkaRandom = getRandomNumber(10,0);
    let produksiBuah;

    if(angkaRandom < this.maxFruit){
      produksiBuah = angkaRandom;
    } else {
      produksiBuah = this.maxFruit;
    }

    for (var i = 0; i < produksiBuah; i++) {
      let Mangga = new Mango;
      if(Mangga.quality === 'Good'){
        this.goodMango++;
      } else {
        this.badMango++;
      }
      this.fruits.push(Mangga);
    }
  }

  // Get some fruits
  harvest() {
    // this.harvested = (this.goodMango + this.badMango) + ' (' +this.goodMango+ ' good, ' +this.badMango+ ' bad)';
    this.harvested = `${this.goodMango + this.badMango} (${this.goodMango} good, ${this.badMango} bad)`;
    this.fruits = [];
    this.goodMango = 0;
    this.badMango = 0;
  }

}

class Mango {
  // Produce a mango
  constructor() {
    var randomKualitasBuah = getRandomNumber(10,1);
    if(randomKualitasBuah > 7){
      this.quality = 'Good';
    } else {
      this.quality = 'Bad';
    }
  }
}

function getRandomNumber(angkaMax,angkaMin) {
  return Math.floor((Math.random() * angkaMax) + angkaMin);
}

module.exports = {
  MangoTree,
  Mango
}

var tree = new MangoTree()
console.log(`The tree is alive! :smile:`)

// tree.grow();
// tree.produceMangoes();
// tree.harvest();
// console.log(tree.age);
// console.log(tree.fruits);
// console.log(tree.harvested);

do {
  tree.grow()
  tree.produceMangoes();
  tree.harvest();

  console.log(`[Year ${tree.age} Report] Height = ${tree.height} m |  Fruits harvested = ${tree.harvested}`);
} while (tree.healthy != false)

console.log(`The tree has met its end. :sad:`);
