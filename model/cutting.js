const Stepper = require("./stepper");
const LimitSwitch = require("./limitswitch");
const limitswitch = new LimitSwitch();

class Cutting extends Stepper {
  async forward() {
    const pins = [11, 8, 7, 26];
    const steps = 3300;
    for (let i = 0; i < steps; i++) {
      this.rotate(pins, 1);
      await this.delay(5);
    }
    this.disablePin(pins);
  }

  async reset() {
    const pins = [11, 8, 7, 26];
    const limitswitchPin = 17;
    const steps = 4000;
    for (let i = 0; i < steps; i++) {
      const limitResult = await limitswitch.execute(limitswitchPin);
      if (limitResult) {
        break;
      }
      this.rotate(pins, -1);
      await this.delay(3);
    }
    this.disablePin(pins);
  }
}

module.exports = Cutting;
