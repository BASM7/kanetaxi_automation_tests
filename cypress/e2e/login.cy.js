/// <reference types="Cypress" />

describe('Login', () => {
    it('should login with valid credentials', () => {
        cy.visit('https://kane-taxi.web.app/login');

        cy.login('kanedriver01@mailinator.com', 'asdf1234');
    });
});
