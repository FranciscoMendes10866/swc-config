import 'dotenv/config';
import {serveDocs} from '@tinyhttp/swagger';

import router from './router.js';
import app from './app.js';

const {PORT, NODE_ENV} = process.env;

const port: number = Number(PORT) || 3333;
const host: string = NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';

const start = () => {
	try {
		router(app);

		serveDocs(app, {
			title: 'Bootstrap',
			version: '0.1.0',
			prefix: 'docs',
			description: 'this is an example for @tinyhttp/swagger',
			servers: ['http://localhost:3333'],
		});

		app.listen(port, () => {
			console.log(`Api up and running at: http://localhost:${port}`);
		}, host);
	} catch (err) {
		console.error(err);
		process.exit();
	}
};

start();
