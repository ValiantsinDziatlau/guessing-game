class GuessingGame {
  constructor() {}

setRange(min, max) {
  this.Min=min;
  this.Max=max;
}
guess() {
return Math.round((this.Min+this.Max)/2); //-1)/2;

}
lower() {
  this.Max=this.guess();
}
greater() {
  this.Min=this.guess();
}
}
module.exports = GuessingGame;
