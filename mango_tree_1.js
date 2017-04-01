"use strict"

class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this._age=0;
    this._height=0;
    this._maxTree=Math.floor(Math.random()*20)+15;
    this._fruitFresh="";
    this._fruitStatus=true;
  }

  get age() {
    return this._age;
  }
  get height() {
    return this._height;
  }
  get fruitsFresh() {
    return this._fruitFresh;
  }
  get fruitStatus() {
    return this._fruitStatus;
  }


  // Get current states here

  // Grow the tree
  grow() {
    if(this._age<this._maxTree&&this._fruitStatus==true){
      this._age++;
      let growValue=Math.round(Math.random()*2);
      if(growValue>0){
        this._height+=growValue;
      }
    }else {
      this._fruitStatus=false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    var myMango = new Mango();
    myMango.runMango();
    this._fruitFresh=` ${myMango.quantity} (${myMango.qualityGood} Good, ${myMango.qualityBad} Bad)`;
  }

  // Get some fruits
  harvest() {
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this._quantity=0;
    this._qualityGood=0;
    this._qualityBad=0;
  }

  runMango(){
    this._quantity=Math.ceil(Math.random()*7)+7;
    let temp=Math.ceil(Math.random()*this._quantity);
    this._qualityGood=temp;
    this._qualityBad=this._quantity-temp;
  }
  get quantity(){
    return this._quantity;
  }
  get qualityGood(){
    return this._qualityGood;
  }
  get qualityBad(){
    return this._qualityBad;
  }

}

function getRandomNumber() {
}

let myTree = new MangoTree();
console.log("The Tree is Alive! :smile:");
do{
  myTree.grow();
  myTree.produceMangoes();
  console.log(`[Year ${myTree.age} Report] Height = ${myTree.height} cm | Fruits Harvested = ${myTree.fruitsFresh}`);
}while (myTree.fruitStatus!=false);
console.log("The Tree is met its end :sad:");


module.exports = {
  MangoTree,
  Mango
}
