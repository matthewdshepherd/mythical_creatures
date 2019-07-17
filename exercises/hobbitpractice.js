class Hobbit {
  constructor (name) {
    this.name = name
    this.disposition = 'homebody'
    this.age = 0
    this.isShort = true
    this.adult = false
    this.old = false
    this.hasRing = this.name === 'Frodo'
    // this.hasRing = false || name === 'Frodo'
    // if (name === 'Frodo'){
    //   this.hasRing = true
    // } else {
    //   this.hasRing = false
    // }
  }
 
 celebrateBirthday(){
    this.age += 1
     if (this.age > 100){
      this.old = true
    }
    if (this.age > 32){
      this.adult = true
    }
  }

}

// module.exports = Hobbit;