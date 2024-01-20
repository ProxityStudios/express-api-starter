import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { Logger } from 'tslog';
import endpoints from './api';
import { Endpoints } from './interfaces';
import { isDeveloperMode } from './lib/env';
import { errorHandler, notFoundHandler } from './middlewares';

const app = express();

export const appLogger = new Logger({ type: 'pretty', name: 'Application' });

app.use(morgan(isDeveloperMode() ? 'dev' : 'tiny'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	// TODO:
	res.redirect('https://google.com');
});

// FIXME: REGISTER NESTED ROUTES AS WELL | IMPORTANT |
const useEndpoints = (es: Endpoints) =>
	es.forEach((e) => {
		appLogger.info(e.route);

		if (e.endpoints) {
			useEndpoints(e.endpoints);
		}
		app.use(e.route, e.router);
	});

useEndpoints(endpoints);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
