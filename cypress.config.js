const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const path = require('path');
const fs = require('fs');

module.exports = defineConfig({
  projectId: 'qwnkhc',
  projectId: "vs5y3j",
  chromeWebSecurity: false,
  viewportWidth: 1366,
  viewportHeight: 768,
  
  e2e: {
    pageLoadTimeout: 800000,
    redirectionLimit: 50, 
    watchForFileChanges: false,
    reporter: "mochawesome",
      reporterOptions: {
        charts: true,
        overwrite: false,
        html: true,
        json: true,
        reportDir: "cypress/report/mochawesome-report"
       },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        checkFileExists: (fileName) => {
          const filePath = path.join(__dirname, 'cypress/downloads', fileName);
          return fs.existsSync(filePath);
        },
      });
      allureWriter(on, config);
            return config;
    },
    
  },
  
});
