class Servo {
  async rotate360(pin, pwm, ms) {
    pin.servoWrite(pwm);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        pin.servoWrite(0);
        resolve();
      }, ms);
    });
  }
}

module.exports = Servo;
