import express from 'express';
import bodyParser from 'body-parser';

export default (app: express.Express) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
}