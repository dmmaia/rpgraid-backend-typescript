import * as dotenv from 'dotenv';

import express from 'express';
import { router } from './routes';
import { connect } from 'mongoose'

const app = express()

dotenv.config();

connect(
    process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }
)

app.use(express.json())
app.use(router)

export { app }