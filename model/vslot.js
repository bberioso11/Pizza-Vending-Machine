const Stepper = require("./stepper");
const LimitSwitch = require("./limitswitch");
const limitswitch = new LimitSwitch();

class Vslot extends Stepper {
  async primary(steps, direction) {
    const pins = [27, 22, 10, 9];
    const limitswitchPin = 0;
    const step = steps;
    for (let i = 0; i < step; i++) {
      const limitResult = await limitswitch.execute(limitswitchPin);
      if (limitResult) {
        break;
      }
      this.rotate(pins, direction);
      await this.delay(5);
    }
    this.disablePin(pins);
  }

  async primaryReset(steps, direction) {
    const pins = [27, 22, 10, 9];
    const limitswitchPin = 3;
    const step = steps;
    for (let i = 0; i < step; i++) {
      const limitResult = await limitswitch.execute(limitswitchPin);
      if (limitResult) {
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

  async secondaryReset(steps, direction) {
    const pins = [18, 23, 24, 25];
    const limitswitchPin = 4;
    const step = steps;
    for (let i = 0; i < step; i++) {
      const limitResult = await limitswitch.execute(limitswitchPin);
      if (limitResult) {
        break;
      }
      this.rotate(pins, direction);
      await this.delay(5);
    }
    this.disablePin(pins);
  }

  async toTomatoSauce() {
    await this.primary(2000, -1, 5);
  }

  async timeout(ms) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
}

module.exports = Vslot;
