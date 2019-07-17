
//without if statements
class Unicorn {
  constructor(name, color='white'){
    this.name = name;
    this.color = color;
  }
  isWhite(){
    return this.color==='white';
  }
  says(stuff){
    return `**;* ${stuff} *;**`;
  }
};




module.exports = Unicorn;


// with if statements
// class Unicorn {
//   constructor(name, color) {
//     this.name = name
//     if (color === undefined){
//       this.color = 'white'
//     } else {
//     this.color = color
//     }
//     // this.color = color || 'white'
//   }

//   isWhite(){
//     // return this.color === 'white' this is a short hand way of writing to make this true or false.
//     if (this.color !== 'white'){
//       return false;
//     }
//   }

//   says(text){
//     return '**;* ' + text + ' *;**'
//   }
// }

// module.exports = Unicorn;


// read the test
// ask yoursefl if it is going to fail and why
// run the test
// make it pass