import { post } from 'axios';
import axios from 'axios';
import { sendEmail } from './Email/email';

Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Uncaught exception:', err);
    return false;
});

describe('My First Test', () => {
    it('Launch Browser and Navigate', () => {
        cy.visit('https://www.browserstack.com/');
        cy.title().should('eq', 'Most Reliable App & Cross Browser Testing Platform | BrowserStack');
    });
;
    after(() => {
        // Make a request to the Express server to trigger email sending
      
      
            axios.post('http://localhost:3000/send-email')
            .then((response) => {
                console.log(response.data.message, response.data.result);
            })
            .catch((error) => {
                console.log('Error triggering email sending:', error.message);
            });
            
        
        
    });
});