import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes/routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

routes(app);

mongoose.connect('mongodb://localhost:27017/credentials', {
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  app.listen(8080, () => {
    console.log('Credentials service running on port 8080')
  });
});