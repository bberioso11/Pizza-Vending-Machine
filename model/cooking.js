const Relay = require("./relay");

class Cooking extends Relay {
  async execCooking() {
    const pin = 19;
    const ms = 40000;
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
    const pin = 19;
    this.executeRelay(pin, 1);
  }
}

module.exports = Cooking;
