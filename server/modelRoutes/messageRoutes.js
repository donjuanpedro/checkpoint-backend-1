let express = require("express");
const router = express.Router();
let {list, show, create} = require("../controllers/messageController");

router.get("/state/messages", list);
router.get("state/messages/id", show);
router.post("/state/messages", create);

module.exports = router;