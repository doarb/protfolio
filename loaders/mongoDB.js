const mongoose = require('mongoose');
const URIserver = process.env.DATABASEURI;

let isConnected = false;

async function connectToDatabase() {
  // eslint-disable-next-line no-useless-catch
  try {
    if (!isConnected) {
      await mongoose.connect(URIserver);
      console.log('Connected');
      isConnected = true;
    }
  } catch (error) {
    throw error;
  }
}

async function disconnectToDatabase() {
  // eslint-disable-next-line no-useless-catch
  try {
    if (isConnected) {
      mongoose.disconnect();
      console.log('Disconnected');
      isConnected = false;
    }
  } catch (error) {
    throw error;
  }
}

function connectionStatus() {
  return isConnected;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  disconnectToDatabase: disconnectToDatabase,
  connectionStatus: connectionStatus,
};
