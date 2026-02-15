//Event Emitter

const Logger = require(`./logger`);
const logger = new Logger();

logger.on(`messageLog`, () => {
  console.log(`Listener Call ....`);
});

logger.log(`WebNode`);
