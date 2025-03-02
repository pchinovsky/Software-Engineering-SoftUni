import express from 'express';
import routes from './routes.js';
import dotenv from 'dotenv';

import expressConfig from './config/expressConfig.js';
import hbsConfig from './config/hbsConfig.js';
import { mongooseConfig } from './config/mongooseConfig.js';

const app = express();
const port = 3000;

expressConfig(app);
hbsConfig(app);
mongooseConfig();
dotenv.config();

app.use(routes);

app.listen(3000, () => console.log(`Server is running on https://localhost:${port}`));