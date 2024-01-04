const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
    viewportWidth: 1980,
    chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
