const Transform = require('stream').Transform;
const kafka = require('kafka-node');
const _ = require('lodash');
const producer = new kafka.ProducerStream({
  kafkaClient:{
    kafkaHost: 'localhost:9092'
  }
});
 
const stdinTransform = new Transform({
  objectMode: true,
  decodeStrings: true,
  transform (text, encoding, callback) {
    text = _.trim(text);
    console.log(`pushing message ${text} to 3rep3aprtopic`);
    callback(null, {
      topic: '3rep3partopic',
      messages: text
    });
  }
});
 
process.stdin.setEncoding('utf8');
process.stdin.pipe(stdinTransform).pipe(producer);