const webServer = require('./services/web-server.js');
const database = require('./services/database.js');
const dbConfig = require('./config/database.js');
const { oracleClientVersionString } = require('oracledb');
const defaultThreadPoolSize = 4;

// Increase thread pool size by poolMax
process.env.UV_THREADPOOL_SIZE = dbConfig.hrPool.poolMax + defaultThreadPoolSize;

async function startup() {
  console.log('Starting application');

  try {
    console.log('Initializing database module');
    console.log('Oracle Client Version: ' + oracleClientVersionString);

    await database.initialize(); 
    } catch (err) {
    console.error(err);

    process.exit(1); // Non-zero failure code
    }


  try {
    console.log('Initializing web server module');

    await webServer.initialize();
  } catch (err) {
    console.error(err);

    process.exit(1); // Non-zero failure code
  }
}

startup();