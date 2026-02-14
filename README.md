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

#### [Set verbatimModuleSyntax to false tsconfig.json](https://github.com/Kashoid23/microservices-nats/commit/f54041849cded2879a7525a8b9e18fbddbb8f7a2#diff-b55cdbef4907b7045f32cc5360d48d262cca5f94062e353089f189f4460039e0)
#### [Create src/publisher.ts](https://github.com/Kashoid23/microservices-nats/commit/f54041849cded2879a7525a8b9e18fbddbb8f7a2#diff-3b925c39878d5e5c917f2bd045a7e6ca79a505398d3412eee615bb53a8b58fe9)
#### [Create src/listener.ts](https://github.com/Kashoid23/microservices-nats/commit/f54041849cded2879a7525a8b9e18fbddbb8f7a2#diff-0a9945c399ef4b66209b330f33399ac079477f017039f62d33e7d8296163469d)
#### [Add scripts package.json](https://github.com/Kashoid23/microservices-nats/commit/f54041849cded2879a7525a8b9e18fbddbb8f7a2#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519)

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
