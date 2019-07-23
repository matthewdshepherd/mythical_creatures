class Direwolf {
  constructor(name, home='Beyond the Wall', size='Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(starkObj) {
    if (this.starksToProtect.length < 2) {
      (starkObj.location === this.home ?  this.starksToProtect.push(starkObj) : '' );
        starkObj.safe = true;
        this.huntsWhiteWalkers = false;
    }
  }
  leave(starkObj){
    starkObj.safe = false;
    this.starksToProtect.pop();
  }
}

module.exports = Direwolf;