import { Endpoint, Endpoints } from '../interfaces';
import systemHealthRouter from './system-health';

import mainRouter from './v1/main';

const v1Endpoints: Endpoint = {
	route: '/api/v1',
	router: mainRouter,
	endpoints: [
		{
			route: '/hi',
			router: systemHealthRouter,
			endpoints: [
				{
					route: '/hello',
					router: systemHealthRouter,
				},
			],
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

export default endpoints;
