import { KafkaService } from './kafka';

const Kafka = new KafkaService;

export async function startConsumer(): Promise<void> {
  try {
    await Kafka.createConsumer(handleIncomeMessage);
  } catch (error) {
    console.log('Error starting consumer: ', error);
  }
}

async function handleIncomeMessage(message: string) {
  console.log('Message Received: ', message);
}
