const Relay = require("./relay");

class Cooking extends Relay {
  async execCooking() {
    const pin = 19;
    const ms = 10000;
    this.executeRelay(pin, 0);
    setTimeout(() => {
      this.executeRelay(pin, 1);
    }, ms);
  }
}

module.exports = Cooking;
