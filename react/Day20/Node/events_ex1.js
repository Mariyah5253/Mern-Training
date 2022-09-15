const events = require('events');

// Creating an EventEmitter instance (object)
const ee = new events.EventEmitter();

// Defining Event Handlers
const openFile = () => { console.log("Opening the file."); }
function processFile() {
    console.log("Process the opened file");
}
const closeFile = () => { console.log("Close the file"); }

// Registering the events with approp. event handlers
ee.on('open', openFile);
ee.on('process', processFile);
ee.on('close', closeFile);

// Triggering or Firing the events
console.log("The steps for processing a file are:");
ee.emit('open');
ee.emit('process');
process.exit(0);
ee.emit('close');
