import express from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models';

export default (app: express.Express) => {
  app.post('/credentials/authenticate', (req, res) => {
    User.findOne({
      user: req.body.user,
      pass: req.body.pass,
    }).then((data) => {
      if (data) {
        let token = jwt.sign(data.toObject(), 'abc@123');
        res.send({token: token});
      } else {
        res.sendStatus(401);
      }
    }).catch((error) => {
      res.sendStatus(500);
    });
  });
  
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