class Werewolf{
  constructor(name, location){
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = this.hungry = false;
    
  }

  change(){
    if(this.human === true){
    this.human = false;
    this.wolf = this.hungry = true;
    } else {
      this.human = true;
      this.wolf = this.hungry = false;
    };
  };

   eat(victim){
    if(this.hungry === true && this.human === false){
      this.human = true;
      this.wolf = this.hungry = false;
      victim.alive = false;
    }
  }
  
};

module.exports = Werewolf;