import { connect } from "nats";

async function start() {
    try {
        const nc = await connect({ servers: "localhost:4222" });
        console.log('Publisher connected to NATS server');

        const jsm = await nc.jetstreamManager();
        await jsm.streams.add({ name: "stream", subjects: ["ticket:created"] });

        const js = await nc.jetstream();
        let pa = await js.publish(
            "ticket:created",
            JSON.stringify({ id: '1', title: "Ticket", price: 100 })
        );
        console.log(`Publisher message with sequence: ${pa.seq}`);

        await nc.close();
        console.log("Publisher connection closed");
    } catch (err) {
        console.error(`Publisher error connecting to NATS: ${err}`);
    }
}

start();
