const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:7000,
  chromeWebSecurity:false,
  e2e: {
    baseUrl:'https://www.founderandlightning.com/contact',
    specPattern:'cypress/Integration/test/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
