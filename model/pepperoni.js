const Servo = require("./servo");

// PWM = 0 (off), 500 (most clockwise) to 2500 (most anti-clockwise)
class Pepperoni extends Servo {
  async initRun(angle) {
    const ms = 2000;
    const pin = 13;
    await this.rotate180(pin, angle, ms);
  }
}

module.exports = Pepperoni;
