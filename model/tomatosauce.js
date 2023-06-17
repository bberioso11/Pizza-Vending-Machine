const Relay = require("./relay");

class TomatoSauce extends Relay {
  async executeTomatoSauce(ms) {
    const pin = 6;
    this.executeRelay(pin, 0);
    return await new Promise((resolve) => {
      setTimeout(() => {
        // Example usage: Turn off relay 1
        this.executeRelay(pin, 1);
        resolve();
      }, ms);
    });
  }

  async reset() {
    const pin = 6;
    this.executeRelay(pin, 1);
  }
}

module.exports = TomatoSauce;
