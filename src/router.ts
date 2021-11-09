import {App} from '@tinyhttp/app';

import BaseController from './controllers/base.js';
import {indexDocs, storeDocs} from './docs/base.js';

const router = (app: App) => {
	app.get('/', indexDocs, BaseController.index);
	app.post('/store', storeDocs, BaseController.store);
};

export default router;
