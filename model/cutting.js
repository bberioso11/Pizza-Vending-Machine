const Stepper = require("./stepper");
const LimitSwitch = require("./limitswitch");
const Relay = require("./relay");

const relay = new Relay();
const limitswitch = new LimitSwitch();

class Cutting extends Stepper {
  async forward() {
    const pins = [8, 7, 1, 16];
    const LEDpin = 3;
    const steps = 5000;
    relay.executeRelay(LEDpin, 0);
    for (let i = 0; i < steps; i++) {
      this.rotate(pins, 1);
      await this.delay(5);
    }
    this.disablePin(pins);
    relay.executeRelay(LEDpin, 1);
  }

  async reset() {
    const pins = [8, 7, 1, 16];
    const LEDpin = 3;
    const steps = 5500;
    for (let i = 0; i < steps; i++) {
      const limitResult = await limitswitch.execute();
      if (limitResult) {
        for (let i = 0; i < 50; i++) {
          this.rotate(pins, 1);
          await this.delay(3);
        }
        break;
      }
      this.rotate(pins, -1);
      await this.delay(3);
    }
    this.disablePin(pins);
    relay.executeRelay(LEDpin, 1);
  }
}

module.exports = Cutting;
