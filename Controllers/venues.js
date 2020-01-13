const venues_service = require("../services/venues");
const { generic } = require("../helpers/errorhandler");

exports.getVenuesList = async (req, res) => {
  try {
    const venues = await venues_service.getVenuesList(req, res);

    return venues && venues.error
      ? res.status(200).jsonp({ error: venues.error })
      : res.status(200).jsonp(venues);
  } catch (err) {
    console.log(err);
    return err.name === "customError"
      ? generic(res, err.message)
      : generic(res, "");
  }
};

exports.getVenueById = async (req, res) => {
  try {
    const venues = await venues_service.getVenueById(req, res);

    return venues && venues.error
      ? res.status(200).jsonp({ error: venues.error })
      : res.status(200).jsonp(venues);
  } catch (err) {
    return err.name === "customError"
      ? generic(res, err.message, err.code)
      : generic(res, "");
  }
};

exports.addVenue = async (req, res) => {
  try {
    const venue = await venues_service.addVenue(req, res);

    return venue && venue.error
      ? res.status(200).jsonp({ error: venue.error })
      : res.status(200).jsonp(venue);
  } catch (err) {
    return err.name === "customError"
      ? generic(res, err.message, err.code)
      : generic(res, "");
  }
};
