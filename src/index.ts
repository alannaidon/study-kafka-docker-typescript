import { startConsumer } from "./consumer";
import { startProducer } from "./producer";
import { initServer } from "./routes";

async function start() {
  initServer();
  await startConsumer();
  await startProducer();
}

start();
