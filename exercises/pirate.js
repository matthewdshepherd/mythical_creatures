class Pirate{
  constructor(name, job='Scallywag' ){
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.HeinousAct = 0;
    this.booty = 0;
  }
  commitHeinousAct(){
    this.HeinousAct++
    switch(this.HeinousAct){
      case 3:
      this.cursed = true;
      break
    }
  }
  robShip(){
    this.booty = 100;
    return 'YAARRR!'
  }
}

module.exports = Pirate;
