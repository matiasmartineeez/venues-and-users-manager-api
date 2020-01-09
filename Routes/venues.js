const express = require("express");
const router = express.Router();
const { validation } = require("../helpers/validators");

// CONTROLLER
const venue_controller = require("../Controllers/venues");

// Get venues
router.get("/list", venue_controller.getVenuesList);

module.exports = router;
