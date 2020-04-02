// index.js

/** 
 * Required External Modules
*/
const express = require("express");

const path = require("path");


/**
 * App Variables
 */
const app = express();
const port = 3000;

 
/**
 * App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
 
/**
 * Routes Definitions
 */
app.get("/", (req, res)=>{
    res.status("index", { title: "Home" });
})
 
/**
 * Server Activation
 */

 app.listen(port, ()=> console.log(`simple site running on port ${port}!`))