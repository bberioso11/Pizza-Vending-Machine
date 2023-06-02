const Gpio = require("pigpio").Gpio;

// Define the GPIO pins connected to the L298N motor driver
const IN1 = new Gpio(6, { mode: Gpio.OUTPUT });
const IN2 = new Gpio(13, { mode: Gpio.OUTPUT });
const IN3 = new Gpio(19, { mode: Gpio.OUTPUT });
const IN4 = new Gpio(26, { mode: Gpio.OUTPUT });

// Define the sequence for full-step operation
const steps = [
  [1, 0, 0, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 0],
  [1, 0, 1, 0],
];

let stepCounter = 0;

// Function to perform a single step in a specific direction
const step = (direction) => {
  const step = steps[stepCounter % 4];

  IN1.digitalWrite(step[0]);
  IN2.digitalWrite(step[1]);
  IN3.digitalWrite(step[2]);
  IN4.digitalWrite(step[3]);

  if (direction === "cw") {
    stepCounter++;
  } else {
    stepCounter--;
  }
};

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const rotate = async (steps, direction) => {
  for (let i = 0; i < steps; i++) {
    step(direction);
    await delay(5);
  }
  IN1.digitalWrite(0);
  IN2.digitalWrite(0);
  IN3.digitalWrite(0);
  IN4.digitalWrite(0);
};

module.exports = rotate;
