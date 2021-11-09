import {Request, Response, NextFunction} from '@tinyhttp/app';
import {AnySchema} from 'yup';
import {boomify} from '@hapi/boom';

const validation = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		await schema.validate({
			body: req.body,
			query: req.query,
			params: req.params,
		});
		return next();
	} catch (err) {
		throw boomify(err);
	}
};

export default validation;
