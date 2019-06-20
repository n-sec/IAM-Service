import express from 'express';
import mongoose from 'mongoose';
import middlewares from './middlewares';
import routes from './routes';
import env from '@nostjs/dotenv';

const app = express();

middlewares(app);
routes(app);

mongoose.connect(env.get('MONGODB'), {
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  app.listen(8080, () => {
    console.log('Credentials service running on port 8080')
  });
});