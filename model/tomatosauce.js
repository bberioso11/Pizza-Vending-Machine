const Relay = require("./relay");

class TomatoSauce extends Relay {
  async executeTomatoSauce(state) {
    const pin = 26;
    this.executeRelay(pin, state);
  }

  async reset() {
    const pin = 26;
    this.executeRelay(pin, 1);
  }
}

module.exports = TomatoSauce;
