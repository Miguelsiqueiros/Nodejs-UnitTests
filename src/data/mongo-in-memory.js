const mongoose = require("mongoose");

const { MongoMemoryServer } = require("mongodb-memory-server");

const mongodb = new MongoMemoryServer();

module.exports.connect = async () => {
  const uri = await mongodb.getConnectionString();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  await mongoose.connect(uri, mongooseOpts);
};

module.exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongodb.stop();
};
