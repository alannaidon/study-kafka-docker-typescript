import * as express from 'express';
import { produceMessage } from './producer';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/message', async (req: express.Request, res: express.Response) => {
  const fakeMessage = {
    name: 'Alan',
    role: 'Backend Developer',
    message: 'Node & kafka Rocks!'
  }
  const message = JSON.stringify(fakeMessage);

  await produceMessage(message);
  res.sendStatus(200);
});

export function initServer() {
  app.listen(PORT, () => {
    console.log('HTTP Server Started!');
  })
}
