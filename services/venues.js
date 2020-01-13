const { customError } = require("../helpers/errorhandler");
// Get venues manager to manage venues
const venues_manager = require("../managers/venues");

exports.getVenuesList = async (req, res) => {
  // Get venues from manager
  const venues = await venues_manager.listVenues();

  return venues;
};

exports.addVenue = async (req, res) => {
  // Get venue name from request
  const { name: venueName } = req.body;
  // Create venue
  const venue = await venues_manager.addVenue({ name: venueName });

  return venue;
};

exports.getVenueById = async (req, res) => {
  // Get venue id from request
  const { venue: id } = req.params;

  // Get venue by id
  const venue = await venues_manager.getVenue(id);

  // Validating that this venue actually exists
  if (!venue) throw new customError("That venue doesn't exists", 404);

  return venue;
};
