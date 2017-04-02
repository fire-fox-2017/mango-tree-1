"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor(components) {
    this.umur = components.umur;
    this.tinggi = components.tinggi;
    this.maxBuahCapacity = components.maxBuahCapacity;
    this.NowBuahConstBox = components.NowBuahConstBox;
    this.numOfPanenBuah = components.numOfPanenBuah;
    this.isHealthly = components.isHealthly;
  }

  getumur() {
    return this.umur;
  }
  gettinggi() {
    return this.tinggi;
  }
  getBuahs() {
    return this.NowBuahConstBox;
  }
  getHealtyStatus() {
    return this.isHealthly;
  }


  // Get Now states here

  // Grow the tree
  grow() {

    this.umur += 1;
    let maxtinggiGrowthPerYear = 4;
    let maxumur = 10;
    let randomtinggiGrow = randomGenerator(maxtinggiGrowthPerYear);

    if(this.umur <= maxumur) {
      this.tinggi += randomtinggiGrow;
    }

    if(this.umur === maxumur) {
      this.isHealthly = false;
    }

  }

  // Produce some mangoes
  produceMangoes() {
    for(let i = 0; i < randomGenerator(5); i++) {
      let mangos = new Mango();
      this.NowBuahConstBox.push(mangos);
    }
  }

  // Get some Buahs
  harvest() {
    this.numOfPanenBuah = this.NowBuahConstBox.length;
    return this.numOfPanenBuah;
  }

  BuahQualityChecker() {
    let baik = 0;
    let buruk = 0;

    for(let i = 0; i < this.NowBuahConstBox.length; i++) {
      if(this.NowBuahConstBox[i].isHealthly === true) {
        baik++;
      } else {
        buruk++;
      }
    }

    let Panen = `(${baik} baik, ${buruk} buruk)`;
    return Panen;

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
  'umur': 0,
  'tinggi': 0,
  'maxBuahCapacity': 10,
  'NowBuahConstBox': [],
  'numOfPanenBuah': 0,
  'isHealthly': true,
});


console.log(`Pohonnya hidup!! :D `)

do {
  myMangoTree.grow()
  myMangoTree.produceMangoes()
  myMangoTree.harvest()

  console.log(`[Umur ${myMangoTree.umur} Report] tinggi = ${myMangoTree.tinggi} m | Buah Panen = ${myMangoTree.numOfPanenBuah} ${myMangoTree.BuahQualityChecker()}`)
} while (myMangoTree.isHealthly != false)

console.log(`Pohon telah mati. :'( `)


module.exports = {
  MangoTree,
  Mango
}
