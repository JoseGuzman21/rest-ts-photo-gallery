import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index';
import path from 'path';

require('dotenv').config();

const app = express();

app.set('port', process.env.port || 3000);

app.use(express.json());

app.use(morgan('dev'));

app.use('/api', indexRoutes);

app.use('/uploads', express.static(path.resolve('uploads')))

export default app;