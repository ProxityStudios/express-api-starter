import express from 'express';
import { MessageResponse } from '../interfaces/response-interfaces';

const router = express.Router();

router.get<object, MessageResponse>('/', (req, res) => {
	res.json({
		message: 'healthy',
		status: 200,
	});
});

export default router;
