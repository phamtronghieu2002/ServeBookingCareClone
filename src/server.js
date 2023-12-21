import {InitApiRoute} from './route/web'
require("dotenv").config();
import express from "express";
import bodyParser from 'body-parser'
import cors from 'cors'
 
const app = express();
const port = process.env.PORT || 3000;


app.use(cors()) 
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

//route
InitApiRoute(app)


 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log("Server is started !!");