const Gpio = require("pigpio").Gpio;
const Actuator = require("./actuator");

class PizzaCrust extends Actuator {
  async forwardlinearActuator() {
    // red = OUT1
    // blue = OUT2

    // black = OUT3
    // green = OUT4

    const IN1 = new Gpio(6, { mode: Gpio.OUTPUT });
    const IN2 = new Gpio(13, { mode: Gpio.OUTPUT });
    const IN3 = new Gpio(19, { mode: Gpio.OUTPUT });
    const IN4 = new Gpio(26, { mode: Gpio.OUTPUT });
    const steps = 28000;
    for (let i = 0; i < steps; i++) {
      this.rotate(IN1, IN2, IN3, IN4, 1);
      await this.delay(5);
    }
    this.disablePin(IN1, IN2, IN3, IN4);
  }
  async reverselinearActuator() {
    const IN1 = new Gpio(6, { mode: Gpio.OUTPUT });
    const IN2 = new Gpio(13, { mode: Gpio.OUTPUT });
    const IN3 = new Gpio(19, { mode: Gpio.OUTPUT });
    const IN4 = new Gpio(26, { mode: Gpio.OUTPUT });
    const steps = 28000;
    for (let i = 0; i < steps; i++) {
      this.rotate(IN1, IN2, IN3, IN4, -1);
      await this.delay(5);
    }
    this.disablePin(IN1, IN2, IN3, IN4);
  }
}

module.exports = PizzaCrust;
