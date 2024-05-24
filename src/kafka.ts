import { Producer, Consumer, Kafka } from 'kafkajs';

export class KafkaService {
  private kafka: Kafka;

  constructor() {
    this.kafka = new Kafka({
      brokers: ['localhost:9092'],
    });
  }

  async createConsumer(handleIncomeMessage: (event: string) => Promise<void>): Promise<Consumer> {
    const topic = 'my-topic';
    const consumer = this.kafka.consumer({ groupId: 'my-groupid' });

    // conecta o consumidor no kafka
    await consumer.connect();

    // faz com que o consumidor passe a 'ouvir' as mensagems do tópico enviado como parâmetro
    await consumer.subscribe({ topic });
    console.log(`Consumer created for topic ${topic}`);

    // Consome as mensagems, uma por uma.
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        try {
          const event = message.value.toString();
          console.log(`Handling message from topic [${topic}] in partition ${partition}`);

          await handleIncomeMessage(event);
        } catch (error) {
          console.error(`Error while handling kafka message: `, error.stack, error.message);
        }
      }
    });
    return consumer;
  }

  async createProducer(): Promise<Producer> {
    // Cria o produtor
    const producer = this.kafka.producer();

    // Inicializa o produtor
    await producer.connect();
    return producer;
  }
}
