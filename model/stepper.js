const Gpio = require("pigpio").Gpio;
const LimitSwitch = require("./limitswitch");

// 1 = clockwise
// -1 = counterclockwise

class Stepper {
  constructor() {
    this.stepCounter = 0;
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  rotate(pins, direction) {
    const outputs = pins.map((pin) => new Gpio(pin, { mode: Gpio.OUTPUT }));
    const stepSequence = [
      [1, 0, 0, 1],
      [0, 1, 0, 1],
      [0, 1, 1, 0],
      [1, 0, 1, 0],
    ];
    this.stepCounter =
      (this.stepCounter + direction + stepSequence.length) %
      stepSequence.length;
    const step = stepSequence[this.stepCounter];

    outputs.forEach((output, index) => output.digitalWrite(step[index]));
  }

  disablePin(pins) {
    const outputs = pins.map((pin) => new Gpio(pin, { mode: Gpio.OUTPUT }));
    outputs.forEach((output) => output.digitalWrite(0));
  }
}

module.exports = Stepper;
