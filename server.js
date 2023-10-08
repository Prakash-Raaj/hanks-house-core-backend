import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./app/models/index.js";
import { tutorialRouter } from "./app/routes/turorial.routes.js";

const app = express();

dotenv.config();
var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const MONGO_URL = process.env.MONGO_URL;

db.mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  console.log("I am receiving");
  console.log(db);

  res.json({ message: "Welcome to application." });
});

app.use("/tutorial", tutorialRouter);

// require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}.`);
});
