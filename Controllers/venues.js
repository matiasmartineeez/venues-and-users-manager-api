const venues_service = require("../Services/venues");
const { generic } = require("../helpers/errorhandler");

exports.getVenuesList = async (req, res) => {
  try {
    const venues = await venues_service.getVenuesList(req, res);

    return venues && venues.error
      ? res.status(200).jsonp({ error: venues.error })
      : res.status(200).jsonp(venues);
  } catch (err) {
    return err.name === "customError"
      ? generic(res, err.message)
      : generic(res, "");
  }
};
