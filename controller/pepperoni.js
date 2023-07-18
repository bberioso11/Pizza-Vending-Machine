const PizzaCrust = require("../model/pizzacrust");
const Vslot = require("../model/vslot");
const TomatoSauce = require("../model/tomatosauce");
const Cheese = require("../model/cheese");
const Pepperoni = require("../model/pepperoni");
const Cooking = require("../model/cooking");
const Cutting = require("../model/cutting");
const Claim = require("../model/claim");

const resetMachine = require("./resetmachine");
const setup = async () => {
  const pizzaCrust = new PizzaCrust();
  const vslot = new Vslot();
  const tomatosauce = new TomatoSauce();
  const cheese = new Cheese();
  const pepperoni = new Pepperoni();
  const cooking = new Cooking();
  const cutting = new Cutting();
  const claim = new Claim();

  await resetMachine();

  // pizza crust
  //await pizzaCrust.forward(27500);
  await pizzaCrust.forward(28500);
  await vslot.timeout(3000);
  pizzaCrust.reset();

  // run cooking
  cooking.execCooking(360000);

  //tomato Sauce
  await vslot.primary(350, 1);
  await vslot.secondary(150, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(600, 1);
  tomatosauce.executeTomatoSauce(1);
  await vslot.secondary(150, 1);

  await vslot.primary(50, 1);
  await vslot.secondary(150, -1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(600, -1);
  tomatosauce.executeTomatoSauce(1);
  await vslot.secondary(150, -1);

  await vslot.primary(50, 1);
  await vslot.secondary(150, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(600, 1);
  tomatosauce.executeTomatoSauce(1);
  await vslot.secondary(150, 1);

  await vslot.primary(50, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(900, -1);
  tomatosauce.executeTomatoSauce(1);

  await vslot.primary(50, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(900, 1);
  tomatosauce.executeTomatoSauce(1);

  await vslot.primary(50, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(900, -1);
  tomatosauce.executeTomatoSauce(1);

  await vslot.primary(50, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(900, 1);
  tomatosauce.executeTomatoSauce(1);

  await vslot.primary(50, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(900, -1);
  tomatosauce.executeTomatoSauce(1);

  await vslot.primary(50, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(900, 1);
  tomatosauce.executeTomatoSauce(1);

  await vslot.primary(50, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(900, -1);
  tomatosauce.executeTomatoSauce(1);

  await vslot.primary(50, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(900, 1);
  tomatosauce.executeTomatoSauce(1);

  await vslot.primary(50, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(900, -1);
  tomatosauce.executeTomatoSauce(1);

  await vslot.primary(50, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(900, 1);
  tomatosauce.executeTomatoSauce(1);

  await vslot.primary(50, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(900, -1);
  tomatosauce.executeTomatoSauce(1);

  await vslot.primary(50, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(900, 1);
  tomatosauce.executeTomatoSauce(1);

  await vslot.primary(50, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(900, -1);
  tomatosauce.executeTomatoSauce(1);

  await vslot.primary(50, 1);
  await vslot.secondary(150, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(600, 1);
  tomatosauce.executeTomatoSauce(1);
  await vslot.secondary(150, 1);

  await vslot.primary(50, 1);
  await vslot.secondary(150, -1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(600, -1);
  tomatosauce.executeTomatoSauce(1);
  await vslot.secondary(150, -1);

  await vslot.primary(50, 1);
  await vslot.secondary(150, 1);
  tomatosauce.executeTomatoSauce(0);
  await vslot.secondary(600, 1);
  tomatosauce.executeTomatoSauce(1);
  await vslot.secondary(150, 1);

  //Cheese
  await vslot.primary(600, 1);
  cheese.initRun(3500, 1000);
  await vslot.secondary(900, -1);
  await vslot.timeout(1000);

  await vslot.primary(300, 1);
  cheese.initRun(3900, 0);
  await vslot.secondary(900, 1);
  await vslot.timeout(1000);

  await vslot.primary(280, 1);
  cheese.initRun(3600, 500);
  await vslot.secondary(900, -1);
  await vslot.timeout(1000);

  // flatting
  await vslot.primary(200, -1);
  await vslot.secondary(300, 1);
  await vslot.primary(1420, 1);

  await vslot.primary(1420, -1);
  await vslot.secondary(300, -1);

  //Pepperoni
  await vslot.primary(1050, 1);
  await vslot.secondary(700, 1);
  await pepperoni.initRun(0);
  await pepperoni.initRun(55);
  await pepperoni.initRun(25);
  await pepperoni.initRun(55);

  await vslot.primary(150, 1);
  await vslot.secondary(500, -1);
  await pepperoni.initRun(0);
  await pepperoni.initRun(55);
  await pepperoni.initRun(25);
  await pepperoni.initRun(55);

  await vslot.primary(200, 1);
  await vslot.secondary(500, 1);
  await pepperoni.initRun(0);
  await pepperoni.initRun(55);
  await pepperoni.initRun(25);
  await pepperoni.initRun(55);

  await vslot.primary(150, 1);
  await vslot.secondary(500, -1);
  await pepperoni.initRun(0);
  await pepperoni.initRun(55);
  await pepperoni.initRun(25);
  await pepperoni.initRun(55);
  await pepperoni.initRun(0);

  //coocking
  await vslot.primary(1450, 1);
  await vslot.secondary(750, 1);
  await cooking.led(0);
  await vslot.timeout(240000);
  //await vslot.timeout(5000);
  await cooking.led(1);

  // cutting
  await vslot.secondary(200, -1);
  await vslot.primary(1800, 1);
  await cutting.forward();
  await cutting.reset();
  //await vslot.timeout(5000);

  // claim
  await claim.primary(1000, 1);
  await claim.secondary(720, -1);
};

module.exports = setup;
