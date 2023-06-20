const Gpio = require("pigpio").Gpio;

class LimitSwitch {
  async execute(pin) {
    const limitSwitch = new Gpio(pin, {
      mode: Gpio.INPUT,
      pullUpDown: Gpio.PUD_UP,
    });
    const result = limitSwitch.digitalRead();
    // 0 = pressed
    // 1 = not press
    if (result === 0) {
      return true;
    }
    return false;
  }
}

module.exports = LimitSwitch;
