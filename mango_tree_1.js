"use strict"

class MangoTree {
  
  // Initialize a new MangoTree
  constructor(components) {
    this.age = components.age;
    this.height = components.height;
    this.maxFruitCapacity = components.maxFruitCapacity;
    this.currentFruitContainer = components.currentFruitContainer;
    this.numOfHarvestedFruit = components.numOfHarvestedFruit;
    this.isHealthly = components.isHealthly;
  }

  getAge() {
    return this.age;
  }
  getHeight() {
    return this.height;
  }
  getFruits() {
    return this.currentFruitContainer;
  }
  getHealtyStatus() {
    return this.isHealthly;
  }


  // Get current states here

  // Grow the tree
  grow() {

    this.age += 1;
    let maxHeightGrowthPerYear = 4;
    let maxAge = 10;
    let randomHeightGrow = randomGenerator(maxHeightGrowthPerYear);

    if(this.age <= maxAge) {
      this.height += randomHeightGrow;
    }

    if(this.age === maxAge) {
      this.isHealthly = false;
    }

  }

  // Produce some mangoes
  produceMangoes() {
    for(let i = 0; i < randomGenerator(5); i++) {
      let mangos = new Mango();
      this.currentFruitContainer.push(mangos);
    }
  }

  // Get some fruits
  harvest() {
    this.numOfHarvestedFruit = this.currentFruitContainer.length;
    return this.numOfHarvestedFruit;
  }

  fruitQualityChecker() {
    let good = 0;
    let bad = 0;
    
    for(let i = 0; i < this.currentFruitContainer.length; i++) {
      if(this.currentFruitContainer[i].isHealthly === true) {
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
    this.isHealthly = qualityRandomGenerator();
  }
}

function qualityRandomGenerator() {
  let random = Math.floor(Math.random() * 2);
  if(random === 0) {
    return true;
  } else {
    return false;
  }
}

function randomGenerator(num) {
  let random = Math.floor(Math.random() * num);
  return random;
}

let myMangoTree = new MangoTree({
  'age': 0,
  'height': 0,
  'maxFruitCapacity': 10,
  'currentFruitContainer': [],
  'numOfHarvestedFruit': 0,
  'isHealthly': true,
});


console.log(`The tree is alive! :smile:`)

do {
  myMangoTree.grow()
  myMangoTree.produceMangoes()
  myMangoTree.harvest()

  console.log(`[Year ${myMangoTree.age} Report] Height = ${myMangoTree.height} m | Fruits harvested = ${myMangoTree.numOfHarvestedFruit} ${myMangoTree.fruitQualityChecker()}`)
} while (myMangoTree.isHealthly != false)

console.log(`The tree has met its end. :sad:`)


module.exports = {
  MangoTree,
  Mango
}
