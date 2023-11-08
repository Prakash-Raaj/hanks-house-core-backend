import mongoose from "mongoose";
import Role from "./role.model.js";
import Tutorial from "./tutorial.model.js";
import User from "./user.model.js";
import Product from "./product.model.js";

mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
// db.tutorial = Tutorial;
db.user = User;
db.role = Role;
db.product = Product;

db.ROLES = ["user", "admin", "moderator"];

export default db;
