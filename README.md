# Kafk + NodeJS + Docker

## Descrição

Este repositório contém uma aplicação desenvolvida para fins de estudo, como parte de um tutorial.
Um exemplo simples de como inciar uma aplicação com Kafka e docker-compose.

## Funcionalidades

- Criação de um serviço Kafka utilizando a biblioteca KafkaJS.
- Consumo e produção de mensagem no Kafka.
- levantando um pod com Kafka para nosso estudo.

## Stack Utilizadas

- NodeJs com [Typescript](https://www.npmjs.com/package/typescript)
- Kafka com a lib [KafkaJs](https://www.npmjs.com/package/kafkajs)
- Para nossa rota: [Express](https://www.npmjs.com/package/express)

## Instalação

Para clonar e executar esta aplicação, você precisará do [Git](https://git-scm.com) e do [Node.js](https://nodejs.org) (se aplicável) instalados no seu computador.

```bash
# Clone (SSH)
$ git clone git@github.com:alannaidon/study-kafka-docker-typescript.git

# Clone (HTTPS)
$ git clone https://github.com/alannaidon/study-kafka-docker-typescript.git

# Entre no repositório
$ cd study-kafka-docker-typescript

# Instale as dependências
$ npm install

# Suba o pod do kafka (pode usar a flag -d para dettached, assim não prende o teu terminal)
$ docker-compose up -d

# Execute a aplicação
$ npm start
