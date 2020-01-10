const { customError } = require('../Helpers/errorhandler')
// Get venues manager to manage venues
const venues_manager = require("../Managers/venues");


exports.getVenuesList = async (req, res) => {
  // Get venues from manager
  const venues = await venues_manager.listVenues();

  return venues;
};

exports.getVenueById = async (req, res) => {
  // Get venue id from request
  const { venue: id } = req.params;

  console.log(id)

  // Get venue by id
  const venue = await venues_manager.getVenue(id);

  console.log(venue)

  // Validating that this venue actually exists
  if ( !venue ) throw new customError("That venue doesn't exists", 404);

  return venue;
};
