const Servo = require("./servo");

// PWM = 0 (off), 500 (most clockwise) to 2500 (most anti-clockwise)
class Cheese extends Servo {
  async initRun(ms, timeout) {
    const pwm = 1700;
    const pin = 12;
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
    await this.rotate360(pin, pwm, ms);
  }
}

module.exports = Cheese;
