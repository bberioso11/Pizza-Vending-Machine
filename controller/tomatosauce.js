const Gpio = require("pigpio").Gpio;
const Relay = require("./relay");

class TomatoSauce extends Relay {
  async executeTomatoSauce(delay) {
    const pin = new Gpio(2, { mode: Gpio.OUTPUT });
    this.executeRelay(pin, 0);
    setTimeout(() => {
      // Example usage: Turn off relay 1
      this.executeRelay(pin, 1);
      //pin.digitalWrite(1);
    }, delay); // Wait for 5 seconds
  }
}

module.exports = TomatoSauce;
