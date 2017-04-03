"use strict"

  class MangoTree {

    // Initialize a new MangoTree
    constructor(components) {
      this.age = components.age;
      this.heigh = components.heigh;
      this.MaxFruit = components.MaxFruit;
      this.nowFriutConstBox = components.nowFriutConstBox;
      this.numOfHarvestFruit = components.numOfHarvestFruit;
      this.isHealthy = components.isHealty;
    }

    getage() {
      return this.age;
    }
    getheigh() {
      return this.heigh;
    }
    getFruits() {
      return this.nowFriutConstBox;
    }
    getHealtyStatus() {
      return this.isHealty;
    }


    // Get Now states here

    // Grow the tree
    grow() {

      this.age += 1;
      let maxheighGrowthPerYear = 4;
      let maxage = 10;
      let randomheighGrow = randomGenerator(maxheighGrowthPerYear);

      if(this.age <= maxage) {
        this.heigh += randomheighGrow;
      }

      if(this.age === maxage) {
        this.isHealty = false;
      }

    }

    // Produce some mangoes
    produceMangoes() {
      for(let i = 0; i < randomGenerator(5); i++) {
        let mangos = new Mango();
        this.nowFriutConstBox.push(mangos);
      }
    }

    // Get some Buahs
    harvest() {
      this.numOfHarvestFruit = this.nowFriutConstBox.length;
      return this.numOfHarvestFruit;
    }

    BuahQualityChecker() {
      let good = 0;
      let bad = 0;

      for(let i = 0; i < this.nowFriutConstBox.length; i++) {
        if(this.nowFriutConstBox[i].isHealty === true) {
          good++;
        } else {
          bad++;
        }
      }

      let Harvest = `(${good} good, ${bad} bad)`;
      return Harvest;

      }
    }



  class Mango {
    // Produce a mango
    constructor() {
      this.isHealty = qualityRandomGenerator();
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

  let mangoTreeStatus = new MangoTree({
    'age': 0,
    'heigh': 0,
    'MaxFruit': 10,
    'nowFriutConstBox': [],
    'numOfHarvestFruit': 0,
    'isHealty': true,
  });


  console.log(`Pohonnya hidup!! :D `)

  do {
    mangoTreeStatus.grow()
    mangoTreeStatus.produceMangoes()
    mangoTreeStatus.harvest()

    console.log(`[Age ${mangoTreeStatus.age} Report] heigh = ${mangoTreeStatus.heigh} m | Fruits Harvest = ${mangoTreeStatus.numOfHarvestFruit} ${mangoTreeStatus.BuahQualityChecker()}`)
  } while (mangoTreeStatus.isHealty != false)

  console.log(`Pohon telah mati. :'( `)

module.exports = {
  MangoTree,
  Mango
}
