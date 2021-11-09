import {App} from '@tinyhttp/app';
import {logger} from '@tinyhttp/logger';
import {cors} from '@tinyhttp/cors';
import {json} from 'milliparsec';
import sirv from 'sirv';

const app = new App();

app.use(logger());
app.use(cors());
app.use(json());
app.use('/bucket', sirv('static'));

export default app;
