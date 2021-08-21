const complete = require("./utils/complete");
const escape = (val) => JSON.stringify(val).slice(1, -1);

module.exports = {
  prompts: {
    name: {
      type: "string",
      message: "Your name please",
      validate: (val) => val && val.length > 0,
      transformer: escape,
    },
  },

  complete,
};
