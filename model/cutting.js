const Stepper = require("./stepper");

class Cutting extends Stepper {
  async execCutting() {
    const pins = [11, 8, 7, 5];
    const steps = 200;
    for (let i = 0; i < steps; i++) {
      this.rotate(pins, 1);
      await this.delay(5);
    }
    for (let i = 0; i < steps; i++) {
      this.rotate(pins, -1);
      await this.delay(5);
    }
    this.disablePin(pins);
  }
}

module.exports = Cutting;
