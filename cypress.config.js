const { defineConfig } = require("cypress");

module.exports = defineConfig({
 "chromeWebSecurity": false,
  e2e: {

    baseUrl:'https://katalon-demo-cura.herokuapp.com',
    viewportWidth: 1900,
    viewportHeight: 900,
    
    setupNodeEvents(on, config) {
      
    },
  },
});
