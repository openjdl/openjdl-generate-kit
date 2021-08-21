const complete = require("./utils/complete");
const escape = (val) => JSON.stringify(val).slice(1, -1);

module.exports = {
  prompts: {
    name: {
      type: "string",
      message: "Project name (internal usage for dev)",
      validate: (val) => val && val.length > 0,
    },

    productName: {
      type: "string",
      message: "Project product name",
      default: "OpenJDL CLI generate example",
      validate: (val) => val && val.length > 0,
      transformer: escape,
    },
  },

  complete,
};
