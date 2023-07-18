const Cheese = require("../model/cheese");
const setup = async () => {
  const cheese = new Cheese();
  cheese.initRun(3500, 1000);
};

setup();
