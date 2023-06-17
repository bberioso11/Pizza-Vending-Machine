const PizzaCrust = require("../model/pizzacrust");
const Vslot = require("../model/vslot");
const TomatoSauce = require("../model/tomatosauce");
const Pepperoni = require("../model/pepperoni");
const Cooking = require("../model/cooking");
const Cutting = require("../model/cutting");
const LimitSwitch = require("../model/limitswitch");
const resetMachine = require("./resetmachine");
const setup = async () => {
  const pizzaCrust = new PizzaCrust();
  const vslot = new Vslot();
  const tomatosauce = new TomatoSauce();
  const pepperoni = new Pepperoni();
  const cooking = new Cooking();
  const cutting = new Cutting();
  const limitswitch = new LimitSwitch();

  await resetMachine();
  //await pizzaCrust.forwardlinearActuator();
  //pizzaCrust.reverselinearActuator();
  await vslot.primary(400, 1);
  tomatosauce.executeTomatoSauce(4500);
  await vslot.secondary(900, 1);

  await vslot.primary(200, 1);
  tomatosauce.executeTomatoSauce(4500);
  await vslot.secondary(900, -1);

  await vslot.primary(200, 1);
  tomatosauce.executeTomatoSauce(4500);
  await vslot.secondary(900, 1);

  await vslot.primary(200, 1);
  tomatosauce.executeTomatoSauce(4500);
  await vslot.secondary(900, -1);

  await vslot.primary(200, 1);
  tomatosauce.executeTomatoSauce(4500);
  await vslot.secondary(900, 1);

  //Pepperoni
  await vslot.primary(2100, 1);
  await vslot.secondary(300, -1);
  await pepperoni.initRun(0);
  await pepperoni.initRun(55);

  await vslot.primary(200, 1);
  await pepperoni.initRun(0);
  await pepperoni.initRun(55);

  await vslot.primary(200, 1);
  await pepperoni.initRun(0);
  await pepperoni.initRun(55);

  await vslot.primary(200, 1);
  await pepperoni.initRun(0);
  await pepperoni.initRun(55);

  //coocking
  await vslot.primary(1450, 1);
  await vslot.secondary(400, 1);
};

module.exports = setup;
