"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.umur = 0;
    this.tinggi = 0;
    this.jumlah_buah = [];
    this.panen = '';
    this.healthy = true;
    this.MAX_GROW_AGE = 20;
    this.MIN_BEAR_FRUIT_AGE = 3;
    this.MAX_AGE = 50;
  }

  getAge() {
    return this.umur;
  }
  getHeight() {
    return this.tinggi;
  }
  getFruits() {
    this.jumlah_buah;
  }
  getHealtyStatus() {
    this.healthy;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this.umur++
    if (this.umur >= this.MAX_AGE){
      this.healthy = false;
    }
    if (this.getAge() <= this.MAX_GROW_AGE) {
      this.tinggi += getRandomNumber(200, 1);
    }
  }

  // Produce some mangoes
  produceMangoes() {
  let totalFruits = getRandomNumber(30, 5);
  for (let i = 0; i < totalFruits; i++) {
    let mango = new Mango();
    this.jumlah_buah.push(mango);
  }

// Calling harvest()
this.harvest();
  }

  // Get some jumlah_buah
  harvest() {
    let goodHarvest = 0, badHarvest = 0;
    for (let i = 0; i < this.jumlah_buah.length; i++) {
      if (this.jumlah_buah[i].quality == "Baik") {
        goodHarvest++;
      } else {
        badHarvest++;
      }
    }
    this.panen = `${this.jumlah_buah.length} (${goodHarvest} good, ${badHarvest} bad)`;
    this.jumlah_buah = [];
  }
}

class Mango {
  constructor() {
      let qualityOptions = ["Baik", "Buruk"]
      this.quality = qualityOptions[getRandomNumber(1, 0)];
    }
}

function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tree = new MangoTree();
console.log(`The tree is alive! :smile:`);
do {
  tree.grow();
  tree.produceMangoes();
  console.log(`[Year ${tree.umur} Report] Height = ${tree.tinggi} cm | Fruits panen = ${tree.panen} `);
} while (tree.healthy != false)

console.log(`The tree has met its end. :sad:`);

module.exports = {
  MangoTree,
  Mango
}
