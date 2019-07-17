class Wizard {
  constructor(wizardObj){
    this.name = wizardObj.name;
    this.bearded = wizardObj.bearded === undefined ? true : false;
    this.isRested = true;
    this.spellCount = 0;
  }

  incantation(string){
    return string.toUpperCase();
  }

  cast(string){
    this.spellCount++
    switch(this.spellCount){
      case 3:
      this.isRested = false;
      break
    }
    switch(this.isRested){
      case true:
      return string.toUpperCase();
      break

      case false:
      return 'I SHALL NOT CAST!'
      break
    }
  }
}

module.exports = Wizard;

// With if statements
// class Wizard{
//   constructor(obj){
//     this.name = obj.name;
//     this.isRested = true;
//     this.castSpell = 3;
//     this.bearded = true
//     if (obj.bearded === false){
//       this.bearded = false
//     };
//   }
//   incantation(str){
//       return str.toUpperCase();
//     };
//   cast(str){
//     this.castSpell--
//     if(this.castSpell <1){
//       this.isRested = false;
//       return 'I SHALL NOT CAST!';
//     } else {
//       return str.toUpperCase();
//     }
//   }
// }

// module.exports = Wizard;

// npm test mythical-creatures/test/wizard-test.js