const Gpio = require("pigpio").Gpio;

class Servo {
  async rotate360(pin, pwm, ms) {
    const output = new Gpio(pin, { mode: Gpio.OUTPUT });
    output.servoWrite(pwm);
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        output.servoWrite(0);
        resolve();
      }, ms);
    });
  }

  async rotate180(pin, angle, ms) {
    const output = new Gpio(pin, { mode: Gpio.OUTPUT });
    const pulseWidth = Math.trunc((angle / 180) * 2000 + 500); // Map angle to pulse width
    output.servoWrite(pulseWidth);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
}

module.exports = Servo;
