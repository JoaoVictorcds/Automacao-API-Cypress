const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ran7jz",
  e2e: {
    
    defaultCommandTimeout:6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
