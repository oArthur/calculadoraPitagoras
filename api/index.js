import express from 'express';
import cors from 'cors';

import historyRoutes from './routes/history.js';

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", historyRoutes)

app.listen(8800)