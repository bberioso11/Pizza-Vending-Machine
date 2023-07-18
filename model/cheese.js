const Servo = require("./servo");
const Relay = require("./relay");

const relay = new Relay();

// PWM = 0 (off), 500 (most clockwise) to 2500 (most anti-clockwise)
class Cheese extends Servo {
  async initRun(ms, timeout) {
    const pwm = 1800;
    const pin = 12;
    const LEDpin = 4;
    relay.executeRelay(LEDpin, 0);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
    await this.rotate360(pin, pwm, ms);
    relay.executeRelay(LEDpin, 1);
  }
}

module.exports = Cheese;
