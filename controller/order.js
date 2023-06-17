const axios = require("axios");
const cheeseCtrl = require("./cheese");
//const pepperoniCtrl = require("./pepperoni");

exports.orderValidate = async (req, res) => {
  const uuid = req.params.uuid;
  const { data } = await axios.get(
    `http://localhost:3000/order/validate/${uuid}`
  );
  res.json(data);
};

exports.orderCapture = async (req, res) => {
  const uuid = req.params.uuid;
  const { data } = await axios.get(
    `http://localhost:3000/order/capture/${uuid}`
  );

  res.json(data);
};

exports.orderStart = async (req, res) => {
  const product = req.params.product;
  console.log(product);
  if (product === "Cheese") {
    await cheeseCtrl();
    res.json({
      isSuccess: true,
      message:
        "Your order is now ready. Please claim your order at the claiming area.",
    });
  } else {
    res.json({
      isSuccess: true,
      message:
        "Your order is now ready. Please claim your order at the claiming area.",
    });
  }
};
