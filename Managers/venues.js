const _ = require("lodash")._;

let Venues = [
  { id: 1, name: "Rodelu" },
  { id: 2, name: "Bilas" },
  { id: 3, name: "WTF" },
  { id: 4, name: "El Buen Gusto de lo Casero" },
  { id: 5, name: "Pastas Roma" }
];
// Get venues list
const listVenues = () => Venues;

// Get venue by id
const getVenue = venue_id => {
  const venue = Venues.find(v => v.id == venue_id);

  return venue;
};

// Add a venue to venues list
const addVenue = venue => {
  if (typeof venue.name != "string" || venue.name === "") {
    throw new Error("Venue name is missing");
  }
  venue.id = _.max(Venues.map(c => c.id)) + 1;
  Venues.push(venue);
  return venue;
};

// Remove a venue from venues list
const removeVenue = venue_id => {
  Clients = Clients.map(c => {
    c.favoriteVenues = c.favoriteVenues.filter(fv => fv !== venue_id);
    return c;
  });
  Venues = Venues.filter(v => v.id !== venue_id);
};

module.exports = { listVenues, getVenue, addVenue, removeVenue };
