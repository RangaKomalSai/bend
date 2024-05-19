require("dotenv").config();
const express = require("express");
// import express from 'express'   //modeule type

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/login", (req, res) => {
  res.send("Login page");
});

app.listen(process.env.PORT, () => {
  console.log("Listening on Port: 3000");
});
