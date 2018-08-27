let express = require("express");
const router = express.Router();
let {list, show, create} = require("../controllers/orderController");

router.get("/state/orders", list);
router.get("state/orders/id", show);
router.post("/state/orders", create);

module.exports = router;