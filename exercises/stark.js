class Stark {
  constructor(name, home = 'Winterfell') {
    this.name = name;
    this.location = home;
    this.safe = false;
  }
  houseWords() {
   return (this.safe ? 'The North Remembers' : 'Winter is Coming')
  }
}

module.exports = Stark;