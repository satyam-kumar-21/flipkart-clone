import express  from "express";
import DataBaseConnection from "./database/db.js";
import DefaultData from "./default.js";
import router from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',router);

const PORT = 5005;

DataBaseConnection();

app.listen(PORT,() => console.log(`Server running on PORT http://localhost:${PORT}`));

DefaultData();
