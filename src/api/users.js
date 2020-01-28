const usersSchema = require("../data/schema/users-schema");

module.exports.Create = async () => {
  return await usersSchema.create({ name: "Miguel", pin: 1234 });
};
