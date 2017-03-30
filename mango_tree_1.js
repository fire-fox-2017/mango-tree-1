"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor(age,height,numFruits,healthStatus,heightMaturity,deathAge) {
  	this.age = 0
		this.height = 0
		this.numFruits = 0
		this.healthStatus = true
		this.bucket = []
		this.heightMaturity = 150
		this.deathAge = 200
  }

  // getAge() {
  //   for (var i=0; i<this.age; i++) {
  //     console.log(this.age)
  //   }
  // }
  // getHeight() {
  //   for (var i=0; i<this.height; i++) {
  //     console.log(this.height)
  //   }
  // }
  // getFruits() {
  // }
  // getHealtyStatus() {
  // }


  // Get current states here

  // Grow the tree
  grow() {
    this.age++
    if (this.age <= this.heightMaturity) {
      this.height += getRandomNumber();
    }
    if (this.age >= this.deathAge) {
      this.healthStatus = false
    }
  }


  // Produce some mangoes
  produceMangoes() {
    this.bucket = []
    this.numFruits = Math.floor(Math.random()*10)
    for (var i=0; i<this.numFruits; i++) {
      this.bucket.push(new Mango())
    }
  }

  // Get some fruits
  harvest() {
    var harvested = this.bucket.length
    var countBad = 0
    var countGood = 0
    for (var i=0; i<harvested; i++) {
      if (this.bucket[i].quality === 'good') {
        countGood +=1
      }else if (this.bucket[i].quality === 'bad') {
        countBad +=1
      }
    }
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.assignQuality()
  }
  assignQuality() {
    var mangoQuality = ["good","bad"]
    var qualityCheck = mangoQuality[Math.floor(Math.random()*mangoQuality.length)]
    return qualityCheck
  }
}

function getRandomNumber() {
  return Math.floor(Math.random()*10)
}

var tree = new MangoTree()
console.log(`The tree is alive!`)

do {
  tree.grow()
  tree.produceMangoes()
  console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.numFruits}`)
}
while (tree.healthStatus != false)

console.log(`The tree has met its end.`)

module.exports = {
  MangoTree,
  Mango
}
