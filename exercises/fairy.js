class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.disposition = 'Good natured';
    this.humanWards = [];
    this.stolenChildren = 0
    this.clothes = {
      dresses: ['Iris']
    }
  };

  receiveBelief() {
    this.dust++;
  };

  believe() {
    this.dust += 10;
  };

  makeDresses(flowers) {
   for (var i=0; i<flowers.length; i++) {
    this.clothes.dresses.push(flowers[i])
   }
 };

 provoke() {
  this.disposition = 'Vengeful';
 };

 replaceInfant(infantObj) {
  if (this.disposition === 'Vengeful') {
  this.stolenChildren += 1
  infantObj.disposition = 'Malicious';
  this.humanWards.push(infantObj);
  }
  if (this.stolenChildren > 2) {
    this.disposition = 'Good natured';
  }
  return infantObj;
 };


}

module.exports = Fairy;