const Stepper = require("./stepper");
const LimitSwitch = require("./limitswitch");
const limitswitch = new LimitSwitch();

class PizzaCrust extends Stepper {
  async forward() {
    // red = OUT1
    // blue = OUT2

    // black = OUT3
    // green = OUT4

    const pins = [5, 16, 20, 21];
    const steps = 25500;
    for (let i = 0; i < steps; i++) {
      this.rotate(pins, 1);
      await this.delay(3);
    }
    this.disablePin(pins);
  }

  async reset() {
    const pins = [5, 16, 20, 21];
    const limitswitchPin = 2;
    const steps = 27000;
    for (let i = 0; i < steps; i++) {
      const limitResult = await limitswitch.execute(limitswitchPin);
      if (limitResult) {
        console.log("pizza crust limit switch activated");
        break;
      }
      this.rotate(pins, -1);
      await this.delay(3);
    }
    this.disablePin(pins);
  }
}

module.exports = PizzaCrust;
