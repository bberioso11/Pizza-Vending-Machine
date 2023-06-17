const express = require("express");
const orderCtrl = require("../controller/order");

const router = express.Router();

router.get("/validate/:uuid", orderCtrl.orderValidate);
router.get("/capture/:uuid", orderCtrl.orderCapture);
router.get("/start/:product", orderCtrl.orderStart);

module.exports = router;
