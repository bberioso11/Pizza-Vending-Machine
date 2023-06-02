class Relay {
  executeRelay(pin, state) {
    pin.digitalWrite(state);
  }
}

module.exports = Relay;
