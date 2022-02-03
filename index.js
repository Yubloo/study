const express = require("express");
const path = require("path");
const app = express();

app.use((req, res, next) => {
  console.log("[HOME]:", req.method + " " + req.url);
  next();
}, express.static(path.join(__dirname, "public")));

app.use(
  "/register",
  (req, res, next) => {
    console.log("[REGISTER]:", req.method + " " + req.url);
    next();
  },
  express.static(path.join(__dirname, "views/register"))
);

app.use(
  "/login",
  (req, res, next) => {
    console.log("[LOGIN]:", req.method + " " + req.url);
    next();
  },
  express.static(path.join(__dirname, "views/login"))
);

app.listen("8080", () => {
  console.log("📕 Study App. running on port 8080.");
  console.log("----------------------------");
});
