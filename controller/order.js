const axios = require("axios");
const cheeseCtrl = require("./cheese");
const pepperoniCtrl = require("./pepperoni");

exports.orderValidate = async (req, res) => {
  const uuid = req.params.uuid;
  const { data } = await axios.get(
    `https://pizzavending.store/order/validate/${uuid}`
  );
  res.json(data);
};

exports.orderCapture = async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const { data } = await axios.get(
      `https://pizzavending.store/order/capture/${uuid}`
    );

    res.json(data);
  } catch (err) {
    console.log("problem here: ", err);
  }
};

exports.orderStart = async (req, res) => {
  const product = req.params.product;
  console.log(product);
  if (product === "Cheese") {
    //await cheeseCtrl();
    res.json({
      isSuccess: true,
      message:
        "Your order is now ready. Please claim your order at the claiming area.",
    });
  } else {
    await pepperoniCtrl();
    res.json({
      isSuccess: true,
      message:
        "Your order is now ready. Please claim your order at the claiming area.",
    });
  }
};

exports.orderFinish = async (req, res) => {
  const uuid = req.params.uuid;
  const status = "finished";
  try {
    const { data } = await axios.post(
      `https://pizzavending.store/order/finish`,
      {
        uuid: uuid,
        status: status,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.json(data);
  } catch (err) {
    res.json({
      isSucess: false,
      message: err,
    });
  }
};
