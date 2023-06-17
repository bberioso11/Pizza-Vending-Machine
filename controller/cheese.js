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

  await pizzaCrust.forwardlinearActuator();
  pizzaCrust.reverselinearActuator();
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

  //cheese
  await vslot.primary(600, 1);
  cheese.initRun(16000, 1000);
  await vslot.secondary(900, -1);

  await vslot.primary(300, 1);
  await vslot.secondary(900, 1);

  await vslot.primary(300, 1);
  await vslot.secondary(900, -1);

  // cooking
  await vslot.primary(2800, 1);
  await vslot.secondary(900, 1);
};

module.exports = setup;
