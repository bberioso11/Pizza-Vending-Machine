const PizzaCrust = require("../model/pizzacrust");
const Vslot = require("../model/vslot");
const TomatoSauce = require("../model/tomatosauce");
const Cooking = require("../model/cooking");
const Cutting = require("../model/cutting");
const Pepperoni = require("../model/pepperoni");

const setup = async () => {
  const pizzaCrust = new PizzaCrust();
  const vslot = new Vslot();
  const tomatosauce = new TomatoSauce();
  const cutting = new Cutting();
  const cooking = new Cooking();
  const pepperoni = new Pepperoni();

  tomatosauce.reset();
  cooking.reset();
  pepperoni.reset();
  await cutting.reset();
  await vslot.secondary(500, 1);
  await vslot.primaryReset(20000, -1);
  await vslot.secondaryReset(2000, -1);
  await pizzaCrust.reset();
};

module.exports = setup;
