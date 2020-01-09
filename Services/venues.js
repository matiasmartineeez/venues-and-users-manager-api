// Get venues manager to manage venues
const venues_manager = require("../Managers/venues");

exports.getVenuesList = async (req, res) => {
  // Get venues from manager
  const venues = await venues_manager.listVenues();

  return venues;
};
