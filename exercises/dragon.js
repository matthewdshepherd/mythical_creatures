class Dragon{
  constructor(name, rider, color){
    this.name = name
    this.rider = rider
    this.color = color
    this.hungry = true
    this.sheep = 0;
  }
  eat(){
    this.sheep+=1;
    switch(this.sheep){
      case 3:
      this.hungry = false
      break
    }
    
  }
}
module.exports = Dragon;

// with if statements
// class Dragon {
//   constructor (name, rider, color){
//     this.name = name
//     this.rider = rider
//     this.color = color
//     this.hungry = true
//     this.sheep = 0
//   }
//   eat(){
//     this.sheep++
//     if (this.sheep >= 3){
//       this.hungry = false
//     }
//   }
// }

// module.exports = Dragon;