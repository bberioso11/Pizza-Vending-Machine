const TomatoSauce = require("../model/tomatosauce");

const setup = async () => {
  const tomatosauce = new TomatoSauce();
  await tomatosauce.executeTomatoSauce(10000);
};
setup();
