const Relay = require("./relay");

class Cooking extends Relay {
  async execCooking(ms) {
    const pin = 19;
    this.executeRelay(pin, 0);
    return await new Promise((resolve) => {
      setTimeout(() => {
        // Example usage: Turn off relay 1
        this.executeRelay(pin, 1);
        resolve();
      }, ms);
    });
  }

  async led(state) {
    const LEDpin = 21;
    this.executeRelay(LEDpin, state);
  }

  async reset() {
    const pin = 19;
    const LEDpin = 21;
    this.executeRelay(pin, 1);
    this.executeRelay(LEDpin, 1);
  }
}

module.exports = Cooking;
