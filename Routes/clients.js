const express = require("express");
const router = express.Router();
const { validation, client, venue, name } = require("../helpers/validators");

// CONTROLLER
const client_controller = require("../controllers/clients");

// Get clients
router.get("/list", client_controller.getClientsList);

// Add a new client
router.post(
  "/add",
  [name],
  validation,
  client_controller.addNewClient
);

// Add favorite venue
router.post(
  "/add-favorite",
  [client, venue],
  validation,
  client_controller.addFavoriteVenue
);

// Remove favorite venue
router.delete(
  "/remove-favorite",
  [client, venue],
  validation,
  client_controller.removeFavoriteVenue
);

// Get client by id
// router.get("/:client", [client], validation, venue_controller.getClientById);

module.exports = router;
