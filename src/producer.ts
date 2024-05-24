import { KafkaService } from './kafka'
import { Producer } from 'kafkajs';

const Kafka = new KafkaService;
let producer: Producer;

export async function startProducer(): Promise<void> {
  try {
    producer = await Kafka.createProducer();
    console.info('Producer Initialized');
  } catch (error) {
    console.error('Error while creating producer');
  }
}

export async function produceMessage(message: string, key?: string): Promise<boolean> {
  const topic = 'my-topic';
  console.info(`Producing message [${message}] to topic [${topic}]`);

  try {
    await producer.send({
      topic,
      messages: [{
        value: message,
        key,
      }],
    });
  } catch (error) {
    console.error(`Error while sending producing message [${message}] to topic [${topic}]. Error: ${error.message}`, { errorStack: error.stack, errorMessage: error.message, });
    return false;
  }
  return true;
}
