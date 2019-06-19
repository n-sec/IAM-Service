import express from 'express';
import { User } from '../models';

export default (app: express.Express) => {
  
  app.post('/credentials/register', (req, res) => {
    User.create({
      user: req.body.user,
      pass: req.body.pass,
    }).then((data) => {
      res.send(data);
    }).catch((error) => {
      switch (error.code) {
        case 11000:
          res.sendStatus(409);
          break;
        default:
          res.sendStatus(500);
          break;
      }
    });
  });
}