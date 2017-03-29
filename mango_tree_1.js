"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.umur=2000;
    this.tinggi=165;
    this.MAX_BUAH=10;
    this.buah=5;
    this.petik=0;
    this.status='sehat';
    this.MAX_TINGGI=180;
    this.MAX_HIDUP=2010;
  }

  getAge() {
    return this.umur;
  }
  getHeight() {
    return this.tinggi;
  }
  getFruits() {
    return this.buah;
  }
  getHealtyStatus() {
    if(this.MAX_HIDUP<this.umur){
      this.status='sakit';
    }


    return this.status;
  }


  grow(tambahTinggi) {
    if(this.tinggi<this.MAX_TINGGI){
      this.tinggi=tambahTinggi+this.tinggi;
      if(this.tinggi>this.MAX_TINGGI){
        this.tinggi=this.MAX_TINGGI;

      }
    }

    if(this.umur<this.MAX_HIDUP){
      this.umur++;
      console.log('Umur ' +this.umur+" | "+this.tinggi+' '+this.produceMangoes());

    }else{
      console.log('pohon mati....');

    }

    this.getHealtyStatus();


  }

  // Produce some mangoes
  produceMangoes() {
    let jumlahBuah = Math.floor((Math.random() * this.MAX_BUAH) + 1);
    let bagus=0;

    for(let i=0;i<jumlahBuah;i++){
      let buah = new Mango();
      if(buah.quality==='bagus'){
        bagus++;

      }
    }

    return ('jumlah buah : '+jumlahBuah+' | bagus : '+bagus+' jelek : '+(jumlahBuah-bagus));
  }

  // Get some fruits
  harvest() {
  }

}

class Mango {
  // Produce a mango
  constructor() {
    let i= Math.floor((Math.random() * 2));
    if(i==1) {
      this.quality='bagus';
    }else{
      this.quality='jelek';

    }


  }
}

function getRandomNumber() {
   return Math.floor((Math.random() * 3) + 1);
}



let poon1 = new MangoTree();
poon1.grow(getRandomNumber());
poon1.grow(getRandomNumber());
poon1.grow(getRandomNumber());
poon1.grow(getRandomNumber());
poon1.grow(getRandomNumber());
poon1.grow(getRandomNumber());
poon1.grow(getRandomNumber());
poon1.grow(getRandomNumber());
poon1.grow(getRandomNumber());
poon1.grow(getRandomNumber());
poon1.grow(getRandomNumber());
poon1.grow(getRandomNumber());



module.exports = {
  MangoTree,
  Mango
}
