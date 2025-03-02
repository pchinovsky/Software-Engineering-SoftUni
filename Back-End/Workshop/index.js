import express from 'express';
import routes from "./routes.js";
import hbsConfig from './config/hbsConfig.js';
import expressConfig from './config/expressConfig.js';
import { mongooseConfig } from './config/mongooseConfig.js';

const app = express();
const port = 3000;

expressConfig(app);
hbsConfig(app)
mongooseConfig();

app.use(routes);

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));

