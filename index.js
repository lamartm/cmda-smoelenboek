import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import * as prismicH from "@prismicio/helpers";
import { client } from "./config/prismicConfig.js";

const app = express();
const port = process.env.PORT || 3000;

// WEERGAVE BESCHIKBAARHEID

const options = {
  weekday: "long",
};

let currentDate = new Date().toLocaleDateString("nl-NL", options);

app.set("view engine", "ejs");
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "views")));

// MIDDLEWARE FUNCTION VOOR ELKE ROUTE VOOR PRISMIC SJABLONEN

app.use((req, res, next) => {
  res.locals.ctx = {
    prismicH,
  };
  next();
});

// ROUTES

app.use(express.static("public"));

app.get("/", async (req, res) => {
  const document = await client.getAllByType("teacher-card");
  res.render("page", { document, currentDate });
});

app.get("/detail/:id", async (req, res) => {
  const document = await client.getByUID("teacher-card", req.params.id);
  res.render("detail", { document });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
