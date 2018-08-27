let express = require("express");
const router = express.Router();
let {list, show, create} = require("../controllers/taskController");

router.get("/state/tasks", list);
router.get("state/tasks/id", show);
router.post("/state/tasks", create);

module.exports = router;