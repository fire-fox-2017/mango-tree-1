"use strict"

class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height=0;
    this._fruit=[];
    this._harvested=[];
    this._healty=true;
  }
  getAge() {
    return this._age;
  }
  getHeight() {
    return this._height;
  }

  getFruits() {
    return this._fruit;
  }
  getHealtyStatus() {
    return this._status;
  }
  //Pohon Berhenti Tumbah Saat umur 15
  grow() {
    let heightRandom;
    this._age = this._age+1;
      if(this._age<=15){
        heightRandom=getRandomNumber();
        this._height=this._height + heightRandom;
      }

      else if(this._age==20){
        this._healthy=false;
      }
    }

  // Produce some mangoes
  produceMangoes() {
    let banyakMangga = getRandomNumber();
    let i;
    let totalMangga;
    for(i=0;i<banyakMangga;i++){
      let ManggaNya = new Mango();
      this._fruit.push(ManggaNya);
    }
  }

  // Get some fruits
  harvest() {
    let good=0;
    let bad=0;
    let total;
    this._harvested=[];
    let panjangMenghasilkan = this._fruit.length;
    for(let i=0;i<panjangMenghasilkan;i++){
      if(this._fruit[i]._quality == 'good'){
        good++;
      }
      else {
        bad++;
      }
    }
    total= good+bad;
    this._harvested=[total, good, bad];
    this._fruit=[];
  }
}

class Mango {
  // Produce a mango
  constructor() {
    let angka = getRandomNumber();
    let quality;
    if(angka%2==0){
      quality = 'good';
    }
    else {
      quality = 'bad';
    }
    this._quality = quality;
  }
}

function getRandomNumber() {
  return Math.floor(Math.random()*10)+3;
}

var tree = new MangoTree()
console.log(`The tree is alive!`)
do
{
  tree.grow();
  tree.produceMangoes();
  tree.harvest();
  console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruit harvested = ${tree._harvested[0]} (${tree._harvested[1]} good, ${tree._harvested[2]} bad)`);
}while(tree._healthy != false)



module.exports = {
  MangoTree,
  Mango
}
