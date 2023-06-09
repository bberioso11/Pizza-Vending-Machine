const PizzaCrust = require("./controller/pizzacrust");
const Vslot = require("./controller/vslot");
const TomatoSauce = require("./controller/tomatosauce");
const Cheese = require("./controller/cheese");
const Pepperoni = require("./controller/pepperoni");

const main = async () => {
  const pizzaCrust = new PizzaCrust();
  const vslot = new Vslot();
  const tomatosauce = new TomatoSauce();
  const cheese = new Cheese();
  const pepperoni = new Pepperoni();

  //await pizzaCrust.forwardlinearActuator();
  //await vslot.toTomatoSauce();
  //await tomatosauce.executeTomatoSauce();
  //await cheese.initRun();
  await pepperoni.initRun(0);
  await pepperoni.initRun(180);
};
main();
