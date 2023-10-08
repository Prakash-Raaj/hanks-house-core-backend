import mongoose from "mongoose";
import Tutorial from "./tutorial.model.js";

mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.tutorial = Tutorial;

export default db;
