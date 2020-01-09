import _ from "lodash";

let Clients = [
  {
    id: 1,
    name: "jane",
    email: "jane@upshow.tv",
    age: 34,
    firstName: "Jane",
    lastName: "Doe",
    favoriteVenues: [2, 5]
  },
  {
    id: 2,
    name: "john",
    email: "john@upshow.tv",
    age: 50,
    firstName: "John",
    lastName: "Doe",
    favoriteVenues: []
  },
  {
    id: 3,
    name: "herschel",
    email: "herschel@upshow.tv",
    age: 18,
    firstName: undefined,
    lastName: "Herschel",
    favoriteVenues: [1, 2]
  },
  {
    id: 4,
    name: "bartholomew",
    email: "barth@upshow.tv",
    age: undefined,
    firstName: "Bartholomew",
    lastName: "Peralta",
    favoriteVenues: [4]
  },
  {
    id: 5,
    name: "kid",
    email: "kid@upshow.tv",
    age: 5,
    firstName: "",
    lastName: "",
    favoriteVenues: []
  }
];

// Listing clients
const listClients = () => Clients;

// Get client by id
const getClient = client_id => _.find(Clients, ["id", client_id]);

// Add a client to the list
const addClient = client => {
  if (typeof client.email != "string" || client.email === "") {
    throw new Error("Client email is missing");
  }
  if (typeof client.name != "string" || client.name === "") {
    throw new Error("Client name is missing");
  }
  client.id = _.max(Clients.map(c => c.id)) + 1;
  client.favoriteVenues = [];
  Clients.push(client);
  return client;
};

// Get favorite from client data
const getClientFavoriteVenues = client_id => {
  const client = MockBackend.getClient(client_id);
  return _.filter(Venues, v => client.favoriteVenues.includes(v.id));
};

// Add a new favorite venue to client data
const addFavoriteVenueToClient = (client_id, venue_id) => {
  const client_index = _.findIndex(Clients, ["id", client_id]);
  if (client_index === -1) throw new Error("Client not found");
  Clients[client_index].favoriteVenues.push(venue_id);
  return Clients[client_index];
};

// Remove a venue from  client's favorite venues list
const removeFavoriteVenueFromClient = (client_id, venue_id) => {
  const client_index = _.findIndex(Clients, ["id", client_id]);
  if (client_index === -1) throw new Error("Client not found");
  Clients[client_index].favoriteVenues = _.filter(
    Clients[client_index].favoriteVenues,
    i => i !== venue_id
  );
  return Clients[client_index];
};

// Removing client from client's list
const removeClient = client_id => {
  Clients = Clients.filter(c => c.id !== client_id);
};

module.exports = {
  listClients,
  getClient,
  addClient,
  getClient,
  getClientFavoriteVenues,
  addFavoriteVenueToClient,
  removeFavoriteVenueFromClient,
  removeClient
};
