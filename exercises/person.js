class Person{
  constructor(name){
    this.name = name;
    this.stoned = false;
  }
  stoned(){
    this.stoned = true;
  }
};

module.exports = Person;