const Gpio = require("pigpio").Gpio;

class Relay {
  executeRelay(pin, state) {
    const output = new Gpio(pin, { mode: Gpio.OUTPUT });
    output.digitalWrite(state);
  }
}

module.exports = Relay;
