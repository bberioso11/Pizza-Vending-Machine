// 1 = clockwise
// -1 = counterclockwise

class Actuator {
  constructor() {
    this.stepCounter = 0;
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  rotate(IN1, IN2, IN3, IN4, direction) {
    const stepSequence = [
      [1, 0, 0, 1],
      [0, 1, 0, 1],
      [0, 1, 1, 0],
      [1, 0, 1, 0],
    ];
    this.stepCounter =
      (this.stepCounter + direction + stepSequence.length) %
      stepSequence.length;
    const step = stepSequence[this.stepCounter];

    IN1.digitalWrite(step[0]);
    IN2.digitalWrite(step[1]);
    IN3.digitalWrite(step[2]);
    IN4.digitalWrite(step[3]);
  }

  disablePin(IN1, IN2, IN3, IN4) {
    IN1.digitalWrite(0);
    IN2.digitalWrite(0);
    IN3.digitalWrite(0);
    IN4.digitalWrite(0);
  }
}

module.exports = Actuator;
