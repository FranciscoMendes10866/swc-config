import {Request, Response} from '@tinyhttp/app';

import DatabaseConnection from '../config/prisma.js';

class BaseController extends DatabaseConnection {
	public index = (req: Request, res: Response): Response => res.json({message: 'Hello, World!'});

	public store = async (req: Request, res: Response): Promise<Response> => {
		const {message} = req.body;

		const data = await this.prisma.base.create({
			data: {message},
		});

		return res.status(201).json(data);
	};
}

export default new BaseController();
