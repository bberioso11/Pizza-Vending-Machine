const PizzaCrust = require("./controller/pizzacrust");
const Vslot = require("./controller/vslot");
const TomatoSauce = require("./controller/tomatosauce");
const Cheese = require("./controller/cheese");

const main = async () => {
  const pizzaCrust = new PizzaCrust();
  const vslot = new Vslot();
  const tomatosauce = new TomatoSauce();
  const cheese = new Cheese();

  //await pizzaCrust.forwardlinearActuator();
  //await vslot.toTomatoSauce();
  //await tomatosauce.executeTomatoSauce();
  await cheese.initRun();
};
main();
