// const express = require("express");
// const handlebars = requre('express-handlebars');
// const path = require("path");

import express from 'express';
import handlebars from 'express-handlebars';
import Handlebars from "handlebars";
import path from "path";
import { fileURLToPath } from 'url';
import Movie from './models/movieModel.js';
import fs from 'fs/promises';
// import fs from 'fs';
import mongoose from 'mongoose';

// import homeController from './controllers/home-controller.js';
import routes from "./routes.js";
import hbsConfig from './config/hbsConfig.js';
import expressConfig from './config/expressConfig.js';
import { mongooseConfig } from './config/mongooseConfig.js';

const app = express();
const port = 3000;

// needed as __dirname not supported in ESM (later found dirname not needed)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

expressConfig(app);
hbsConfig(app)
mongooseConfig();

// app.use(homeController);
app.use(routes);

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));

