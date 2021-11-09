import {addToDocs} from '@tinyhttp/swagger';

export const indexDocs = addToDocs({}, ['index']);

export const storeDocs = addToDocs({
	body: {
		message: {type: 'string', min: 3, max: 255},
	},
}, ['store']);
