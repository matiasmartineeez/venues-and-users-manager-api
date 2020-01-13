const express = require("express");
const router = express.Router();
const { validation, venue, name } = require("../helpers/validators");

// CONTROLLER
const venue_controller = require("../controllers/venues");

// Get venues
router.get("/list", venue_controller.getVenuesList);

// Get venue by id
router.post("/add", [name], validation, venue_controller.addVenue);

// Get venue by id
router.get("/:venue", [venue], validation, venue_controller.getVenueById);

module.exports = router;
