const clients_service = require("../services/clients");
const { generic } = require("../helpers/errorhandler");

exports.getClientsList = async (req, res) => {
  try {
    const clients = await clients_service.getClientsList(req, res);

    return clients && clients.error
      ? res.status(200).jsonp({ error: clients.error })
      : res.status(200).jsonp(clients);
  } catch (err) {
    console.log(err);
    return err.name === "customError"
      ? generic(res, err.message)
      : generic(res, "");
  }
};

exports.addNewClient = async (req, res) => {
  try {
    const client = await clients_service.addNewClient(req, res);

    return client && client.error
      ? res.status(200).jsonp({ error: client.error })
      : res.status(200).jsonp(client);
  } catch (err) {
    console.log(err);
    return err.name === "customError"
      ? generic(res, err.message)
      : generic(res, "");
  }
};


exports.addFavoriteVenue = async (req, res) => {
  try {
    const client = await clients_service.addFavoriteVenue(req, res);

    return client && client.error
      ? res.status(200).jsonp({ error: client.error })
      : res.status(200).jsonp(client);
  } catch (err) {
    console.log(err);
    return err.name === "customError"
      ? generic(res, err.message)
      : generic(res, "");
  }
};

exports.removeFavoriteVenue = async (req, res) => {
  try {
    const client = await clients_service.removeFavoriteVenue(req, res);

    return client && client.error
      ? res.status(200).jsonp({ error: client.error })
      : res.status(200).jsonp(client);
  } catch (err) {
    console.log(err);
    return err.name === "customError"
      ? generic(res, err.message)
      : generic(res, "");
  }
};

// exports.getClientById = async (req, res) => {
//   try {
//     const venues = await venues_service.getVenueById(req, res);

//     return venues && venues.error
//       ? res.status(200).jsonp({ error: venues.error })
//       : res.status(200).jsonp(venues);
//   } catch (err) {
//     return err.name === "customError"
//       ? generic(res, err.message, err.code)
//       : generic(res, "");
//   }
// };
