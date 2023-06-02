const Gpio = require("pigpio").Gpio;
const Actuator = require("./actuator");

class Vslot extends Actuator {
  async primary(steps, direction, ms) {
    const IN1 = new Gpio(12, { mode: Gpio.OUTPUT });
    const IN2 = new Gpio(16, { mode: Gpio.OUTPUT });
    const IN3 = new Gpio(20, { mode: Gpio.OUTPUT });
    const IN4 = new Gpio(21, { mode: Gpio.OUTPUT });
    const step = steps;
    for (let i = 0; i < step; i++) {
      this.rotate(IN1, IN2, IN3, IN4, direction);
      await this.delay(ms);
    }
    this.disablePin(IN1, IN2, IN3, IN4);
  }
  async secondary(steps, direction) {
    const IN1 = new Gpio(24, { mode: Gpio.OUTPUT });
    const IN2 = new Gpio(25, { mode: Gpio.OUTPUT });
    const IN3 = new Gpio(8, { mode: Gpio.OUTPUT });
    const IN4 = new Gpio(7, { mode: Gpio.OUTPUT });
    const step = steps;
    for (let i = 0; i < step; i++) {
      this.rotate(IN1, IN2, IN3, IN4, direction);
      await this.delay(5);
    }
    this.disablePin(IN1, IN2, IN3, IN4);
  }

  async toTomatoSauce() {
    await this.primary(2000, -1, 5);
  }
}

module.exports = Vslot;
