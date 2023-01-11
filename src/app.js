import express from 'express';
import bodyParser from 'body-parser';

import use_cors from '../config/cors.js';
import use_routes from './routes/index.js';
import create_server from '../config/server.js';
import use_compression from '../config/compression.js';

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const server = create_server(app);

use_compression(app);

use_cors(app);
use_routes(app);

const port = 3001;
const host_name = 'localhost';

server.listen(port, host_name, function () {
	console.log(`⭐ App listening at http://${host_name}:${port}`);
});
