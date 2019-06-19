import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

const app = express();

routes(app);

mongoose.connect('mongodb://localhost:27017/credentials', {
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  app.listen(8080, () => {
    console.log('Credentials service running on port 8080')
  });
});