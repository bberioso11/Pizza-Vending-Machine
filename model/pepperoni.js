const Servo = require("./servo");
const Relay = require("./relay");

const relay = new Relay();

// PWM = 0 (off), 500 (most clockwise) to 2500 (most anti-clockwise)
class Pepperoni extends Servo {
  async initRun(angle) {
    const ms = 2000;
    const pin = 13;
    const LEDpin = 20;
    relay.executeRelay(LEDpin, 0);
    await this.rotate180(pin, angle, ms);
    relay.executeRelay(LEDpin, 1);
  }

  async reset() {
    const ms = 2000;
    const pin = 13;
    const LEDpin = 20;
    relay.executeRelay(LEDpin, 1);
    await this.rotate180(pin, 0, ms);
  }
}

module.exports = Pepperoni;
