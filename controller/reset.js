const PizzaCrust = require("../model/pizzacrust");
const Vslot = require("../model/vslot");
const TomatoSauce = require("../model/tomatosauce");
const Cheese = require("../model/cheese");
const Cooking = require("../model/cooking");
const Cutting = require("../model/cutting");
const LimitSwitch = require("../model/limitswitch");
const Pepperoni = require("../model/pepperoni");
const resetMachine = require("./resetmachine");
const setup = async () => {
  const pizzaCrust = new PizzaCrust();
  const vslot = new Vslot();
  const tomatosauce = new TomatoSauce();
  const cheese = new Cheese();
  const cooking = new Cooking();
  const cutting = new Cutting();
  const limitswitch = new LimitSwitch();

  await resetMachine();
};

setup();
