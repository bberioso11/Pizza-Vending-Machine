const PizzaCrust = require("../model/pizzacrust");
const Vslot = require("../model/vslot");
const TomatoSauce = require("../model/tomatosauce");
const Cheese = require("../model/cheese");
const Cooking = require("../model/cooking");
const Cutting = require("../model/cutting");
const LimitSwitch = require("../model/limitswitch");
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

  await pizzaCrust.forward();
  pizzaCrust.reset();
  await vslot.primary(400, 1);
  tomatosauce.executeTomatoSauce(4500);
  await vslot.secondary(900, 1);

  // tomato sauce
  await vslot.primary(100, 1);
  tomatosauce.executeTomatoSauce(4500);
  await vslot.secondary(900, -1);

  await vslot.primary(100, 1);
  tomatosauce.executeTomatoSauce(4500);
  await vslot.secondary(900, 1);

  await vslot.primary(100, 1);
  tomatosauce.executeTomatoSauce(4500);
  await vslot.secondary(900, -1);

  await vslot.primary(100, 1);
  tomatosauce.executeTomatoSauce(4500);
  await vslot.secondary(900, 1);

  await vslot.primary(100, 1);
  tomatosauce.executeTomatoSauce(4500);
  await vslot.secondary(900, -1);

  await vslot.primary(100, 1);
  tomatosauce.executeTomatoSauce(4500);
  await vslot.secondary(900, 1);

  await vslot.primary(100, 1);
  tomatosauce.executeTomatoSauce(4500);
  await vslot.secondary(900, -1);

  await vslot.primary(100, 1);
  tomatosauce.executeTomatoSauce(4500);
  await vslot.secondary(900, 1);

  //cheese
  await vslot.primary(600, 1);
  cheese.initRun(3500, 1000);
  await vslot.secondary(900, -1);

  await vslot.primary(150, 1);
  cheese.initRun(3900, 0);
  await vslot.secondary(900, 1);

  await vslot.primary(150, 1);
  cheese.initRun(3900, 0);
  await vslot.secondary(900, -1);

  await vslot.primary(150, 1);
  cheese.initRun(3800, 500);
  await vslot.secondary(900, 1);

  await vslot.primary(150, 1);
  cheese.initRun(3600, 500);
  await vslot.secondary(900, -1);

  // cooking
  await vslot.primary(2800, 1);
  await vslot.secondary(1000, 1);
  await cooking.execCooking();

  // cutting
  await vslot.primary(1800, 1);
  await vslot.secondary(300, -1);
  await cutting.forward();
  await cutting.reset();

  // claim
  await vslot.primary(1000, 1);
  await vslot.secondary(700, -1);
};

module.exports = setup;
