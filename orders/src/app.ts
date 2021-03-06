import express from 'express';
import 'express-async-errors'
import { json } from 'body-parser';

import cookieSession from 'cookie-session'

import { errorHandler, NotFoundError, currentUser } from '@wyprawnik/common'

import { deleteOrderRouter } from './routes/delete';
import { indexOrderRouter } from './routes/index';
import { newOrderRouter } from './routes/new';
import { showOrderRouter } from './routes/show';


const app = express();
app.set('trust proxy', true)

app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: false
    })
)

app.use(currentUser);

app.use(deleteOrderRouter);
app.use(showOrderRouter);
app.use(indexOrderRouter);
app.use(newOrderRouter);

app.use(async (req, res)=> {
    throw new NotFoundError()
})
app.use(errorHandler);

export { app };
