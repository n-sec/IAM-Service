import express from 'express';

import bodyParser from './bodyParser';

export default (app: express.Express) => {
  bodyParser(app);
}