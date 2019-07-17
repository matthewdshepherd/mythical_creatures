class Dragon {
  constructor (name, rider, color){
    this.name = name
    this.rider = rider
    this.color = color
    this.hungry = true
    this.sheep = 0

  }
  eat(){
    if (sheep > 2){
      this.hungry = false
    } else {
      sheep += 1
    }
  }

}

module.exports = Dragon;



class Dragon{
  constructor (name, rider, color){
    this.name = name
    this.rider = rider
    this.color = color
    this.hungry = true
    this.sheep = 0
  }
  eat(){
    this.sheep += 1
    if (this.sheep >= 3){
      this.hungry = false
    }
  }
}


module.exports = Dragon;