import 'dotenv/config';

import {con} from './repository/connection.js'
import cors from 'cors';
import express from 'express';

const serv = express();
serv.use(cors());

serv.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`));