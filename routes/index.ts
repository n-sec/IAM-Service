import express from 'express';

import authenticate from './authenticate';
import register from './register';

export default (app: express.Express) => {
  authenticate(app);
  register(app);
}