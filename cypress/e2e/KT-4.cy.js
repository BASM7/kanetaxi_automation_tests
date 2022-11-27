/// <reference types="Cypress" />

describe('testResetPassword', () => {
    it('should login with valid credentials', () => {
        cy.visit('https://kane-taxi.web.app/login');

        cy.testResetPassword('pruebakanedriver01@mailinator.com');

        cy.url().should('eq', 'https://kane-taxi.web.app/reestablish-password');
    });
});
