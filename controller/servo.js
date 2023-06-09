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

  async rotate180(pin, angle, ms) {
    const pulseWidth = (angle / 180) * 2000 + 500; // Map angle to pulse width
    pin.servoWrite(pulseWidth);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
}

module.exports = Servo;
