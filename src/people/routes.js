const { Router } = require("express");
const {
  getPeople,
  getPersonById,
  addPerson,
  removePersonById,
  updatePersonById,
} = require("./controller");

const router = Router();

router.get("/", getPeople);
router.post("/", addPerson);
router.get("/:personId", getPersonById);
router.delete("/:personId", removePersonById);
router.patch("/:personId", updatePersonById);

module.exports = router;
