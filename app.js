const express = require("express"),
  app = express(),
  http = require("http"),
  server = http.createServer(app),
  bodyParser = require("body-parser"),
  helmet = require("helmet"),
  cors = require("cors");

// CONFIGS
require("dotenv").config();

// Get variables from .env
const { PORT, ENVIROMENT } = process.env;

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// CORS ENABLE
app.use(cors());

// SMALL SECURITY
app.use(helmet());

/*** MIDDLEWARES ****/
const appMiddleware = require("./middlewares");

// Log request on develop
ENVIROMENT === "dev" && app.use("/", appMiddleware.log);

// Basic auth to all api calls
app.use("/", appMiddleware.auth);

/*** ROUTES ****/
const venues = require("./routes/venues"); // Imports routes for venues

app.use("/venues", venues);

/*** SERVER ****/

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Node server running on port ${PORT}`);
});
