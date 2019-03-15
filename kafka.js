const kafka = require("kafka-node");

const client = new kafka.KafkaClient({kafkaHost:'localhost:9092'})
const producer = new kafka.Producer(client);

const payloads = [
    {
        topic: '5partopic',
        messages: 'this is message for partition 2',
        partition: 0,
        attributes: 1
    }
]

producer.on('ready', () => {
    console.log("producer is ready");
    producer.send(payloads, (err,data) => {
        if(err){
            console.log("error occured sending data", err);
        }
        else{
            console.log("data is", data);
        }
    })
});

producer.on('error', (err) => {
    console.log('error in producer', err)
} )