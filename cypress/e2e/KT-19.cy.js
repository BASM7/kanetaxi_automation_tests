/// <reference types="Cypress" />

describe('testAlert', () => {
    it('should login with valid credentials', () => {
        cy.visit('https://kane-taxi.web.app/login');

        cy.testAlert('pruebakanedriver@mailinator.com', 'asdf1234');

        cy.url().should('eq', 'https://kane-taxi.web.app/login');
    });
});
