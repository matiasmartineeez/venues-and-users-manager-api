const express = require("./node_modules/express");
const router = express.Router();
const { validation, venue } = require("../helpers/validators");

// CONTROLLER
const venue_controller = require("../controllers/venues");

// Get venues
router.get("/list", venue_controller.getVenuesList);

// Get venue by id
router.get("/:venue", [venue], validation, venue_controller.getVenueById);

module.exports = router;
