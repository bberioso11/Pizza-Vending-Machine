const Stepper = require("./stepper");
const LimitSwitch = require("./limitswitch");
const limitswitch = new LimitSwitch();

class Claim extends Stepper {
  async primary(steps, direction) {
    const pins = [27, 22, 10, 9];
    const step = steps;
    for (let i = 0; i < step; i++) {
      const limitResult = await limitswitch.execute();
      if (limitResult) {
        for (let i = 0; i < 50; i++) {
          this.rotate(pins, -1);
          await this.delay(5);
        }
        break;
      }
      this.rotate(pins, direction);
      await this.delay(5);
    }
    this.disablePin(pins);
  }

  async secondary(steps, direction) {
    const pins = [18, 23, 24, 25];
    const step = steps;
    for (let i = 0; i < step; i++) {
      this.rotate(pins, direction);
      await this.delay(5);
    }
    this.disablePin(pins);
  }

  async timeout(ms) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
}

module.exports = Claim;
