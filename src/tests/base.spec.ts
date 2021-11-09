import {test} from 'uvu';
import {equal} from 'uvu/assert';
import {nanoid} from 'nanoid';
import axios from 'axios';

test('Hello World', async () => {
	const {data, status} = await axios.get('http://localhost:3333');
	equal(data.message, 'Hello, World!');
	equal(status, 200);
});

test('Store Message', async () => {
	const rnd = nanoid();
	const {data, status} = await axios.post('http://localhost:3333/store', {message: rnd});
	equal(data.message, rnd);
	equal(status, 201);
});

test.run();
