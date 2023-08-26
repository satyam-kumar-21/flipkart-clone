import express  from "express";
import DataBaseConnection from "./database/db.js";
import DefaultData from "./default.js";

const app = express();

const PORT = 5555;

DataBaseConnection();

app.listen(PORT,() => console.log(`Server running on PORT http://localhost:${PORT}`));

DefaultData();
