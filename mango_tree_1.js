"use strict"


class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0
    this.height = 0
    this.healthy = true
    this.harvested = 0
    this.good = 0
    this.bad = 0
    this.fruits = []
  }

  // Get current states here
  getAge() {
    return this.age
  }

  getHeight() {
    return this.height
  }

  getFruits() {
    return this.fruits.length
  }

  getHealthyStatus() {
    return this.healthy
  }
  // Grow the tree
  grow() {
    this.age++
      if (this.age === 20) {
        this.healthy = false
      } else if (this.age < 10) {
        this.height += getRandomNumber()
      }
  }

  // Produce some mangoes
  produceMangoes() {
    for (let i = 0; i < getRandomFruit(1, 9); i++) {
      if (this.healthy !== false) {
        this.fruits.push(new Mango)
      }
    }

  }

  // Get some fruits
  harvest() {
    this.good = 0
    this.bad = 0
    this.harvested = this.fruits.length

    if (this.fruits != []) {
      for (let j = 0; j < this.fruits.length; j++) {
        if (this.fruits[j].quality === "Good") {
          this.good += 1
        } else {
          this.bad += 1
        }
      }
    }
    
    this.fruits = []
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.quality()
  }
  quality() {
    if (getRandomNumber() >= 0.5) {
      return "Good"
    } else {
      return "Bad"
    }
  }
}
function getRandomFruit(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomNumber() {
  return Math.floor(Math.random() * 20)/10
}
// /console.log(getRandomNumber())
let tree = new MangoTree()

// console.log("The tree is alive! :smile: ");

do {
  tree.grow()
  tree.produceMangoes()
  tree.harvest()
  console.log(`[Year ${tree.age} Report] Height = ${tree.height.toFixed(2)} m | Fruits harvested = ${tree.harvested} (${tree.good} good, ${tree.bad} bad)`);
} while (tree.healthy !== false)

console.log("The tree has met its end! :sad: ");