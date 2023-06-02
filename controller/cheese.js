const Gpio = require("pigpio").Gpio;
const Servo = require("./servo");

// PWM = 0 (off), 500 (most clockwise) to 2500 (most anti-clockwise)
class Cheese extends Servo {
  async initRun() {
    const pwm = 2500;
    const ms = 3000;
    const pin = new Gpio(2, { mode: Gpio.OUTPUT });
    await this.rotate360(pin, pwm, ms);
  }
}

module.exports = Cheese;
