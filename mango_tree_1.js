"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0
    this.height = 0
    // this.maxFruit = maxFruit
    this.fruit = this.produceMangoes()
    this.harvestedFruit = this.harvest()
    this.healty = true
  }

  getAge() {
    return this.age
  }
  getHeight() {
    return this.height
  }
  getFruits() {
    return this.harvestedFruit
  }
  getHealtyStatus() {
    return this.healty
  }


  // Get current states here

  // Grow the tree
  grow() {
    //if(this)
      if (this.age > 20) {
        this.healty = false;
      }
      else {
        this.age += 1;
        if(this.height < 20){
          this.height += this.getRandomNumber();
        }
      }
      return this;
  }

  // Produce some mangoes
  produceMangoes() {
    // console.log('random2 :', 20*this.getRandomNumber());
    this.fruit = 20*this.getRandomNumber();
    // this._harvested = this.harvest();
  }

  // Get some fruits
  harvest() {
    //let tampung = [];
    let fruitS = 10
    var good = 0;
    var bad = 0;
    for (let i = 0; i < this.fruit; i++) {
      let mangga = new Mango();
      mangga.quality == 'good' ? good += 1 : bad += 1
      // console.log(mangga.quality)
    }

    return this.harvested=(`${good+bad} (${good} good, ${bad} bad)`);
    //this._fruit = 0;
  }
  getRandomNumber() {
    let rand= Math.floor(Math.random()*5)
    // console.log('random: ', rand);
    return rand
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = Math.random() > 0.6 ? 'good' : 'bad';
  }
}


//////////////////////////////////////////////////////////

let tree = new MangoTree();
console.log(`The tree is alive! :smile:`)
do {
  tree.grow()
  tree.produceMangoes()
  tree.harvest()
  console.log(`[Year ${tree.age} Report] Height = ${tree.height} m | Fruits harvested = ${tree.harvested}`)
} while (tree.healty == true)
console.log(`The tree has met its end, :sad;`)


module.exports = {
  MangoTree,
  Mango
}
