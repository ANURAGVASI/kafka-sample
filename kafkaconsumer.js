const kafka = require("kafka-node");
const producerstream = require('./node_modules/kafka-node/lib/producerStream');

const client = new kafka.KafkaClient({kafkaHost: 'localhost:9093'});
const payloads = [
    {
        topic: '3rep3partopic',
        partition: 1
    }
]
const consumer = new kafka.Consumer(client, payloads);

consumer.on('message', (message) => {
    console.log("message is", message);
})
