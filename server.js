import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
dotenv.config();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// const db = require("./app/models");
// console.log(db.url);
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch((err) => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });

const MONGO_URL = process.env.MONGO_URL;

export const mongo_client = await creatConnection();

// simple route
app.get("/", (req, res) => {
  console.log("I am receiving");
  res.json({ message: "Welcome to application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

async function creatConnection() {
  const client = new MongoClient(MONGO_URL);
  console.log(MONGO_URL, "URL TEST");
  await client.connect();
  console.log("Mongo connected successfully");
  return client;
}
