const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use(notfoundHandler);

function notfoundHandler(req, res) {
  res.send("Wrong route!");
}

module.exports = router;
