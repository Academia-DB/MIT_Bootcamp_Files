class Dragon {
  constructor(name, color){
    this.name = name
    this.color = color || "Red"
  }

  wakeUp() {
    return "WHO DARES DISTURB MY SLUMBER?"
  }

  threaten() {
    return "Go now, and tell the others to leave me in peace! Else you shall regret the day you first drew breath!"
  }
};

module.exports = Dragon
