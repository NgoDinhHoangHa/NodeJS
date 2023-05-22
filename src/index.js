// import express from "express";
// import { engine } from "express-handlebars";
const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

const morgan = require("morgan");
// HTTP Logger
app.use(morgan("combined"));

// Template engines
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening at http:://localhost:${port}`);
});
