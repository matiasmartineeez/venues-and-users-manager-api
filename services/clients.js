const { customError } = require("../helpers/errorhandler");
// Get clients manager to manage venues
const clients_manager = require("../managers/clients");

exports.getClientsList = async (req, res) => {
  // Get clients from manager
  const clients = await clients_manager.listClients();

  return clients;
};

exports.addFavoriteVenue = async (req, res) => {
  const {
    body: { client: clientId, venue: venueId }
  } = req;

  const client = await clients_manager.getClient(clientId);

  if (!client) throw new customError("That client doesn't exists", 404);

  // Save new favorite venue
  const newClient = await clients_manager.addFavoriteVenueToClient(
    parseInt(clientId),
    parseInt(venueId)
  );

  return newClient;
};

exports.addNewClient = async (req, res) => {
  const {
    body: { name, email, age, firstName, lastName }
  } = req;

  const newClient = await clients_manager.addClient({
    name,
    email,
    age,
    firstName,
    lastName
  });

  return newClient;
};

exports.removeFavoriteVenue = async (req, res) => {
  const {
    body: { client: clientId, venue: venueId }
  } = req;

  const client = await clients_manager.getClient(clientId);

  if (!client) throw new customError("That client doesn't exists", 404);

  // Save new favorite venue
  const newClient = await clients_manager.removeFavoriteVenueFromClient(
    parseInt(clientId),
    parseInt(venueId)
  );

  return newClient;
};

exports.getClientsById = async (req, res) => {
  // Get client id from request
  const { client: id } = req.params;

  // Get client by id
  const client = await clients_manager.getClient(id);

  // Validating that this client actually exists
  if (!client) throw new customError("That client doesn't exists", 404);

  return venue;
};
