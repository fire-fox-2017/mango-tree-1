"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._tinggi=0;
    this._umur=0;
    this._sehat=true;
    this._jumlahBuah=[];
    this._panen=0;
  }

  // Grow the tree
  grow() {
    let maxUmur = 10;
    let umurBatasTumbuh=5;
    let randomTinggi = randomNumber(2);
    this._umur += 1;
    if(this._umur <= umurBatasTumbuh) {
      this._tinggi +=randomTinggi;
    }

    if(this._umur === maxUmur) {
      this._sehat = false;
    }

  }

  // Produce some mangoes
  produceMangoes() {

    let tahunBerbuah=4;
    if(this._umur>=tahunBerbuah){
      for(let i = 0; i < randomNumber(5); i++)
      {
        let mangos = new Mango();
        this._jumlahBuah.push(mangos);
      }
    }
  }

  // Get some fruits
  harvest() {
    this._panen = this._jumlahBuah.length;
    return this._panen;
  }

  totalKualitasBuah() {
    let good = 0;
    let bad = 0;
    for(let i = 0; i < this._jumlahBuah.length; i++) {
      if(this._jumlahBuah[i]._kualitas === "good") {
        good++;
      } else {
        bad++;
      }
    }

    let dipanen = `(${good} good, ${bad} bad)`;
    return dipanen;

    }
  }


class Mango {
  // Produce a mango
  constructor() {
    this._kualitas = RandomKualitas();
  }
}

function RandomKualitas() {
  let random = Math.round(Math.random()*100);
  if(random%2=== 0) {
    return "good";
  } else {
    return "bad";
  }
}

function randomNumber(num) {
  let random =Math.floor(Math.random()*num)+3;
  return random;
}
var tree = new MangoTree();

do{
  tree.grow();
  tree.produceMangoes();
  console.log(`[Year ${tree._umur} Report] Height = ${tree._tinggi} m | Fruits harvested = ${tree.harvest()} (${tree.totalKualitasBuah()})`);
}while (tree._sehat !=false)
console.log(`The tree has met its end. :sad:`);

module.exports = {
  MangoTree,
  Mango
}
