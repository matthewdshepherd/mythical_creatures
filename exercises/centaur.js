class Centaur{
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.movement = 0;
    this.standing = true;
    this.layingDown = false;
  }
  shoot(){
    this.movement+=1
    if(this.movement>=3){
      this.cranky = true;
      return 'NO!'
    } else if (this.layingDown === true){
      return 'NO!'
    } else {
    return 'Twang!!!'
    }
  }
  run(){
    this.movement+=1
     if(this.movement>=3){
      this.cranky = true;
    } else if (this.layingDown === true){
      return 'NO!'
    } else {
    return 'Clop clop clop clop!!!';
    }
  }
  sleep(){
    if (this.standing === true){
      return 'NO!';
    }
    this.cranky = false;
    this.movement = 0;
    return 'ZZZZ';
  }
  layDown(){
    this.standing = false;
    this.layingDown = true;
  }
  standUp(){
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion(){
    if (this.layingDown === true){
      return 'Not while I\'m laying down!'
    }
    if (this.movement < 3){
      this.cranky = true;
    } else {
    this.cranky = false;
    }
  }

};

module.exports = Centaur;