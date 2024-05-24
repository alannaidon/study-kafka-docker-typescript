# Kafk + NodeJS + Docker

## Descrição

Este repositório contém uma aplicação desenvolvida para fins de estudo, como parte de um tutorial.
Um exemplo simples de como inciar uma aplicação com Kafka e docker-compose.

## Funcionalidades

- Criação de um serviço Kafka utilizando a biblioteca KafkaJS.
- Consumo e produção de mensagem no Kafka.
- levantando um pod com Kafka para nosso estudo.

## Stack Utilizadas

- NodeJs com Typescript
- Kafka com a lib kafkaJs
- express para nossa rota.

## Instalação

Para clonar e executar esta aplicação, você precisará do [Git](https://git-scm.com) e do [Node.js](https://nodejs.org) (se aplicável) instalados no seu computador.

```bash
# Clone este repositório
$ git clone https://github.com/seu-usuario/nome-do-repositorio.git

# Entre no repositório
$ cd nome-do-repositorio

# Instale as dependências
$ npm install

# Suba o pod do kafka (pode usar a flag -d para dettached, assim não prende o teu terminal)
$ docker-compose up -d

# Execute a aplicação
$ npm start
