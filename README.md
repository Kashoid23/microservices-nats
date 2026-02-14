<b>NATS Server (Core NATS)</b> - central, high-performance messaging broker.

NATS implements a publish-subscribe message distribution model for one-to-many communication. A publisher sends a message on a subject and any active subscriber listening on that subject receives the message.

<b>JetStream</b> - built-in persistence engine, providing message streaming, at-least-once delivery, and storage.

<b>Stream</b> - a persisted storage for messages in JetStream, defined by subject filters.

<b>Subject</b> - address (string) where messages are published or subscribed.

<b>Message</b> - unit of communication consisting of a subject, an optional reply-to address, and a byte array payload.

<b>Queue groups</b> - are a built-in, lightweight mechanism for load-balancing messages among multiple subscribers, ensuring each message is processed by only one member of a group.

<b>Acknowledgements (Ack)</b> - signals used by consumers to tell JetStream a message was processed (ack()), needs re-delivery (nack()), or failed (term()).

```
npm init -y
npm install nats ts-node-dev typescript @types/node
npx tsc --init
```

#### Set verbatimModuleSyntax to false tsconfig.json
#### Create src/publisher.ts
#### Create src/listener.ts
#### Add scripts package.json

## Temp access to the NATS client

```
cd microservices-tickets-store
kubectl get pods
kubectl port-forward nats-deployment-****** 4222:4222
```

## Message exchange

```
npm run listen
npm run publish 
```
