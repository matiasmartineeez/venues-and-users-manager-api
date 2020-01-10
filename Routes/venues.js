const express = require("express");
const router = express.Router();
const { validation, venue } = require("../Helpers/validators");

// CONTROLLER
const venue_controller = require("../Controllers/venues");

// Get venues
router.get("/list", venue_controller.getVenuesList);

// Get venue by id
router.get("/:venue", [venue], validation, venue_controller.getVenueById);

module.exports = router;
