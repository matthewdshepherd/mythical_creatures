class Hobbit{
  constructor(name){
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult=false;
    this.old = false;
    this.isShort = true;
    this.hasRing = false || name === 'Frodo';
  }
  celebrateBirthday(){
    this.age++
     switch(this.age){
      case 33:
      this.adult = true;
      break

      case 101:
      this.old = true;
      break
    }
  }
}



module.exports = Hobbit;


// class Hobbit {
//   constructor(name) {
//     this.name = name;
//     this.disposition = 'homebody';
//     this.age = 0;
//     this.adult = false;
//     this.isShort = true;
//     this.old = false;
//     this.hasRing = false || name === 'Frodo';
//   }
//   celebrateBirthday(){
//     this.age++
//     this.old = false || this.age > 100
//     // if (this.age > 100){
//     //   this.old = true
//     // }
//     if (this.age > 32){
//       this.adult = true
//     }
//   }

// }

// module.exports = Hobbit;

// npm test mythical-creatures/test/hobbit-test.js
