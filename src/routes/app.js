import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/api', (request, response) => {
    return response.send('hola')
})

export default app;