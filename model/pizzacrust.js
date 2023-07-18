const Stepper = require("./stepper");
const LimitSwitch = require("./limitswitch");
const Relay = require("./relay");

const relay = new Relay();
const limitswitch = new LimitSwitch();

class PizzaCrust extends Stepper {
  async forward(steps) {
    // red = OUT1
    // blue = OUT2

    // black = OUT3
    // green = OUT4

    const pins = [11, 0, 5, 6];
    const LEDpin = 2;
    //const steps = 25500;
    relay.executeRelay(LEDpin, 0);
    for (let i = 0; i < steps; i++) {
      this.rotate(pins, 1);
      await this.delay(1.5);
    }
    this.disablePin(pins);
    relay.executeRelay(LEDpin, 1);
  }

  async reset() {
    const pins = [11, 0, 5, 6];
    const steps = 30000;
    for (let i = 0; i < steps; i++) {
      const limitResult = await limitswitch.execute();
      if (limitResult) {
        await this.forward(100);
        console.log("pizza crust limit switch activated");
        break;
      }
      this.rotate(pins, -1);
      await this.delay(1.5);
    }
    this.disablePin(pins);
  }
}

module.exports = PizzaCrust;
