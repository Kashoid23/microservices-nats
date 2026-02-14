import { connect } from "nats";

async function start() {
    try {
        const nc = await connect({ servers: "localhost:4222" });
        console.log('Listener connected to NATS server');

        console.log("Listening for messages on 'ticket:created'...");
        nc.subscribe("ticket:created", {
            queue: "ticketGroup",
            callback: (err, msg) => {
                if (err) {
                    console.error(`Listener error receiving message: ${err}`);
                    return;
                }

                const data = JSON.parse(msg.data.toString());
                console.log(`Listener received message: ${JSON.stringify(data)}`);
            }
        });
    } catch (err) {
        console.error(`Listener error connecting to NATS: ${err}`);
    }
}

start();
