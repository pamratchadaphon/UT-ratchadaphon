const farmerController = require("../controllers/farmerController");
const router = require("express").Router();

router.post("/", farmerController.register);
router.post("/login", farmerController.login);
router.post('/authen', farmerController.authen)
router.get("/", farmerController.index);
router.put("/:farmer_id", farmerController.update);
router.delete("/:farmer_id", farmerController.delete);
router.get("/:farmer_id", farmerController.show);
router.get(
  "/riceCaltivation_incomeExpense/:farmer_id",
  farmerController.riceCaltivation_incomeExpense
);

module.exports = router;
