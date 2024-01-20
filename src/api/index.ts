import { Endpoint, Endpoints } from '../interfaces';
import { appLogger } from '../lib/logger';
import systemHealthRouter from './system-health';

import mainRouter from './v1/main';

const v1Endpoints: Endpoint = {
	route: '/api/v1',
	router: mainRouter,
	endpoints: [
		{
			route: '/system-health',
			router: systemHealthRouter,
		},
	],
};

const endpoints: Endpoints = [
	v1Endpoints,
	{
		route: '/system-health',
		router: systemHealthRouter,
	},
];

appLogger.info(endpoints);
export default endpoints;
