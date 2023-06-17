const express = require("express");
const orderRoutes = require("./routes/order");

const app = express();

app.listen(3001);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/order", orderRoutes);
