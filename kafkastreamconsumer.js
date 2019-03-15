const kafka = require("kafka-node");
const Transform = require('stream').Transform;
const resultproducer = new kafka.ProducerStream({
    kafkaClient:{
      kafkaHost: 'localhost:9093'
    }
  });

