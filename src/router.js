const { Router } = require("express");

const controller = require("./controller");
const auth = require("./controller/auth");

const router = Router();

router.post("/login", auth.login);
router.post("/register", auth.register);

router.use(auth.verify);

router.get("/", controller.index);
router.get("/:id", controller.get);
router.put("/:id", controller.edit);
router.delete("/:id", controller.del);

module.exports = router;